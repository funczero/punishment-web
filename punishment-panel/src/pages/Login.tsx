import React from 'react';

const Login: React.FC = () => {
  const handleLogin = () => {
    window.location.href = 'https://humble-fortnight-694j5645q965c5x4x-5000.app.github.dev/auth/login';
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Entrar com Discord</h2>
      <button
        onClick={handleLogin}
        style={{
          padding: '10px 20px',
          backgroundColor: '#7289da',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Login com Discord
      </button>
    </div>
  );
};

export default Login;