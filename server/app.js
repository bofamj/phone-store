require('dotenv').config()
require('express-async-errors')



//!test
const product = require('./models/product')

const express = require('express');

const app = express();

const connectDB = require('./db/connect');
app.use(express.json())


//*the error handeler
/* const notFoundMiddleware = require('./errors/not-found')
const errorMiddleware = require('./errors/error-handler') */

//* home route
app.get('/',(req,res)=>{
    res.status(200).send(`<h1>stor api</h1><a href="/api/v1/products">products</a>`)
})


app.get('/api/v1/products',async(req,res)=>{
    const products = await product.find({})
    res.status(200).send({products})
})

/* app.use(notFoundMiddleware)
app.use(errorMiddleware) */


const port = process.env.PORT || 3000

const start =async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`app is listenig on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()