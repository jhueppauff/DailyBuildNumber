using System;
using DailyBuildNumber.Function.Extentions;

namespace DailyBuildNumber.Function
{
    public class BuildNumber
    {
        public BuildNumber()
        {
            string year = DateTime.Now.ToString("yy");
            this.Year = Convert.ToInt16(year);
            this.DayOfYear = DateTime.Now.DayOfYear;
        }

        public BuildNumber(int year, int dayOfYear)
        {
            if (year.Length() > 2)
            {
                throw new FormatException("Year can't contain more than 2 digits");
            }
            else if (year.Length() < 0)
            {
                throw new FormatException("Year needs to be possitive");
            }            

            this.Year = year;
            this.DayOfYear = dayOfYear;
        }

        private int Year { get; set; }

        private int DayOfYear { get; set; }

        public override string ToString() 
        {
            return $"{this.Year}{this.DayOfYear}";
        }

        public string Version { get { return $"{Year}{DayOfYear}"; }}
    }
}