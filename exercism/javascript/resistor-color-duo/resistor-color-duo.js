//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = colors => {
  let res = '';

  while(colors.length > 2)
    colors.pop();
  
  colors.forEach(color => res += ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'].indexOf(color).toString());
  return Number(res);
};
