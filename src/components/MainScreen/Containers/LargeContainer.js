import React from 'react';
import './large-container.css';

const LargeContainer = (props) => {
  return (
    <div className="lg-container">
        {props.children}
    </div>
  )
}

export default LargeContainer
