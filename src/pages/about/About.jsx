import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Presentation from '../../components/Presentation/Presentation';
import Avatar from '../../components/Avatar/Avatar';

function About() {
  return (
    <div>
        <Navbar/>
        <Presentation/>
        <Avatar page="about" />
    </div>
  )
}

export default About