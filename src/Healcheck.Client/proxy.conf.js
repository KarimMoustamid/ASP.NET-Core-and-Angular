const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "http://localhost:40048", // Use this if backend is running on HTTP
    secure: false,
    logLevel: "debug"
  },
  // Uncomment below if you want to use HTTPS instead
  // {
  //   context: ["/api"],
  //   target: "https://localhost:40443", // Use this if backend is running on HTTPS
  //   secure: false,
  //   logLevel: "debug"
  // }
];

module.exports = PROXY_CONFIG;
