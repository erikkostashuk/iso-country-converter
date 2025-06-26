# ISO Country Converter

A simple NPM package to convert country codes between 2-digit (alpha-2) and 3-digit (alpha-3) ISO 3166 formats.

## Installation

```bash
npm install iso-country-converter
```

## Usage

```javascript
const converter = require('iso-country-converter');

// Convert from alpha-2 to alpha-3
const alpha3 = converter.toAlpha3('US'); // -> 'USA'

// Convert from alpha-3 to alpha-2
const alpha2 = converter.toAlpha2('USA'); // -> 'US'
```

## Contributing

Contributions are welcome! If you find a missing or incorrect country code, please open an issue or pull request.

To contribute:

1. Fork the repository.
2. Make your changes to `countries.json`.
3. Create a pull request.
