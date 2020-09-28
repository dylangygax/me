import React from 'react';
import './App.css';

import Grid from './components/Grid'

//Header
//About Me
//My Projects
//Contact

const projects = [
    {
        title: 'RCT Island',
        image: 'https://i.imgur.com/zL3xzIh.png',
        story: 'bottom text',
        link: 'https://github.com/dylangygax/rct-forum-api'
    },
    {
        title: 'Bander',
        image: 'https://i.imgur.com/bQd23Ev.png',
        story: 'bottom text',
        link: 'https://github.com/dylangygax/bander-api'
    },
    {
        title: 'The Table',
        image: 'https://i.imgur.com/2a0p63v.png',
        story: 'bottom text',
        link: 'http://thetabletopsessions.herokuapp.com/'
    },
    {
        title: 'Penguin Poker',
        image: 'https://i.imgur.com/ZajqI6P.png',
        story: 'bottom text',
        link: 'https://dylangygax.github.io/poker/'
    },
]

function App() {
  return (
    <div>
        <h1>Dylan Gygax</h1>
        <img src='https://avatars1.githubusercontent.com/u/67247993?s=400&u=15af18a7900dc87742718c025f9a805bd5b76cd1&v=4' className='profilePic' alt=''/>
        <h2>Software Engineer</h2>
        <p className='statement'>Software engineer with a passion for tackling large projects from their most abstract concepts to their tiniest details. A background in teaching helps me to be a clear communicator and I am laser focused on creating the best experience for both collaborators and end users.</p>
        <h3>My Projects</h3>
        <Grid content={projects}/>
        <h3>Contact</h3>
        <p>Email me at Dylan.Gygax@ncf.edu</p>
        <a href='https://www.linkedin.com/in/dylan-gygax/'>LinkedIn</a><br />
        <a href='https://github.com/dylangygax'>Github</a><br /> 
    </div>
  )
}

export default App;
