module.exports = {
  run: [
    {
      method: "input",
      params: {
        title: "Paperclip Configuration (Digithole Edition)",
        description: "Configure your Paperclip + PostgreSQL + Traefik stack",
        form: [
          {
            key: "domain",
            label: "Domain Name",
            type: "text",
            default: "paperclip.localhost",
            placeholder: "e.g. paperclip.yourdomain.com or paperclip.localhost"
          },
          {
            key: "email",
            label: "Email for SSL (Optional)",
            type: "text",
            default: "admin@example.com",
            placeholder: "Used for Let's Encrypt"
          },
          {
            key: "secret",
            label: "Better Auth Secret",
            type: "text",
            default: "paperclip-dev-secret",
            placeholder: "Enter a random string for security"
          }
        ]
      }
    },
    {
      method: "fs.write",
      params: {
        path: ".env",
        text: "DOMAIN={{input.domain}}\nEMAIL={{input.email}}\nSECRET={{input.secret}}"
      }
    },
    {
      method: "json.set",
      params: {
        file: "conf.json",
        data: {
          domain: "{{input.domain}}",
          secret: "{{input.secret}}"
        }
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/paperclipai/paperclip.git app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "node fix.js"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "mkdir -p data/traefik data/postgres data/paperclip",
          "touch data/traefik/acme.json"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "docker-compose build --no-cache"
        ]
      }
    }
  ]
}
