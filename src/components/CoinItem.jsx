const CoinItem = ({ coin }) => {  

  return (
    <div className="coin-row">
      <p>{coin.rank}</p>
      <p>{coin.name.toUpperCase()}</p>
      <p>${coin.price_usd.toLocaleString()}</p>
      <p>{coin.percent_change_24h}%</p>
      <p className='hide-mobile'>{coin.volume24}</p>
      <p className='hide-mobile'>${coin.market_cap_usd}</p>
    </div>
  );
}

export default CoinItem;