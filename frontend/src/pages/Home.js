import React from "react";
import fsdesign from "../assets/fs-design.svg";
import webdev from "../assets/web-devlopment-icon.svg";
import digital from "../assets/fs-digital-engi.svg";
import { Link } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
///import { Hero } from "../components/Hero";
import "../assets/stylesheets/home.css";

export default function Home({darkMode}) {
  document.title = "In-Moshyn | Home";
  
  const handleClick = (e) => {
    e.target.previousElementSibling.classList.toggle("active");
    e.target.classList.toggle("dull");
  };
  
  return (

    <>
      <div className="homeContainer"> 
      <div className="bg" style={{background: darkMode ? "rgba(0,0,0,.7)" : "rgba(255,255,255,.3)"}}>
        <video id="background-video" loop muted autoPlay >
          <source src="videos/tech-preview.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="homeContent" data-aos="fade-up">
        <div className="line"></div>
        <div className="homeTechs">
        <h1 style={{color:!darkMode?'black':'white'}}>
            <span style={{ color: "rgb(0, 153, 255)" }}>Technology</span> for
            Any part of your Business
          </h1>
        </div>
      </div>

      <HomePage darkMode={darkMode} />

      <div className="homeContent clientsContent" data-aos="fade-up">

      </div>
      <div className="homeContent" data-aos="fade-up">
        <div className="line"></div>
        <div className="workDetail">
          <h5 style={{color:!darkMode?'black':'white'}}>So what we do exactly?</h5>
          <span style={{color:!darkMode?'black':'white'}}>
            We're a full stack firm that can help you from strategy to launch,
            and anywhere in between.
          </span>
        </div>
        <div className="workContainer">
          <div className="works">
            <div className="work">
              <img src={fsdesign} alt="" />
              <h2 style={{color:!darkMode?'black':'white'}}>Graphic-Design</h2>
              <span style={{color:!darkMode?'black':'white'}}>
                Transform your business with award-winning design for your brand
                identity, website or mobile app.
              </span>
              <div className="dropdown inactive">
                <ul>
                  <li style={{color:!darkMode?'black':'white'}}>Logo Designing</li>
                  <li style={{color:!darkMode?'black':'white'}}>UI/UX Design</li>
                  <li style={{color:!darkMode?'black':'white'}}>Post Design</li>
                </ul>
                <button className="homeBtn">Learn More</button>
              </div>
              <button onClick={handleClick} className="seeMore">
                See more.
              </button>
            </div>
            <div className="work">
              <img src={digital} alt="" />
              <h2 style={{color:!darkMode?'black':'white'}}>Digital Marketing</h2>
              <span style={{color:!darkMode?'black':'white'}}>
                Grow your business with our digital marketing services. We help
                you reach your target audience and increase your sales.
              </span>
              <div className="dropdown inactive">
                <ul>
                  <li style={{color:!darkMode?'black':'white'}}>SEO</li>
                  <li style={{color:!darkMode?'black':'white'}}>SSM</li>
                  <li style={{color:!darkMode?'black':'white'}}>Email Marketing</li>
                </ul>
                <button className="homeBtn">Learn More</button>
              </div>
              <button onClick={handleClick} className="seeMore">
                See more.
              </button>
            </div>
            <div className="work">
              <img src={webdev} alt="" />
              <h2 style={{color:!darkMode?'black':'white'}}>Development</h2>
              <span style={{color:!darkMode?'black':'white'}}>
                Create exceptional web and mobile app experiences with our
                award-winning development team.
              </span>
              <div className="dropdown inactive">
                <ul>
                  <li style={{color:!darkMode?'black':'white'}}>Web Application</li>
                  <li style={{color:!darkMode?'black':'white'}}>App Application</li>
                  <li style={{color:!darkMode?'black':'white'}}>Desktop Application</li>
                </ul>
                <button className="homeBtn">Learn More</button>
              </div>
              <button onClick={handleClick} className="seeMore">
                See more.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
