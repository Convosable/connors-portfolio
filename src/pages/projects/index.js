import React from 'react'
import Layout from '../../components/Layout';
import {portfolio} from '../../styles/projects.module.css';

const Projects = () => {
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects I have created:</h3>
        <p>insert links to project components</p>
      </div>
    </Layout>
  )
}

export default Projects;