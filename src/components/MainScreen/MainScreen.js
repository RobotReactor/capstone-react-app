import React from 'react';

const MainScreen = (props) => {
    return (
      <div id="main-screen" className="main-screen">
          {props.children}
      </div>
    )
}

export default MainScreen