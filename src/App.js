import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
//import Journey from './components/Journey'; // Import the new Journey component
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main-content">
                <About />
                {/* <Hero /> */}
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
