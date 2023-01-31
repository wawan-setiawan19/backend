import express from "express"
import { deleteProduct, getProductById, getProducts, saveProduct, updateProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get('/', getProducts)
productRouter.get('/:id', getProductById)
productRouter.post('/', saveProduct)
productRouter.patch('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)

export default productRouter