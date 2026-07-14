import { Router } from "express";

import * as controllers from "../controllers";
import { validateId } from "../middlewares";

export const router = Router();

router.get("/", controllers.getAllProductsController);
router.post("/", controllers.createProductController);
router.get("/:id", validateId, controllers.getProductByIdController);
router.patch("/:id", validateId, controllers.updateProductController);
router.delete("/:id", validateId, controllers.deleteProductController);