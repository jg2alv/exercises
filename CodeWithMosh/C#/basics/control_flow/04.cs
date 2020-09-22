using System;

namespace ControlFlow
{
    class Fourth
    {
        public static void Main()
        {
            int rnd = new Random().Next(1, 11);
            for (byte i = 1; i < 5; i++)
            {
                if (Console.ReadLine() == rnd.ToString())
                {
                    Console.WriteLine("You won!");
                    break;
                }

                Console.WriteLine("You lost!");
            }
        }
    }
}