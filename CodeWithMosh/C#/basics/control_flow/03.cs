using System;

namespace ControlFlow
{
    class Third
    {
        public static void Main()
        {
            Console.Write("Enter a number: ");
            long num = Convert.ToInt64(Console.ReadLine());
            long res = 1;

            for (long i = num; i > 0; i--)
            {
                res *= i;
            }

            Console.WriteLine($"{num}! is {res}");
        }
    }
}