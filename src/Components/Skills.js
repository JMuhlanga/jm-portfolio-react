import React from 'react'

function Skills() {
  return (
    <div>
      <h3>Skills</h3>

        <div className="skill-mini-divs">
          <h5>Programming Languages</h5>
          <p>HTML, CSS, JavaScript, Java, PHP, Ruby,Bash Scripting</p>

          <div className="skills-icons">
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-square-js"></i>
            <i class="fa-brands fa-java"></i>
            <i class="fa-brands fa-php"></i>
            <i class="fa-solid fa-gem"></i>
            <i class="fa-solid fa-terminal"></i>

          </div>
          
        </div>

        <div className="skill-mini-divs">
          <h5>Frameworks</h5>
          <p>React.js, Next.js, Ruby on Rails, Laravel, Spring Boot, Tailwind CSS, NodeJS</p>
          
          <div className="skills-icons">
            <i class="fa-brands fa-react"></i>
            <i class="fa-solid fa-n"></i>
            <i class="fa-brands fa-laravel"></i>
            <i class="fa-brands fa-node"></i>
            <i class="fa-solid fa-leaf"></i>
          </div>
        </div>

        <div className="skill-mini-divs">
          <h5>CI/CD , Version Control and other tools</h5>
          <p>Git, Docker, Linux, Postman</p>

          <div className="skills-icons">
            <i class="fa-brands fa-git"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linux"></i>
            <i class="fa-brands fa-docker"></i>
            <i class="fa-solid fa-person"></i>

          </div>
        </div>
      
    </div>
  )
}

export default Skills