import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Home.css"


function Home() {
  return (
    
    <div className="home">
    <div className="title">
      <h1>
        <p className='home-title'>Hi,</p>
        <p className='home-title'>I am Nour Ammar</p>
        <p className='home-title'>Full Stack Javascript Developer</p>
      </h1>
      <Link to="about">
        <button>More Info</button>
      </Link>
    </div>
    <div className="person">
      <img
        src={`${process.env.PUBLIC_URL}/noor.jpg`}
        alt="person picture"
      />
    </div>
  </div>
    
  );
  ;
}

export default Home;