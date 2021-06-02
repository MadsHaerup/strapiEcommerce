import React from 'react';
import Carousel from 'react-grid-carousel';

export default function Slide({image}) {
  return (
 
    <img width="100%" src={"http://localhost:1337"+image} alt="people"/>
  )
}
