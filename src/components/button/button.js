import React from "react"
import PropTypes from 'prop-types';
import "./button.scss"
const Button = ({ text, style = {}, onClick = () => {} }) => {
  return (
    <button className="button-container" style={style} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button

Button.propTypes = {
  text: PropTypes.string.isRequired
}
