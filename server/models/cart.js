const mongoose = require('mongoose');



const cartSchema = new mongoose.Schema({
    products:[
        {
            product:{
                type:String,
            },
            quantity:{
                type:Number,
                default:1
            }
        }
    ],
},{timestamp:true});

module.exports = mongoose.model('cart', cartSchema)