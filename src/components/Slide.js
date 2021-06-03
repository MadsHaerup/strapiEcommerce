import React from 'react';

export default function Slide({image}) {
  return (
    <img   style={imgstyle} height="100%" width="100%" src={"http://localhost:1337"+image} alt="people"/>
  )
}

const imgstyle = {
  borderRadius: "10px"
}