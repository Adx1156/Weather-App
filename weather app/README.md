# Weather App

A responsive weather application built using HTML, CSS, and JavaScript. It fetches real-time weather information using an API and displays weather conditions for searched cities.

## Features

- Search weather by city name.
- Real-time weather data.
- Temperature display in Celsius.
- Humidity information.
- Wind speed in km/h.
- Dynamic weather icons based on weather conditions.
- Loading and error handling.
- Responsive user interface.
- Search using Enter key or search button.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- Async/Await
- Cloudflare Workers
- OpenWeatherMap API

## API Architecture

The application uses a Cloudflare Worker as a backend proxy to communicate with the OpenWeatherMap API.

The API key is stored securely as a Cloudflare environment secret rather than being exposed in frontend JavaScript.

## Getting Started

1. Clone this repository.
2. Open the project folder.
3. Launch `index.html` in your browser.

## Project Structure

```text
Weather-App/
│
├── index.html
├── style.css
├── app.js
│
└── assets/
    ├── humidity.png
    ├── wind.png
    ├── clear.png
    ├── clouds.png
    ├── rain.png
    ├── snow.png
    └── mist.png
```

## Author

Adnan Behlim

