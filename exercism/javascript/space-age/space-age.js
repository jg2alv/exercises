//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, s) => {
  const planets = {
    'earth': 31557600,
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132
  };

  s = s / planets['earth'];
  return Number((planet == 'earth' ? s : s / planets[planet]).toFixed(2));
};
