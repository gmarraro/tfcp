import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "components/footer/footer"
import Header from "components/header/header"
import Nav from "components/nav/nav"
import RightColumn from "components/rightColumn/rightColumn"
import LeftColumn from "components/leftColumn/leftColumn"

import "./layout.scss"
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
      <Nav />
      <div
        className="columns"
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          paddingTop: 0,
        }}
      >
        <div className="column is-paddingless">
          <LeftColumn />
        </div>
        <div className="column is-paddingless right-column">
          <RightColumn />
        </div>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
