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
          <form name="newsletter" method="POST" data-netlify="true" className="email-form">
          <input type="hidden" name="form-name" value="newsletter" />
          <div className="control">
            <input className="input sign-up-input is-rounded" type="text"></input>
            <input className="submit-email" type="submit" onClick={() => console.log('HI!')}></input>
          </div>
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
