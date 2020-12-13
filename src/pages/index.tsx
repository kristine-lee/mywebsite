import * as React from 'react';
import { Link } from "gatsby"
import 'pattern.css/dist/pattern.css';

import { Layout, Image, SEO, FrontPage } from '../components'
import Projects from './projects'


const IndexPage = () => (
  <Layout>
    <SEO title="Kristine Lee" />
    <FrontPage />
    <Projects />

  </Layout>
)

export default IndexPage
