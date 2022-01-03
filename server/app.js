require('dotenv').config()
require('express-async-errors')

const express = require('express');

const app = express();

const connectDB = require('./db/connect');


//*the error handeler
/* const notFoundMiddleware = require('./errors/not-found')
const errorMiddleware = require('./errors/error-handler') */

//* home route
app.get('/',(req,res)=>{
    res.send('phone page')
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