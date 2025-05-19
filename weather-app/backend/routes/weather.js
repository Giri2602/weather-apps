const express = require('express');
const axios = require('axios');
const fs = require('fs');
const router = express.Router();

const API_KEY = process.env.WEATHER_API_KEY;

// GET /api/weather?city=XYZ
router.get('/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.WEATHER_API_KEY;
  console.log('🔍 Search requested for city:', city);
  console.log('🌐 Using API Key:', apiKey);

  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    res.json(data);
  } catch (err) {
    console.error('❌ City Weather API Error:', err.response?.data || err.message);
    res.status(500).json({ error: err.response?.data || err.message });
  }
});


// GET /api/weather/current?lat=xx&lon=yy
router.get('/weather/current', async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );
    res.json(data);
  } catch (err) {
    console.error('❌ Weather API Error:', err.response?.data || err.message);
    res.status(500).json({ error: err.response?.data || err.message });
  }
});


// POST /api/search
router.post('/search', (req, res) => {
  const { city } = req.body;
  let searches = [];
  if (fs.existsSync('./data/searches.json')) {
    searches = JSON.parse(fs.readFileSync('./data/searches.json'));
  }
  if (!searches.includes(city)) {
    searches.push(city);
    fs.writeFileSync('./data/searches.json', JSON.stringify(searches));
  }
  res.json({ status: 'ok' });
});

// GET /api/searches
router.get('/searches', (req, res) => {
  if (fs.existsSync('./data/searches.json')) {
    const searches = JSON.parse(fs.readFileSync('./data/searches.json'));
    res.json(searches);
  } else {
    res.json([]);
  }
});

module.exports = router;
