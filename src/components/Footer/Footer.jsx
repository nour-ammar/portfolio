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
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt="LinkIn-icon"
        />
      </a>
  </footer>
  );
}

export default Footer;
