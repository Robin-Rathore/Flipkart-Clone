import React from 'react'
import "./Navbar.css"
// import classes from './Nabar.module.cc'
import Logo from './Logo';
import Search from './Search';
const Navbar = () => {
  return (
    <div >
            <div>
            <Logo/>
            <Search/>
            </div>
        </div>
  )
}

export default Navbar;
