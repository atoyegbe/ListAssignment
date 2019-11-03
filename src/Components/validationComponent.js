import React from 'react';

const Validation = (props) => {

  const textOutput = () => {
    if(props.textLength <= 5) {
      return "Text too short";
    } else {
      return "Text Long Enough";
    }
  } 
  
  return (
    <> 
    <h2>TextLenght: {textOutput()} </h2>
    </>
  )
}


export default Validation