import React, { useEffect } from "react"

import "./signUpInput.scss"

const SignUpInput = props => {
  useEffect(() => {
    window.addEventListener("click", clickOutside)
    return () => window.removeEventListener("click", clickOutside)
  }, [])

  const clickOutside = e => {
    var element = document.getElementById(props.id)

    if (e.target !== element && !element.contains(e.target)) {
      props.stopSignup()
    }
  }

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="#"
      className="email-form"
      id={props.id}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <input
        autoFocus
        className="input sign-up-input is-rounded"
        type="text"
        name="email"
        id="email"
      ></input>
    </form>
  )
}

export default SignUpInput
