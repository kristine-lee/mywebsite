import React from "react"
import { Link } from "gatsby"
import 'pattern.css/dist/pattern.css';

import { Layout, Image, SEO, FrontPage } from '../components'
import Projects from './projects'


const IndexPage = () => (
  <Layout>
    <SEO title="Kristine Lee" />
    <FrontPage />
   {/* <div className='placeholder' style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
    <Projects />

  </Layout>
)

export default IndexPage
