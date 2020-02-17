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
    <div className="joinContainer">
      <p className="titleText is-size-4">JOIN THE MOVEMENT</p>
      {/* GET IN TOUCH MODAL */}
      <div className={`modal is-clipped ${getInTouch ? "is-active" : ""}`}>
        <div class="modal-background"></div>
        <div class="modal-content">

        </div>
      </div>
      {/* DONATE MODAL */}
      <div className={`modal is-clipped ${donate ? "is-active" : ""}`}>
        <div class="modal-background"></div>
        <div class="modal-content">
          <Donate />
        </div>
      </div>
      <p className="bottom-margin">
        Work alongside us. We seek to reform the
        system of 47,000 laws that keep people in
        perpetual punishment. If you have time,
        money, or knowledge to spare, please
        consider donating today.
      </p>
      <div className="ctasContainer">
        <div>
          <p>SIGN UP FOR OUR NEWSLETTER</p>
          <span></span>
        </div>
        <div onClick={() => setGetInTouch(true)}>
          <p>GET IN TOUCH</p>
          <span></span>
        </div>
        <div>
          <FacebookShareButton
            url="thefairchanceproject.com"
            resetButtonStyle={false}
            disabledStyle={false}
            // className="share-button-container"
            style={{ width: "100%" }}
          >
            <div>SHARE ON SOCIAL</div>
          </FacebookShareButton>
          <span></span>
        </div>
        <div>
          <p>DONATE</p>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default JoinTheMovement
