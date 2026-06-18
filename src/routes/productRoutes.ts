import { Router } from "express";
import { createProductController, getAllProductsController, getProductByIdController, deleteProductController } from "../controllers";

export const router = Router();

router.get("/", getAllProductsController);
router.get("/:id", getProductByIdController);
router.delete("/:id", deleteProductController);
router.post("/", createProductController);