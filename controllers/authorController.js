const authorModel = require('../models/authorModel');

const createAuthor = async function(req,res){
    try {
        if(Object.keys(req.body).length!= 0){
            let authors = await authorModel.create(req.body);
            res.status(201).json({status:true, data:authors});
        }
        else{
            res.status(400).json({status:false, msg:"Bad Request!"});
        }
        
    } catch (error) {
        res.status(500).json({status:false, error:error.message})
        
    }
    

}

module.exports = {
    createAuthor
}