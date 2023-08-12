import React from 'react'
import '../Style/Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills</h2>

        <div className="skill-mini-divs">
          <h3>Programming Languages:</h3>
          <p><b>HTML, CSS, JavaScript, Java, PHP, Ruby,Bash Scripting</b></p>

          <div className="skills-icons">
            <i class="icon fa-brands fa-html5"></i>
            <i class="icon fa-brands fa-css3-alt"></i>
            <i class="icon fa-brands fa-square-js"></i>
            <i class="icon fa-brands fa-java"></i>
            <i class="icon fa-brands fa-php"></i>
            <i class="icon fa-solid fa-gem"></i>
            <i class="icon fa-solid fa-terminal"></i>

          </div>
          
        </div>

        <div className="skill-mini-divs">
          <h3>Frameworks:</h3>
          <p><b>React.js, Next.js, Ruby on Rails, Laravel, Spring Boot, Tailwind CSS, NodeJS</b></p>
          
          <div className="skills-icons">
            <i class="icon fa-brands fa-react"></i>
            <i class="icon fa-solid fa-n"></i>
            <i class="icon fa-brands fa-laravel"></i>
            <i class="icon fa-brands fa-node"></i>
            <i class="icon fa-solid fa-leaf"></i>
          </div>
        </div>

        <div className="skill-mini-divs">
          <h3>CI/CD , Version Control and other tools:</h3>
          <p><b>Git, Docker, Linux, Postman</b></p>

          <div className="skills-icons">
            <i class="icon fa-brands fa-git"></i>
            <i class="icon fa-brands fa-github"></i>
            <i class="icon fa-brands fa-linux"></i>
            <i class="icon fa-brands fa-docker"></i>
            <i class="icon fa-solid fa-person"></i>

          </div>
        </div>
      
    </div>
  )
}

export default Skills