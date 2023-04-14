function convertPoundToKilog(pound: number): number{
    return pound /2.205;

}

function convertInchesToCentim(inches: number): number{
    return inches * 2.54;

}


function convertFahrenheitToCels(fahrenheit: number): number{
    return (fahrenheit - 32) * 5/9;
}

function convertFeetToMeter(feet: number):number{
    return feet/3.281;

}

console.log(convertPoundToKg(10));
console.log(convertInchesToCm(10));
console.log(convertFahrenheitToCelsius(10));
console.log(convertFeetToMeters(10));