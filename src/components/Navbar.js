import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';


export default function Navbar() {
  return (
    <Nav>
      <Logo/>
      <List>
        <Link style={linkStyle} to="#">Clothes</Link>
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
`;

const Nav = styled.nav`
  margin:0 auto;
  max-width:1000px;
  margin-bottom:2rem;
`;

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem"
}