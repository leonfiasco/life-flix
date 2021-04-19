import React, { useContext } from 'react';
import { googleSignIn } from '../../services/auth';
import { UserContext } from '../../contextApi/user';

import './SignInBtn.css';

function SignInBtn() {
	const [user, setUser] = useContext(UserContext).user;

	const loginBtn = async () => {
		let loginUser = await googleSignIn();
		if (loginUser) {
			setUser(loginUser);
		}
	};

	return (
		<div className='signInBtn' onClick={loginBtn}>
			<h1>Sign in with Google</h1>
		</div>
	);
}

export default SignInBtn;
