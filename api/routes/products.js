const express = require('express');

const router = express.Router();

router.get('/',  ( req, res, next ) => {
   res.status(200).json({
       message: 'handling get request to products'
   })
});

router.post('/',  ( req, res, next ) => {
    const product = {
        name : req.body.name,  //bodyParser to parse body data/name
        price : req.body.price
     };
    res.status(201).json({
        message: 'handling post request to products',
        createdProduct: product
    })
});

router.get('/:productId',  ( req, res, next ) => {

    const id = req.params.productId;

    if(id === 'special'){
        res.status(200).json({
            message: 'you requseted the special product',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'you passed and id',
            id: id
        });

    }

});


router.patch('/:productId',  ( req, res, next ) => {
    res.status(200).json({
        message :'edited  product'
    })
});

router.delete('/:productId',  ( req, res, next ) => {
    res.status(200).json({
        message :'deleted product '
    })
});



module.exports = router;