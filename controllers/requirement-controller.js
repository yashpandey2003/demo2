const Requirement = require('../models/requirement-model');

const requirement = async (req, res)=>{
    try{
        const {username, email, phone, address, details} = req.body;
        

        const requirementCreated = await Requirement.create({username, email, phone, address, details});
        res.status(200).json({message:requirementCreated});

    }
    catch (error){
        res.status(500).json({message: "Internal server error"});
    }
}

module.exports = requirement;