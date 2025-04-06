import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Guild {
  id: string;
  name: string;
  icon: string | null;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [guilds, setGuilds] = useState<Guild[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    
    axios
      .get('https://humble-fortnight-694j5645q965c5x4x-5000.app.github.dev/auth/user', { withCredentials: true })
      .then((response) => {
        setUser(response.data.user);
        setGuilds(response.data.guilds);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados do usuário:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: '20px' }}>Carregando...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      {user ? (
        <div>
          <h2>Bem-vindo, {user.username}!</h2>
          <h3>Servidores:</h3>
          <ul>
            {guilds.map((guild) => (
              <li key={guild.id}>
                {guild.icon ? (
                  <img
                    src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                    alt={guild.name}
                    style={{ width: '30px', marginRight: '10px' }}
                  />
                ) : (
                  <span style={{ marginRight: '10px' }}>🔸</span>
                )}
                {guild.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Você não está autenticado.</h2>
          <a href="https://humble-fortnight-694j5645q965c5x4x-5000.app.github.dev/auth/login">
            Clique aqui para fazer login
          </a>
        </div>
      )}
    </div>
  );
};

export default Dashboard;