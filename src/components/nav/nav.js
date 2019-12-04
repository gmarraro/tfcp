import React from "React"
import "./nav.scss"

const Nav = () => {
  const openNav = () => {
    let toggle = document.querySelector(".navbar-burger");
    let menu = document.querySelector(".navbar-menu");
    let nav = document.querySelector(".navbar");
    toggle.classList.toggle("is-active");
    menu.classList.toggle("is-active");
    nav.classList.toggle("is-active");
  }

  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation" onClick={openNav}>
      <div className="navbar-brand">
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarOpen">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarOpen" className="navbar-menu">
        <div className="nav-header">
          <p className="nav-text">THE</p>
          <p className="nav-text nav-text-large">FAIR CHANCE</p>
          <p className="nav-text">PROJECT</p>
        </div>
        <div className="navbar-items">
          <a className="navbar-item">
            ABOUT US
          </a>
          <a className="navbar-item">
            GET INVOLVED
          </a>
          <a className="navbar-item">
            CONTACT
          </a>
          <a className="navbar-item">
            DONATE
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav

