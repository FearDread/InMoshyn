import React, { useRef, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
//import { Navbar } from '../Navbar'
//import { Hero } from '../Hero'
////import { Features } from '../Features'
//import { Portfolio } from '../Portfolio'
//import { ProjectDetail } from '../Routes/ProjectDetail'
import { Process } from '../Process';
//mport { Footer } from '../Footer'
import { ContactForm } from '../Form/ContactForm'
import { Faq } from '../Faq'
import { FormProvider } from '../Form/FormContext'

import { projects } from '../Routes/projects'
import "../../assets/stylesheets/app.css";
import "../../assets/stylesheets/index.css";
import "../../assets/stylesheets/home.css";

const HomePage = () => {

  // FAQ section background change on scroll
  const faqRef = useRef(null);

  useEffect(() => {

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                faqRef.current.style.backgroundColor = '#1C1953'
            } else {
                faqRef.current.style.backgroundColor = '#635BFF';
            }
        })
    }, options)

    if (faqRef.current) {
        observer.observe(faqRef.current);
    }

    return () => {
        if (faqRef.current) {
            observer.unobserve(faqRef.current);
        }
    }
  }, []);

  return (
    <FormProvider>

      <Routes>
               {/*       
        <Route path='/*' element={<Portfolio />} />
 
        {projects.map((project) => (
          <Route 
              key={project.id}
              path={`/project/${project.id}`}
              render={() => <ProjectDetail project={project} />}
          />
        ))}
          */}
      </Routes>
      <Process />
      <Faq ref={faqRef} />
    </FormProvider>
  )
}

export default HomePage