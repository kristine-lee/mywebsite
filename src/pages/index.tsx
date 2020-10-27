import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
// import Links from '../components/Links'
// import Button from '../components/Button'

import { Layout, Image, SEO, Button, FrontText } from '../components'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FrontText>
    <h2>Hi, I'm Kristine Lee<br />A Full Stack Developer Interested In Figuring Out What Makes People Tick</h2>
    </FrontText>
    {/* <div className='placeholder' style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      <Image />
    {/* </div> */}
    <Button />
  </Layout>
)

export default IndexPage
