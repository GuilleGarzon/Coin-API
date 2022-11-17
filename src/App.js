import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/styles.scss';

const App = () => (
	<div className='App'> 
		<BrowserRouter>
			<Routes> 
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	</div>
);

export default App;
