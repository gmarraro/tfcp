import React, { useState } from "react"
import SignUpInput from "components/signUpInput/signUpInput"

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
            <SignUpInput id="top" stopSignup={() => setSigningUp(false)}/>
          ) : (
            <div className="top-text-div-highlight">
              <p className="sign-up-static" onClick={() => setSigningUp(true)}>SIGN UP FOR OUR NEWSLETTER</p>
              <span>&rarr;</span>
            </div>
          )}
      </div>
    </div>
  )
}

export default TopText
