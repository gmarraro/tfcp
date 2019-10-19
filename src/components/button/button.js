import React from "react"
import PropTypes from 'prop-types';
import "./button.scss"
const Button = ({ text }) => {
  return (
    <button className="button-container">
      {text}
    </button>
  )
}

export default Button

Button.propTypes = {
  text: PropTypes.string.isRequired
}
