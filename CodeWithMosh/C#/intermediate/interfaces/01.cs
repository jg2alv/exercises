using System;

interface IActivity
{
    void Execute();
}

class Activity1 : IActivity
{
    public void Execute()
    {
        Console.WriteLine("Executing activity1...");
    }
}

class Activity2 : IActivity
{
    public void Execute()
    {
        Console.WriteLine("Executing activity2...");
    }
}

class Activity3 : IActivity
{
    public void Execute()
    {
        Console.WriteLine("Executing activity3...");
    }
}

class WorkflowEngine
{
    public static void Run(params IActivity[] activity)
    {
        foreach(var _activity in activity)
        {
            _activity.Execute();
        }
    }
}

class Program
{
    static void Main()
    {
        var activity1 = new Activity1();
        var activity2 = new Activity2();
        var activity3 = new Activity3();

        WorkflowEngine.Run(activity1, activity2, activity3);
    }
}