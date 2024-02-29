import FoodCategory from "../models/foodCategoryModel.js";
import FoodItem from "../models/foodItemsModel.js";


export const createFoodItem = async(req,res) => {
    try{
        const itemDetails = req.body;
        const data = await FoodItem.create(itemDetails);
        res.status(200).send(data); 
    }

    catch(e){
        console.log("Error in createFoodItem Controller",e.message);
        return res.status(500).json({ error: "Error in createFoodItem Controller"}); 
    }
}


export const getFoodItems = async(req,res) => {
    try{
        const data = await FoodItem.find();
        res.status(200).send(data); 
        global.foodItems = data;
    }

    catch(e){
        console.log("Error in getFoodItems Controller",e.message);
        return res.status(500).json({ error: "Error in getFoodItems Controller"}); 
    }
}

export const createCategories = async(req,res) => {
    try{
        const categoryDetails = req.body;
        const data = await FoodCategory.create(categoryDetails);
        res.status(200).send(data); 
    }

    catch(e){
        console.log("Error in getFoodItems Controller",e.message);
        return res.status(500).json({ error: "Error in getFoodItems Controller"}); 
    }
}

export const getCategories = async(req,res) => {
    try{
        const data = await FoodCategory.find();
        res.status(200).send(data); 
        global.foodCategories = data;
    }

    catch(e){
        console.log("Error in getFoodItems Controller",e.message);
        return res.status(500).json({ error: "Error in getFoodItems Controller"}); 
    }
}

export const foodData = async(req,res) => {
    try{
        const itemsData = await FoodItem.find();
        const categoryData = await FoodCategory.find();
        res.status(200).send([itemsData,categoryData]); 
    }

    catch(e){
        console.log("Error in getFoodItems Controller",e.message);
        return res.status(500).json({ error: "Error in getFoodItems Controller"}); 
    }
}