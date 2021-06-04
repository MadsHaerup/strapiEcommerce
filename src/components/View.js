import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SingleView from './SingleView';

export default function View({id}) {
	const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1337/products/${id}`)
    .then((response) => {
      console.log(response.data);
      console.log(response.data.image.formats.medium.url);
      setItems(response.data);

    });
    
  }, [setItems,id])


  return (
    <Wrapper>
        <SingleView key={items.id}
        id={items.id}
        title={items.title} 
        price={items.price}
        qty={items.qty}
        description={items.description}
        image={"http://localhost:1337"+items.image.formats.medium.url}
        />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin:0 auto;
  margin-top:2rem;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  justify-items: center;
  grid-gap:1rem;
`;