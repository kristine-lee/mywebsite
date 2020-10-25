import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Links from '../components/Links'
import Button from '../components/Button'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi!</h1>
    <h2>I'm looking to create interesting programs with good people</h2>
    <h2>More to come...</h2>
    {/* <div className='placeholder' style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      <Image />
    {/* </div> */}
    <Button />
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
