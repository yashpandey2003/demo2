const mongoose = require('mongoose');

const URI = "mongodb://0.0.0.0:27017/mern";

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
