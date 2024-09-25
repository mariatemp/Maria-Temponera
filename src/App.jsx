import './App.css'
import { useState } from 'react';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';
import Navigation from '../src/navigation/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      
      
      {activeSection === 'home' && <Hero />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'skills' && <Skills />}
      {activeSection === 'contact' && <Contact />}
      <Footer />
    </>
  );
}

export default App;
