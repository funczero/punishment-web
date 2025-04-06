import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <nav style={{ width: '200px', background: '#f4f4f4', padding: '20px' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
            Painel
          </Link>
        </li>
        <li>
          <Link to="/settings" style={{ textDecoration: 'none', color: '#333' }}>
            Configurações
          </Link>
        </li>
        <li>
          <Link to="/logs" style={{ textDecoration: 'none', color: '#333' }}>
            Logs
          </Link>
        </li>
        <li>
          <Link to="/login" style={{ textDecoration: 'none', color: '#333' }}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;