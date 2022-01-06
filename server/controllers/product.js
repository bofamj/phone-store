const product = require('../models/product');



//* all product route functions

const getAllProducts =async (req,res)=>{
    const {company,name,price,rating,}=req.query;
    let queryObject = {}

    //*Search by the company
    if(company){
        queryObject.company = company
    }

//*Search by the name

if(name){
    queryObject.name = {$regex:name,$options:'i'}
}

    const products = await product.find(queryObject)
    res.status(200).json({products,nbHits:products.length})
}

module.exports =getAllProducts