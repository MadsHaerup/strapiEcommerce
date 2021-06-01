import React from 'react';
import styled from 'styled-components';

export default function Logo() {
  return (
    <Container>
      <Title>Wear 
        <span>&amp;</span>
        <Text>Tear</Text>
      </Title>
    </Container>
  )
}

const Container = styled.div`
 padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #f72585;
`;

const Text = styled.span`
  color: #7209b7;
  border-right:5px solid #b5179e;
  border-bottom:5px solid #b5179e;
  padding:0.2em;
`;