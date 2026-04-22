module.exports = {
  run: [
    {
      method: "input",
      params: {
        title: "Digithole Interactive Setup",
        description: "Configure your Paperclip + Postgres + Traefik stack. Use a 32+ character secret.",
        form: [
          { key: "domain", label: "Domain Name", type: "text", default: "paperclip.localhost" },
          { key: "email", label: "Email for SSL", type: "text", default: "admin@paperclip.local" },
          { key: "secret", label: "Better Auth Secret", type: "text", default: "paperclip-very-secure-random-secret-32-chars-long" }
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
      method: "shell.run",
      params: {
        message: "git clone https://github.com/paperclipai/paperclip.git app"
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "node fix.js",
          "mkdir -p data/traefik data/postgres data/paperclip",
          "touch data/traefik/acme.json"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        message: "docker compose build --no-cache"
      }
    },
    {
      method: "notify",
      params: {
        html: "Installation Finished! You can now click Start."
      }
    }
  ]
}
