import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <nav style={{ width: '20px', background: '#0000', padding: '20px' }}>
      <ul>
        <li><Link to="/">Painel</Link></li>
        <li><Link to="/settings">Configurações</Link></li>
        <li><Link to="/logs">Logs</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;