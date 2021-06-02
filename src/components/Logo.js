import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';

export default function Logo() {
  return (
    <Container>
      <Link to="/" style={title}>Wear 
        <span>&amp;</span>
        <Text>Tear</Text>
      </Link>
    </Container>
  )
}

const Container = styled.div`
 padding: 1rem;
 display: flex;
 justify-content: center;
`;

const title ={
  fontSize: "2em",
  color: "#f72585",
  textDecoration: "none"
}

const Text = styled.span`
  color: #7209b7;
  border-right:5px solid #b5179e;
  border-bottom:5px solid #b5179e;
  padding:0.2em;
`;