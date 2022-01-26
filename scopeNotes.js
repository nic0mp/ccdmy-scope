// Blocks and Scope
const city = 'New York City';
const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
};
console.log(logCitySkyline())
// output: The stars over the Empire State Building in New York City

// GLOBAL SCOPE
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';
const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};
console.log(callMyNightSky())
// output:Night Sky: The Moon, North Star, and The Milky Way