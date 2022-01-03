const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'you must add a product name']
    },
    price:{
        type:Number,
        required:[true,'price must be added']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    company:{
        type:String,
        enum:{
            value:['iphone','samsung','oppo','huawei'],
            message:`{VALUE} is not supported`
        }
    },

}) 

module.export = mongoose.model('product',productSchema)