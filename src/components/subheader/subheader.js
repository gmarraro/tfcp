import React from "react"

import Image from "components/image"
import "./subheader.scss"

const Subheader = () => {
  return (
    <div>
      <Image imgStyle={{ height: "100vh" }} style={{ overflow: "auto", width: "100vw", height: "100vh" }}/>
      <div className="subheader-container">
        <div className="subheader-text">
          <h2 className="is-size-4">THE</h2>
          <h2 className="both-sides-border is-size-3">FAIR CHANCE</h2>
          <h2 className="is-size-4">PROJECT</h2>
        </div>
      </div>
    </div>
  )
}

export default Subheader
