const express = require('express');

const router = express.Router()

const {getAllCartProducts,creatCart} = require('../controllers/cart')


router.route('/').get(getAllCartProducts).post(creatCart)



module.exports = router