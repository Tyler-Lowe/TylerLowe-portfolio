import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './AboutSection.css';



function AboutSection() {
    return (
        <div class="bg-black page-section">
            <Container maxWidth="lg">
                <h1 class="text-center text-white">About Me</h1>
                <Grid container  sx={{ boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)', justifyContent: 'center' }}>
                    {/* <Box sx={{ boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)', display: 'flex' }}> */}
                    <Grid item lg={6} sx={{backgroundColor: '#ECECEC'}} >
                        <div class="bg-text-container">
                            <p class='bg-text'>About</p>
                        </div>
                        <div class="about-text">
                            <h2 class=''>About me</h2>
                            <p>Full-Stack Software Engineer</p>
                            <p>Hey! I'm a Software Engineer with a knack for building cool stuff. I've got a background in Mechanical Engineering and I'm currently wrapping up my Computer Science degree. But the real game changer was diving into a Full Stack Coding Bootcamp. It's there I discovered my love for turning lines of code into something amazing. <br /> <br />
                            In the world of web development, I've delved into everything from crafting sleek user interfaces to engineering complex backend systems. One of my standout projects involved using APIs to enhance how users interact with content, combining React.js, Node.js, and my creative problem-solving skills. This project was more than just coding; it was about weaving together data, functionality, and user experience to create something truly impactful.<br /><br />
                            When I'm not coding, you'll find me outdoors - camping, fishing, or just taking in the fresh air. And of course, I'm always up for a gaming session to unwind and get inspired.
                            So, that's me – a developer with a love for both tech and nature, always eager to take on the next tech challenge. Let's connect and create something awesome!</p>
                        </div>
                    </Grid>
                    <Grid className='bg-black bg-text-container-z bg-text-container' item lg={6}>
                        <div class="about-text">
                            <h2 class='text-white'>Talking Points</h2>
                            <ul class='text-white clean-list'>
                                <li>2 Years of Professional Software Development Experience</li>
                                <li>Bachelor of Science in Computer Science - Southern New Hampshire University</li>
                                <li>Full-Stack Software Engineering 28 Week Bootcamp - Prime Digital Academy </li>
                                <li>Bachelor of Science in Mechanical Engineering - Tennessee Tech University</li>
                                <li>United States Army Veteran</li>
                            </ul>
                        </div>
                        <div class="">
                            <p class='bg-text-bottom overflow-hidden'>Contact</p>
                        </div>
                    </Grid>
                    {/* </Box> */}
                </Grid>
            </Container>
        </div>
    );
}

export default AboutSection;
