import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const Div = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    background-color: #333333;
    justify-content: space-around;
    height: 45px;
    align-items: center;
    padding: 0 220px;
  `;
  return (
    <Div>
      <Link to="/">
        <div>
          <i class="fab fa-apple"></i>
        </div>
      </Link>
      <Link to="/mac">
        <div>Mac</div>
      </Link>
      <Link to="ipad">
        <div>iPad</div>
      </Link>
      <Link to="iphone">
        <div>iPhone</div>
      </Link>
      <Link to="music">
        <div>Music</div>
      </Link>
      <Link to="support">
        <div>Support</div>
      </Link>
      <Link to="where-to-buy">
        <div>Where to Buy</div>
      </Link>
      <div>
        <i class="fas fa-search"></i>
      </div>
    </Div>
  );
};

export default Navbar;
