import React, { useState, useContext } from 'react';
import SignInBtn from '../signInBtn/SignInBtn';
import { UserContext } from '../../contextApi/user';

import './CreatePost.css';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import makeId from '../../../helper/functions';
import { db, storage } from '../../../firebase';
import firebase from 'firebase';

function CreatePost() {
	const [user, setUser] = useContext(UserContext).user;
	const [caption, setCaption] = useState('');
	const [image, setImage] = useState(null);
	const [progress, setProgress] = useState(0);

	const handleChange = (e) => {
		// allowing slected image to be dispalyed above camera icon
		if (e.target.files[0]) {
			setImage(e.target.files[0]);

			let selectedImageSrc = URL.createObjectURL(e.target.files[0]);

			let imagePreview = document.getElementById('image-preview');

			imagePreview.src = selectedImageSrc;
			imagePreview.style.display = 'block';
		}
	};

	const handleUpload = () => {
		if (image) {
			// create 10 char long string on random characters
			const imageName = makeId(10);
			const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image);

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					// progress function

					const progress = Math.round(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					);
					setProgress(progress);
				},
				(error) => {
					console.log(error);
				},
				() => {
					// get download url and upload post info
					storage
						.ref('images')
						.child(`${imageName}.jpg`)
						.getDownloadURL()
						.then((imageUrl) => {
							db.collection('posts').add({
								timestamp: firebase.firestore.FieldValue.serverTimestamp(),
								caption,
								photoUrl: imageUrl,
								username: user.email.replace('@gmail.com', ''),
								profileUrl: user.photoURL,
							});
						});
				}
			);
		}
	};

	return (
		<div className='createPost'>
			{user ? (
				<div className='createPost_loggedIn'>
					<p>Create Post</p>
					<div className='createPost_loggedInCenter'>
						<textarea
							className='createPost_textarea'
							placeholder='Enter caption here... '
							rows='3'
							value={caption}
							onChange={(e) => setCaption(e.target.value)}
						></textarea>
						<div className='createPost_imagePreview'>
							<img id='image-preview' alt='' />
						</div>
					</div>
					<div className='createPost_uploadSection'>
						<div className='createPost_imageUpload'>
							<label htmlFor='fileInput'>
								<AddAPhotoIcon style={{ cursor: 'pointer', fontSize: '20px' }} />
							</label>
							<input
								id='fileInput'
								type='file'
								accept='image/*'
								onChange={handleChange}
							/>
						</div>
						<button
							className='createPost_Btn'
							onClick={handleUpload}
							style={{ color: caption ? '#000' : 'lightgrey' }}
						>
							{`Upload ${progress !== 0 ? progress : ''}`}
						</button>
					</div>
				</div>
			) : (
				<div>
					<SignInBtn />
					<p style={{ marginLeft: '12px' }}>to Post & Comment</p>
				</div>
			)}
		</div>
	);
}

export default CreatePost;
