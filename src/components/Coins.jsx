import { useState, useEffect } from 'react';
import { getCoins } from '../services/Coins';
import CoinItem from '../components/CoinItem';

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await getCoins();
      setCoins(result);
    };
    fetchData();
  }, []);

  const {data} = coins;  

  const filteredData = data?.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='container'>
      <div>
        <input type="text" placeholder='Search a Coin' className='input' onChange={e => setSearch(e.target.value)}/>
        <div className='heading'>
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p>Price</p>
          <p>24H</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Mkt Cap</p>
        </div>

        {
          filteredData?.map(coin => (           
              <CoinItem coin={coin} search={search}/>            
            )
          )
        }

      </div>
    </div>
  );
}

export default Coins;
