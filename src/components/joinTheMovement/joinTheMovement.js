import React, { useState } from "react"
import { FacebookShareButton } from "react-share"
import SignUpInput from "components/signUpInput/signUpInput"
import Donate from "components/donate/donate"
import arrow from "images/arrow.png"

import "./joinTheMovement.scss"

const JoinTheMovement = () => {
  const [signingUp, setSigningUp] = useState(false)
  const [donate, setDonate] = useState(false)
  const [hoverFB, setHoverFB] = useState(false)

  const onMouseOver = () => {
    console.log('here');
    setHoverFB(true)
  }

  return (
    <>
      <div className={`modal ${donate ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-content donor-box">
          <Donate />
        </div>
        <button
          className="modal-close is-large"
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
                <img className="arrow" src={arrow}/>
              </div>
            )}
          </div>
          <a
            className="border-top"
            target="_blank"
            href="mailto:zakithebarber@gmail.com"
          >
          <div className="div-highlight">
                <p>GET IN TOUCH</p>
              <img className="arrow" src={arrow}/>
            </div>
          </a>
          <div className="border-top" onMouseEnter={() => setHoverFB(true)} onMouseLeave={() => setHoverFB(false)}>
            <div className="div-highlight">
              <FacebookShareButton
                url="thefairchanceproject.com"
                resetButtonStyle={false}
                disabledStyle={false}
                className={`share-button-container ${hoverFB ? "hovering" : ""}`}
                style={{ width: "100%" }}
                quote="Work alongside us to End Perpetual Punishment. The Fair Chance Project works to dismantle the current legal system of disenfranchisement that keeps people who have been convicted of a crime, and who have served their time, from a fair chance at reintegrating back into society."
              >
                <p>SHARE ON SOCIAL</p>
                <img className="arrow" src={arrow}/>
              </FacebookShareButton>
            </div>
          </div>
          <a
            className="border-top border-bottom"
            onClick={() => setDonate(true)}
          >
            <div className="div-highlight">
              <p>DONATE</p>
              <img className="arrow" src={arrow}/>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default JoinTheMovement
