const product = require('../models/product');



//* all product route functions

const getAllProducts =async (req,res)=>{
    const {company,name,price,rating,_id}=req.query;
    let queryObject = {}

    //*Search by the company
    if(company){
        queryObject.company = company
    }

//*Search by the name

if(name){
    queryObject.name = {$regex:name,$options:'i'}
}

//* search by id

if(_id){
    queryObject._id = _id
}

//* sort

    const products = await product.find(queryObject)
    res.status(200).json({products,nbHits:products.length})
}

module.exports =getAllProducts