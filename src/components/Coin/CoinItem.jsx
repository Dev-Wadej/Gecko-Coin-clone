import React from 'react';
import { RiStarSLine } from 'react-icons/ri';

const CoinItem = ({
  tag = '',
  coinName = 'Coin',
  price = 'Price',
  h1time = '1h',
  h24 = '24h',
  d7 = '7d',
  h24Vol = '24h Volume',
  MarketCap = 'Mkt Cap',
  last7 = '7days',
  coinImage,
  symbol,
}) => {
  const amountComma = (num) => {
    const numwithoutDollar = num.slice(1);
    const remain = parseInt(numwithoutDollar);
    if (remain < 1) return num;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <>
      <div className="tags">
        {symbol && <RiStarSLine />}
        {tag}
      </div>
      <div className="coin-name">
        <span>
          {coinImage && <img src={coinImage} alt="Coin Logo" />}
        </span>
        {coinName}
        {symbol && <small>&nbsp;&nbsp;&nbsp; {symbol}</small>}
      </div>
      <div className="prices">{amountComma(price)}</div>
      <div
        className={`h1times ${
          parseFloat(h1time) > 0 ? 'greencolor' : 'redcolor'
        }`}
      >
        {h1time}
      </div>
      <div
        className={`h24-times ${
          parseFloat(h24) > 0 ? 'greencolor' : 'redcolor'
        }`}
      >
        {h24}
      </div>
      <div className="d7-times">{d7}</div>
      <div className="h24-volumes">{h24Vol}</div>
      <div className="Mkt-caps">{MarketCap}</div>
      <div className="last-7s">{last7}</div>
    </>
  );
};

export default CoinItem;
