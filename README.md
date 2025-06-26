[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://coff.ee/devwitherik)

# ISO Country Converter

[![NPM Version](https://img.shields.io/npm/v/iso-country-converter.svg)](https://www.npmjs.com/package/iso-country-converter)

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
