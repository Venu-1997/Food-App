import { Schema , model} from 'mongoose';

const OrdersSchema = new Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    ordersData:{
        type: Array,
        required: true,
    }
});

const Order = model('Order',OrdersSchema);

export default Order;