import fs from "fs/promises";
import crypto from "crypto";
import path from "path";

import type { Product, ProductInput, Result } from "../types";

const filePath = path.join(process.cwd(), "src/data/products.json");

const findById = (products: Product[], id: string) => { 
  return products.find((p) => p.id === id);
}; 

const isEmpty = (s: string) => !s.trim();
const isPositive = (n: number) => n > 0;

async function readProducts(): Promise<Product[]> {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  };
};

async function writeProducts(products: Product[]) {
  await fs.writeFile(filePath, JSON.stringify(products, null, 2));
};

export async function getAllProducts(): Promise<Product[]> {
  return readProducts();
};

export async function getProductById(id: string): Promise<Result<Product>> {
  try {
    const products = await readProducts();
    const product = findById(products, id);

    if(!product) {
      return {
        success: false,
        error: "Product not found"
      };
    };

    return {
      success: true,
      data: product
    };
  } catch {
    return {
      success: false,
      error: "Failed to get product"
    };
  };
};

export async function createProduct(data: ProductInput): Promise<Result<Product>> {
  const products = await readProducts();

  if(isEmpty(data.name)) {
    return {
      success: false,
      error: "Product name must not be empty"
    };
  };
  
  if(!isPositive(data.price)) {
    return {
      success: false,
      error: "Product price must be positive"
    };
  };
  
  if(!isPositive(data.stock)) {
    return {
      success: false,
      error: "Product stock must be positive"
    };
  };
  
  const newProduct: Product = {
    id: crypto.randomUUID(),
    name: data.name,
    price: data.price,
    stock: data.stock
  };

  products.push(newProduct);

  await writeProducts(products);

  return {
    success: true,
    data: newProduct
  };
};

export async function deleteProduct(id: string): Promise<Result<Product>> {
  const products = await readProducts();
  
  const index = products.findIndex((p) => p.id === id);

  if(index === -1) {
    return {
      success: false,
      error: "Product not found"
    };
  };

  const deleted = products.splice(index, 1)[0];

  await writeProducts(products);

  return {
    success: true,
    data: deleted
  };
};