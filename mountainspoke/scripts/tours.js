// CONNECT TO API //

let toursinfoRequest = new XMLHttpRequest();
let toursinfoURL = 'data/tours.json';

toursinfoRequest.open('GET', toursinfoURL, true);
toursinfoRequest.send();

toursinfoRequest.onload = function() {
    let toursData = JSON.parse(toursinfoRequest.responseText);
    
// TOUR ONE //
    
    document.getElementById('length0').innerHTML = toursData.tours[0].length0;
    document.getElementById('singletrack0').innerHTML = toursData.tours[0].singletrack0;
    document.getElementById('avgGrade0').innerHTML = toursData.tours[0].avgGrade0;
    document.getElementById('ascent0').innerHTML = toursData.tours[0].ascent0;
    document.getElementById('height0').innerHTML = toursData.tours[0].height0;
    document.getElementById('skilllev0').innerHTML = toursData.tours[0].skilllev0;

// TOUR TWO //
    
    document.getElementById('length1').innerHTML = toursData.tours[1].length1;
    document.getElementById('singletrack1').innerHTML = toursData.tours[1].singletrack1;
    document.getElementById('avgGrade1').innerHTML = toursData.tours[1].avgGrade1;
    document.getElementById('ascent1').innerHTML = toursData.tours[1].ascent1;
    document.getElementById('height1').innerHTML = toursData.tours[1].height1;
    document.getElementById('skilllev1').innerHTML = toursData.tours[1].skilllev1;

// TOUR THREE //
    
    document.getElementById('length2').innerHTML = toursData.tours[2].length2;
    document.getElementById('singletrack2').innerHTML = toursData.tours[2].singletrack2;
    document.getElementById('avgGrade2').innerHTML = toursData.tours[2].avgGrade2;
    document.getElementById('ascent2').innerHTML = toursData.tours[2].ascent2;
    document.getElementById('height2').innerHTML = toursData.tours[2].height2;
    document.getElementById('skilllev2').innerHTML = toursData.tours[2].skilllev2;


// TOUR FOUR //
    

    document.getElementById('length3').innerHTML = toursData.tours[3].length3;
    document.getElementById('singletrack3').innerHTML = toursData.tours[3].singletrack3;
    document.getElementById('avgGrade3').innerHTML = toursData.tours[3].avgGrade3;
    document.getElementById('ascent3').innerHTML = toursData.tours[3].ascent3;
    document.getElementById('height3').innerHTML = toursData.tours[3].height3;
    document.getElementById('skilllev3').innerHTML = toursData.tours[3].skilllev3;
    
    
}

