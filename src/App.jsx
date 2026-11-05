/*import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";


import AuthProvider from "./LAB1-2-3/AuthProvider";
import AppNavbar from "./LAB1-2-3/Navbar";
import Home from "./LAB5/Home";

import Naturals from "./LAB5/Naturals";
import Detail from "./LAB5/Details";
import Contact from "./Formik/Contact";*/
/*const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode((previousMode) => !previousMode);
  }

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);

    return () => {
      document.body.classList.remove("dark-mode");
    };
  }, [darkMode]);*/

/*import "bootstrap/dist/css/bootstrap.min.css";
import ProfileList from "./FetchAPI/profile";*/
//import AxiosDemo from "./AxiosEx/AxiosDemo";
//import ProfileList from "./FetchAPI/profile";

import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import FetchPlayers from "./FetchAPI/FetchPlayers";
import Add from "./FetchAPI/Add";

export default function App() {
  return (
    <>
      <nav style={{ padding: 16, display: "flex", gap: 20 }}>
        <Link to="/dashboard">Danh sách cầu thủ</Link>
        <Link to="/add">Thêm cầu thủ</Link>
      </nav>

      <Routes>
        <Route path="/" element={<FetchPlayers />} />
        <Route path="/dashboard" element={<FetchPlayers />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}