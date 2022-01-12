const cart = require('../models/cart')



const getAllCartProducts = async(req,res)=>{
    const cartProduct = await cart.find(req.body)
    res.status(200).json({cartProduct})
}

const creatCart = async(req,res)=>{
    const newCart = new cart(req.body)
    
    const savedCart = await newCart.save()
    res.status(200).json({savedCart})
}

module.exports = {
    getAllCartProducts,
    creatCart,
}