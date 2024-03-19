const {productModel} = require('../models/product.model');


exports.getListProduct = async (req, res, next) => {
    try {
        let list = await productModel.find({})
        res.json(list);
    } catch (error) {
        res.json({ error: "Not found", error: error });
    }
}

// Add product
exports.addProduct =  async (req, res, next) => {
    try {
        let newProduct = new productModel({
            name: req.body.name,
            price: req.body.price,
            brand: req.body.brand,
        });
        let obj = await newProduct.save()
        res.json({ status: "Add thành công", result: obj })
    } catch (error) {
        res.json({ status: "Add không thành công", result: error })
    }
}

// Update product
exports.updateProduct = async (req,res,next) =>{
    try {
        let id = req.params.id
        let obj ={
            name: req.body.name,
            price: req.body.price,
            brand: req.body.brand,
        };
        let newObj = await productModel.findByIdAndUpdate(id,obj);
        res.json({ status: "Update thành công", result: newObj })
    } catch (error) {
        res.json({ status: "Update không thành công", result: error })
    }
}