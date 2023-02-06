import './App.css';
import Navbar from './components/Navbar';
import Post from './components/Post';
import PostData from './UserData';
function App() {
	return (
		<div className='App'>
			<Navbar sticky='top' />
			{PostData.map((user, index) => {
				return <Post key={index} name={user.Name} photo={user.profilepic} date={user.date} post={user.post} />;
			})}
		</div>
	);
}

export default App;
