import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel'
import Slide from './Slide';

const Slider = () => {
const [items, setItems] = useState([]);

useEffect(() => {
 axios.get("http://localhost:1337/brands")
 .then((response=>{
   console.log(response.data)
   setItems(response.data)
 }))
}, [setItems])

  return (
    <Carousel cols={2} rows={1} gap={10} loop>
    <>
    {items.map((item)=>(
       <Carousel.Item>
      <Slide key={item.id} 
      image={item.image.formats.medium.url}
      />
      </Carousel.Item>
      ))}
    </>
      
    </Carousel>
  )
}

export default Slider;