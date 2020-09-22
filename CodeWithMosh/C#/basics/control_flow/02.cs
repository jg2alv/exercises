using System;
using System.Collections.Generic;

namespace ControlFlow
{
    class Second
    {
        public static void Main()
        {
            List<long> nums = new List<long>();
            long res = 0;

            while (true)
            {
                Console.Write("Enter a number or 'ok' to exit: ");
                string input = Console.ReadLine();
                if (input == "ok")
                    break;

                nums.Add(Convert.ToInt64(input));
            }

            foreach (long num in nums)
                res += num;

            Console.WriteLine($"Sum of all given numbers: {res}");
        }
    }
}