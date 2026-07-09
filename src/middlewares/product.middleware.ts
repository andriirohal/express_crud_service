import { Request, Response, NextFunction } from "express";
import { validate as isUuid } from "uuid";

export const validateId = (req: Request<{id: string}>, res: Response, next: NextFunction): void => {
  const id = req.params.id;
  
  if(!isUuid(id)) {
    res.status(400).json({
      success: false,
      error: "Invalid product ID",
      status: 400
    });
    return;
  };

  next();
};

export const errorHandler = (error: unknown, _req: Request, res: Response, _next: NextFunction): void => {
  console.error(error);

  res.status(500).json({
    success: false,
    error: "Internal server error",
    status: 500
  });
  return;
};