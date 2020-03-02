import React from "react"

import "./bigText.scss"
const BigText = () => {
  return (
    <div className="big-text-container">
      <div className="big-text">
        <p className="extra-space">70-100 MILLION</p>
        <p className="highlighted">AMERICANS</p>
        <p>HAVE A CRIMINAL</p>
        <p>RECORD</p>
      </div>
      <div className="big-text">
        <p className="highlight-p">
          {" "}
          <span className="highlighted">44,000</span> <span>“LEGAL”</span>
        </p>
        <p>BARRIERS</p>
        <p>TO REENTERING</p>
        <p>SOCIETY</p>
      </div>
      <div className="big-text">
        <p>A LIFETIME</p>
        <p>OF PUNISHMENT</p>
        <p className="highlight-p">
          {" "}
          <span className="highlighted">AFTER</span> SERVING
        </p>
        <p>YOUR TIME</p>
      </div>
      <div className="big-text">
        <p className="highlighted">#END</p>
        <p>PERPETUAL</p>
        <p>PUNISHMENT</p>
      </div>
    </div>
  )
}

export default BigText
