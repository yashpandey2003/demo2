const mongoose = require('mongoose');

const requirementSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,

    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    details:{
        type:String,
        require:true,
    }

})

const Requirement = new mongoose.model("Requirement", requirementSchema);

module.exports = Requirement;
