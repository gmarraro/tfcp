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
        {!signingUp ? (
          <p className="sign-up-static" onClick={() => setSigningUp(true)}>SIGN UP FOR OUR NEWSLETTER</p>
        ) : (
          <input></input>
        )}
      </div>
    </div>
  )
}

export default TopText
