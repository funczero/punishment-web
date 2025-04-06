import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [prefix, setPrefix] = useState('!');
  const [token, setToken] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ prefix, token });
    alert('Configurações salvas!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <label>
        Prefixo:
        <input
          type="text"
          value={prefix}
          onChange={(e) => setPrefix(e.target.value)}
          style={{ padding: '5px' }}
        />
      </label>
      <label>
        Token:
        <input
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          style={{ padding: '5px' }}
        />
      </label>
      <button type="submit" style={{ padding: '10px', backgroundColor: '#fe3838', color: '#fff', border: 'none' }}>
        Salvar
      </button>
    </form>
  );
};

export default Settings;