import { Request, Response } from "express";
import { createProduct, getAllProducts, getProductById, deleteProduct } from "../repositories";

function validateId(id: unknown): id is string {
  return typeof id === "string" && id.trim().length > 0;
};

export const getAllProductsController = async (req: Request, res: Response) => {
  const products = await getAllProducts();
  res.status(200).json(products);
};

export const getProductByIdController = async (req: Request, res: Response) => {
  const id = req.params.id;

  if(!validateId(id)) {
    return res.status(400).json({
      success: false,
      error: "Invalid product ID"
    });
  }; 

  const result = await getProductById(id);

  if(!result.success) {
    return res.status(404).json(result);
  };

  return res.status(200).json(result);
};

export const createProductController = async (req: Request, res: Response) => {
  const product = await createProduct(req.body);
  res.status(201).json(product);
};

export const deleteProductController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if(!validateId(id)) {
      return res.status(400).json({
        success: false,
        error: "Invalid product ID"
      });
    };

    const result = await deleteProduct(id);

    if(!result.success) {
      return res.status(404).json(result);
    };

    return res.status(200).json(result);
  } catch {
    return res.status(500).json({
      success: false,
      error: "Failed to delete product"
    });
  };
};