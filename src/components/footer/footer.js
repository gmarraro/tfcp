import React from "React"
import "./footer.scss"
const Footer = () => {
  return (
    <div className="footer-container has-text-left-mobile">
      <div className="footer-main-text">
        <h1>#END</h1>
        <h1>PERPETUAL</h1>
        <h1>PUNISHMENT</h1>
      </div>
      <button class="button join-button" onClick={() => window.location.href = "#join-the-movement"}>JOIN THE MOVEMENT<img /></button>
    </div>
  )
}

export default Footer
