import { randomUUID } from "crypto";

import { Product, Result, ProductInput } from "../types";
import { writeProducts, readProducts } from "../repositories";

const findById = (products: Product[], id: string): Product | undefined => 
  products.find((p) => p.id === id); 

const findIndexById = (products: Product[], id: string) => 
  products.findIndex((p) => p.id === id);

const isValidPrice = (n: unknown): n is number => 
  typeof n === "number" && Number.isFinite(n) && n >= 0;

const isValidStock = (n: unknown): n is number => 
  typeof n === "number" && Number.isInteger(n) && n >= 0;

const isValidName = (s: unknown): s is string => 
  typeof s === "string" && s.trim().length > 0;

export async function getProductById(id: string): Promise<Result<Product>> {
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
};

export async function createProduct(data: ProductInput): Promise<Result<Product>> {
  const products = await readProducts();

  if(!isValidName(data.name)) {
    return {
      success: false,
      error: "Invalid product name"
    };
  };
  
  if(!isValidPrice(data.price)) {
    return {
      success: false,
      error: "Invalid product price"
    };
  };
  
  if(!isValidStock(data.stock)) {
    return {
      success: false,
      error: "Invalid product stock"
    };
  };
  
  const newProduct: Product = {
    id: randomUUID(),
    name: data.name.trim(),
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
  const index = findIndexById(products, id);

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

export async function updateProduct(id: string, data: Partial<ProductInput>): Promise<Result<Product>> {
  const products = await readProducts();
  const index = findIndexById(products, id);

  if(index === -1) {
    return {
      success: false,
      error: "Product not found"
    };
  };

  if(data.name != null && !isValidName(data.name)) {
    return {
      success: false,
      error: "Invalid product name"
    };
  }; 

  if(data.price != null && !isValidPrice(data.price)) {
    return {
      success: false,
      error: "Invalid product price"
    };
  };

  if(data.stock != null && !isValidStock(data.stock)) {
    return {
      success: false,
      error: "Invalid product stock"
    };
  };

  const updatedProduct = {
    ...products[index],
    ...(data.name != null && {
      name: data.name.trim()
    }),
    ...(data.price != null && {
      price: data.price
    }),
    ...(data.stock != null && {
      stock: data.stock
    })
  };

  products[index] = updatedProduct;
  await writeProducts(products);

  return {
    success: true,
    data: updatedProduct
  };
};

export async function getAllProducts(): Promise<Result<Product[]>> {
  return {
    success: true,
    data: await readProducts()
  };
};