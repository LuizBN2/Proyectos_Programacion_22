import express from 'express';
import {getAllProduct, getProduct, createProduct, updateProduct, deleteProduct} from '../controllers/ProductController.js';
const router = express.Router();

router.get('/', getAllProduct);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;

