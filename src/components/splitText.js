import React from "react"

const SplitText = (props) => (
    <div id='splitText-container'>
        <div id='topHalf'>
            <h1> {props.topHalf}</h1>
        </div>
        <div id='bottomHalf'>
            <h1> {props.bottomHalf}</h1>
        </div>
    </div>
)

export default SplitText;
