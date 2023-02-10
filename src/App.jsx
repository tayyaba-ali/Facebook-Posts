import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Post from './components/Post';
import './components/Switch.css';
import './Post.css';
import PostData from './UserData';
function App() {
	const [isLit, setisLit] = useState(true);
	return (
		<div className={`App  ${isLit ? 'lit' : 'dark'}`}>
			<Navbar sticky='top' />
			<div className='flex'>
				<label className='outer'>
					<span className='icons' style={{ color: isLit ? 'yellow' : 'white' }}>{`${isLit ? '☀︎' : '☽'}`}</span>
					<input type='checkbox' className='input' onChange={() => setisLit(!isLit)} />
				</label>
			</div>

			{PostData.map((user, index) => {
				return <Post key={index} name={user.Name} photo={user.profilepic} date={user.date} post={user.post} />;
			})}
		</div>
	);
}

export default App;
