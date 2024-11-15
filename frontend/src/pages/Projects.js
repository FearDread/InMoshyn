import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';
import Loader from './Loader';
import { projects } from "../components/Routes/projects";

import "../assets/stylesheets/projects.css";

export default function Projects({ darkMode }) {
  document.title = "Barlasify | Projects";
  const [loading, setloading] = useState(true)
  const [data, setdata] = useState([])

  useEffect(() => {

  }, [])

  return (
    <div className="projectContainer">
      <div className="bg"></div>
      <div className="projectContainerContent">
        <div className="line" style={{ marginBottom: "25px" }}></div>
        <div className="homeText">
          <h1 style={{ color: !darkMode ? 'black' : 'white', width: '70%' }}>
            Our beautiful web application built with MERN stack
          </h1>
          <p style={{ color: !darkMode ? 'black' : 'white' }}> We are a team of talented developers making websites</p>
          <button className="homeBtn">Read more about Our Projects below</button>
        </div>
      </div>
      {loading ? <Loader /> :
        <div className="projects">
          {projects.map((item)=><Project details={item.details} id={item._id} key={item._id} slug={item.slug} title={item.title} image={item.image} detail={item.description} />)}
        </div>
      }

    </div>

  )
}
