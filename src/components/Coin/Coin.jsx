import React from 'react';
import styled from 'styled-components';
import './coin.scss';
import CoinItem from './CoinItem';
import Loader from '../Loader/Loader';
import useCoin from '../../hooks/useCoin';
import { usePaginate } from '../../context/Paginated.context';

function Coin() {
  const { getCoinDetails } = useCoin();
  const { paginatenumber } = usePaginate();
  const numberofCoin = (i) => {
    const idx =
      paginatenumber * getCoinDetails.data.length -
      getCoinDetails.data.length;
    return idx + i + 1;
  };

  if (getCoinDetails.isLoading) {
    return (
      <CenterLoader>
        <Loader />
      </CenterLoader>
    );
  }
  return (
    <>
      <SectionContainer>
        <div className="tag">#</div>
        <div className="coin-name">Coin</div>
        <div className="price">Price</div>
        <div className="h1time">1h</div>
        <div className="h24-time">24h</div>
        <div className="d7-time">7d</div>
        <div className="h24-volume">24h Volume</div>
        <div className="Mkt-cap">Mkt Cap</div>
        <div className="last-7">Last 7 days</div>
      </SectionContainer>
      {getCoinDetails.data.map((item, i) => (
        <SectionContainer key={item.id}>
          <CoinItem
            tag={`${numberofCoin(i)}`}
            coinName={`${item.name}`}
            price={`$${item.current_price}`}
            h1time={`${item.price_change_percentage_1h_in_currency.toFixed(
              2
            )}%`}
            h24={`${item.market_cap_change_percentage_24h.toFixed(
              2
            )}%`}
            h24Vol={`${item.high_24h}`}
            MarketCap={`${item.market_cap}`}
            coinImage={item.image}
            symbol={item.symbol.toUpperCase()}
          />
        </SectionContainer>
      ))}
    </>
  );
}

export default Coin;

const SectionContainer = styled.section`
  overflow: scroll;
  scrollbar-width: none;
  margin-top: 2rem;
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  color: #4a4a4a;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const CenterLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15rem;
`;
