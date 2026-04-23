module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "docker compose --env-file .env exec -T paperclip_db psql -U paperclip -d paperclip -c \"\\dt\""
      }
    },
    {
      method: "shell.run",
      params: {
        message: "docker compose --env-file .env exec -T paperclip_db psql -U paperclip -d paperclip -c \"SELECT * FROM instance_settings;\""
      }
    }
  ]
}
