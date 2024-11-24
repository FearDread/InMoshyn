import React, { useRef, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Features } from '../Features'
import  Portfolio  from '../Portfolio'
import { Process } from '../Process';
import { ContactForm } from '../Form/ContactForm'
import { Faq } from '../Faq'
import { FormProvider } from '../Form/FormContext'
import { projects } from '../Routes/projects'
import ProjectDetail from "../Routes/ProjectDetail";
import "../../assets/stylesheets/app.css";
import "../../assets/stylesheets/index.css";
import "../../assets/stylesheets/home.css";

const HomePage = ({darkMode}) => {

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
      <Features />
      <Portfolio />
      <Process />
      <Faq ref={faqRef} />
    </FormProvider>
  )
}

export default HomePage