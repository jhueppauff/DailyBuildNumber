using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Net.Http;
using System.Net;
using System.Text;
using System;
using DailyBuildNumber.Function.Model;

namespace DailyBuildNumber.Function
{
    public static class GetDailyBuildNumber
    {
        [FunctionName("GetDailyBuildNumber")]
        public static HttpResponseMessage Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] Request req,
            ILogger log)
        {
            BuildNumber buildNumber;

            if (req != null)
            {
                if (req.Date != null)
                {
                    DateTime date = DateTime.Parse(req.Date);

                    int year = date.Year % 100;

                    buildNumber = new BuildNumber(year, date.DayOfYear); 
                }
                else
                {
                    return new HttpResponseMessage(HttpStatusCode.BadRequest);
                }
            }
            else 
            {
                 buildNumber = new BuildNumber();
            }

            return new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StringContent(JsonConvert.SerializeObject(buildNumber), Encoding.UTF8, "application/json")
            };
        }
    }
}
