import { Router } from 'express';
import { createCategories, createFoodItem, foodData, getCategories, getFoodItems } from '../controllers/foodItem-controller.js';

const router = Router();

router.post('/createItem', createFoodItem);

router.post('/createCategories', createCategories);

router.get('/getItems', getFoodItems);

router.get('/getCategories', getCategories);

router.get('/foodData', foodData);

export default router;