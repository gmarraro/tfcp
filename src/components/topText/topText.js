import React, { useState } from "react"

import "./topText.scss"
const TopText = () => {
  const [signingUp, setSigningUp] = useState(false)
  return (
    <div className="top-text-section">
      <p className="top-text">
        We work to dismantle the current legal system of disenfranchisement that
        keeps people who have been convicted of a crime, and who have served
        their time, from a fair chance at reintegrating back into society.
      </p>
      <div className="sign-up-cta">
        {signingUp ? (
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="#" className="email-form">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input  className="input sign-up-input is-rounded" type="text" name="email" id="email"></input>
            <input type="submit" value="&rarr;" className="submit-email" />
          </form>
        ) : (
          <>
            <p className="sign-up-static" onClick={() => setSigningUp(true)}>SIGN UP FOR OUR NEWSLETTER</p>
            <span>&rarr;</span>
          </>
        )}
      </div>
    </div>
  )
}

export default TopText
