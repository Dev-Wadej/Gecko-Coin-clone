import styled from 'styled-components';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const TabbedPortfolios = () => {
  return (
    <NavContainer>
      <div>
        <a href="#">
          <span>
            <AiFillStar />
          </span>
          PortFolios
        </a>
      </div>
      <div>
        <a href="#">Coins</a>
      </div>
      <div>
        <a href="#">New Cryptocurrencies</a>
      </div>
      <div>
        <a href="#">Gainers & Losers</a>
      </div>
      <div>
        <a href="#">Categories</a>
      </div>
    </NavContainer>
  );
};

export default TabbedPortfolios;

const NavContainer = styled.nav`
  margin-top: 5rem;
  border-bottom: solid #818793 0.3px;
  padding-bottom: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: left;
  gap: 1.5rem;
  div > a {
    &:hover {
      color: #222;
      transition: color 0.5s;
      border-bottom: #818793 solid 2px;
      padding-bottom: 0.95rem;
    }
  }
  a {
    color: #828894;
    span {
      margin-top: 0.3rem;
      position: relative;
      top: 0.1rem;
      margin-right: 0.3rem;
      color: hsl(40.13, 100%, 65.8%);
    }
  }
`;
