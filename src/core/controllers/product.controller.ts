import { Request, Response, NextFunction } from "express";

import { services, pool } from "..";

export const getProductByIdController = async (req: Request<{id: string}>, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    const result = await services.getProductById(pool, id);
    return res.status(result.status).json(result);
  
  } catch(error) {
    next(error);
  };
};

export const createProductController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await services.createProduct(pool, req.body);
    return res.status(result.status).json(result);
  
  } catch(error) {
    next(error);
  };
};

export const deleteProductController = async (req: Request<{id: string}>, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    const result = await services.deleteProduct(pool, id);
    return res.status(result.status).json(result);
  
  } catch(error) {
    next(error);
  };
};

export const updateProductController = async (req: Request<{id: string}>, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    const result = await services.updateProduct(pool, id, req.body);
    return res.status(result.status).json(result);
  
  } catch(error) {
    next(error);
  };
};

export const getAllProductsController = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await services.getAllProducts(pool);   
    return res.status(result.status).json(result);
  
  } catch(error) {
    next(error);
  };
};