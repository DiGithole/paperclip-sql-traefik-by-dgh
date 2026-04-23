# Paperclip AI (SQL Edition)

A high-performance, self-hosted deployment of Paperclip AI using PostgreSQL as the database backend. Optimized for performance and reliability.

## 🚀 Features
- **PostgreSQL Persistence**: Better performance and data integrity compared to SQLite.
- **1-Click Deployment**: Fully orchestrated with Docker and Pinokio.
- **Built-in Onboarding**: Easy setup through the browser.

## 📋 Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Started and running)
- [Pinokio](https://pinokio.computer/)

## 🛠️ Installation
1. Download this repository into Pinokio.
2. Click **Start**.
3. Wait for Docker to download the images and start the containers.
4. Click **Open WebUI** to access `http://localhost:3100`.

## ⚙️ Configuration
The first time you launch the app, you will be greeted by the **Paperclip Onboarding Screen**.
- **Database**: Use `paperclip_db:5432` as the host (it's pre-configured in the Docker network).
- **Admin**: Follow the steps to create your CEO account.

## 📁 Project Structure
- `start.js`: Launches the Docker stack.
- `docker-compose.yml`: Defines the PostgreSQL and Paperclip services.
- `data/`: Local folder where your database and app data are persisted.

---
Developed by **DGH** for the Paperclip AI community.
