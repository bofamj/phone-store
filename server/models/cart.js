const mongoose = require('mongoose');



const cartSchema = new mongoose.Schema({
        
            name:{
                type: String,
            },
            price:{
                type: Number,
            },
            imageURL:{
                type: String,
            },
            quantity:{
                type:Number,
                default:1
            }
        
},{timestamp:true});

module.exports = mongoose.model('cart', cartSchema)