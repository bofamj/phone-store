const express = require('express');

const router = express.Router()

const {getAllCartProducts,creatCart,deletecartItem,updateCart} = require('../controllers/cart')


router.route('/').get(getAllCartProducts).post(creatCart)
router.route('/:id').delete(deletecartItem).patch(updateCart)


module.exports = router