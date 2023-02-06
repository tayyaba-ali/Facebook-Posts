import { faComment, faEllipsis, faRemove, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import React from 'react';
import '../Post.css';
const Post = ({ name, photo, date, post }) => {
	return (
		<>
			<div className='parent container'>
				<div className='person '>
					<div>
						<div>
							<img src={photo} alt='' className='pic ' />
							<span>{name}</span>
						</div>

						<p>{moment(date).fromNow()}</p>
					</div>
					<div className='icons'>
						<FontAwesomeIcon icon={faRemove} size='lg' />
						<FontAwesomeIcon icon={faEllipsis} size='lg' />
					</div>
				</div>
				<div className='image'>
					<img src={post} alt='post' />
				</div>
				<div className='Interaction_icons'>
					<div>
						<FontAwesomeIcon icon={faThumbsUp} />
						<p>Like</p>
					</div>
					<div>
						<FontAwesomeIcon icon={faComment} />
						<p>Comment</p>
					</div>
					<div>
						<FontAwesomeIcon icon={faShare} />
						<p>Share</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Post;
