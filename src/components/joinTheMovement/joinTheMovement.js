import React, { useState } from "react"
import { FacebookShareButton } from "react-share"

import Donate from "components/donate/donate"

import "./joinTheMovement.scss"

const JoinTheMovement = () => {
  const [signingUp, setSigningUp] = useState(false)
  const [donate, setDonate] = useState(false)

  return (
    <>
      <div className={`modal ${donate ? "is-active" : ""}`}>
        <div class="modal-background"></div>
        <div class="modal-content">
          <Donate />
        </div>
        <button class="modal-close is-large" aria-label="close" onClick={() => setDonate(false)}></button>

      </div>
    <div className="joinContainer is-size-6-mobile-only">
      <p className="titleText is-size-4-tablet" id="join-the-movement">JOIN THE MOVEMENT</p>
      <p className="bottom-margin">
        Work alongside us. We seek to reform the
        system of 47,000 laws that keep people in
        perpetual punishment. If you have time,
        money, or knowledge to spare, please
        consider donating today.
      </p>
      <div className="ctasContainer">
        <div className={`border-top ${signingUp ? "no-padding" : ""}`} onClick={() => setSigningUp(true)}>
          {signingUp ? (
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="#" className="email-form">
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <input  className="input sign-up-input is-rounded" type="text" name="email" id="email"></input>
              <input type="submit" value="&rarr;" className="submit-email" />
            </form>
          ) : (
            <>
              <p>SIGN UP FOR OUR NEWSLETTER</p>
              <span>&rarr;</span>
            </>
          )}
        </div>
        <a className="border-top" target="_blank" href="mailto:hello@thefairchanceproject.com" >
          <div className="get-in-touch">
            <span>GET IN TOUCH</span>
            <span>&rarr;</span>

          </div>
        </a>
        <div className="border-top">
          <FacebookShareButton
            url="thefairchanceproject.com"
            resetButtonStyle={false}
            disabledStyle={false}
            className="share-button-container"
            style={{ width: "100%" }}
          >
            <p>SHARE ON SOCIAL</p>
            <span>&rarr;</span>
          </FacebookShareButton>
        </div>
        <a className="border-top border-bottom" onClick={() => setDonate(true)}>
          <p>DONATE</p>
          <span>&rarr;</span>
        </a>
      </div>
    </div>
    </>
  )
}

export default JoinTheMovement
