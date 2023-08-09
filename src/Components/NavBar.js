import React from 'react'

const NavBar = () => {
  return (
    <nav>
      <ul>
        {/* Home link or logo click */}
        <li>
          <a href='/home'>Home</a>
        </li>

        {/* About Section Link */}
        <li>
        <a href='/about'>About</a>
        </li>

        {/* Projects section Link */}
        <li>
        <a href='/projects'>Projects</a>
        </li>


        {/* Contact section link */}
        <li>
        <a href='/contact'>Contact-Me</a>
        </li>


      </ul>
    </nav>
  )
}

export default NavBar;