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

const deletecartItem = async(req,res)=>{
    try{
        const {id:itemID} = req.params;
        const item = await cart.findOneAndDelete({_id:itemID});
        if(!item){
            return res.status(401).json({message: `no item match this id${itemID}`})
        }else{
            return res.status(200).json({item})
        }
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getAllCartProducts,
    creatCart,
    deletecartItem,
}