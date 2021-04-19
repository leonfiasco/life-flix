import React from 'react';
import SigninBtn from '../signInBtn/SignInBtn';

import './Navbar.css';

function Navbar() {
	return (
		<div className='navbar'>
			<p>LifeFlix</p>
			<SigninBtn />
		</div>
	);
}

export default Navbar;
