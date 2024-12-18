import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import leadership from ".././assets/Leadership.png";
import dna from ".././assets/dna.png";
import lightning from ".././assets/lightning.png";
import rubberband from ".././assets/rubberband.png";
import one from ".././assets/number1-icon.svg";
import two from ".././assets/number2-icon.svg";
import three from ".././assets/number3-icon.svg";
import four from ".././assets/number4-icon.svg";
import Loader from './Loader';
import "../assets/stylesheets/about.css";

const About = ({ darkMode }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  document.title = "In-Moshyn | About";

  const handleClick = (e) => {
     e.target.previousElementSibling.classList.toggle("active");
     e.target.classList.toggle("dull");
   };
   
   useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [loading])

  return (
    <>
    <div className="homeContainer" data-aos="fade-in">
      <div className="bg" style={{background: darkMode ? "rgba(0,0,0,.1)" : "rgba(255,255,255,.3)"}}>
        <video id="background-video" loop muted autoPlay >
          <source src="videos/moshyn-promo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="homeContent" data-aos="fade-up">
        <div className="line"></div>
        <div className="banner">
        <h1 style={{color:!darkMode?'black':'white'}}>
            <span style={{ color: "rgb(0, 153, 255)"}}>We are In-Moshyn </span> a team of passionate <span style={{ color: "rgb(0, 153, 255)"}}>designers</span>  and <span style={{ color: "rgb(0, 153, 255)"}}>developers</span> who love to create
            beautiful and functional websites and applications. 
          </h1>
        </div>
      </div>
    </div>
    <div className="homeContainer">
      <div className="aboutContent" data-aos="fade-in">
        <div className="about">
          <div className="line"></div>
          <img src={dna} alt="" className='abtImage' />
          <h1 style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>
            Our Mission
          </h1>
          <span style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>
            Our mission is to reimagine how people interact with brands. To disrupt the status quo and uncover values others can’t find. To solve tomorrow’s business challenges in thoughtful, elegant ways. We aim to be strategic leaders in emergent technologies, innovators in user experiences. Our mission is to arm businesses for the digital revolution.
          </span>
        </div>
        <div className="about">
          <div className="line"></div>
          <img src={lightning} alt="" className='abtImage' />
          <h1 style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>
            What Makes Us Special?
          </h1>
          <span style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>
            It’s simple: our remarkable team and our success-driven process. Our process is designed for your success. It’s designed for successful collaboration, transparency and efficiency.
          </span>
          <div className="specialities" data-aos="fade-in">
            <div className="speicality">
              <img src={one} alt="" className='abtImage' />
              <h2 style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>Discovery</h2>
              <span style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>
                We’ll uncover your goals, strategy and mission to develop a strategy for success.
              </span>
              <div className="specialityUL" style={{ display: 'block', animation: "none" }}>
                <h2>
                  Deliverable
                </h2>
                <ul>
                  <li style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>App Roadmaps Strategy Documentation </li>
                </ul>
              </div>
            </div>
            <div className="speicality" data-aos="fade-in">
              <img src={two} alt="" className='abtImage' />
              <h2 style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>Design</h2>
              <span style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>
                Our award-winning design team will build out your flow and design assets.
              </span>
              <div className="specialityUL" style={{ display: 'block', animation: "none" }}>
                <h2>
                  Deliverable
                </h2>
                <ul>
                  <li style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>Technical Architecture Documentation Flow Design + Wireframes </li>
                </ul>
              </div>
            </div>
            <div className="speicality" data-aos="fade-in">
              <img src={three} alt="" className='abtImage' />
              <h2 style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>Development</h2>
              <span style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>
                We work in two-week sprints, so you’re always up to speed with the status.
              </span>
              <div className="specialityUL" style={{ display: 'block', animation: "none" }}>
                <h2>
                  Deliverable
                </h2>
                <ul>
                  <li style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>Two Week Sprints Complete Web or Mobile App MVP </li>
                </ul>
              </div>
            </div>
            <div className="speicality" data-aos="fade-in">
              <img src={four} alt="" className='abtImage' />
              <h2 style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>Deployement</h2>
              <span style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>
                Access our team for iterative changes or fixes for two-weeks after launch.
              </span>
              <div className="specialityUL" style={{ display: 'block', animation: "none" }} data-aos="fade-in">
                <h2 >
                  Deliverable
                </h2>
                <ul>
                  <li style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>Free 2-week Support Longer Support Options Available </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="about" data-aos="fade-in">
          <div className="line"></div>
          <img src={leadership} alt="" className='abtImage' />
          <h1 style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>
            Our Leadership
          </h1>
          <span style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>
            We believe the best solutions lay at the intersection of intelligent design and strong engineering. Our leadership works continually to protect and instill this vision in every process, project and team member.
          </span>
          {loading ? <Loader /> : <div className="clientsGrid">
            {data && data.map((item) =>
              <div key={item._id} className="client_detail">
                <img src={item.image} alt="" width="200px" height="200px" />
                <h2 style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>{item.name}</h2>
                <span style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white',textAlign:'center' }}>
                  {item.role}
                </span>
              </div>)}
          </div>}

        </div>
        <div className="about" data-aos="fade-in">
          <div className="line"></div>
          <img src={rubberband} alt="" className='abtImage' data-aos="fade-in" />
          <h1 style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>
            Our Services
          </h1>
          <span style={{ width: "90%", color: !darkMode ? 'black' : 'white' }}>
            A sorta, kinda, almost complete list of what we can help you with.
          </span>
          <div className="works">
            <div className="work">
              <h2 style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>Graphic-Design</h2>
              <div className="dropdown" style={{ display: 'block', animation: "none" }}>
                <ul>
                  <li style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>Logo Designing</li>
                  <li style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>UI/UX Design</li>
                  <li style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>Post Design</li>
                </ul>
              </div>
            </div>
            <div className="work" data-aos="fade-in">
              <h2 style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>Digital Marketing</h2>
              <div className="dropdown" style={{ display: 'block', animation: "none" }}>
                <ul>
                  <li style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>SEO</li>
                  <li style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>SSM</li>
                  <li style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>Email Marketing</li>
                </ul>
              </div>
            </div>
            <div className="work" data-aos="fade-in">
              <h2 style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>Development</h2>
              <div className="dropdown" style={{ display: 'block', animation: "none" }}>
                <ul>
                  <li style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>Web Application</li>
                  <li style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>App Application</li>
                  <li style={{ textDecoration: 'none', color: !darkMode ? 'black' : 'white' }}>Desktop Application</li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default About;