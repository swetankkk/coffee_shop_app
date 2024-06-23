import { Link } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className='flex flex-col justify-center items-center h-screen'>
			app
			<hr></hr>
			<Link to='/home'>Home</Link>
			<Link to='/cafe'>Cafe</Link>
		</div>
	);
}

export default App;
