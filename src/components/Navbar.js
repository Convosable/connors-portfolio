import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';  


const Navbar = ( {icons} ) => {
  const github = icons.nodes[0].childImageSharp.gatsbyImageData
  return (
    <nav>
        <div className='icons'>
          <h1>Connor Vosberg</h1>
            <a href='https://github.com/Convosable' target="_blank" rel="noopener noreferrer">
              <GatsbyImage image={getImage(github)} alt="github-icon" />
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