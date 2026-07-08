# 🧩 Express CRUD Service

A REST API built with **Node.js**, **Express**, and **TypeScript**, featuring a clean layered architecture and **PostgreSQL** as the persistence layer.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)

---

## ✨ Features

- Get all products
- Get product by ID
- Create new product
- Update product by ID
- Delete product by ID
- Type-safe with TypeScript
- PostgreSQL persistence

---

## 🛠️ Tech Stack

| Layer          | Technology         |
|----------------|---------------------|
| Runtime        | Node.js              |
| Framework      | Express               |
| Language       | TypeScript             |
| Database       | PostgreSQL               |

---

## 📁 Project Structure

```txt
src/
├── config/          # Database and app configuration
├── controllers/      # Request handlers
├── middlewares/       # Custom Express middlewares
├── routes/             # Route definitions
├── services/            # Business logic
├── types/                 # Shared TypeScript types/interfaces
├── app.ts                   # Express app setup
└── server.ts                  # Application entry point
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [PostgreSQL](https://www.postgresql.org/) v13+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/express-crud-service.git
cd express-crud-service

# Install dependencies
npm install
```

Create the `products` table before starting the app:

```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
  stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0)
);
```

### Running the App

```bash
# Development (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint            | Description           |
|--------|----------------------|------------------------|
| GET    | `/products`            | Get all products         |
| POST   | `/products`                | Create a new product        |
| GET    | `/products/:id`          | Get a product by ID       |
| PATCH    | `/products/:id`               | Update a product by ID        |
| DELETE | `/products/:id`                  | Delete a product by ID          |

---

## 🧪 Scripts

| Script          | Description                    |
|------------------|----------------------------------|
| `npm run dev`      | Start dev server with hot reload   |
| `npm run build`      | Compile TypeScript to JavaScript     |

---

## 📄 License

MIT