var temphigh = parseInt(document.getElementById("temphigh").innerHTML);
var templow = parseInt(document.getElementById("templow").innerHTML);
var windspeed = parseInt(document.getElementById("windspeed").innerHTML);
var thetemp = (temphigh + templow) / 2;  

// Equation: f = 35.74 + 0.6215 * t - 35.75 * s^0.16 + 0.4275 * t * s^0.16
    
var result = 35.74 + 0.6215 * thetemp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * thetemp * Math.pow(windspeed, 0.16);

document.getElementById("windchill").innerHTML = Math.round(result);
    



