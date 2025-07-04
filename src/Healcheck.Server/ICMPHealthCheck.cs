namespace Healcheck.Server
{
    using System.Net.NetworkInformation;
    using Microsoft.Extensions.Diagnostics.HealthChecks;

    public class ICMPHealthCheck : IHealthCheck
    {
        private readonly string Host = $"10.0.0.0";
        private readonly int HealthyRoundtripTime = 300; 
        
        public async Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default)
        {
            try
            {
                using var ping = new Ping();
                var reply = await ping.SendPingAsync(Host);

                switch (reply.Status)
                {
                    case IPStatus.Success: 
                        return (reply.RoundtripTime > HealthyRoundtripTime)
                            ? HealthCheckResult.Degraded($"Ping to {Host} took too long: {reply.RoundtripTime}ms")
                            : HealthCheckResult.Healthy($"Ping to {Host} successful: {reply.RoundtripTime}ms");
                    default:
                        return HealthCheckResult.Unhealthy($"Ping to {Host} failed: {reply.Status}");
                }
            }
            catch (Exception e)
            {
                return HealthCheckResult.Unhealthy($"Ping to {Host} failed: {e}");
            }
        }
    }
}
