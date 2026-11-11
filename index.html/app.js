const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search i");
const weatherContent = document.querySelector(".weather");



let getdata = async (city) => {


    
  try {
    const apiUrl = `https://weather-api.adnanbehlim014.workers.dev/?city=${encodeURIComponent(city)}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("City not found or API request failed!");
    }

    var data = await response.json();


    const weather = document.createElement("div");

  weather.classList.add("weather-content");

  weather.innerHTML = `

        <div class="tempreture">
            <h1 class="temp">${data.main.temp}°C</h1>
            <h2 class="city">${data.name}</h2>
        </div>

        <div class="humidity-wind">

            <div class="humidity-content">

                <div class="img-box2">
                    <img src="assets/humidity.png">
                </div>

                <div class="humidity-inner">
                    <h3 class="humidity">${Math.round(data.main.humidity)}%</h3>
                    <h4 class="humidity-name">humidity</h4>
                </div>

            </div>

            <div class="wind-content">

                <div class="img-box2">
                    <img src="assets/wind.png">
                </div>

                <div class="wind-inner">
                    <h3 class="humidity wind">${(data.wind.speed * 3.6).toFixed(1)} km/h</h3>
                    <h4 class="wind-name">Wind Speed</h4>
                </div>

            </div>

        </div>

    `;

  const oldWeather = weatherContent.querySelector(".weather-content");

  if (oldWeather) {
    oldWeather.remove();
  }

  weatherContent.appendChild(weather);

  if (data.weather[0].main === "Haze") {
    document.querySelector(".weather-img img").src = "assets/mist.png";
  } else if (data.weather[0].main === "Clear") {
    document.querySelector(".weather-img img").src = "assets/clear.png";
  } else if (data.weather[0].main === "Clouds") {
    document.querySelector(".weather-img img").src = "assets/clouds.png";
  } else if (data.weather[0].main === "Rain") {
    document.querySelector(".weather-img img").src = "assets/rain.png";
  } else if (data.weather[0].main === "Snow") {
    document.querySelector(".weather-img img").src = "assets/snow.png";
  }

    console.log(data);
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
};

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  getdata(searchBox.value.trim());
});

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    getdata(searchBox.value.trim());
  }
});

getdata("mumbai");
