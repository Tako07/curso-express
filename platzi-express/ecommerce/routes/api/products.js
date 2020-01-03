const express = require('express');
const router = express.Router();
const ProductServices = require('../../services/products');

const productServices = new ProductServices();

router.post('/', async function(req, res, next){
    const { body : product} = req;

    try {
        const setProduct = await productServices.createProduct({ product });

        res.status(201).json({
            data: setProduct,
            message: 'product created'
        });
    } catch (err) {
        next(err);
    }
});

router.get('/', async function(req, res, next){
    const { tags } = req.query;
    try {
        const products = await productServices.getProducts({ tags });
    
        res.status(200).json({
            data: products,
            message: 'product listed'
        });   
    } catch (err) {
        next(err);
    }
});

router.get('/:productId', async function(req, res, next){
    const { productId } = req.params;
    try {
        const product = await productServices.getProduct({ productId });

        res.status(200).json({
            data: product,
            message: 'product retrived'
        });

    } catch (err) {
        next(err);
    }
});

router.put('/:productId', async function(req, res, next){
    const { productId } = req.params;
    const { body: product } = req;

    try {
        const updateProduct = await productServices.updateProduct({ productId, product });

        res.status(200).json({
            data: updateProduct,
            message: 'product updated'
        });
    } catch (err) {
        next(err);
    }
});

router.delete('/:productId', async function(req, res, next){
    const { productId } = req.params;

    try {
        const product = await productServices.deleteProduct({ productId });

        res.status(200).json({
            data: product,
            message: 'product deleted'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;