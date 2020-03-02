import React, { useState } from "react"
import "./nav.scss"

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const openNav = () => {
    let toggle = document.querySelector(".navbar-burger")
    let menu = document.querySelector(".navbar-menu")
    let nav = document.querySelector(".navbar")
    toggle.classList.toggle("is-active")
    menu.classList.toggle("is-active")
    nav.classList.toggle("is-active")
  }

  return (
    <>
      <nav
        className="navbar is-transparent is-hidden-desktop"
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
            <a className="navbar-item" href="#mission">
              OUR MISSION
            </a>
            <a className="navbar-item" href="#story">
              OUR STORY
            </a>
            <a className="navbar-item" href="#join-the-movement">
              GET INVOLVED
            </a>
          </div>
        </div>
      </nav>

      <div
        class="navbar navbar-desktop is-hidden-touch"
        role="navigation"
        aria-label="main navigation"
      >
        <a
          role="button"
          class="navbar-burger burger desktop"
          onClick={() => setOpenMenu(true)}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div className={`modal ${openMenu ? "is-active" : ""} desktop-nav`}>
          <div class="modal-content">
            <div
              className="navbar-items-desktop"
              onClick={() => setOpenMenu(false)}
            >
              <a className="navbar-item" href="#mission">
                OUR MISSION
              </a>
              <a className="navbar-item" href="#story">
                OUR STORY
              </a>
              <a className="navbar-item" href="#join-the-movement">
                GET INVOLVED
              </a>
            </div>
          </div>
          <button
            class="modal-close is-large"
            aria-label="close"
            onClick={() => setOpenMenu(false)}
          ></button>
        </div>
      </div>
    </>
  )
}

export default Nav
