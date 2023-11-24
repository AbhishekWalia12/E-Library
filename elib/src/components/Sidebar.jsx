import React from 'react';
import './Sidebar.css';
import Picture5 from '../images/Picture5.png';
import Picture4 from '../images/Picture4.png';
import Picture6 from '../images/Picture6.png';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active-link' : ''}>
        <div className="sidebar-item">
          <img src={Picture4} alt="Dashboard Icon" />
          <span>Dashboard</span>
        </div>
      </Link>
      <Link to="/surf-ebooks" className={location.pathname === '/surf-ebooks' ? 'active-link' : ''}>
        <div className="sidebar-item">
          <img src={Picture5} alt="Surf E-Books Icon" />
          <span>Surf E-Books</span>
        </div>
      </Link>
      <Link to="/take-quiz" className={location.pathname === '/take-quiz' ? 'active-link' : ''}>
        <div className="sidebar-item">
          <img src={Picture6} alt="TakeQuiz Icon" />
          <span>TakeQuiz</span>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
