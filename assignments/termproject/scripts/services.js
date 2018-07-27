// CONNECT TO API //

let servicesinfoRequest = new XMLHttpRequest();
let servicesinfoURL = 'data/inventory.json';

servicesinfoRequest.open('GET', servicesinfoURL, true);
servicesinfoRequest.send();

servicesinfoRequest.onload = function() {
    let servicesData = JSON.parse(servicesinfoRequest.responseText);
    
// SERVICE PACKAGES //
    
    document.getElementById('minTuneUp').innerHTML = servicesData.services[0].minTuneUp;
    document.getElementById('majTuneUp').innerHTML = servicesData.services[0].majTuneUp;
    document.getElementById('driveTrnHaul').innerHTML = servicesData.services[0].driveTrnHaul;
    document.getElementById('brakeHaul').innerHTML = servicesData.services[0].brakeHaul;
    document.getElementById('compHaul').innerHTML = servicesData.services[0].compHaul;
    document.getElementById('detail').innerHTML = servicesData.services[0].detail;

// WHEELS //
    
    document.getElementById('flatRep').innerHTML = servicesData.services[1].flatRep;
    document.getElementById('repTire').innerHTML = servicesData.services[1].repTire;
    document.getElementById('repSpoke').innerHTML = servicesData.services[1].repSpoke;
    document.getElementById('installOne').innerHTML = servicesData.services[1].installOne;
    document.getElementById('installBoth').innerHTML = servicesData.services[1].installBoth;

// BRAKES //
    
    document.getElementById('repBCable').innerHTML = servicesData.services[2].repBCable;
    document.getElementById('repCablePlus').innerHTML = servicesData.services[2].repCablePlus;
    document.getElementById('minBrakeAdjCab').innerHTML = servicesData.services[2].minBrakeAdjCab;
    document.getElementById('minBrakeAdjDisc').innerHTML = servicesData.services[2].minBrakeAdjDisc;
    document.getElementById('majBrakeAdjCab').innerHTML = servicesData.services[2].majBrakeAdjCab;
    document.getElementById('majBrakeAdjDisc').innerHTML = servicesData.services[2].majBrakeAdjDisc;
    document.getElementById('bleedHydBrake').innerHTML = servicesData.services[2].bleedHydBrake;
    document.getElementById('installAdjCab').innerHTML = servicesData.services[2].installAdjCab;
    document.getElementById('installAdjDisc').innerHTML = servicesData.services[2].installAdjDisc;

// DRIVETRAIN //
    

    document.getElementById('installChain').innerHTML = servicesData.services[3].installChain;
    document.getElementById('cleanLub').innerHTML = servicesData.services[3].cleanLub;
    document.getElementById('compDriveServ').innerHTML = servicesData.services[3].compDriveServ;
    document.getElementById('installPed').innerHTML = servicesData.services[3].installPed;
    document.getElementById('overhaulPedBear').innerHTML = servicesData.services[3].overhaulPedBear;
    
    
}

