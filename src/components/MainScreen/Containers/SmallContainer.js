import React from 'react';
import './small-container.css';

const SmallContainer = (props) => {
  return (
    <div className="sm-container">
        {props.children}
    </div>
  )
}

export default SmallContainer