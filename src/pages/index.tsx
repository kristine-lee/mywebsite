import * as React from 'react';
import { Link } from "gatsby"
import 'pattern.css/dist/pattern.css';

import { Layout, TechStack, SEO, FrontPage } from '../components'
import Projects from './projects'


const IndexPage = () => (
  <Layout>
    <SEO title="Kristine Lee" />
    <FrontPage />
    <TechStack />
    <Projects />

  </Layout>
)

export default IndexPage
