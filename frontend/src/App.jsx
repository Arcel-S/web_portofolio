import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Certifications from './components/Certifications/Certifications'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="dark bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden transition-colors duration-300">
      <div className="relative flex min-h-screen w-full flex-col">
        {/* Background Glow Effect */}
        <div className="fixed inset-0 pointer-events-none bg-tech-gradient z-0"></div>
        
        {/* Navigation */}
        <Header />
        
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>
      </div>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      
      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>
      
      {/* Certifications Section */}
      <section id="certifications">
        <Certifications />
      </section>
      
      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>
      
      {/* Footer / Contact */}
      <section id="contact">
        <Footer />
      </section>    </div>
  )
}

export default App