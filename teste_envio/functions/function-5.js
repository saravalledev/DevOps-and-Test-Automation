function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

var fahrenheit = 75;
var celsius = fahrenheitToCelsius(fahrenheit);
console.log(fahrenheit + " graus Fahrenheit é igual a " + celsius + " graus Celsius.");

module.exports = fahrenheitToCelsius;