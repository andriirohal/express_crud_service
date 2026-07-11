import { Request, Response, NextFunction } from "express";

import * as services from "../services";

export const getProductByIdController = async (req: Request<{id: string}>, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    const result = await services.getProductById(id);
    return res.status(result.status).json(result);
  
  } catch(error) {
    next(error);
  };
};

export const createProductController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await services.createProduct(req.body);
    return res.status(result.status).json(result);
  
  } catch(error) {
    next(error);
  };
};

export const deleteProductController = async (req: Request<{id: string}>, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    const result = await services.deleteProduct(id);
    return res.status(result.status).json(result);
  
  } catch(error) {
    next(error);
  };
};

export const updateProductController = async (req: Request<{id: string}>, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    const result = await services.updateProduct(id, req.body);
    return res.status(result.status).json(result);
  
  } catch(error) {
    next(error);
  };
};

export const getAllProductsController = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await services.getAllProducts();   
    return res.status(result.status).json(result);
  
  } catch(error) {
    next(error);
  };
};