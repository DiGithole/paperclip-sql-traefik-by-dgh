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
        message: "powershell -Command \"if (Test-Path dynamic_conf.yml) { if ((Get-Item dynamic_conf.yml).PSIsContainer) { Remove-Item -Recurse -Force dynamic_conf.yml } }\""
      }
    },
    {
      method: "fs.write",
      params: {
        path: "dynamic_conf.yml",
        text: "http:\n  routers:\n    paperclip:\n      rule: \"Host(`{{local.domain}}`) || Host(`127.0.0.1`) || Host(`localhost`)\"\n      service: paperclip\n      entryPoints:\n        - web\n    paperclip-secure:\n      rule: \"Host(\"{{local.domain}}\") || Host(\"127.0.0.1\") || Host(\"localhost\")\"\n      service: paperclip\n      entryPoints:\n        - websecure\n      tls:\n        certResolver: myresolver\n\n  services:\n    paperclip:\n      loadBalancer:\n        servers:\n          - url: \"http://paperclip:3100\""
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "docker compose --env-file .env up -d --force-recreate",
          "docker compose logs -f"
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
        message: "docker compose exec paperclip pnpm paperclipai auth bootstrap-ceo"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "docker compose logs -f"
      }
    },
    {
      method: "local.set",
      params: {
        url: "http://{{local.domain}}"
      }
    }
  ]
}
