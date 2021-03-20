import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>DEV SKILLS</strong>
          <p>
            JavaScript | Jquery | Node js | Express MongoDB | MySQL | Angular.js
            | Angular +2 | ReactJS | Redux | Vue | HTML| CSS | AJAX | Git
            |TypeScript
          </p>
        </div>
        <div>
          <strong>SOFT SKILLS</strong>
          <p>
            Autonomous-learning | Time management |Problem solving | Teamwork |
            Motivation
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
