import { Router } from "express";
import {
  CreateProduct,
  DeleteProduct,
  GetAllProducts,
  GetByCategory,
  GetOneProduct,
  UpdateProduct,
} from "../controllers/Product.controller.js";

const router = Router();

router.get("/", GetAllProducts);
router.post("/", CreateProduct);
router.get("/find/:id", GetOneProduct);
router.put("/:id", UpdateProduct);
router.delete("/:id", DeleteProduct);
//get products by categories
router.get("/category", GetByCategory);

export default router;
