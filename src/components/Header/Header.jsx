import React from 'react';
import MenuListComposition from './Header.refurbished';
import styled from '@emotion/styled';

const Header = () => {
  return (
    <SectionContainer>
      <DivContainer>
        <LogoContainer>
          <img
            src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png"
            alt="Coingecko Logo"
          />
        </LogoContainer>
        <MenuListComposition />
        <MenuListComposition />
        <MenuListComposition />
        <MenuListComposition />
        <MenuListComposition />
      </DivContainer>
      <DivContainerGaped>
        <div>
          <img
            src="https://static.coingecko.com/s/candy_notification_web-a560ca6de9e0daaeb05eb6fe3dae7062684f63249dbf371568e7b062a3456e3e.png"
            alt="Candy"
          />
        </div>
        <div>
          <a href="#">Porfolio</a>
        </div>
        <div>
          <a href="#">Login</a>
        </div>
        <div>
          <a href="#">Sign Up</a>
        </div>
      </DivContainerGaped>
    </SectionContainer>
  );
};

export default Header;

const SectionContainer = styled.section`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DivContainerGaped = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
const LogoContainer = styled.div`
  width: 9rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
