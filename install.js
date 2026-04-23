module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "docker compose pull"
      }
    },
    {
      method: "notify",
      params: {
        html: "Installation Complete! Click 'Start' to begin onboarding."
      }
    }
  ]
}
