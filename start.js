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
        domain: "{{input.event[1].trim()}}"
      }
    },
    {
      method: "fs.write",
      params: {
        path: "dynamic_conf.yml",
        text: `http:
  routers:
    paperclip:
      rule: "Host(\\"{{local.domain}}\\") || Host(\\"127.0.0.1\\") || Host(\\"localhost\\")"
      service: paperclip
      entryPoints:
        - web
    paperclip-secure:
      rule: "Host(\\"{{local.domain}}\\") || Host(\\"127.0.0.1\\") || Host(\\"localhost\\")"
      service: paperclip
      entryPoints:
        - websecure
      tls:
        certResolver: myresolver

  services:
    paperclip:
      loadBalancer:
        servers:
          - url: "http://paperclip:3100"
`
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "docker compose up --force-recreate"
        ],
        on: [{
          "event": "/Server listening on 0.0.0.0:3100/",
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "http://{{local.domain}}"
      }
    },
    {
      method: "log",
      params: {
        text: "Ready to launch! Open the Web UI from the sidebar."
      }
    }
  ]
}
