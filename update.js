module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "git pull"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "node fix.js"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "docker-compose build --no-cache"
        ]
      }
    }
  ]
}
