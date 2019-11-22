import React from "react"

import './splitText.scss'

const SplitText = (props) => (
    <div id='split-text-container'>
        <div id={props.startsWithPurplr ? 'base-dark' : 'base-light'} className='split-text-top'>
            <h1 id='text-item-top'> {props.firstHalfTop} <br></br> {props.firstHalfBottom}</h1>
        </div>
        <div id={!props.startsWithPurplr ? 'base-dark' : 'base-light'} className='split-text-bottom'>
            <h1 id='text-item-bottom'> {props.secondHalfTop} <br></br> {props.secondHalfBottom} </h1>
        </div>
    </div >
)

export default SplitText;
