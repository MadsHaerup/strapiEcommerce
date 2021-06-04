import React from 'react';
import styled from 'styled-components';

export default function SingleView({title, image, description, price, qty, id}) {
  return (
    <ViewWrapper>
      <Image src={image} alt="product" />
      <Title>{title}</Title>
      <Text>{description} 
        <SmallWrap>
          <Price>Price: {price+".- KR"} </Price>
          <Qty>Quantity: {qty} </Qty>
        </SmallWrap>
      </Text>
      <Button>Buy</Button>
     
    </ViewWrapper>
  )
}

const ViewWrapper = styled.div`
  display: grid;
  grid-gap:1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  max-width: 1200px;
  margin:0 auto;
  background: #fff;
  padding:1rem;

  @media screen and (max-width:700px){
    grid-template-columns: 1fr;
    grid-template-rows: auto;

  }
`;

const Image = styled.img`
  grid-area: 1/1/-1/2;
  width:100%;
  height:100%;
  @media screen and (max-width:700px){
    grid-template-columns: 1fr;
    grid-area: 1/1/-1/3;
    height:auto;
  }
`;
const Price = styled.p`
  font-weight: bold;
`;

const SmallWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 500px) {
    display:flex;
    flex-direction:column;
    align-items: center;
  }

`;
const Qty = styled.p`
font-weight: bold;
`;
const Text = styled.div`
  display: grid;
  grid-area: 2/2/3/-1;
`;
const Title = styled.h2`
  grid-area: 1/2/-1/-1;
  text-align: center;
`;
const Button = styled.a`
   grid-area: 3/2/4/-1;
   color:#f72585;
  font-weight: bold;
  padding:1rem;
  background:fff;
  border:1px solid #f72585;
  place-self: center;
  width:150px;
  text-align: center;

  :hover{
    background: #f72585;
    color: #fff;
  }
`;

