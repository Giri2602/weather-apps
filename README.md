🌤️ Weather Web Application - Internship Submission
This is a full-stack weather application built as part of the Web Development Internship – Coding Round. 
It provides real-time weather data using the OpenWeatherMap API and allows users to search cities, view weather conditions, and track search history.

🚀 Features
- 📍 Current location weather using Geolocation
- 🔍 Search weather by city name
- 💾 Search history stored and displayed
- 🗺️ Weather details shown on a separate page
- 🧾 About page with tech stack and info
- 💅 Responsive UI with custom plain CSS
🧱 Tech Stack
Frontend: Next.js (React-based)
Backend: Node.js with Express.js
API: OpenWeatherMap
Styling: Custom CSS (no frameworks)
Deployment: Vercel (frontend) + Railway (backend)

📂 Folder Structure

weather-app/
├── backend/
│   ├── routes/
│   ├── data/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── pages/
│   ├── styles/
│   ├── public/
│   └── package.json
├── README.md
└── .gitignore

📦 Setup Instructions

1. Clone the Repository
2. Setup Backend
   - Run `npm install`
   - Add `.env` with your API key
   - Run `node server.js`
3. Setup Frontend
   - Run `npm install`
   - Run `npm run dev`
     
📄 Pages Overview
Home: `/` - Search & current location weather
History: `/history` - Shows previous city searches
Details: `/details?city=XYZ` - Shows weather details
About: `/about` - Describes the project and stack

🌐 API Reference
Base URL: https://api.openweathermap.org/data/2.5/weather
Parameters: q (city), lat/lon, appid, units=metric

🔒 Environment Variables
.env file in backend:
WEATHER_API_KEY=your_openweathermap_api_key
