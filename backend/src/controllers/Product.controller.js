import Product from "../models/Product.js";
import { CreateError } from "../utils/Error.js";

export const CreateProduct = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    const ProductSaved = await newProduct.save();
    res.status(200).json(ProductSaved);
  } catch (error) {
    next(CreateError(500, "Error, cannot create a new product."));
  }
};
export const GetAllProducts = async (req, res, next) => {
  try {
    const Products = await Product.find();
    res.status(200).json(Products);
  } catch (error) {
    next(CreateError(500, "Products Not Found."));
  }
};
export const GetOneProduct = async (req, res, next) => {
  try {
    const ProductFound = await Product.findById(req.params.id);
    res.status(200).json(ProductFound);
  } catch (error) {
    next(CreateError(500, "Product Not Found."));
  }
};
export const UpdateProduct = async (req, res, next) => {
  try {
    const ProductUpdated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(ProductUpdated);
  } catch (error) {
    next(CreateError(500, "Error, this product cannot be updated."));
  }
};
export const DeleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    next(CreateError(500, "Error, cannot delete this product."));
  }
};
export const GetByCategory = async (req, res, next) => {
  try {
    const Products = await Product.find({ category: req.query.category }).limit(
      req.query.limit
    );
    res.status(200).json(Products);
  } catch (error) {
    next(CreateError(500, "Products not found."));
  }
};
