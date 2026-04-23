const path = require('path')
module.exports = {
  version: "1.2",
  title: "Paperclip AI (SQL Edition)",
  description: "Paperclip AI with PostgreSQL backend",
  icon: "icon.png",
  menu: async (kernel) => {
    let installed = await kernel.exists(path.join(__dirname, "docker-compose.yml"))
    if (installed) {
      return [
        { icon: "fa-solid fa-play", text: "Start", href: "start.js" },
        { icon: "fa-solid fa-key", text: "GENERATE CEO LINK", href: "bootstrap.js" },
        { icon: "fa-solid fa-terminal", text: "Check Logs", href: "check_logs.js" },
        { icon: "fa-solid fa-rotate", text: "Update", href: "update.js" },
        { icon: "fa-solid fa-trash-can", text: "Reset", href: "reset.js" }
      ]
    } else {
      return [{
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
