import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';

export default function PageFooter() {
  return (
    <Footer>
      <Section category="Company" text1="About" text2="Blog" text3="Join Us"/>
      <Section category="Help" text1="Contact" text2="Support" text3="Orders"/>
      <Section category="Partner" text1="Partner program" text2="Marketing" text3="Services"/>
    </Footer>
  )
}

const Footer = styled.footer`
  display:flex;
  background:#3f37c9;
  margin-top: 3rem;
`;

const Section = ({category, text1, text2, text3}) =>{
  return(
  <CategoryBlock>
    <p style={pstyle}>{category}</p>
    <Link style={linkStyle} to="/">{text1}</Link>
    <Link style={linkStyle} to="/">{text2}</Link>
    <Link style={linkStyle} to="/">{text3}</Link>
  </CategoryBlock>
  )
}

const CategoryBlock = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  padding:2rem;
`;

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  paddingTop: "0.2rem",
  paddingBottom: "0.2rem"
}

const pstyle = {
  color: "#f72585",
}