const path = require('path')
module.exports = {
  title: "PAPERCLIP SQL TRAEFIK BY DGH",
  icon: "icon.png",
  menu: async (kernel) => {
    let app_exists = await kernel.exists(path.resolve(__dirname, "app"))
    let env_exists = await kernel.exists(path.resolve(__dirname, ".env"))
    let installed = app_exists && env_exists
    let running = kernel.running("start.js")
    if (installed) {
      if (running) {
        let local = kernel.local("start.js")
        if (local && local.url) {
          return [
            { icon: "fa-solid fa-rocket", text: "Open WebUI", href: local.url, target: "_blank" },
            { icon: "fa-solid fa-user-shield", text: "Bootstrap CEO", href: "bootstrap.js" },
            { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.js" },
            { icon: "fa-solid fa-circle-stop", text: "Stop", href: "start.js", params: { stop: true } }
          ]
        } else {
          return [
            { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.js" },
            { icon: "fa-solid fa-circle-stop", text: "Stop", href: "start.js", params: { stop: true } }
          ]
        }
      } else {
        return [
          { icon: "fa-solid fa-play", text: "Start", href: "start.js" },
          { icon: "fa-solid fa-rotate", text: "Update", href: "update.js" },
          { icon: "fa-solid fa-trash-can", text: "Reset", href: "reset.js" }
        ]
      }
    } else {
      return [
        { icon: "fa-solid fa-download", text: "Install", href: "install.js" }
      ]
    }
  }
}
