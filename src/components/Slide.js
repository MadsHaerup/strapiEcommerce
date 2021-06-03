import React from 'react';
import Carousel from 'react-grid-carousel';

export default function Slide({image}) {
  return (
    <img max-width="100%" height="auto" src={"http://localhost:1337"+image} alt="people"/>
  )
}
