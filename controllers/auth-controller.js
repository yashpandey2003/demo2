const User = require('../models/user-model');
require("dotenv").config();


const home = async (req, res)=>{
    try{
        res.send("Welcome to router");

    }
    catch (error){
        console.log(error);
    }

}
const register = async (req, res)=>{
    try{
        console.log(req.body);
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message: "User already exist"});
        }

        const userCreated = await User.create({username, email, phone, password});

        res.status(201).json({msg:"Registration Successful", token: await userCreated.generateToken(), userId:userCreated.id.toString(), });
    }
    catch (error){
        res.status(500).json({message: "Internal server error"});
    }
}


const login = async (req, res)=>{
    try{
        const {email, password} = req.body;
        

        const userExist = await User.findOne({email});
        if(!userExist){
            res.status(400).json({message:"Invalid Credential"});
        }
        const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json({message:"Login Successful", token: await userExist.generateToken(), userId:userExist.id.toString(), });
        }
        else{
            res.status(400).json({message: "Invalid email of password"});
        }


    }
    catch (error){
        res.status(500).json({message: "Internal server error"});
    }
}
const user = async (req, res)=>{
    try {
        const userData = req.user;
        // console.log(userData);
        return res.status(200).json({userData});
        
    } catch (error) {
        console.log(`error from the user route ${error}`);
        
    }

}


module.exports = {home, register, login, user};
