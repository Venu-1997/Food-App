import Order from "../models/ordersModel.js";



export const createOrders = async(req,res) => {
    let ordersData = req.body.ordersData;
    await ordersData.splice(0,0,{orderDate: req.body.orderDate});

    let orderedUser = await Order.findOne({'email': req.body.email});
    if(orderedUser === null){
        try{
            await Order.create({email: req.body.email,ordersData: [ordersData]}).then(() => res.status(200).json({ success: true})); 
        }
        catch(e){
            console.log("Error in createOrders",e.message);
        return res.status(500).json({ error: "Error in createOrders Controller"}); 
        }
    }
    else{
        try{
            await Order.findOneAndUpdate({email: req.body.email},{$push: {ordersData: ordersData}}).then(() => res.status(200).json({ success: true})); 
        }
        catch(e){
            console.log("Error in createOrders",e.message);
        return res.status(500).json({ error: "Error in createOrders Controller"}); 
        }
    }
}


export const getOrders = async(req,res) => {
    try {
        let orderedUser = await Order.findOne({ 'email': req.body.email })
        //console.log(eId)
        res.json({ ordersData : orderedUser })
    } 
    catch(e){
        console.log("Error in getOrders",e.message);
        return res.status(500).json({ error: "Error in getOrders Controller"}); 
    }
}