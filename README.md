# 🧩 Express CRUD Service

A REST API built with Node.js, Express, and TypeScript. The project demonstrates a simple layered architecture backed by a PostgreSQL database.

---

## ✨ Features

- Get all products
- Get product by ID
- Create new product
- Update product by ID
- Delete product by ID
- Type-safe implementation with TypeScript
- PostgreSQL persistence
- Environment-based configuration

---

## 🛠️ Tech Stack

- Node.js
- Express
- TypeScript
- PostgreSQL
- pg (node-postgres)

---

## 📁 Project Structure

```txt
src/
├── config/          # Database pool & configuration
├── controllers/     # HTTP request handlers
├── middlewares/     # Express middlewares
├── routes/          # Route definitions
├── services/        # Business logic layer
├── types/           # TypeScript types & interfaces
├── app.ts           # Express application setup
└── server.ts        # Application entry point
```

---

## 📄 License 

MIT