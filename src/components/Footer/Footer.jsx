import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
  <footer className="footer">
   
      <a href="https://github.com/nour-ammar" target="_blank">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          alt="Github-icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/noor-ammar-9a74531b6/"
        target="_blank"
      >
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/1384/1384014.svg?token=exp=1616234625~hmac=b5cad7eefcf67c936fa4e520fabef657"
          alt="LinkIn-icon"
        />
      </a>
  </footer>
  );
}

export default Footer;
