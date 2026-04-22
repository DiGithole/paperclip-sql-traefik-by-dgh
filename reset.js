module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "docker compose down -v",
        path: "."
      }
    },
    {
      method: "shell.run",
      params: {
        message: "powershell -Command \"Remove-Item -Recurse -Force data\"",
        path: "."
      }
    }
  ]
}
