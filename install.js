module.exports = {
  run: [
    {
      method: "input",
      params: {
        title: "Digithole Interactive Setup",
        description: "Configure your Paperclip + Postgres + Traefik stack carefully. These settings will be saved to your .env file.",
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
            default: "admin@paperclip.local",
            placeholder: "Used for Let's Encrypt"
          },
          {
            key: "secret",
            label: "Better Auth Secret",
            type: "text",
            default: "paperclip-very-secure-random-secret-32-chars-long",
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
          "docker compose build --no-cache"
        ]
      }
    },
    {
      method: "notify",
      params: {
        html: "Installation successful! Click <b>Start</b> to launch the stack."
      }
    }
  ]
}
