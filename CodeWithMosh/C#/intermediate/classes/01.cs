using System;

namespace Classes
{
    class StopWatch
    {
        private DateTime _startTime;
        private DateTime _stopTime;
        public TimeSpan Duration
        {
            get
            {
                /*
                    I could've discarded the Stop() method and make this return `DateTime.Now - this._startTime`
                    but the exercise asked for it so I'll let it be
                */
                return this._stopTime - this._startTime;
            }
        }

        public void Start()
        {
            /*
                Since every time Start() is called it also calls Clean(), there's no need to check
                for a Start() called twice exception (and the exercise didn't ask for it)
            */
            this.Clean();
            this._startTime = DateTime.Now;
        }

        public void Stop()
        {
            // Making sure that Stop() isn't called two times in a row and that it isn't called before Start()
            if(this._stopTime != default(DateTime) || this._startTime == default(DateTime)) throw new InvalidOperationException();
            this._stopTime = DateTime.Now;
        }

        // I could've implemented this on the Start() method but I prefered to create a separate method for it
        private void Clean()
        {
            this._startTime = default(DateTime);
            this._stopTime = default(DateTime);
        }
    }

    class Program
    {
        static void Main()
        {
            // Added some wait between calls to make it more realistic
            var stopWatch = new StopWatch();
            
            stopWatch.Start();
            System.Threading.Thread.Sleep(1500);
            stopWatch.Stop();
            Console.WriteLine(stopWatch.Duration);

            stopWatch.Start();
            System.Threading.Thread.Sleep(1500);
            stopWatch.Stop();
            Console.WriteLine(stopWatch.Duration);
        }
    }
}