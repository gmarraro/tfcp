import React from "react"
import "./nav.scss"

const Nav = () => {
  const openNav = () => {
    let toggle = document.querySelector(".navbar-burger")
    let menu = document.querySelector(".navbar-menu")
    let nav = document.querySelector(".navbar")
    toggle.classList.toggle("is-active")
    menu.classList.toggle("is-active")
    nav.classList.toggle("is-active")
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
      onClick={openNav}
    >
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger burger is-absolute"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarOpen" className="navbar-menu">
        <div className="navbar-items">
          <a className="navbar-item" href="#our-mission">
            OUR MISSION
          </a>
          <a className="navbar-item" href="#our-story">OUR STORY</a>
          <a className="navbar-item">GET INVOLVED</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
