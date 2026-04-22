module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "docker compose exec paperclip npm run paperclipai auth bootstrap-ceo"
      }
    }
  ]
}
