import { Schema , model} from 'mongoose';

const FoodItemsSchema = new Schema({
    categoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    options:{
        type: Object,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

const FoodItem = model('FoodItem',FoodItemsSchema);

export default FoodItem;