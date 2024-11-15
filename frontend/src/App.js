import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import ProjectDetail from "./components/Routes/ProjectDetail";
import SubFooter from "./pages/SubFooter";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Thoughts from "./pages/Thoughts";
import ProjectItem from "./pages/ProjectItem";
import ThoughtItem from "./pages/ThoughtItem";
import './assets/stylesheets/app.css'
import 'aos/dist/aos.css';

 // You can also use <link> for styles
// ..
AOS.init({
  duration:700, 
  easing: 'ease-in-out',
});

function App() {
  const [darkMode,setdarkMode] = useState(true);
  let body = document.querySelector("body");
  body.style.backgroundColor = darkMode ? "rgb(0, 153, 255)" : "#fff";
  body.style.color = darkMode ? "#FFF" : "#111";
  const handleDarkMode = () => {
    setdarkMode(!darkMode);
    if (darkMode) {
      body.classList.add("darkTheme");
    }
    else {
      body.classList.remove("darkTheme");
    }
  };
  return (
    <div className="App">
       <BrowserRouter>
          <Nav  darkMode={darkMode} handleDarkMode={handleDarkMode}/>
          <Routes>
            <Route exact index path="/" element={<Home  darkMode={darkMode} handleDarkMode={handleDarkMode}/>} />
            <Route exact path="thoughts" element={<Thoughts darkMode={darkMode} handleDarkMode={handleDarkMode}/>} />
            <Route exact path="contact" element={<Contact  darkMode={darkMode} handleDarkMode={handleDarkMode}/>} />
            <Route exact path="projects" element={<Projects darkMode={darkMode} handleDarkMode={handleDarkMode}/>} />
            <Route exact path="about" element={<About darkMode={darkMode} handleDarkMode={handleDarkMode}/>} />
            <Route exact path="project/:id" element={<ProjectDetail darkMode={darkMode} handleDarkMode={handleDarkMode}/>} />
            <Route exact path="thought/:id" element={<ThoughtItem darkMode={darkMode} handleDarkMode={handleDarkMode}/>} />
          </Routes>
          <SubFooter />
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
