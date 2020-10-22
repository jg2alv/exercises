//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if (message.toLowerCase() == message.toUpperCase())
    return 'Fine. Be that way!';
  else if (message.slice(-1) == '?' && message.slice(-1) != ' ')
    return 'Sure.';
  else if (message.toUpperCase() == message) {
    if (message.slice(-1) == '?' && message.slice(-1) != ' ')
      return 'Calm down, I know what I\'m doing!';
    else
      return 'Whoa, chill out!';
  }
  else
    return 'Whatever.';
};
