import React, { useState } from 'react';
import Container from '@mui/material/Container';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');


  return (
    // need to use mui grid to side by side divs. also need a container on that for the background image. 
    <div class="text-white">
      <h1 class="text-white m-t-n">Tyler Lowe</h1>
      <h4 class="m-b-n">Full-Stack Software Engineer</h4>
      <button>About Me</button>
    </div>
  );
}

export default LandingPage;
