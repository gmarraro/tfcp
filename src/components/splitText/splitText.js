import React from "react"

import './splitText.scss'

const SplitText = (props) => (
    <div id='split-text-container'>
        <div id={props.startsWithPurplr ? 'base-dark' : 'base-light'} className='split-text-top'>
            <p id='text-item-top'> {props.firstHalfTop} <br></br> {props.firstHalfBottom}</p>
        </div>
        <div id={!props.startsWithPurplr ? 'base-dark' : 'base-light'} className='split-text-bottom'>
            <p id='text-item-bottom'> {props.secondHalfTop} <br></br> {props.secondHalfBottom} </p>
        </div>
    </div >
)

export default SplitText;
