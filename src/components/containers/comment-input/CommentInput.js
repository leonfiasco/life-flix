import React, { useContext, useState } from 'react';
import { db } from '../../../firebase';
import { UserContext } from '../../contextApi/user';

import './Comment_input.css';

function CommentInput({ id, comments }) {
	const [comment, setComment] = useState('');
	const [user, setUser] = useContext(UserContext).user;
	const [commentArray, setCommentArray] = useState(comments ? comments : []);

	const addComment = () => {
		commentArray.push({
			comment,
			username: user.email.replace('@gmail.com', '').toLowerCase(),
		});

		db
			.collection('posts')
			.doc(id)
			.update({
				comments: commentArray,
			})
			.then(() => {
				setComment('');
			})
			.catch((err) => {
				console.log(`Error ${err}`);
			});
	};

	return (
		<div id='commentInput'>
			<textarea
				id='commentInput_textarea'
				rows='1'
				placeholder='Write a comment...'
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			></textarea>
			<button id='comment_btn' onClick={addComment}>
				Post
			</button>
		</div>
	);
}

export default CommentInput;
