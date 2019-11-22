/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Mission from "./mission"
import Story from "./story"
import Header from "./header/header"
import SplitText from './splitText/splitText'
// import "./layout.css"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          paddingTop: 0,
        }}
      >
        <SplitText startsWithPurplr={true} firstHalfTop='A LIFETIME' firstHalfBottom='OF PUNISHMENT' secondHalfTop='AFTER' secondHalfBottom='SERVING YOUR TIME' />
        <SplitText startsWithPurplr={false} firstHalfTop='ROBBED' firstHalfBottom='OF A FAIR CHANCE' secondHalfTop='TO' secondHalfBottom='TO REBUILD YOUR LIFE' />
        <SplitText startsWithPurplr={true} firstHalfTop='DOES' firstHalfBottom='THAT SOUND' secondHalfTop='LIKE' secondHalfBottom='A JUST SYSTEM' />
        <Mission />
        <main>{children}</main>
        <Story />
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
