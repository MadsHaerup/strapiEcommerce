import React from 'react';
import styled from 'styled-components';

export default function Product({title, image, description, price, qty}) {
  return (
    <div>
      <p style={{color:"white"}}>{title}</p>
      <Image src={"http://localhost:1337"+image} alt="" />
    </div>
  )
}

const Image = styled.img`
  border-radius: 10px;
  max-width:100%;
  height:300px;
`;