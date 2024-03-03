import React from 'react'
import '../Utils/Navbar.css';
import logowhite from "../assets/logo.png";
import logoblack from "../assets/adbop.png";
import searchb from "../assets/search-b.png";
import searchw from "../assets/search-w.png";
import day from "../assets/day.png";
import night from "../assets/night.png";
function Header({ theme, SetTheme }) {
          const toggle_mode = () => {
        // Use === for comparison in the ternary operator
        theme === 'light' ? SetTheme('dark') : SetTheme('light');
    }
  return (
     <div className='navbar'>
            
            <img src={theme === 'light' ? logoblack : logowhite} alt="logo" className='logo' />
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Flight</a></li>
                <li><a href='/'>Hotel</a></li>
                                <li><a href='/'>Event</a></li>
                                <li><a href='/'>Contac Us</a></li>
            </ul>
            <div className='search-box'>
                <input type='text' placeholder='search' className='input' />
                {/* Alt attribute for accessibility */}
                <img src={theme === 'light' ? searchw : searchb} alt="search" />
            </div>
            {/* Alt attribute for accessibility */}
            <img onClick={toggle_mode} src={theme === 'light' ? night : day} alt="toggle" className='toggle' />
        </div>
  )
}

export default Header
