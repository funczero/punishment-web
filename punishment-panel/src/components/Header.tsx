import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header: React.FC = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#23272A' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.png"
            alt="Logo do Bot"
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
          <Typography variant="h6" component="div" style={{ color: '#FE3838' }}>
            Punishment
          </Typography>
        </div>
        <Button color="inherit" href="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;