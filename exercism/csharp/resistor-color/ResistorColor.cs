using System;
using System.Linq;

public static class ResistorColor
{
    public static int ColorCode(string color) => (new string[] { "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white" }).ToList().IndexOf(color);

    public static string[] Colors() => new string[] { "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white" };
}