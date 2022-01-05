const product = require('../models/product');



//* all product route functions

const getAllProducts =async (req,res)=>{
    const products = await product.find()
    res.status(200).json({products,nbHits:products.length})
}

module.exports =getAllProducts