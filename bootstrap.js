module.exports = {
  run: [
    {
      method: "log",
      params: {
        text: "\n--------------------------------------------------\n1. CONFIGURING PAPERCLIP (ONBOARDING)...\n--------------------------------------------------\n"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "docker compose exec -T paperclip_app pnpm paperclipai onboard --yes --bind lan"
      }
    },
    {
      method: "log",
      params: {
        text: "\n--------------------------------------------------\n2. GENERATING CEO INVITE LINK...\nLook for the 'Invite URL' below!\n--------------------------------------------------\n"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "docker compose exec -T paperclip_app pnpm paperclipai auth bootstrap-ceo"
      }
    }
  ]
}
