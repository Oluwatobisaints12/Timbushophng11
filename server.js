const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.get('/api/products', async (req, res) => {
  try {
    const apiResponse = await axios.get('https://api.timbu.cloud/products', {
      params: {
        organization_id: 'd0e2b4cd873540e781cae4c4ef349630',
        reverse_sort: false,
        size: 10,
        Appid: '94JLTEGLSGZCLG4',
        Apikey: '0f84fd5ed41b4a1dbb3a22d6cee531ab20240712161729487017',
      },
    });
    res.json(apiResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Timbu API' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
