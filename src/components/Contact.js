import React from 'react';
import githubImg from '../images/github.svg';
import discordImg from '../images/discord.svg';
import twitterImg from '../images/twitter.svg';
import redditImg from '../images/reddit.svg';

function Contact() {
  return (
    <div className="Contact">
      <h1 className="contact-main">Contact Me!</h1>
      <p className="contact-desc">Hi, you have reached to the end. You can contact me through the social media I have linked, feel free to message me anytime if I could not respond I will reach back to you as soon as possible. You can find me anywhere as <span className="lnd">Heatwave Eli <span className="lnd-d">PERSON</span></span></p>
      <a href="https://github.com/Heatwave-Eli" rel="noreferrer" target="_blank"><img className="github" src={githubImg} alt="github" /></a>
      <a href="https://discord.com/users/778132615307853855" rel="noreferrer" target="_blank"><img className="discord" src={discordImg} alt="discord" /></a>
      <a href="https://twitter.com/HeatwaveEli" rel="noreferrer" target="_blank"><img className="twitter" src={twitterImg} alt="twitter" /></a>
      <a href="https://www.reddit.com/user/Heatwave_Eli" rel="noreferrer" target="_blank"><img className="reddit" src={redditImg} alt="reddit" /></a>
    </div>
  );
}

export default Contact;