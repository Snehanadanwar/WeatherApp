const apiKey = "9cabce103cd2c9e8daf84ee544d8f7fa";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={germany}&appid=&units=metric";


// const searchBox = document.getElementById("CityName");
async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    // Send a request to the API, wait for the response, convert the response to JSON, and save that in the data variable.
    const data = await response.json();

    console.log(data);

    // document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    // document.querySelector(".City_Name").innerHTML = data.name;
    // document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    // document.querySelector(".Wind_speed").innerHTML = data.wind.speed + "km/h";
    
}
checkWeather();  //whenever the page will load it will display the data 