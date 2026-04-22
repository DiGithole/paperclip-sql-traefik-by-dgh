module.exports = {
  daemon: true,
  run: [
    {
      method: "json.get",
      params: {
        file: "conf.json"
      }
    },
    {
      method: "local.set",
      params: {
        url: "https://{{input.domain}}"
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "docker-compose up"
        ],
        on: [{
          "event": "/(http:\\/\\/[0-9.:]+)/",
          "done": true
        }]
      }
    }
  ]
}
