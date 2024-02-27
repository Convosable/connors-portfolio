import React from 'react'
import Navbar from './Navbar';
import '../styles/global.css'

const Layout = ({ children, icons }) => {
  return (
    <div className='layout'>
        <Navbar icons = {icons}/>
        <div className='content'>
            {children}
        </div>
        <footer>
            <p>Copyright 2024 Connor Vosberg</p>
        </footer>
    </div>
  )
}

export default Layout;