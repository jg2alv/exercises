using System;
using System.Collections.Generic;

public static class NucleotideCount
{
    public static IDictionary<char, int> Count(string sequence)
    {
        Dictionary<char, int> res = new Dictionary<char, int>();
        res['A'] = res['C'] = res['T'] = res['G'] = 0;

        char[] seq = sequence.ToCharArray();
        foreach(char s in seq)
        {
            if(s != 'A' && s != 'C' && s != 'T' && s != 'G')
                throw new ArgumentException();

            res[s]++;
        }

        return res;
    }
}