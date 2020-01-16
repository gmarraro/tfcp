import React from "react"

import './splitText.scss'

const SplitText = ({ startsWithPurple, firstHalfTop, firstHalfBottom, secondHalfTop, secondHalfBottom }) => {
    return (
        <div className='split-text-container'>
            <div id={startsWithPurple ? 'base-dark' : 'base-light'} className='split-text-top '>
                <h1 id='text-item-top' className="is-size-3-mobile"> {firstHalfTop} <br></br> {firstHalfBottom}</h1>
            </div>
            <div id={!startsWithPurple ? 'base-dark' : 'base-light'} className='split-text-bottom'>
                <h1 id='text-item-bottom'  className="is-size-3-mobile"> {secondHalfTop} <br></br> {secondHalfBottom} </h1>
            </div>
        </div>
    )
}

export default SplitText;
