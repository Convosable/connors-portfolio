import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby';


const ProjectDetails = ( {data} ) => {

    const { title, stack, featuredImg, description, github, liveProject, demo, screenshots } = data.markdownRemark.frontmatter
    console.log(screenshots)

    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featuredImg}>
                    <GatsbyImage image={getImage(featuredImg.childImageSharp.gatsbyImageData)} alt="proj-banner" />
                </div>
                <h3>Description</h3>
                <p>{description}</p>
                <h3>Screenshots</h3>
                <div className={styles.screenshots}>
                    {screenshots.map((screenshot, index) => (
                        <GatsbyImage key={index} image={getImage(screenshot.childImageSharp.gatsbyImageData)} alt={`Screenshot ${index + 1}`} />
                    ))}
                </div>
                <h3>Links</h3>
                <div>
                    <a href= {github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href= {demo} target="_blank" rel="noopener noreferrer">Demo</a>
                    { liveProject ? <a href={liveProject} target="_blank" rel="noopener noreferrer">Live Project</a> : null }
                </div>
            </div>
        </Layout>
    )
}

export default ProjectDetails;

export const query = graphql`
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
            )
          }
        }
        github
        liveProject
        description
        demo
        screenshots {
          childImageSharp {
            gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`


//issue ive run into: when importing an image to the markdown files, the image doesnt display, so i decided to pass everything through frontmatter and query via graphql for all the project data