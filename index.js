const countries = require('./countries.json');

function toAlpha3(alpha2) {
  const country = countries.find((c) => c['alpha-2'] === alpha2);
  return country ? country['alpha-3'] : null;
}

function toAlpha2(alpha3) {
  const country = countries.find((c) => c['alpha-3'] === alpha3);
  return country ? country['alpha-2'] : null;
}

module.exports = {
  toAlpha2,
  toAlpha3,
};
