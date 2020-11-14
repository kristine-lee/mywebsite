import React from "react"
import { Link } from "gatsby"
import 'pattern.css/dist/pattern.css'

import { Layout, Image, SEO, Button, FrontText } from '../components'
import Projects from './projects'

const IndexPage = () => (
  <Layout>
    <SEO title="Kristine Lee" />
    <FrontText>
    <h2>Hi, I'm Kristine Lee<br />A Full Stack Developer Interested In Figuring Out What Makes People Tick</h2>
    <Button />
    </FrontText>
    {/* <div className='placeholder' style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      <Image />
    {/* </div> */}
    <Projects />
  </Layout>
)

export default IndexPage
