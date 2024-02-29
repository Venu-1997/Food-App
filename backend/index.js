import express from 'express';
import connectToDataBase from './database/db-config.js';
import userRoutes from './routes/user-routes.js';
import ItemRoutes from './routes/item-routes.js';
import {config} from 'dotenv';
import cors from 'cors';
import orderRoutes from './routes/order-routes.js';
config();//run the env file

const app = express();

const PORT = 5070;

app.use(cors());
app.use(express.json());

app.use('/api/users',userRoutes);
app.use('/api/items',ItemRoutes);
app.use('/api/orders',orderRoutes);


app.use('/',(req,res) => {
    res.status(404).send('Hello World');
});

app.listen(PORT, async () => {
    await connectToDataBase();
    console.log(`Server is running in http://localhost:${PORT}`);
});