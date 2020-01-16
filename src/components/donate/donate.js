import React from "react"

import "./donate.scss"
const Donate = () => {
  return (
    <div>
      <iframe
        allowpaymentrequest=""
        frameborder="0"
        height="900px"
        name="donorbox"
        scrolling="no"
        seamless="seamless"
        src="https://donorbox.org/embed/the-fair-chance-project"
        style={{ maxWidth: "500px", minWidth: "310px", maxHeight:"none!important", height: "600px", width:"100%"}}>
      </iframe>
    </div>
  )
}

export default Donate
