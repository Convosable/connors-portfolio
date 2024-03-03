import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';  


const Navbar = () => {

  const iconData = useStaticQuery(graphql`
    query Icons {
      icons: allFile( filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "icons"}, extension: {regex: "/(jpg)|(jpeg)|(png)|(gif)/"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const linkedIn = iconData.icons.nodes[1].childImageSharp.gatsbyImageData
  const github = iconData.icons.nodes[0].childImageSharp.gatsbyImageData

  return (
    <nav>
        <div className='icons'>
          <h1>Connor Vosberg</h1>
            <a href='https://github.com/Convosable' target="_blank" rel="noopener noreferrer">
              <GatsbyImage image={getImage(github)} alt="github-icon" />
            </a>
            <a href='https://www.linkedin.com/in/connor-vosberg/' target="_blank" rel="noopener noreferrer">
              <GatsbyImage image={getImage(linkedIn)} alt="linkedIn-icon" />
            </a>
        </div>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Portfolio Projects</Link>
        </div>
    </nav>
  )
}

export default Navbar; 