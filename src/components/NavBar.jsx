import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Link to='/'>
      <div className="navbar">
        <FaCoins className="icon"/>
        <h1>Crypto <span className='purple'>API</span></h1>
      </div>
    </Link>
  )
}

export default NavBar;