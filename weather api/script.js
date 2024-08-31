async function getWeather() {
    const apiKey = '16fdd839b6cc365ac6b3398620eb8607'; // Replace with your API key
    const city = document.getElementById('city').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    
    if (response.ok) {
        const data = await response.json();
        displayWeather(data);
    } else {
        alert('City not found');
    }
}

function displayWeather(data) {
    const weatherDataDiv = document.getElementById('weather-data');
    weatherDataDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}