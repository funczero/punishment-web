import React, { useState, useEffect } from 'react';

const Dashboard: React.FC = () => {
  const [botName, setBotName] = useState('Carregando...');
  const [stats, setStats] = useState({
    users: 0,
    servers: 0,
    commandsExecuted: 0,
  });

  useEffect(() => {
    // Simula uma "chamada de API" com setTimeout
    setTimeout(() => {
      setBotName('Punishment');
      setStats({
        users: 1234,
        servers: 56,
        commandsExecuted: 12345,
      });
    }, 1000); // 1 segundo de atraso
  }, []);

  return (
    <div style={{ padding: '200px' }}>
      <h2>Bem-vindo ao Painel do {botName}!</h2>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <div style={{ background: '#2C2F33', color: '#fff', padding: '20px', borderRadius: '8px' }}>
          <h3>Usuários</h3>
          <p>{stats.users}</p>
        </div>
        <div style={{ background: '#2C2F33', color: '#fff', padding: '20px', borderRadius: '8px' }}>
          <h3>Servidores</h3>
          <p>{stats.servers}</p>
        </div>
        <div style={{ background: '#2C2F33', color: '#fff', padding: '20px', borderRadius: '8px' }}>
          <h3>Comandos Executados</h3>
          <p>{stats.commandsExecuted}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;