# 🚀 PAPERCLIP SQL TRAEFIK | Digithole Signature Edition

[![Pinokio](https://img.shields.io/badge/Pinokio-One--Click-blue?style=for-the-badge&logo=appveyor)](https://pinokio.computer)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Maintenance: Active](https://img.shields.io/badge/Maintenance-Daily-green?style=for-the-badge)](https://github.com/DiGithole/paperclip-sql-traefik-by-dgh)

> **"Run companies, don't babysit agents."** - Professional-grade orchestration stack for Paperclip AI, optimized for performance, security, and scalability.

---

## 📖 Introduction
This project is an advanced **Pinokio Wrapper** for **Paperclip AI**. The **Digithole Signature Edition** deploys a production-ready stack using Docker Compose, integrating:
1. **Paperclip Server/UI**: The core AI orchestration engine.
2. **Postgres 15**: High-performance relational database for persistent storage.
3. **Traefik Proxy**: Modern edge router for automatic SSL (Let's Encrypt) and local/remote routing.

> [!IMPORTANT]
> **Daily Maintenance**: This repository is maintained almost daily to ensure compatibility with the latest Paperclip updates and security patches.

---

## 🚀 Installation Guide (Interactive)

### Prerequisites
- **[Pinokio](https://pinokio.computer/)** installed.
- **[Docker Desktop](https://www.docker.com/products/docker-desktop/)** running and configured for your OS.

### Interactive Setup Steps
1. Open **Pinokio** and enter the repository URL: `https://github.com/DiGithole/paperclip-sql-traefik-by-dgh`
2. Click **Install**.
3. **Configuration Wizard**: A form will appear. Fill it carefully to avoid Traefik errors:
   - **Domain**: Use `paperclip.localhost` for local testing. Use a real FQDN for public deployment.
   - **SSL Email**: Provide a valid email. Traefik needs this for ACME (Let's Encrypt) registration.
   - **Auth Secret**: A string of at least 32 characters is recommended to satisfy Better-Auth entropy requirements.
4. **Build Process**: The system will clone the Paperclip repo and build the Docker images. This may take 5-10 minutes depending on your internet and CPU.
5. Click **Start** to launch the stack.
6. **Bootstrap CEO**: Once running, click the **"Bootstrap CEO"** button in the sidebar to initialize your admin account.

---

## ⚙️ Usage & Management

- **Web UI**: Access your instance via the domain you configured (e.g., `http://paperclip.localhost`).
- **Update**: Use the "Update" button to pull the latest AI core and rebuild containers.
- **Reset**: Wipes all data, volumes, and configurations for a clean slate.
- **Terminal**: Monitor real-time logs from Paperclip, Postgres, and Traefik simultaneously.

---

## 🛠️ Troubleshooting & Common Errors

### 1. Traefik Connectivity / 404 Errors
- **Symptom**: You see a "404 Not Found" or Traefik doesn't route to the app.
- **Fix**: Ensure your `DOMAIN` in `.env` matches the URL you are typing in the browser. 
- **Windows Fix**: If using `paperclip.localhost`, try adding `127.0.0.1 paperclip.localhost` to your `C:\Windows\System32\drivers\etc\hosts` file as administrator.

### 2. Docker Permission / Socket Errors
- **Symptom**: Traefik logs show "Permission denied" or "Provider connection error".
- **Fix**: This edition uses **Static File Routing** to bypass Docker socket issues on Windows. Ensure `dynamic_conf.yml` exists in the root.

### 3. ACME / SSL Registration Failures
- **Symptom**: HTTPS is not working or shows a self-signed certificate.
- **Fix**: Check Traefik logs. Ensure the `EMAIL` provided is valid. If testing locally, SSL will not work unless you use a real domain with public DNS.

### 4. Better Auth / JWT Errors
- **Symptom**: Login fails or session expires immediately.
- **Fix**: Your `SECRET` might be too short. Use the "Reset" script and enter a secret with 32+ characters during the new installation.

> [!TIP]
> **Use an AI Agent**: If installation persists in failing or you encounter a cryptic Docker error, we highly recommend using an **AI Agent (like Antigravity or Claude)** to inspect the logs. Paste the output of the "Terminal" into the agent for a 1-click fix.

---

## 💖 Support & Contributions
If you appreciate this implementation, consider supporting our mission:
- **Solana (SOL)**: `HtuDN3S2hHUv252H4mkt5zTWAihgCicBkv88aTzX9Dt1`
- **Bitcoin (BTC)**: `bc1q85pu0xythn44xkr8h8fwv3rtyqr2cqg6n5f8t7`

---

## 🌐 Contact
- **Website**: [digithole.com](https://digithole.com)
- **Twitter/X**: [@digithole](https://x.com/digithole)
- **License**: MIT Copyright (c) 2026 Digithole (DGH)
