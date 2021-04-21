import React, { useState, useContext } from 'react';

import Comment from '../comments/Comments';

import './Post.css';

function Post({ profileURL, username, id, photoURL, caption, comments }) {
	return (
		<div className='post'>
			<div className='post_header'>
				<div className='post_headerLeft'>
					<img className='post_profilePic' src={profileURL} alt='' />
					<p style={{ marginLeft: '8px' }}>{username}</p>
				</div>
				<button className='post_delete'>Delete</button>
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
		</div>
	);
}

export default Post;
