import Coins from '../components/Coins';
import NavBar from '../components/NavBar';

const Home = () => (
	<div className='home'>	
  <NavBar />	
		<div>
			<Coins />
		</div>
	</div>
);

export default Home;