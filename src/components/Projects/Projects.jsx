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
                <Grid container spacing={6} sx={{justifyContent: 'space-between'}} >
                    <Grid item lg={7} className='' >
                        <div>
                            {/* Have a screen shot of the project that is a link that will take you to the site */}
                            <img src={KeyboardHeroSS}></img>
                        </div>
                    </Grid>
                    <Grid item lg={5} className=''>
                        <h2 class="text-center">StickIt</h2>
                        <h4></h4>
                        <p>A fully responsive web application that offers drum set players a curated list of exercises based on their focus areas, goals, and time constraints, eliminating the problem of deciding what to practice. This curated list is called a “Smart Session”</p>
                        <p>Tech used for project?</p>
                        
                        <Grid sx={{display: 'flex'}} item lg={1}>        
                            <img class="p-l-s" src={javaScriptImg} alt="JavaScript" />
                            <img class="p-l-s" src={reactImg} alt="React" />
                            <img class="p-l-s" src={reduxImg} alt="Redux" />
                            <img class="p-l-s" src={nodeImg} alt="Node.js" />
                            <img class="p-l-s" src={expressImg} alt="Express" />
                            <img class="p-l-s" src={postGresImg} alt="PostgreSQL" />
                            <img class="p-l-s" src={muiImg} alt="Material-UI" />
                        </Grid>
                       


                        <button>Visit Site</button><button>Source Code?</button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Project;
