import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import initialLg from '../../images/initial-lg.svg';
import GitHubIcon2 from '../../images/github2.svg';
import LinkedInIcon from '../../images/linkedin.svg';
import './LandingPage.css';
import Project from '../Projects/Projects';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import AboutSection from '../AboutSection/AboutSection';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');


  return (
    <div>
      <Box class="text-white bg-initial bg-black" sx={{ height: '100vh' }}>
        <Grid container >
          <Grid item lg={8} className='display-flex justify-content-center' >
            <div class="hero-info">
              <h1 class="text-white m-t-n name-text m-b-n">Tyler Lowe</h1>
              <h4 class="m-b-n m-t-n">Full-Stack Software Engineer</h4>
              <button class="hero-button">About Me</button>
            </div>
          </Grid>
          <Grid item lg={4} className='align-content-right display-flex justify-content-end p-r-lg'>
            <Grid container lg={1} className='display-flex'>
              <img class="p-r-lg" src={GitHubIcon2} alt="" />
              <img src={LinkedInIcon} alt="" />
              <img class="p-r-lg" src={GitHubIcon2} alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Project />
      <AboutSection />
      <Project />
    </div>
  );
}

export default LandingPage;
