using System;

namespace exercism
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine(Add(new DateTime(2011, 4, 25)));
            Console.WriteLine(ColorCode("White"));
        }

        private static int ColorCode(string color)
        {
            return Array.IndexOf(Colors(), color);
        }

        private static string[] Colors()
        {
            string[] arr = {"Black", "Brown", "Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Grey", "White"};
            return arr;
        }
        private static DateTime Add(DateTime moment){
            DateTime ad = moment.AddSeconds(1000000000);
            return ad;
        }   
    }
}
