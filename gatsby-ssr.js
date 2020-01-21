const React = require("react")

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      src="https://donorbox.org/widget.js"
      paypalExpress="false"
    ></script>,
  ])
}
