// CONNECT TO API //

let towninfoRequest = new XMLHttpRequest();
let towninfoURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

towninfoRequest.open('GET', towninfoURL, true);
towninfoRequest.send();

towninfoRequest.onload = function() {
    let townData = JSON.parse(towninfoRequest.responseText);
    
    document.getElementById('fTown-motto').innerHTML = townData.towns[0].motto;
    document.getElementById('fTown-found').innerHTML = townData.towns[0].yearFounded;
    document.getElementById('fTown-pop').innerHTML = townData.towns[0].currentPopulation;
    document.getElementById('fTown-rain').innerHTML = townData.towns[0].averageRainfall;

    
    document.getElementById('sTown-motto').innerHTML = townData.towns[3].motto;
    document.getElementById('sTown-found').innerHTML = townData.towns[3].yearFounded;
    document.getElementById('sTown-pop').innerHTML = townData.towns[3].currentPopulation;
    document.getElementById('sTown-rain').innerHTML = townData.towns[3].averageRainfall;

    
    document.getElementById('gTown-motto').innerHTML = townData.towns[1].motto;
    document.getElementById('gTown-found').innerHTML = townData.towns[1].yearFounded;
    document.getElementById('gTown-pop').innerHTML = townData.towns[1].currentPopulation;
    document.getElementById('gTown-rain').innerHTML = townData.towns[1].averageRainfall;

    
    
    
    var fEvents = townData.towns[0].events;
    var elist = document.createElement('ul');
    document.getElementById('fTown-events').appendChild(elist);

    fEvents.forEach(function (eventList) {
        var li = document.createElement('li');
        elist.appendChild(li);
        li.innerHTML += eventList;
    });
    

    var sEvents = townData.towns[3].events;
    var elist = document.createElement('ul');
    document.getElementById('sTown-events').appendChild(elist);

    sEvents.forEach(function (eventList) {
        var li = document.createElement('li');
        elist.appendChild(li);
        li.innerHTML += eventList;
    });
    

    var gEvents = townData.towns[1].events;
    var elist = document.createElement('ul');
    document.getElementById('gTown-events').appendChild(elist);

    gEvents.forEach(function (eventList) {
        var li = document.createElement('li');
        elist.appendChild(li);
        li.innerHTML += eventList;
    });
}

