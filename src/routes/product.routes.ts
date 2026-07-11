import { Router } from "express";
export const router = Router();

import * as controllers from "../controllers";
import { validateId } from "../middlewares";

router.get("/", controllers.getAllProductsController);
router.post("/", controllers.createProductController);
router.get("/:id", validateId, controllers.getProductByIdController);
router.patch("/:id", validateId, controllers.updateProductController);
router.delete("/:id", validateId, controllers.deleteProductController);