import React from 'react';

const Char = (props) => {
  const style = {
    display: 'ínline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid'
  }
  return (
    <div
     style={style} 
     onClick={props.click}>
      {props.showChar} 
      <hr></hr>
    </div>

    
    
  )
}

export default Char;