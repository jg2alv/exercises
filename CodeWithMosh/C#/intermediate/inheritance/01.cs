using System;
using System.Collections.Generic;

namespace Inheritance
{
    class Stack
    {
        private readonly List<object> _stack = new List<object>();

        public void Push(object obj) => this._stack.Add(obj);

        public object Pop()
        {
            object lastItem = this._stack[this._stack.Count - 1];
            this._stack.RemoveAt(this._stack.Count - 1);

            return lastItem;
        }

        public void Clear() => this._stack.Clear();
        
    }

    class Program
    {
        static void Main()
        {
            Stack stack = new Stack();
            stack.Push(1);
            stack.Push(2);
            stack.Push(3);

            Console.WriteLine(stack.Pop());
            Console.WriteLine(stack.Pop());
            Console.WriteLine(stack.Pop());

            stack.Clear();
        }
    }
}