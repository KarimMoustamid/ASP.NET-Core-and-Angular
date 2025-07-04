namespace Healcheck.Server
{
    using System.Net.NetworkInformation;
    using Microsoft.Extensions.Diagnostics.HealthChecks;

    public class ICMPHealthCheck(string host, int healthyRoundtripTime) : IHealthCheck
    {
        public async Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default)
        {
            try
            {
                using var ping = new Ping();
                var reply = await ping.SendPingAsync(host);

                switch (reply.Status)
                {
                    case IPStatus.Success:
                        var msg = $"ICMP ping to {host} took {reply.RoundtripTime}ms";
                        return (reply.RoundtripTime > healthyRoundtripTime)
                            ? HealthCheckResult.Degraded(msg)
                            : HealthCheckResult.Healthy(msg);
                    default:
                        var err = $"Ping to {host} failed: {reply.Status}";
                        return HealthCheckResult.Unhealthy(err);
                }
            }
            catch (Exception e)
            {
                var err = $"Ping to {host} failed: {e.Message}";
                return HealthCheckResult.Unhealthy(err);
            }
        }
    }
}
