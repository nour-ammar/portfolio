import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
  <footer className="footer">
   
      <a href="https://www.facebook.com/DwinaTech" target="_blank">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          alt="YouTube-icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/mohammed-dwina-3842b1141/"
        target="_blank"
      >
        <img
          src="https://github.com/DwinaTech/public-images/blob/main/linkedin-icon.png?raw=true"
          alt="LinkIn-icon"
        />
      </a>
  </footer>
  );
}

export default Footer;
