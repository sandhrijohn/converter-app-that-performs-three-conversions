
function celciusToFarhen(celcius) {
    const farenhit = (celcius * 1.8) + 32;
    console.log('Temperature in Farhenhit is ' + farenhit);
}

const kgsToPounds = function(kgs){
    const pounds = kgs * 2.205;
    console.log('Weight in pounds is ' + pounds);
}

const feetsToCentimeter = feets => {
    const cms = feets * 30.48;
    console.log('Length in centimeters is ' + cms);
}

function converter(celcius, kgs, feets) {
    celciusToFarhen(celcius);
    kgsToPounds(kgs);
    feetsToCentimeter(feets);
}

converter(32, 65, 20);
