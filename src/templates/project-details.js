import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { details } from '../styles/project-details.module.css';


const ProjectDetails = () => {
  return (
    <Layout>
        <div className={details}>
            <h2>title</h2>
            <h3>stack</h3>
            <div>
                {/* <GatsbyImage image={} /> */}
            </div>
            {/* <div className={styles.html} dangerouslySetInnerHTML={}/> */}
        </div>
    </Layout>
  )
}

export default ProjectDetails;