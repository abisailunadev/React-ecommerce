import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import rocket_icon from '../images/rocket_icon.png'

const NavBar = () => {

  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav-icon" onClick={() => navigate('/')}>
        <img src={rocket_icon} alt="" />
        <p>E-Commerce</p>
      </div>
      <div className="nav-search-bar">
        <input type="text" />
      </div>
      <div className="nav-options">
        <ul>
          <li onClick={() => navigate('/login')}>Login</li>
          <li onClick={() => navigate('/purchases')}>Purchases</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;