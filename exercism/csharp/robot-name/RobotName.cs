using System;
using System.Collections.Generic;

public class Robot
{
    public string Name { get; private set; }
    private static Random _random = new Random();
    private static string _alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static int[] _nums = new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
    private static List<string> _used = new List<string>();

    public Robot() => this.Reset();

    public void Reset()
    {
        do
        {
            this.Name  = $"{Robot._alpha[Robot._random.Next(26)]}{Robot._alpha[Robot._random.Next(26)]}{Robot._nums[Robot._random.Next(10)]}{Robot._nums[Robot._random.Next(10)]}{Robot._nums[Robot._random.Next(10)]}";
        }
        while(Robot._used.Contains(this.Name));

        Robot._used.Add(this.Name);
    }
}