import React, { useState } from "react"
import { FacebookShareButton } from "react-share"
import SignUpInput from "components/signUpInput/signUpInput"

import Donate from "components/donate/donate"

import "./joinTheMovement.scss"

const JoinTheMovement = () => {
  const [signingUp, setSigningUp] = useState(false)
  const [donate, setDonate] = useState(false)

  return (
    <>
      <div className={`modal ${donate ? "is-active" : ""}`}>
        <div class="modal-background"></div>
        <div class="modal-content donor-box">
          <Donate />
        </div>
        <button
          class="modal-close is-large"
          aria-label="close"
          onClick={() => setDonate(false)}
        ></button>
      </div>
      <div className="joinContainer is-size-6-mobile-only">
        <p className="titleText is-size-4-tablet" id="join-the-movement">
          JOIN THE MOVEMENT
        </p>
        <p className="bottom-margin">
          Work alongside us. We seek to reform the system of 44,000 laws that
          keep people in perpetual punishment. If you have time, money, or
          knowledge to spare, please consider donating today.
        </p>
        <div className="ctasContainer">
          <div
            className={`border-top ${signingUp ? "no-padding" : ""}`}
            onClick={() => setSigningUp(true)}
          >
            {signingUp ? (
              <SignUpInput id="join" stopSignup={() => setSigningUp(false)} />
            ) : (
              <div className="div-highlight">
                <p>SIGN UP FOR OUR NEWSLETTER</p>
                <span>&rarr;</span>
              </div>
            )}
          </div>
          <a
            className="border-top"
            target="_blank"
            href="mailto:zakithebarber@gmail.com"
          >
            <div className="div-highlight">
              <div className="get-in-touch">
                <span>GET IN TOUCH</span>
                <span>&rarr;</span>
              </div>
            </div>
          </a>
          <div className="border-top">
            <div className="div-highlight">
              <FacebookShareButton
                url="thefairchanceproject.com"
                resetButtonStyle={false}
                disabledStyle={false}
                className="share-button-container"
                style={{ width: "100%" }}
                quote="Work alongside us to End Perpetual Punishment. The Fair Chance Project works to dismantle the current legal system of disenfranchisement that keeps people who have been convicted of a crime, and who have served their time, from a fair chance at reintegrating back into society."
              >
                <p>SHARE ON SOCIAL</p>
                <span>&rarr;</span>
              </FacebookShareButton>
            </div>
          </div>
          <a
            className="border-top border-bottom"
            onClick={() => setDonate(true)}
          >
            <div className="div-highlight">
              <p>DONATE</p>
              <span>&rarr;</span>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default JoinTheMovement
