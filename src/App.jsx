import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";


import AuthProvider from "./LAB1-2-3/AuthProvider";
import AppNavbar from "./LAB1-2-3/Navbar";
import Home from "./LAB5/Home";

import Naturals from "./LAB5/Naturals";
import Detail from "./LAB5/Details";
import Contact from "./Formik/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode((previousMode) => !previousMode);
  }

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);

    return () => {
      document.body.classList.remove("dark-mode");
    };
  }, [darkMode]);

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
          <AppNavbar darkMode={darkMode} toggleTheme={toggleTheme} />
          <Container className="py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail" element={<Detail />} />
              <Route path="/naturals" element={<Naturals />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

