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
      <Carousel.Item>
    <img width="100%" src="http:/localhost:1337/uploads/medium_toa_heftiba_LS_Yrpn4vy_4_unsplash_0a56f2cc2c.jpg" alt="people"/>
    </Carousel.Item>
    {/* {items.map((item) =>(
      <Slide key={item.id} 
      image={item.name.formats.medium.url}
      />
    ))} */}
      
    </Carousel>
  )
}

export default Slider;