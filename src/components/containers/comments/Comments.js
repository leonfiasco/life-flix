import React from 'react';

function Comments({ username, caption }) {
	return (
		<div className='comment'>
			<p>
				<span style={{ fontWeight: '500', marginRight: '6px' }}>{username}</span>
				{caption}
			</p>
		</div>
	);
}

export default Comments;
