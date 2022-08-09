import React from 'react';
import styled from 'styled-components';

const Navprice = ({ title, price }) => {
  return (
    <NavPriceContainer>
      <span>{title}:</span>
      <a href="#">
        <span>{price}</span>
      </a>
    </NavPriceContainer>
  );
};

export default Navprice;

const NavPriceContainer = styled.div`
  font-size: 0.8rem;
  span {
    color: #8f949f;
  }
  a {
    margin-left: 0.3rem;
    text-decoration: none;
    span {
      color: #6c9ff8;
    }
  }
`;
