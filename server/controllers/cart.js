const cart = require('../models/cart')


//* send data
const getAllCartProducts = async(req,res)=>{
    const cartProduct = await cart.find(req.body)
    res.status(200).json({cartProduct})
}


//*add to cart
const creatCart = async(req,res)=>{
    const newCart = new cart(req.body)
    
    const savedCart = await newCart.save()
    res.status(200).json({savedCart})
}



//* delet from cart
const deletecartItem = async(req,res)=>{
    
        const {id:itemID} = req.params;
        const item = await cart.findOneAndDelete({_id:itemID});
        if(!item){
            return res.status(401).json({message: `no item match this id${itemID}`})
        }else{
            return res.status(200).json({item})
        }
    
}


//* update cart

const updateCart = async(req,res)=>{
    const {id:itemID} = req.params;

    const item = await cart.findOneAndUpdate({_id:itemID},req.body,{
        new:true,
        runValidators:true
    });

    if(!item){
        res.status(401).json({message:`no item match this id${itemID}`})
    }else{
        res.status(200).json({item})
    }

}









module.exports = {
    getAllCartProducts,
    creatCart,
    deletecartItem,
    updateCart,
}