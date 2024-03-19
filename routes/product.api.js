const express = require('express');
const router = express.Router();
const ProCtrll = require('../controllers/product.controller');
router.get("/getListProduct",ProCtrll.getListProduct);
router.post("/addProduct",ProCtrll.addProduct);
router.put("/updateProduct",ProCtrll.updateProduct);
module.exports = router;
