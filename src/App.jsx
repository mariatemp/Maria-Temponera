import './App.css'
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero/>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
