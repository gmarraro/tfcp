
import React from "react"
import "./footer.scss"
import Button from "components/button/button"

const Footer = () => (
  <div className="footer footer-container">
    <div className="footer-cta is-hidden-desktop is-size-3">
      <p>WANT TO</p>
      <p>GET</p>
      <p>INVOLVED?</p>
    </div>
    <div className="columns">
      <div className="column footer-section">
        <p className="footer-column-title">ATTEND</p>
        <p className="footer-column-title last">A DINNER</p>
        <p className="footer-text">Come break bread with us. We host
        community dinners called <span className="is-italic">A Feast for
        Fair Chances</span> to promote awareness
        of collateral consequences and open
        discussion into what it means to have
        a fair chance.</p>
        <Button text="ATTEND A DINNER" style={{ width: "100%" }} />
      </div>
      <div className="column footer-section">
        <p className="footer-column-title">SPREAD</p>
        <p className="footer-column-title last">THE WORD</p>
        <p className="footer-text">Bring this issue into the light with us.
        From those who work in the justice
        system, to those convicted of crimes,
        to the general public—few understand
        the true impact that these laws have.</p>
        <Button text="SHARE ON SOCIAL" style={{ width: "100%" }}/>
      </div>
      <div className="column footer-section">
        <p className="footer-column-title">DONATE</p>
        <p className="footer-column-title last">OR VOLUNTEER</p>
        <p className="footer-text">Work alongside us. We seek to reform
        the system of 47,000 laws that keep
        people in perpetual punishment. If you
        have time, money, or knowledge to
        spare, please consider donating today.</p>
        <Button text="DONATE" style={{ width: "100%" }}/>
      </div>
    </div>
  </div>
)

export default Footer
