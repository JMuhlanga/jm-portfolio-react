import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';


function App() {
  return (
    <main>
      
      <div className="app-container">

        <NavBar />      
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />

      </div> 

    </main>
  );
}

export default App;
