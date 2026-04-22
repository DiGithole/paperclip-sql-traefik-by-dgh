module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "docker-compose down --rmi all --volumes",
          "rm -rf app",
          "rm -rf data",
          "rm .env"
        ]
      }
    }
  ]
}
