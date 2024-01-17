const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';

const apiKey = '1e6454b2409facf852490a5dde6fbc35'; // Replace with your OpenWeatherMap API key


async function getWeather(city) {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();

    const cityName = data.name;

    const temp = data.main.temp;
    document.getElementById('temp').textContent = temp;

    const tempCelsius = temp - 273.15; 
    document.getElementById('temp').textContent = tempCelsius.toFixed(1) + ' °C';

    const humidity = data.main.humidity;
    document.getElementById('humidity').textContent = humidity+ '%';

    const windSpeed = data.wind.speed;
    document.getElementById('wind-speed').textContent = windSpeed;
    document.getElementById('wind-speed').textContent = windSpeed + ' km/h';

    const pressure = data.main.pressure; 
    document.getElementById('pressure').textContent = pressure;
    document.getElementById('pressure').textContent = pressure + ' hPa';

    const visibility = data.visibility; 
    document.getElementById('visibility').textContent = visibility / 1000; 
    document.getElementById('visibility').textContent = visibility / 1000 + ' km';

    const sunrise = new Date(data.sys.sunrise * 1000);
    document.getElementById('sunrise').textContent = sunrise.toLocaleTimeString();

    const sunset = new Date(data.sys.sunset * 1000); 
    document.getElementById('sunset').textContent = sunset.toLocaleTimeString();

    document.getElementById('cityName').textContent = `Weather of ${cityName}`;
    document.getElementById('defaultCity').textContent = cityName;

    
    
    






    // Display other weather data as needed
    // e.g., document.getElementById('humidity').textContent = data.main.humidity;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    // Handle the error gracefully, e.g., display an error message to the user
  }
}
function searchWeather(event) {
    event.preventDefault(); // Prevent form submission
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value.trim();

    if (cityName) {
        getWeather(cityName);
    } else {
        // Handle empty input case
        console.error('City name cannot be empty.');
    }
}