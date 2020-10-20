using System;

public static class Hamming
{
    public static int Distance(string firstStrand, string secondStrand)
    {
        if (firstStrand.Length != secondStrand.Length) throw new ArgumentException();

        int dst = 0;
        char[] strand1 = firstStrand.ToCharArray(),
            strand2 = secondStrand.ToCharArray();

        for (int i = 0; i < strand1.Length; i++)
        {
            if (strand1[i] != strand2[i])
                dst++;
        }

        return dst;
    }
}