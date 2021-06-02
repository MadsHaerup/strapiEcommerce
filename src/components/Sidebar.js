import React, { useState } from 'react';
import './Sidebar.scss';
import anime from 'animejs/lib/anime.es.js';
import { Link } from '@reach/router';

export default function Sidebar() {
  const [state, setState] = useState(false);


  function fromleft(){
    setState(state => !state);
    anime({
      targets: ".sidebar",
      translateX: 0, 
      scale: 1,
      easing: 'spring(1, 100, 100, 0)'

    })

    anime({
      targets: ".first",
      rotateZ: 60,
      translateX:10,
      scale:{value: 0.5}
    })
    anime({
      targets: ".second",
      scale:{value: 0}
    })
    anime({
      targets: ".third",
      rotateZ: -40,
      scale:{value: 0.5},
      translateY: -5,
      translateX: 10
    })
  }

  function toleft(){
    setState(state => !state);
    anime({
      targets: ".sidebar",
      translateX: 500,
      scale: 0, 
      easing: 'spring(1, 100, 100, 0)'
      
    })

    anime({
      targets: ".first",
      rotateZ: 0,
      translateX:0,
      scale:{value: 1}
    })
    anime({
      targets: ".second",
      scale:{value: 1}
    })
    anime({
      targets: ".third",
      rotateZ: 0,
      scale:{value:1},
      translateY: 0,
      translateX: 0
    })
  }

  return (
    <>
    <div className="burger" onClick={ state ? ()=>toleft() :  ()=>fromleft() } >
      <div className="burger__line first"></div>
      <div className="burger__line second"></div>
      <div className="burger__line third"></div>
    </div>

    <div className="sidebar">
      <ul className="sidebar__list">
        <Link className="sidebar__list__item" to="clothes" onClick={()=>toleft()}>Clothes</Link>
        <Link className="sidebar__list__item" to="shoes" onClick={()=>toleft()}>Shoes</Link>
        <Link className="sidebar__list__item" to="accessories" onClick={()=>toleft()}>Accessories</Link>
        <Link className="sidebar__list__item" to="sport" onClick={()=>toleft()}>Sport</Link>
        <Link className="sidebar__list__item" to="beauty" onClick={()=>toleft()}>Beauty</Link>
      </ul>
    </div>
    </>
  )
}

