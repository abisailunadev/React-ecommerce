import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import rocket_icon from '../images/rocket_icon.png'

const NavBar = () => {

  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav-icon" onClick={() => navigate('/')}>
        <p><i class='bx bxl-etsy bx-lg'></i></p>
      </div>
      <div className="nav-search-bar">
        <input type="text" />
      </div>
      <div className="nav-options">
        <ul>
          <li onClick={() => navigate('/login')}><i className='bx bxs-user bx-xs'></i></li>
          <li onClick={() => navigate('/purchases')}><i className='bx bxs-basket' ></i></li>
          <li><i className='bx bxs-cart' ></i></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;