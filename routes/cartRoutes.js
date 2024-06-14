const express = require('express');
const router = express.Router();
const cartApi = require('../apis/cartApis');

router.get("/getcart", cartApi.get_cart)
router.post("/insertcart", cartApi.insert_cart);
router.delete("/reducecart", cartApi.reduce_cart);

module.exports = router;
