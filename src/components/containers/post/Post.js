import React, { useState, useContext } from 'react';
import CommentInput from '../comment-input/CommentInput';
import Comment from '../comments/Comments';

import { storage, db } from '../../../firebase';

import './Post.css';
import { UserContext } from '../../contextApi/user';

function Post({ profileURL, username, id, photoURL, caption, comments }) {
	const [user, _] = useContext(UserContext).user;

	const deletePost = () => {
		// delete image from firebase storage

		// get ref to the image file I would like to delete
		const imageRef = storage.refFromURL(photoURL);

		// delete the file
		imageRef
			.delete()
			.then(() => {
				console.log('delete successful');
			})
			.catch((err) => console.log(`My Error!!: ${err}`));

		// delete the post info from firebase firestore
		db
			.collection('posts')
			.doc(id)
			.delete()
			.then(() => console.log('delete post info successfully!!'))
			.catch((err) => console.log(`Error post info delete ${err}`));
	};

	return (
		<div className='post'>
			<div className='post_header'>
				<div className='post_headerLeft'>
					<img className='post_profilePic' src={profileURL} alt='' />
					<p style={{ marginLeft: '8px' }}>{username}</p>
				</div>
				<button className='post_delete' onClick={deletePost}>
					Delete
				</button>
			</div>
			<div className='post_center'>
				<img className='post_photoURL' src={photoURL} />
			</div>
			<div>
				<p>
					<span style={{ fontWeight: '500', marginRight: '6px' }}>{username}</span>
					{caption}
				</p>
			</div>

			{comments ? (
				comments.map((comment) => (
					<Comment username={comment.username} caption={comment.comment} />
				))
			) : (
				<></>
			)}

			{user ? <CommentInput id={id} comments={comments} /> : <></>}
		</div>
	);
}

export default Post;
