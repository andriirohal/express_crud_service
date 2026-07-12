// Types 

export { Product, ProductInput, Result } from "./types";

// Database configuration

export { pool } from "./config";

// Routes

export { router } from "./routes";

// Controllers

export * as controllers from "./controllers";

// Services

export * as services from "./services";

// Middlewares

export { errorHandler, validateId } from "./middlewares";