module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "docker compose down --rmi all --volumes",
          "powershell -Command \"Remove-Item -Recurse -Force app -ErrorAction SilentlyContinue\"",
          "powershell -Command \"Remove-Item -Recurse -Force data -ErrorAction SilentlyContinue\"",
          "powershell -Command \"Remove-Item -Force .env -ErrorAction SilentlyContinue\"",
          "powershell -Command \"Remove-Item -Force dynamic_conf.yml -ErrorAction SilentlyContinue\""
        ]
      }
    }
  ]
}
