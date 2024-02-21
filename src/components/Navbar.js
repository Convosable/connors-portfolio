import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <nav>
        <h1>Connor Vosberg</h1>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Portfolio Projects</Link>
        </div>
    </nav>
  )
}

export default Navbar; 