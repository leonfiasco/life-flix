import React from 'react';
import CreatePost from '../containers/createPost/CreatePost';
import Feed from '../containers/feed/Feed';
import Navbar from '../containers/navbar/Navbar';
import SignInBtn from '../containers/signInBtn/SignInBtn';

import './Home.css';

function home() {
	return (
		<div className='home'>
			<Navbar />
			<CreatePost />
			<Feed />
		</div>
	);
}

export default home;
