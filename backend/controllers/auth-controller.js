import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from "../utilities/generateToken.js";

export const signup = async(req,res) => {
    try{
        const {name , location , email , password } = req.body;
        const userData = await User.findOne({email});

        if(userData){
            return res.status(400).json({ error: "Email ID already exists"}); 
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name , location , email , password: hashedPassword
        });

        if(newUser){
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save(); //save to database
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                location: newUser.location,
                email: newUser.email,
            });
        }
        else{
            res.status(500).json({ error: "Invalid User Data"}); 
        }  
    }

    catch(e){
        console.log("Error in Signup Controller",e.message);
        return res.status(500).json({ error: "Error in Signup Controller"}); 
    }
}

export const login = async(req,res) => {
    try{
        const { email , password } = req.body;
        const userData = await User.findOne({email});
        const isCorrectPassword = await bcrypt.compare(password, userData?.password || "");

        if(!userData || !isCorrectPassword ){
            return res.status(400).json({ error: "Invalid UserName or Password"}); 
        }

        const token = generateTokenAndSetCookie(userData._id,res);

        res.status(200).json({
            _id: userData._id,
            name: userData.name,
            location: userData.location,
            email: userData.email,
            authToken : token
        });

    }
    catch(e){
        console.log("Error in Login Controller",e.message);
        return res.status(500).json({ error: "Error in Login Controller"}); 
    }
}

export const logout = (req,res) => {
    try{
        res.cookie("jwt","",{maxAge : 0});
        res.status(200).json({ message: "Logged Out Successfully"});
    }
    catch(e){
        console.log("Error in Logout Controller",e.message);
        return res.status(500).json({ error: "Error in Logout Controller"}); 
    }
}