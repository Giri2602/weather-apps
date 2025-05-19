require('dotenv').config(); // ⬅️ Add this at the very top
const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weather');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', weatherRoutes);

app.listen(5000, () => {
  console.log('🚀 Backend running at http://localhost:5000');
  console.log('🔑 API Key Loaded:', process.env.WEATHER_API_KEY); // ⬅️ Confirm it's printed
});
