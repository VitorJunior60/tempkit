'use strict';
 
function round(value, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
 
function celsiusToFahrenheit(c) {
  return round(c * (9 / 5) + 32);
}
 
function fahrenheitToCelsius(f) {
  return round((f - 32) * (5 / 9));
}
 
function celsiusToKelvin(c) {
  return round(c + 273.15);
}
 
function kelvinToCelsius(k) {
  return round(k - 273.15);
}
 
function fahrenheitToKelvin(f) {
  return celsiusToKelvin(fahrenheitToCelsius(f));
}
 
function kelvinToFahrenheit(k) {
  return celsiusToFahrenheit(kelvinToCelsius(k));
}
 
/**
 * Conversão entre unidades: 'C', 'F' ou 'K'.
 * Ex: convert(100, 'C', 'F') -> 212
 */

function convert(value, from, to) {
  const key = `${from.toUpperCase()}${to.toUpperCase()}`;
  const table = {
    CC: (v) => v,
    CF: celsiusToFahrenheit,
    CK: celsiusToKelvin,
    FC: fahrenheitToCelsius,
    FF: (v) => v,
    FK: fahrenheitToKelvin,
    KC: kelvinToCelsius,
    KF: kelvinToFahrenheit,
    KK: (v) => v,
  };
 
  const fn = table[key];
  if (!fn) throw new Error(`Conversão inválida: ${from} -> ${to}`);
  return fn(value);
}
 
module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  celsiusToKelvin,
  kelvinToCelsius,
  fahrenheitToKelvin,
  kelvinToFahrenheit,
  convert,
};
 