import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Sidebar from './Sidebar';


export default function Navbar() {
  
  return (
    <Nav>
      <Logo/>
      <Sidebar/>
      <List >
        <Link style={linkStyle} to="clothes">Clothes</Link>
        <Link style={linkStyle} to="#">Shoes</Link>
        <Link style={linkStyle} to="#">Accessories</Link>
        <Link style={linkStyle} to="#">Sport</Link>
        <Link style={linkStyle} to="#">Beauty</Link>
      </List>
    </Nav>
  )
}

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  text-align:center;
  padding:0;

  @media screen and (max-width: 500px) {
    display: none;
    
  }
`;

const Nav = styled.nav`
  margin:0 auto;
  max-width:1000px;
  margin-bottom:2rem;
  

  @media screen and (max-width: 500px) {
    display:flex;
    justify-content: space-between;
  }
`;

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem"
}