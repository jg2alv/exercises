using System;
using System.Linq;

namespace ControlFlow
{
    class Fifth
    {
        public static void Main()
        {
            Console.Write("Enter a list of numbers separated by a comma: ");
            string[] StringVals = Console.ReadLine().Split(',');
            long len = StringVals.Length;
            long[] IntVals = new long[len];

            for (long i = 0; i < len; i++)
                IntVals[i] = Convert.ToInt64(StringVals[i]);

            Console.WriteLine($"Biggest given number is {IntVals.Max()}");
        }
    }
}