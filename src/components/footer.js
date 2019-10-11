
import React from "react"
import "./footer.sass"

const Footer = () => (
  <div className="footer">
    <div className="columns">
      <div className="column">
        <p className="footer-column-title">ABOUT</p>
        <p className="footer-column-subtitle">OUR MISSION</p>
        <p className="footer-column-subtitle">OUR STORY</p>
        <p className="footer-column-subtitle">ACTION PLAN</p>
      </div>
      <div className="column">
        <p className="footer-column-title">GET INVOLVED</p>
        <p className="footer-column-subtitle">ATTEND A DINNER</p>
        <p className="footer-column-subtitle">SPREAD THE WORD</p>
        <p className="footer-column-subtitle">DONATE</p>
      </div>
      <div className="column">
        <p className="footer-column-title">CONTACT</p>
        <p className="footer-column-subtitle">NEWSLETTER</p>
        <p className="footer-column-subtitle">SOCIAL</p>
        <p className="footer-column-subtitle">GET IN TOUCH</p>
      </div>
    </div>
  </div>
)

export default Footer
