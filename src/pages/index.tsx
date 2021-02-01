import * as React from 'react';
import { Link } from "gatsby"
import 'pattern.css/dist/pattern.css';

import { Layout, TechStack, SEO, FrontPage } from '../components'
import Projects from './projects'
//just to see what's going on
import ProjectSection from '../components/ProjectSection'


const IndexPage = () => (
  <Layout>
    <SEO title="Kristine Lee" />
    <FrontPage />
    <TechStack />
    <Projects />
    {/* <ProjectSection /> */}
  </Layout>
)

export default IndexPage
