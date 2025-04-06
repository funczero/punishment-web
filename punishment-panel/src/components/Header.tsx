import React from 'react';
import '../index.css';

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: '#2C2F33', padding: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src="/logo-bot.png"
          alt="Logo do Bot"
          style={{ width: '40px', height: '40px', marginRight: '6px' }}
        />
        <h1 style={{ color: '#fe3838', margin: 0 }}>Punishment</h1>
      </div>
    </header>
  );
};

export default Header;