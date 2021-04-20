import React, { useState, useContext } from 'react';
import { UserContext } from '../../contextApi/user';

function Post() {
	const [user, setUser] = useContext(UserContext).user;

	return (
		<div className='post'>
			<div>
				<img src={user.photoURL} alt='' />
			</div>
		</div>
	);
}

export default Post;
