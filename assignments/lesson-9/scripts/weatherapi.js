// CONNECTION TO API //

let weatherRequest = new XMLHttpRequest();
let apiURL = 'api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=9438839c3a0210093ab07fad5b9862ae';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    
    document.getElementById('weatherimage').src = imagesrc;
    
}