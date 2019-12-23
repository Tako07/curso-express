const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.status(200).json({
        data: productMock,
        message: 'product listed'
    });
});

router.get('/:productId', function(req, res){
    res.status(200).json({
        data: productMock,
        message: 'product listed'
    });
});

router.get('/', function(req, res){
    res.status(200).json({
        data: productMock,
        message: 'product listed'
    });
});