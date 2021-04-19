import React, { useContext } from 'react';
import SigninBtn from '../signInBtn/SignInBtn';
import { UserContext } from '../../contextApi/user';

import './Navbar.css';

function Navbar() {
	const [user, setUser] = useContext(UserContext).user;
	return (
		<div className='navbar'>
			<p>LifeFlix</p>
			{user ? <img className='navbarImg' src={user.photoURL} /> : <SigninBtn />}
		</div>
	);
}

export default Navbar;
