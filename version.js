var metadata = {
  name: "FE-Monitor",
  version: "0.0.1",
  api_server: "localhost:8080",
}

if (typeof window == "undefined") {
  module.exports = metadata;
}