import './App.css';
/*import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import BaseEffectHook from './EffectHook/BaseEffectHook';
import OnlineStatus from './EffectHook/OnlineStatus';
import Player from './Player';
import logo from './logo.svg';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Navigation from './Navigation';
import Pet from './Pet';*/
/*import Orchids from './LAB1-2-3/Orchids';
import Navbar from './LAB1-2-3/Navbar';
import AuthProvider from './LAB1-2-3/AuthProvider';*/
import Contact from './Contact';
function App() {
  /*const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'theme',
      darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AuthProvider>
      <div className={darkMode ? 'app dark-mode' : 'app'}>
        <Navbar
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />

        <div className="App">
          <Orchids />
        </div>
      </div>
    </AuthProvider>
  );
*/
return(
  <div>
    <Contact />
  </div>
  );
}
export default App;