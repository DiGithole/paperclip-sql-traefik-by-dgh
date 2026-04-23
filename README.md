[![Pinokio](https://img.shields.io/badge/Pinokio-One--Click-blue?style=for-the-badge&logo=appveyor)](https://pinokio.computer)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Maintenance: Active](https://img.shields.io/badge/Maintenance-Daily-green?style=for-the-badge)](https://github.com/DiGithole/paperclip-sql-traefik-by-dgh)

> **"Run companies, don't babysit agents."** - Professional-grade orchestration stack for Paperclip AI, optimized for performance, security, and scalability.

---

This project is an advanced **Pinokio Wrapper** for **Paperclip AI**. The **Digithole Signature Edition** deploys a production-ready stack using Docker Compose, integrating:
1. **Paperclip Server/UI**: The core AI orchestration engine.
2. **Postgres 16**: High-performance relational database for persistent storage.
3. **No-Traefik Direct Access**: Streamlined network architecture for flawless local API and UI connectivity (`http://localhost:3100`).

> [!IMPORTANT]
> **Daily Maintenance**: This repository is maintained almost daily to ensure compatibility with the latest Paperclip updates and security patches.

---

### Prerequisites
- **[Pinokio](https://pinokio.computer/)** installed.
- **[Docker Desktop](https://www.docker.com/products/docker-desktop/)** running and configured for your OS.

### 1-Click Setup Steps
1. Open **Pinokio** and enter the repository URL: `https://github.com/DiGithole/paperclip-sql-traefik-by-dgh`
2. Click **Download**.
3. Click **Start** to pull the images and launch the stack.
4. **Generate CEO Link**: Once running, click the **"GENERATE CEO LINK"** button in the Pinokio sidebar. This automatically configures your `LAN` deployment and provides your exclusive admin invite.
5. **Web UI**: Access your instance at `http://localhost:3100` and paste your CEO invite.

---

### Key Features
- **Auto-Onboarding**: Bypass complicated CLI setups. The `GENERATE CEO LINK` script handles the `config.json` generation and spits out the admin URL directly in the terminal.
- **Volume Permission Fixes**: Automatically runs `chmod` to prevent the dreaded `EACCES` Docker permission errors when agents try to write logs to Windows volumes.
- **LM Studio Ready**: Easily point Claude Code to your local LM Studio by editing the overrides in `docker-compose.yml` (`host.docker.internal:1234`).

---

### Troubleshooting

#### 1. "Invalid config" or "local_trusted" Errors
- **Symptom**: The CLI refuses to generate an invite link.
- **Fix**: Simply click the **"GENERATE CEO LINK"** button. We engineered a script that automatically deletes corrupted configs and runs the official `onboard` command to fix the environment.

#### 2. Agent Fails with "Permission denied, mkdir run-logs"
- **Symptom**: Agents crash trying to write to the `/paperclip` volume.
- **Fix**: The `Start` script automatically fixes this. If it persists, click "Start" again.

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
