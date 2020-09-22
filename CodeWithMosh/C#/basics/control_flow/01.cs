using System;

namespace ControlFlow
{
    class First
    {
        public static void Main()
        {
            for (int i = 1; i <= 100; i++)
            {
                if (i % 3 == 0)
                    Console.WriteLine($"{i} is divisible by 3");
            }
        }
    }
}