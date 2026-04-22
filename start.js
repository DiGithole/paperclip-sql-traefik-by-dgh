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
      method: "shell.run",
      params: {
        message: "type .env",
        on: [{
          "event": "/EMAIL=(.+)/",
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        email: "{{input.event[1].trim()}}"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "type .env",
        on: [{
          "event": "/SECRET=(.+)/",
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        secret: "{{input.event[1].trim()}}"
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
        env: {
          DOMAIN: "{{local.domain}}",
          EMAIL: "{{local.email}}",
          SECRET: "{{local.secret}}"
        },
        message: [
          "docker compose up --force-recreate"
        ],
        on: [{
          "event": "/Server listening on/",
          "done": true
        }]
      }
    },
    {
      method: "shell.run",
      params: {
        message: "echo http://{{local.domain}}",
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
    },
    {
      method: "log",
      params: {
        text: "Paperclip Signature Edition is ready!"
      }
    }
  ]
}
