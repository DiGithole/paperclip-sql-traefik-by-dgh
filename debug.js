module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "docker compose exec --user node paperclip_app pnpm paperclipai auth bootstrap-ceo",
        on: [{
          "event": "/(http[s]?:\\/\\/\\S+)/",
          "done": true
        }]
      }
    },
    {
      method: "fs.write",
      params: {
        path: "link.txt",
        text: "{{input.event[1]}}"
      }
    }
  ]
}
