module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "git pull"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "docker compose pull"
      }
    },
    {
      method: "notify",
      params: {
        html: "Update Complete! Restart the app to apply changes."
      }
    }
  ]
}
