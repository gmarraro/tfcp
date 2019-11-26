import React from "react"
import "./getInvolvedStickyFooter.scss"

const GetInvolvedStickyFooter = () => {
  return (
    <div
      className="get-involved-sticky-footer is-hidden-desktop"
      onClick={() => window.location.href = "#get-in-touch"}
    >
      <p className="get-involved-text">GET INVOLVED</p>
    </div>
  )
}

export default GetInvolvedStickyFooter
