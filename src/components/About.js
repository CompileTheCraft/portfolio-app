import React from 'react';
import aboutImage from '../images/coder image.png';

function About() {
  return (
    <div className="About">
      <img className="about-image" src={aboutImage} alt="gallery" />
      <h1 className="about-main">Hi, I am Heatwave. <br /> I love to build amazing apps, games, bots, AI.</h1>
      <p className="about-desc">Hi, I am Heatwave Eli, but my real name is <span className="my-name">Ramcharan <span className="in-1">PERSON</span></span>. I am a 14 year old <span className="duty-1">Student <span className="in-5">NOUN</span></span>, <span className="duty-2">FullStack Web Developer <span className="in-2">SKILL</span></span>, <br /> <span className="duty-3">Discord Bot Developer <span className="in-3">SKILL</span></span>, <span className="duty-4">Game Developer <span className="in-4">SKILL</span></span>. I study and live in Hyderabad in India. I enjoy playing, coding with my friends such as<span className="justname">JUSTMRBHD <span className="in-6">PERSON</span></span>. <br /> If you want to contact me, I'll link my social media at the bottom of the page.</p>
      <a className="wt-wwm" rel="noreferrer" href="https://discord.com/users/778132615307853855">Work With Me</a>
      <a className="wt-smp" rel="noreferrer" href="https://github.com/Heatwave-Eli?tab=repositories">See My Past Work</a>
    </div>
  );
}

export default About;