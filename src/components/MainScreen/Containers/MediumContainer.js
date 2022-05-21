import React from 'react';
import './medium-container.css';

const MediumContainer = (props) => {
  return (
    <div className="md-container">
        {props.children}
    </div>
  )
}

export default MediumContainer