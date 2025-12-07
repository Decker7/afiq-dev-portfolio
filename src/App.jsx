import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Gear from './components/Gear';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark min-h-screen text-gray-200 font-sans selection:bg-primary/30 selection:text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Gear />
      </main>
      <Footer />
    </div>
  );
}

export default App;
