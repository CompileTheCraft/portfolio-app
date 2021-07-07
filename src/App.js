import React, { useState, useEffect } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  const loadingScreenTime = [
    2000,
    3000,
    4000,
    5000
  ];

  const randomLoadingScreenTimeSelector = Math.floor(Math.random() * loadingScreenTime.length);
  const randomLoadingScreenTime = loadingScreenTime[randomLoadingScreenTimeSelector];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(randomLoadingScreenTime);
    }, randomLoadingScreenTime)
  }, [])

  return (
    <main className="App">
      {
        loading ? (
          <div className="loader">
          <SyncLoader
            color={"#f5f5f5"}
            loading={loading}
            size={10}
          />
          </div>
        ) : (
          <div>
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
          </div>
        )
      }
    </main>
  );
}

export default App;