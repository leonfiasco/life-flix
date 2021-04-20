import React from 'react';
import Post from '../post/Post';

import './Feed.css';

function Feed() {
	return (
		<div className='feed'>
			<Post
				username='Kendrick'
				profileURL='https://images.sk-static.com/images/media/profile_images/artists/3277856/huge_avatar'
				photoURL='https://www.dailynews.com/wp-content/uploads/2020/06/LDN-L-PROTEST-RIDE-0608.dk_.01-1.jpg'
				caption='Compton cowboys'
			/>
		</div>
	);
}

export default Feed;
