const {model, Schema} = require('mongoose'); 

const serviceSchema = new Schema({
    work:{
        type:String,
        required:true,
    },
    pay:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }
})

const Service = new model("Service", serviceSchema);

module.exports = Service;
