import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';

export default function Product({title, image,price, id}) {
  return (
    <ProductCon >
      <Title>{title}</Title>
      <Image src={"http://localhost:1337"+image} alt="" />
      <Price>{price+".- KR"}</Price>
      <LinkCon>
        <Link style={linkstyle} to={`${window.location.pathname}/${id}`} >View</Link>
        <Link style={linkstyle} to="/:id">Add</Link>
      </LinkCon>
    </ProductCon>
  )
}

const Title = styled.h2`
  color: #f72585;
`;
const Price = styled.p`
  font-weight: bold;
  font-size: 1.2rem;

`;
const Image = styled.img`
  width:100%;
  height:auto;
`;

const ProductCon = styled.div`
  border-radius: 10px;
  display:grid;
  text-align: center;
  background: #ffffff;
`;

const LinkCon = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
`;

const linkstyle = {
textDecoration: "none",
color: "#f72585",
fontWeight: "bold",
padding:"1rem",
background:"#fff",
border:"1px solid #f72585",
}



