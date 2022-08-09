import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import TabbedPortfolios from '../../components/TabbedPorfolios/TabbedPortfolios';
import Switch from '@mui/material/Switch';

import './Home.scss';
import Coin from '../../components/Coin/Coin';
import PaginationContainer from '../../components/Pagination/PaginationContainer';
import { PaginatedProvider } from '../../context/Paginated.context';

const Home = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <PaginatedProvider>
      <div className="center">
        <Navigation />
        <Header />
        <TabbedPortfolios />
        <div>
          <h1 className="hero-content">
            Cryptocurrency Prices by Market Cap{' '}
            <span>
              <Switch />
              <small>Show stats</small>
            </span>
          </h1>
          <p className="hero-paragraph">
            The global cryptocurrency market cap today is $1.18
            Trillion, a 4.6% change in the last 24 hours. Read More
          </p>
        </div>
        <Coin />
        <div
          style={{
            margin: '2rem 0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <PaginationContainer />
        </div>
      </div>
    </PaginatedProvider>
  );
};

export default Home;
