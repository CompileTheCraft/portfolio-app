import React from 'react';
import codeImg from '../images/code.svg';

function Skills() {
  return (
    <div className="Skills">
      <h1 className="skills-main">Skills and Technologies</h1>
      <div className="lang-1 l1"><img src={codeImg} alt="code" />Javascript</div>
      <div className="lang-1 l2"><img src={codeImg} alt="code" />HTML, CSS</div>
      <div className="lang-1 l3"><img src={codeImg} alt="code" />Node.js</div>
      <div className="lang-1 l4"><img src={codeImg} alt="code" />React.js</div>
      <div className="lang-1 l5"><img src={codeImg} alt="code" />Python</div>
      <div className="lang-1 l6"><img src={codeImg} alt="code" />C#</div>
      <div className="lang-1 l7"><img src={codeImg} alt="code" />C++</div>
      <div className="lang-1 l8"><img src={codeImg} alt="code" />Java</div>
    </div>
  );
}

export default Skills;