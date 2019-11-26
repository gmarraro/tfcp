import React from "react"
import Button from "components/button/button"

import "./getInvolved.scss"

const GetInvolved = () => {
  return (
    <div className="get-involved" id="get-in-touch">
      <div class="get-involved-header is-size-4-mobile is-size-2-desktop">
        <h2>WE'D LOVE</h2>
        <h2>TO</h2>
        <h2>HEAR FROM YOU</h2>
      </div>
      <button className="get-in-touch-btn-mobile is-hidden-desktop">GET IN TOUCH</button>
      <button className="get-in-touch-btn-desktop is-hidden-touch">GET IN TOUCH</button>
    </div>
  )
}

export default GetInvolved
