import React from 'react'
import './large-section.css';


const LargeSection = (props) => {
  return (
    <div className="big-section">
        {props.children}
    </div>
  )
}

export default LargeSection