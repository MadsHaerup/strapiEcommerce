import React from 'react';

export default function Slide({image}) {
  return (
    <img   style={imgstyle} height="100%" width="100%" src={"http://localhost:1337"+image} alt="people"/>
  )
}

const imgstyle = {
  // boxShadow: "8px 4px 18px 17px #b5e49a ",
  borderRadius: "10px"
}