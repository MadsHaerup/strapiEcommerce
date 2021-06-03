import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
export default function PageFooter() {
  return (
    <Footer>
      <Section category="Company" text1="About" text2="Blog" text3="Join Us"/>
      <Section category="Help" text1="Contact" text2="Support" text3="Orders"/>
      <Section category="Partner" text1="Partner program" text2="Marketing" text3="Services"/>
      <Section category="Find Us" text1="Location" text2="Transport" text3="Email"/>
    </Footer>
  )
}

const Footer = styled.footer`
  display:flex;
  background:#3f37c9;
  margin-top: 3rem;
 
  
  
  @media screen and (max-width:900px){
    background:none;
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3e%3cpath fill='%233f37c9' fill-opacity='1' d='M0,96L48,80C96,64,192,32,288,21.3C384,11,480,21,576,58.7C672,96,768,160,864,170.7C960,181,1056,139,1152,112C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3e%3c/path%3e%3c/svg%3e");
  }
  
  
  @media screen and (max-width:550px){
    flex-direction: column;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
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