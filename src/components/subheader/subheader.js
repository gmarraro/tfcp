import React from "React"
import "./subheader.scss"
const Subheader = () => {
  return (
    <div className="subheader-container">
    <div className="subheader-text">
      <h2 className="is-size-4">THE</h2>
      <h2 className="both-sides-border is-size-3">FAIR CHANCE</h2>
      <h2 className="is-size-4">PROJECT</h2>
      </div>
      <div className="learn-more is-size-5">
        <p>
          We work to dismantle the system of unjust limitations that keep people who have been convicted of a crime from a
          chance at a good life.
        </p>
        <p className="is-hidden-desktop work-with-us">
        Work alongside us. If you have time, money, or knowledge to spare, please consider donating today.</p>
        <p>LEARN MORE</p>
      </div>
    </div>
  )
}

// todo: learn more leads to?
export default Subheader
