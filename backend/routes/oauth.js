const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


app.get('/oauth', (req, res) => {
  const redirectUri = `https://zoom.us/oauth/authorize?response_type=code&client_id=${process.env.ZOOM_CLIENT_ID}&redirect_uri=${process.env.ZOOM_REDIRECT_URI}`;
  res.redirect(redirectUri);
});


app.get('/oauth/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const response = await axios.post('https://zoom.us/oauth/token', null, {
      params: {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.ZOOM_REDIRECT_URI,
      },
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.ZOOM_CLIENT_ID + ':' + process.env.ZOOM_CLIENT_SECRET).toString('base64')}`,
      },
    });

    const { access_token, refresh_token } = response.data;


    res.json({ access_token, refresh_token });
  } catch (err) {
    console.error('Error exchanging code for token', err);
    res.status(500).send('Error during Zoom OAuth callback');
  }
});

module.exports=app;