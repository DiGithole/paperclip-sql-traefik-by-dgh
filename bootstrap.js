module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "docker compose exec paperclip pnpm paperclipai auth bootstrap-ceo"
      }
    }
  ]
}
