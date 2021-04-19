import React from 'react';
import SignInBtn from './signInBtn/SignInBtn';

import './CreatePost.css';

function CreatePost() {
	return (
		<div className='createPost'>
			<SignInBtn />
			<p style={{ marginLeft: '12px' }}>to Post & Comment</p>
		</div>
	);
}

export default CreatePost;
