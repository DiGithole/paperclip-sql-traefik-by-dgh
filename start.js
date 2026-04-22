module.exports = {
  daemon: true,
  run: [
    {
      "when": "{{args && args.stop}}",
      "method": "shell.run",
      "params": {
        "message": "docker compose stop",
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
        message: [
          "powershell -Command \"if (Test-Path dynamic_conf.yml) { Remove-Item -Recurse -Force dynamic_conf.yml -ErrorAction SilentlyContinue }\"",
          "powershell -Command \"New-Item -ItemType Directory -Force -Path data/paperclip/instances/default\"",
          "docker run --rm -v \"{{path.join(cwd, 'data', 'paperclip')}}:/fix\" busybox chmod -R 777 /fix",
          "docker compose --env-file .env up -d",
          "powershell -Command \"Start-Sleep -Seconds 15\"",
          "docker compose exec --user node paperclip_app pnpm paperclipai onboard --yes",
          "docker compose exec --user node paperclip_app pnpm paperclipai auth bootstrap-ceo",
          "docker compose logs -f"
        ]
      }
    },
    {
      method: "local.set",
      params: {
        url: "http://localhost:8000"
      }
    }
  ]
}
