import React, { useEffect } from 'react';
import Slider from '../components/Slider';
import anime from 'animejs/lib/anime.es.js';

export default function Home() {

  useEffect(() => {
    function newanime(){
      anime.timeline({
        endDelay: 1000,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
      })
      .add({ targets: '.title',  color: '#b3c937' }, 0)
    }
    newanime()
  }, [])
 
  
  return (
    <>
      <Title/>
      <Slider/>
    </>
  )
}


const Title = () =>{
  return(
    <h1 style={h1style} className="title">Made to wear</h1>
  )
}

const h1style = {
  textAlign:"center",
  fontSize: "3rem",
  color: "#f72585"
}