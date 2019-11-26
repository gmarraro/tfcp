import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Mission from "./mission"
import Story from "./story"
import Header from "./header/header"
import SplitText from './splitText/splitText'
import Subheader from "./subheader/subheader"
import GetInvolvedStickyFooter from "./getInvolvedStickyFooter/getInvolvedStickyFooter"
import GetInvolved from "components/getInvolved/getInvolved"
import LogoSmall from "components/logoSmall/logoSmall"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <LogoSmall />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Subheader />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          paddingTop: 0,
        }}
      >
        <div className="split-text-sections">
          <SplitText startsWithPurple={true} firstHalfTop='A LIFETIME' firstHalfBottom='OF PUNISHMENT' secondHalfTop='AFTER' secondHalfBottom='SERVING YOUR TIME' />
          <SplitText startsWithPurple={false} firstHalfTop='ROBBED' firstHalfBottom='OF A FAIR CHANCE' secondHalfTop='TO' secondHalfBottom='REBUILD YOUR LIFE' />
          <SplitText startsWithPurple={true} firstHalfTop='DOES' firstHalfBottom='THAT SOUND' secondHalfTop='LIKE' secondHalfBottom='A JUST SYSTEM?' />
        </div>
        <Mission />
        <main>{children}</main>
        <Story />
        <Footer />
        <GetInvolved />
        <GetInvolvedStickyFooter />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
