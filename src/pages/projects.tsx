import React from 'react'
import { Layout, SEO, ProjectCard } from '../components'


export default function Projects () {
  return (
    <Layout>
    <SEO title="Projects" />
      <ProjectCard projectTitle="DJ Party" projectDescription="Web app that allows users to stream music collectively and share their thoughts via chat" imageUrl="djparty.png"/>
  </Layout>
  )
}

