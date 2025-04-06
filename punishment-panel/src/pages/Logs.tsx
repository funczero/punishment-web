import React from 'react';

const logs = [
  { id: 1, message: 'Bot iniciado', timestamp: '2025-04-06 10:00' },
  { id: 2, message: 'Comando executado: !ban', timestamp: '2025-04-06 10:05' },
  { id: 3, message: 'Usuário adicionado: João', timestamp: '2025-04-06 10:10' },
];

const Logs: React.FC = () => {
  return (
    <div>
      <h2>Logs</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            <strong>{log.timestamp}</strong>: {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Logs;