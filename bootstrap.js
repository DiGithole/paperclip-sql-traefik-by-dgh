module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "docker compose exec paperclip node cli/node_modules/tsx/dist/cli.mjs cli/src/index.ts auth bootstrap-ceo"
      }
    }
  ]
}
