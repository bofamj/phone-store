const mongoose = require('mongoose');



const cartSchema = new mongoose.Schema({
    products:[
        {
            product:{
                type:Array,
            },
            quantity:{
                type:Number,
                default:1
            }
        }
    ],
},{timestamp:true});

module.exports = mongoose.model('cart', cartSchema)