module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        message: "docker compose down && docker compose up -d"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "docker compose exec -u root -T paperclip_app chmod -R 777 /paperclip"
      }
    },
    {
      method: "local.set",
      params: {
        url: "http://localhost:3100"
      }
    }
  ]
}
