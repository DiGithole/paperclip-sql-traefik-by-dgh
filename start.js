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
          "powershell -Command \"New-Item -ItemType Directory -Force -Path data/paperclip/instances/default\"",
          "docker run --rm -v \"{{path.join(cwd, 'data', 'paperclip')}}:/fix\" busybox chmod -R 777 /fix"
        ]
      }
    },
    {
      method: "fs.write",
      params: {
        path: "data/paperclip/instances/default/config.json",
        text: "{\n  \"$meta\": {\n    \"version\": \"1.0.0\"\n  },\n  \"database\": {\n    \"provider\": \"postgres\",\n    \"url\": \"postgres://paperclip:db@paperclip_db:5432/paperclip\"\n  },\n  \"logging\": {\n    \"level\": \"info\"\n  },\n  \"server\": {\n    \"port\": 3100,\n    \"host\": \"0.0.0.0\",\n    \"exposure\": \"private\",\n    \"auth\": {\n      \"mode\": \"authenticated\",\n      \"baseUrl\": \"http://{{local.domain}}:8000\"\n    }\n  }\n}"
      }
    },
    {
      method: "fs.write",
      params: {
        path: "dynamic_conf.yml",
        text: "http:\n  routers:\n    paperclip:\n      rule: \"PathPrefix(`/`)\"\n      service: paperclip_app\n      entryPoints:\n        - web\n\n  services:\n    paperclip_app:\n      loadBalancer:\n        servers:\n          - url: \"http://paperclip_app:3100\""
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "docker compose --env-file .env up -d",
          "powershell -Command \"Start-Sleep -Seconds 15\"",
          "docker compose --env-file .env run --rm paperclip_app pnpm paperclipai auth bootstrap-ceo",
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
