import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import styled from 'styled-components';

export default function Shoes() {
	const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/categories?name=Shoes")
    .then((response) => {
      console.log(response.data[0].products);
      setItems(response.data[0].products);
    });
    
  }, [setItems])


  return (
    <Wrapper>
      {items.map((item)=>(
        <Product key={item.id}
        id={item.id}
        title={item.title} 
        price={item.price}
        qty={item.qty}
        description={item.description}
        image={item.image.formats.small.url}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin:0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  justify-items: center;
  grid-gap:1rem;
  
`;