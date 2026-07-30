 ## Medidor de Temperatura

Biblioteca funcional em JavaScript puro (sem dependências) para converter
temperaturas entre **Celsius**, **Fahrenheit** e **Kelvin**.

## Instalação

```bash
git submodule add https://github.com/VitorJunior60/tempkit.git lib/tempkit
git submodule update --init --recursive
```

## Uso

```js
const TempKit = require('./lib/tempkit');

TempKit.celsiusToFahrenheit(100); // 212
TempKit.fahrenheitToCelsius(32);  // 0
TempKit.celsiusToKelvin(0);       // 273.15
TempKit.kelvinToCelsius(273.15);  // 0

// forma genérica
TempKit.convert(100, 'C', 'F'); // 212
TempKit.convert(212, 'F', 'K'); // 373.15
```

## API

| Função | Descrição |
|---|---|
| `celsiusToFahrenheit(c)` | Converte Celsius para Fahrenheit. |
| `fahrenheitToCelsius(f)` | Converte Fahrenheit para Celsius. |
| `celsiusToKelvin(c)` | Converte Celsius para Kelvin. |
| `kelvinToCelsius(k)` | Converte Kelvin para Celsius. |
| `fahrenheitToKelvin(f)` | Converte Fahrenheit para Kelvin. |
| `kelvinToFahrenheit(k)` | Converte Kelvin para Fahrenheit. |
| `convert(value, from, to)` | Conversão usando `'C'`, `'F'` ou `'K'`. |

## Testes

```bash
npm teste
```

## Licença

MIT