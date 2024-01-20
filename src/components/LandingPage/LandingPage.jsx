import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import initialLg from '../../images/initial-lg.svg';
import GitHubIcon2 from '../../images/github2.svg';
import LinkedInIcon from '../../images/linkedin.svg';
import ResumeIcon from '../../images/resume-icon.svg';
import EmailIcon from '../../images/email-icon.svg';
import  Button  from '@mui/material/Button';
import Resume from '../../images/TylerLowe_ResumeTemp.pdf';
import './LandingPage.css';
import Project from '../Projects/Projects';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import AboutSection from '../AboutSection/AboutSection';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');


  return (
    <>
    <div className='main-section-container bg-black'>
      <Box class="text-white bg-initial" sx={{ height: '100vh' }}>
        <Grid container >
          <Grid item lg={8} className='display-flex justify-content-center' >
            <div class="hero-info">
              <h1 class="text-white m-t-n name-text m-b-n">Tyler Lowe</h1>
              <h4 class="m-b-n m-t-n">Full-Stack Software Engineer</h4>
              <div>
                <button class="hero-button">About Me</button>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} className='align-content-right display-flex justify-content-end p-r-lg'>
            <Grid container lg={1} className='display-flex'>
              <div className='hero-icons'>
              <a href="https://github.com/Tyler-Lowe" target='_blank'>
                <img class="p-b-m" src={GitHubIcon2} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/tyleralowe/" target='_blank'>
                <img className='p-b-m' src={LinkedInIcon} alt="" />
              </a>
              <a href="mailto:tyler.a.lowe@gmail.com" target='_blank'>
                <img class="p-b-m" src={EmailIcon} alt="" />         
              </a>
              <a href="../../images/TylerLowe_ResumeTemp.pdf" download={"TylerLowe_Resume"}>
                <img class="p-b-m" src={ResumeIcon} alt="Resume" />
              </a>
              </div>

            </Grid>
          </Grid>
        </Grid>
      </Box>
      </div>
      <div>
      <Project />
      <AboutSection />
    </div>
    </>
  );
}

export default LandingPage;
