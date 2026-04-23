module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "docker compose down -v --remove-orphans"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "rm -rf data .env"
      }
    },
    {
      method: "notify",
      params: {
        html: "System Reset Complete. You can now Install or Start fresh."
      }
    }
  ]
}
