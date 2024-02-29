import { Schema , model} from 'mongoose';

const FoodCategorySchema = new Schema({
    categoryName: {
        type: String,
        required: true
    }
});

const FoodCategory = model('FoodCategory',FoodCategorySchema);

export default FoodCategory;