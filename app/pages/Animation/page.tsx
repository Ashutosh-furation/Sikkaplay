import React from 'react'
import "./ani.css"

const page = () => {

  return (
    <div>
      <h1 className="text-center"> Animation </h1>
      {/* <div className="container">
        <div className="center">
          <button className="btn">
            <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              className="border"
            >
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span>HOVER ME</span>
          </button>
        </div>
      </div> */}

      {/* <a href="#" className="text-center animated-button1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Button
      </a> */}

      <div className="circle-container">
        <div className="running-border"></div>
      </div>
     
    </div>
  );
}

export default page