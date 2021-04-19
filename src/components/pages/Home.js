import React from 'react';
import CreatePost from '../containers/CreatePost';
import Navbar from '../containers/navbar/Navbar';
import SignInBtn from '../containers/signInBtn/SignInBtn';

import './Home.css';

function home() {
	return (
		<div className='home'>
			<Navbar />
			<CreatePost />
		</div>
	);
}

export default home;
