import React, { useState } from "react"
import { FacebookShareButton } from "react-share"

import Donate from "components/donate/donate"

import "./joinTheMovement.scss"

const JoinTheMovement = () => {
  const [signingUp, setSigningUp] = useState(false)
  const [share, setShare] = useState(false)
  const [donate, setDonate] = useState(false)

  // const encode = (data) => {
  //   return Object.keys(data)
  //     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&");
  // }

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.target;
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       "form-name": form.getAttribute("name"),
  //       ...this.state
  //     })
  //   })
  //     // .then(() => navigateTo(form.getAttribute("action")))
  //     .catch(error => alert(error));
  // };

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

      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
        </div>
        <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
        </div>
        <ul className="actions">
            <li><input type="submit" value="Send Message" className="special" /></li>
            <li><input type="reset" value="Clear" /></li>
        </ul>
    </form>


        <div className={`border-top ${signingUp ? "no-padding" : ""}`} onClick={() => setSigningUp(true)}>
          {signingUp ? (
            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              className="email-form"
              action="/"
              data-netlify-honeypot="bot-field"

              // name="newsletter"
              // method="post"
              // action="/thanks/"
              // data-netlify="true"
              // onSubmit={handleSubmit}

            >
                <input type="hidden" name="form-name" value="newsletter" />
              <div className="control">
                <input className="input sign-up-input is-rounded" name="email" type="email"></input>
                <input className="submit-email" type="submit" value="&rarr;" onClick={(e) => e.preventDefault()}></input>
              </div>
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
