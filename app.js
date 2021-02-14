

window.addEventListener('load', () => {
    let lon;
    let lat;

    // console.log(timeZone.innerText);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=68682a9edbdf7d8642500d333191ce9d&units=metric
            `;
            fetch(url)
                .then(res => res.json())
                .then(data => displayCurrentWeather(data));
        });
    }
});


function displayCurrentWeather(params) {
    let timeZone = document.querySelector('.location-timezone');
    let temperature = document.querySelector('.temperature-degree');
    let tempDes = document.querySelector('.temperature-description')
    console.log(params);
    timeZone.innerText = `${params.name} / ${params.sys.country}`;
    temperature.innerText = `${params.main.temp}`;
    tempDes.innerText = `${params.weather[0].description}`;
}