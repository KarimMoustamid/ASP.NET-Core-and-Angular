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
                // We intentionally return 200 OK instead of 503 because our health status is communicated via JSON.
                // This prevents the UI from breaking due to HTTP errors, since the frontend can always parse the JSON response for health details.
                // The HTTP status code is no longer used to indicate health; only the JSON output matters for the client.
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