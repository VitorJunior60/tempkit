'use strict';

const assert = require('assert');
const TempKit = require('../index');

assert.strictEqual(TempKit.celsiusToFahrenheit(100), 212);
assert.strictEqual(TempKit.fahrenheitToCelsius(32), 0);
assert.strictEqual(TempKit.celsiusToKelvin(0), 273.15);
assert.strictEqual(TempKit.kelvinToCelsius(273.15), 0);
assert.strictEqual(TempKit.convert(100, 'C', 'F'), 212);
assert.strictEqual(TempKit.convert(212, 'F', 'K'), 373.15);

console.log('✅ Todos os testes do TempKit passaram!');