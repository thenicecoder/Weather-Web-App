var iconElement = document.querySelector('.icon');
const temperatureElement = document.querySelector('.temperature');
const placeElement = document.querySelector('.place');
const discriptionElement = document.querySelector('.discription');
const dateElement = document.querySelector('.date');
const findElement = document.querySelector('.find');
var image = document.getElementById('icon');


const weather = {};

weather.temperature = {
    unit: 'celsius'
}

const api = {
    url: 'http://api.openweathermap.org/data/2.5/',
    key: "2c8779992d2940912c2eabac95ae7f3a",
}


findElement.addEventListener('keypress', setQuery);


function setQuery(e) {
    if (e.keyCode == 13) {
        getResults(findElement.value);
        console.log(findElement.value);

    };
}

function getResults(query) {

    //fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
    //fetch('api.openweathermap.org/data/2.5/weather?q=London&appid=${api.key}')
    fetch(`${api.url}weather?q=${query}&appid=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults)
}

function displayResults(weather) {
    console.log(weather);
    placeElement.innerText = `${weather.name}`;
    let now = new Date();

    discriptionElement.innerText = `${weather.weather[0].main}`
        //iconElement.innerHTML = `< img src = 'assets/${weather.weather[0].icon}.png' > `;
        // iconElement.innerHTML = `< img src = "assets/044-cloud.png" > `;
        //image.src = "assets/044-cloud.png";
    image.src = "assets/" + weather.weather[0].icon + ".png";
    // image.src = "assets/09d.png";

    dateElement.innerText = dateBUilder(now);
    temperatureElement.innerHTML = `${Math.round(weather.main.temp)-273}<span>°C</span>`;

}

function dateBUilder(d) {

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();
    return `${day},${date} ${month} ${year}`
}