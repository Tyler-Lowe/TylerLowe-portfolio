import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import KeyboardHeroSS from '../../images/keyboardheross.JPG';
import expressImg from '../../images/expressjs-icon.svg';
import javaScriptImg from '../../images/logo-javascript.svg';
import muiImg from '../../images/material-ui-1.svg';
import nodeImg from '../../images/nodejs-icon.svg';
import postGresImg from '../../images/postgresql.svg';
import reactImg from '../../images/react-2.svg';
import reduxImg from '../../images/redux.svg';
import './Projects.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function Project() {
    return (
        <div>
            <Container maxWidth="lg">
                <h1 class="text-center">Projects</h1>
                <Grid container spacing={6} >
                    <Grid item lg={7} className='' >
                        <div>
                            {/* Have a screen shot of the project that is a link that will take you to the site */}
                            <img class="project-img" src={KeyboardHeroSS} alt='Project Image'></img>
                        </div>
                    </Grid>
                    <Grid item lg={5} className=''>
                        <h2 class="text-center">StickIt</h2>
                        <h4></h4>
                        <p>A fully responsive web application that offers drum set players a curated list of exercises based on their focus areas, goals, and time constraints, eliminating the problem of deciding what to practice. This curated list is called a “Smart Session”</p>
                        <p class="text-center text-bold">Tech used for project</p>
                            <div class="display-flex justify-content-center">
                                <img class="p-l-s icon" src={javaScriptImg} alt="JavaScript" />
                                <img class="p-l-s icon" src={reactImg} alt="React" />
                                <img class="p-l-s icon" src={reduxImg} alt="Redux" />
                                <img class="p-l-s icon" src={nodeImg} alt="Node.js" />
                                <img class="p-l-s icon" src={expressImg} alt="Express" />
                                <img class="p-l-s icon" src={postGresImg} alt="PostgreSQL" />
                                <img class="p-l-s icon" src={muiImg} alt="Material-UI" />
                            </div>       
                        <div class="display-flex text-center justify-content-center m-t-lg">
                            <button class="m-r-lg project-btn">Visit Site</button>
                            <button class="m-l-lg project-btn">Source Code</button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Project;
