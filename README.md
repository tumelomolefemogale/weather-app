# Weather App

A Node.js weather app that fetches real-time weather data and displays it with an animated Three.js background.

## Features

- Search weather by city
- Displays temperature, description, and weather icon
- Animated 3D background with clouds, rain, snow, and lightning

## Tech Stack

- **Node.js / Express** — server
- **EJS** — templating
- **Axios** — API requests
- **Three.js** — 3D background animation
- **OpenWeatherMap API** — weather data

## Project Structure
```
weather-app/
├── public/
│   ├── styles.css
│   └── weather3d.js
├── views/
│   └── index.ejs
├── .env
├── app.js
└── package.json
```

## Getting Started

1. Clone the repo
```bash
   git clone https://github.com/tumelomolefemogale/weather-app.git
   cd weather-app
```

2. Install dependencies
```bash
   npm install
```

3. Add your API key in a `.env` file
```
   API_KEY=your_openweathermap_api_key
```

4. Run the app
```bash
   node app.js
```

5. Open `http://localhost:3000`

## API Key

Get a free key at [openweathermap.org](https://openweathermap.org/api).

## Credits

Three.js weather background assisted by [Claude](https://claude.ai) (Anthropic).
