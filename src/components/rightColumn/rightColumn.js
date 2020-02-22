import React from "react"

import TopText from "components/topText/topText"
import Mission from "components/mission/mission"
import Story from "components/story/story"
import JoinTheMovement from "components/joinTheMovement/joinTheMovement"
import "./rightColumn.scss"

const RightColumn = () => {
  return (
    <div className="right-column-container">
      <TopText />
      <Mission />
      <Story />
      <JoinTheMovement />
    </div>
  )
}

export default RightColumn
