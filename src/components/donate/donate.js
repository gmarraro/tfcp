import React from "react"

import "./donate.scss"
const Donate = () => {
  return (
    <div>
      <iframe
        allowpaymentrequest=""
        frameborder="0"
        height="900px"
        width="100%"
        name="donorbox"
        scrolling="no"
        seamless="seamless"
        src="https://donorbox.org/embed/the-fair-chance-project"
        style={{minWidth: "310px",
                minHeight: "600px",
                paddingTop: "25px",
                maxHeight: "none!important"
              }}
      >
      </iframe>
    </div>
  )
}

export default Donate
