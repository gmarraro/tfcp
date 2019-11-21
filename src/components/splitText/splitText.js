import React from "react"

// import './splitText.scss'

const SplitText = (props) => (
    <div id='split-text-container'>
        <div id={props.startsWithPurplr ? 'base-dark' : 'base-light'} className='split-text'>
            <h1> {props.topHalf}</h1>
        </div>
        <div id={!props.startsWithPurplr ? 'base-dark' : 'base-light'} className='split-text'>
            <h1> {props.bottomHalf}</h1>
        </div>
    </div>
)

export default SplitText;
