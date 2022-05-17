import React from 'react'

const LogWorkout = () => {
  return (
    <div id="main-screen" className="main-screen">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Options</label>
          </div>
          <select class="custom-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
          </select>
        </div>
    </div>
   
  )
}

export default LogWorkout