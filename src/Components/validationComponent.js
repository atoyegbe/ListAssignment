import React from 'react';

const Validation = (props) => {
  
  const checkText = () => {
    if(props.text === 0) {
      return 0;
   } else if (props.text <= 5) {
     return "Text too short"
   } else {
     return "Text Long Enough";
   }

  }
 
  
  return (
    <> 
    <h2>TextLenght:{checkText()} </h2>
    </>
  )
}


export default Validation