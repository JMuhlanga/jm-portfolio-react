import React from 'react'

const NavBar = () => {
  return (
    <nav>
      <ul>
        {/* Home link or logo click */}
        <li>
          <p>Home</p>
        </li>

        {/* About Section Link */}
        <li>
        <a href='#about-section'>About</a>
        </li>

        {/* Projects section Link */}
        <li>
        <a href='#projects-section'>Projects</a>
        </li>


        {/* Contact section link */}
        <li>
        <a href='#contact-me'>Contact-Me</a>
        </li>


      </ul>
    </nav>
  )
}

export default NavBar;