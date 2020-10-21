//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = rna => {
  const RNA = {
    '': '',
    'C': 'G',
    'G': 'C',
    'T': 'A',
    'A': 'U'
  };

  let res = '';

  for(let c of rna)
    res += RNA[c];
  
  return res;
};
