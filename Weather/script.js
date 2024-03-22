const key = "2e27e79776511fd1ec0fd1dd3859248e";
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key};

function dataOnScreen(data) {
    document.getElementById('city-name').innerHTML = data.name;
    document.getElementById('celsius').innerHTML = Math.floor(data.main.temp) + "°C";
    document.getElementById('clouds').innerHTML = data.weather[0].description;
    document.getElementById('humidity').innerHTML = data.main.humidity + "%";
    document.getElementById('img-cloud').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function citySearch(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).then( result => result.json());
    console.log(data);
    dataOnScreen(data);

}

function clickButtonSearch() {
    const city = document.getElementById('input-name').value;
    citySearch(city);
}
