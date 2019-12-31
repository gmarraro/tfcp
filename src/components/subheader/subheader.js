import React from "react"
import "./subheader.scss"
const Subheader = () => {
  return (
    <div className="subheader-container">
    <div className="subheader-text">
      <h2 className="is-size-4">THE</h2>
      <h2 className="both-sides-border is-size-3">FAIR CHANCE</h2>
      <h2 className="is-size-4">PROJECT</h2>
      </div>
      <div className="learn-more">
        <p className="learn-more-p">
          We work to dismantle the system of unjust limitations that keep people who have been convicted of a crime from a
          chance at a good life.
        </p>
        <p className="is-hidden-desktop work-with-us">
          &#x2192; Work alongside us. If you have time, money, or knowledge to spare, please consider donating today.
        </p>
        <a className="has-text-black" href="#learn-more">LEARN MORE</a>
      </div>
    </div>
  )
}

export default Subheader
