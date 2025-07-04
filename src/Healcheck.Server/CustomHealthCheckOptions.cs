namespace Healcheck.Server
{
    using System.Net.Mime;
    using System.Text.Json;
    using Microsoft.AspNetCore.Diagnostics.HealthChecks;

    public class CustomHealthCheckOptions : HealthCheckOptions
    {
        public CustomHealthCheckOptions() : base()
        {
            var jsonSerializerOptions = new JsonSerializerOptions()
            {
                WriteIndented = true
            }; 
            
            ResponseWriter = async (context, report) =>
            {
                context.Response.ContentType = MediaTypeNames.Application.Json;
                context.Response.StatusCode = StatusCodes.Status200OK;
                
                var result = JsonSerializer.Serialize(new
                {
                    checks = report.Entries.Select(e => new
                    {
                        name = e.Key,
                        responseTime =
                            e.Value.Duration.TotalMilliseconds,
                        status = e.Value.Status.ToString(),
                        description = e.Value.Description
                    }),
                    totalStatus = report.Status,
                    totalResponseTime =
                        report.TotalDuration.TotalMilliseconds,
                }, jsonSerializerOptions);

                await context.Response.WriteAsync(result);
            };
        }
    }
}