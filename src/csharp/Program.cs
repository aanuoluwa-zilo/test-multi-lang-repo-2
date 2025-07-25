using System;
using System.Collections.Generic;

namespace MultiLangApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello from C#!");
            
            var calculator = new Calculator();
            var result = calculator.Add(5, 3);
            Console.WriteLine($"5 + 3 = {result}");
        }
    }
}