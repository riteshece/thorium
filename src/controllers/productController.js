const productModel= require("../models/productModel")

const createProduct= async function (req, res) {
    let data= req.body
    let savedData= await productModel.create(data)
    // console.log(req.newAttribute)
    res.send({msg: savedData})
}

const getProductData= async function (req, res) {
    let allUsers= await productModel.find()
    console.log(req.newAttribute)
    res.send({msg: allUsers})
}

module.exports.createProduct= createProduct
module.exports.getProductData= getProductData