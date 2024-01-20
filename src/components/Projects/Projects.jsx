import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import StickItSS from '../../images/stick-it-session-2.png';
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
    // Image overlay functionality

    const [show, setShow] = useState(false);

    const showOverlay = () => {
        setShow(true);
    };

    const hideOverlay = () => {
        setShow(false);
    }


    return (
        <div>
            <Container maxWidth="lg">
                <h1 id='projects' class="text-center page-section m-t-lg m-b-n p-b-n">Projects</h1>
                <Grid container spacing={6} sx={{marginBottom: '5rem', alignItems: 'center', marginTop: '1rem'}} className='page-section p-t-n' >
                    <Grid item lg={7} className='' >
                        <div className='project-container' >
                            {/* Have a screen shot of the project that is a link that will take you to the site */}
                            <div className='project-img-container project-img-container-bs' onMouseOver={showOverlay} onMouseLeave={hideOverlay}>
                                <img class="project-img" src={StickItSS} alt='Project Image'></img>
                                {show && (
                                    <a href="https://stickit-b5a16042fa87.herokuapp.com/#/login" target='_blank'>
                                    <div className="overlay">
                                        <h2>Visit StickIt</h2>
                                    </div>
                                    </a>
                                )}
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={5} className='p-t-n'>
                        <h2 class="text-center m-t-n">StickIt</h2>
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
            <hr />
        
            <Container maxWidth="lg">
                <Grid container spacing={6} sx={{marginBottom: '5rem', marginTop: '5rem', alignItems: 'center'}}  >
                    <Grid item lg={5} className=''>
                    <div className='project-border'>
                        <h2 class="text-center m-t-n">StickIt</h2>
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
                    </div>
                    </Grid>
                    <Grid item lg={7} className='' >
                        <div className='project-container' >
                            {/* Have a screen shot of the project that is a link that will take you to the site */}
                            <div className='project-img-container project-img-container-bs' onMouseOver={showOverlay} onMouseLeave={hideOverlay}>
                                <img class="project-img" src={StickItSS} alt='Project Image'></img>
                                {show && (
                                    <a href="#" target='_blank'>
                                    <div className="overlay">
                                        <h2>Visit StickIt</h2>
                                    </div>
                                    </a>
                                )}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            
            
        </div>
    );
}

export default Project;
