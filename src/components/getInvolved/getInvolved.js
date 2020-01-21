import React from "react"
import Button from "components/button/button"

import "./getInvolved.scss"

const GetInvolved = () => {
  return (
    <div className="get-involved" id="get-in-touch">
      <div className="get-involved-header is-size-2-tablet is-size-4-mobile is-size-2-desktop">
        <h2>WE'D LOVE</h2>
        <h2>TO</h2>
        <h2>HEAR FROM YOU</h2>
      </div>
      <a className="get-in-touch-btn-mobile is-hidden-desktop" href="/contact">
        GET IN TOUCH
      </a>
      <a className="get-in-touch-btn-desktop is-hidden-touch" href="/contact">
        GET IN TOUCH
      </a>
    </div>
  )
}

export default GetInvolved
