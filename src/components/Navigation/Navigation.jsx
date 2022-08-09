import React from 'react';
import Navprice from '../NavPrice/Navprice';
import styled from 'styled-components';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { GiNightSleep } from 'react-icons/gi';
import ButtonComp from '../Button/Button';
// import { useStyles } from '../../MaterialUI/useStyle';

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //   const classes = useStyles();

  return (
    <NavFlexContainer>
      <div
        style={{
          display: 'flex',
          gap: '1.2rem',
        }}
      >
        <Navprice price={13054} title={'Coins'} />
        <Navprice price={538} title={'Exchanges'} />
        <Navprice
          price={'$1,140,769,646,171 -0.3%'}
          title={'Market Cap'}
        />
        <Navprice price={'$56,526,747,407'} title={'24h Vol'} />
        <Navprice price={'BTC 38.7% ETH 17.9%'} title={'Dominance'} />
        <Navprice price={'10 GWEI'} title={'Gas'} />
      </div>
      <DivFlexContainer>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          EN
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>English</MenuItem>
        </Menu>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          USD
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>English</MenuItem>
        </Menu>
        <GiNightSleep />
        <ButtonComp buttonName={'Subscribe'} />
      </DivFlexContainer>
    </NavFlexContainer>
  );
};

export default Navigation;

const NavFlexContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: #dddddd 1px solid;
`;
const DivFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.4rem;
  align-items: center;
`;
