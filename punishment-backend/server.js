require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const axios = require('axios');

const app = express();

app.use(cors({ origin: 'https://humble-fortnight-694j5645q965c5x4x-3000.app.github.dev', credentials: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 },
  })
);

const DISCORD_API = 'https://discord.com/api';

app.get('/auth/login', (req, res) => {
  const params = new URLSearchParams({
    client_id: process.env.DISCORD_CLIENT_ID,
    redirect_uri: process.env.DISCORD_REDIRECT_URI,
    response_type: 'code',
    scope: 'identify guilds',
  });

  console.log('Redirecionando para o Discord OAuth2...');
  console.log('URL de redirecionamento:', `${DISCORD_API}/oauth2/authorize?${params.toString()}`);
  res.redirect(`${DISCORD_API}/oauth2/authorize?${params.toString()}`);
});

app.get('/auth/redirect', async (req, res) => {
  const { code } = req.query;

  if (!code) {
    console.error('Código de autorização ausente');
    return res.status(400).send('Código de autorização ausente');
  }

  console.log('Código de autorização recebido:', code);

  try {

    const tokenResponse = await axios.post(
      `${DISCORD_API}/oauth2/token`,
      new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.DISCORD_REDIRECT_URI,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const { access_token } = tokenResponse.data;
    console.log('Token de acesso recebido:', access_token);

    const userResponse = await axios.get(`${DISCORD_API}/users/@me`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const guildsResponse = await axios.get(`${DISCORD_API}/users/@me/guilds`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    req.session.user = userResponse.data;
    req.session.guilds = guildsResponse.data;

    console.log('Usuário autenticado:', userResponse.data);
    console.log('Servidores:', guildsResponse.data);

    res.redirect('https://humble-fortnight-694j5645q965c5x4x-3000.app.github.dev/dashboard');
  } catch (error) {
    console.error('Erro ao autenticar com o Discord:', error.response?.data || error.message);
    res.status(500).send('Erro ao autenticar com o Discord');
  }
});

app.get('/auth/user', (req, res) => {
  console.log('Rota /auth/user acessada');
  if (req.session.user && req.session.guilds) {
    console.log('Sessão do usuário:', req.session.user);
    console.log('Sessão dos servidores:', req.session.guilds);

    res.json({
      user: req.session.user,
      guilds: req.session.guilds,
    });
  } else {
    console.error('Usuário não autenticado ou sessão expirada');
    res.status(401).send('Usuário não autenticado ou sessão expirada');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});