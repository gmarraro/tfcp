import React, { useState } from "react"
import { FacebookShareButton } from "react-share"

import Donate from "components/donate/donate"

import "./joinTheMovement.scss"

const JoinTheMovement = () => {
  const [signingUp, setSigningUp] = useState(false)
  const [getInTouch, setGetInTouch] = useState(false)
  const [share, setShare] = useState(false)
  const [donate, setDonate] = useState(false)

  return (
    <>
      {/* GET IN TOUCH MODAL */}
      <div className={`modal ${getInTouch ? "is-active" : ""}`}>
        <div class="modal-background"></div>
        <div class="modal-content">
          {/* <Donate /> */}
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
      <div className={`modal ${donate ? "is-active" : ""}`}>
        <div class="modal-background"></div>
        <div class="modal-content">
          <Donate />
        </div>
        <button class="modal-close is-large" aria-label="close"></button>

      </div>
    <div className="joinContainer is-size-6-mobile-only">
      <p className="titleText is-size-4-tablet" id="join-the-movement">JOIN THE MOVEMENT</p>
      {/* GET IN TOUCH MODAL */}
      {/* DONATE MODAL */}
      {/* <div className={`modal ${donate ? "is-active" : ""}`}>
        <div class="modal-background"></div>
        <div class="modal-content">
          <Donate />
        </div>
      </div> */}
      <p className="bottom-margin">
        Work alongside us. We seek to reform the
        system of 47,000 laws that keep people in
        perpetual punishment. If you have time,
        money, or knowledge to spare, please
        consider donating today.
      </p>
      <div className="ctasContainer">
        <div className="border-top">
          {signingUp ? (
            <form name="newsletter" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="newsletter" />
              <div className="control">
                <input className="input sign-up-input is-rounded" type="text"></input>
                <input className="submit-email" type="submit" onClick={() => console.log('HI!')}></input>
              </div>
            </form>
          ) : (
            <>
              <p className="" onClick={() => setSigningUp(true)}>SIGN UP FOR OUR NEWSLETTER</p>
              <span>&rarr;</span>
            </>
          )}
        </div>
        <div className="border-top" onClick={() => setGetInTouch(true)}>
          <p>GET IN TOUCH</p>
          <span>&rarr;</span>
        </div>
        <div className="border-top">
          <FacebookShareButton
            url="thefairchanceproject.com"
            resetButtonStyle={false}
            disabledStyle={false}
            // className="share-button-container"
            style={{ width: "100%" }}
          >
            <p>SHARE ON SOCIAL</p>
            <span>&rarr;</span>
          </FacebookShareButton>
          <span></span>
        </div>
        <div className="border-top border-bottom" onClick={() => setDonate(true)}>
          <p>DONATE</p>
          <span>&rarr;</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default JoinTheMovement
