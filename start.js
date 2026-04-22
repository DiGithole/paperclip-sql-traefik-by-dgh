module.exports = {
  daemon: true,
  run: [
    {
      "when": "{{args && args.stop}}",
      "method": "shell.run",
      "params": {
        "message": "docker compose down",
        "path": "."
      }
    },
    {
      "when": "{{args && args.stop}}",
      "method": "script.stop",
      "params": {
        "uri": "start.js"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "docker compose --env-file .env up --force-recreate",
        on: [{
          "event": "/Server listening on/",
          "done": true
        }]
      }
    },
    {
      method: "shell.run",
      params: {
        message: "type .env",
        on: [{
          "event": "/DOMAIN=(.+)/",
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "http://{{input.event[1].trim()}}"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "echo {{local.url}}",
        on: [{
          "event": "/(http:\\/\\/[0-9.:a-z-]+)/",
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[1]}}"
      }
    }
  ]
}
