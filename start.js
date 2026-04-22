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
          "event": "/Server listening on 0.0.0.0:3100/",
          "done": true
        }]
      }
    },
    {
      method: "web.open",
      params: {
        url: "{{local.url}}"
      }
    }
  ]
}
