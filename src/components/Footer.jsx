import React from 'react';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="ft-about-container">
        <h3>About</h3>
        <ul>
          <li>About us</li>
          <li>Bugs</li>
        </ul>
      </div>
      <div className="ft-social-media-container">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/aldo-abisai-luna-rojas-28357321b/" target="_blank">
              <i className='bx bxl-linkedin-square bx-md' ></i>
            </a>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <p>© Aldo Abisai Luna Rojas</p>
    </div>
  );
};

export default Footer;