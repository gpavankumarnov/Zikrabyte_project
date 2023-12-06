import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
 
& ul li{
  list-style-type: none;

}
& a{
  text-decoration : none;
  color:#505F98;
}
& h2{
  color: #37447E;
}
`;

const UL = styled.ul`
display:flex;
justify-content: space-between;
align-items: center;
gap:2rem;
`;

const Button = styled.button`
padding: 0.5rem 1.5rem;
height:1.65rem;

text-align:center;
color:white;
background-color:#111B47;
align-items:center;
display:flex;
`;

const Header = () => {
  return (
    <Nav>
      <UL>
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <li>
          <NavLink to="">About</NavLink>
        </li>
        <li>
          <NavLink to="">Contact</NavLink>
        </li>
      </UL>
      <div>
        <h2>Landing</h2>0
      </div>
      <Button>BuyNow</Button>
    </Nav>
  );
};

export default Header;
