import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import Post from '../post/Post';

import './Feed.css';

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// gets a snapshot of the db so I'm able to map through
		db.collection('posts').onSnapshot((snapshot) => {
			setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
		});
	}, []);

	return (
		<div className='feed'>
			{posts.map(({ id, post }) => {
				return (
					<Post
						key={id}
						id={id}
						username={post.username}
						profileURL={post.profileUrl}
						photoURL={post.photoUrl}
						caption={post.caption}
						comments={post.comments}
					/>
				);
			})}
		</div>
	);
}

export default Feed;
