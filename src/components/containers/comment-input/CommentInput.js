import React from 'react';

import './CommentInput.css';

function CommentInput({ id }) {
	return (
		<div classname='commentInput'>
			<textarea classname='commentInput_textarea' rows='1'></textarea>
			<button>Post</button>
		</div>
	);
}

export default CommentInput;
