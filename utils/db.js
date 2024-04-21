const mongoose = require('mongoose');
require("dotenv").config();

const URI = process.env.MONGO_URL;

const connectDb = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log("Connected");
    }
    catch (error){
        console.log("Connection failed");
        process.exit(0);
    }
    
}
module.exports = connectDb;
