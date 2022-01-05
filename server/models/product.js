const mongoose = require('mongoose');


/* const productSchema = new mongoose.Schema({
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
    company:String,
        
    
    description:String
    ,
    image: Buffer
    

}) 

module.export = mongoose.model('product',productSchema) */
 const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'product name must be provided'],
    },
    price: {
      type: Number,
      required: [true, 'product price must be provided'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    company: {
      type: String,
      enum: {
        values: ['redmagic', 'huawei', 'oppo', 'samsung' , 'appel' , 'motorola' , 'nokia' , 'BLU'],
        message: '{VALUE} is not supported',
      },
      // enum: ['ikea', 'liddy', 'caressa', 'marcos'],
    },
    description:String,
    imageURL: String
  })
  
  module.exports = mongoose.model('product', productSchema) 