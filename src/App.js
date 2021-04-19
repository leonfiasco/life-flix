import './App.css';

import Home from '../src/components/pages/Home';
import { UserContextProvider } from './components/contextApi/user';

function App() {
	return (
		<UserContextProvider>
			<div className='app'>
				<Home />
			</div>
		</UserContextProvider>
	);
}

export default App;
