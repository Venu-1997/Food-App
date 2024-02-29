import { Router } from 'express';
import { createOrders, getOrders } from '../controllers/orders-controller.js';

const router = Router();

router.post('/ordersData', createOrders);

router.post('/getOrders', getOrders);

export default router;