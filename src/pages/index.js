import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../components/button/button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ "width": "100%"}}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
