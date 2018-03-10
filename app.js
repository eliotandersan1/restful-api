const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

const app = express();

app.use(morgan('dev'));// helps Logging info to console || logger middleware
app.use(bodyParser.urlencoded({extended : false}));//to extract url encoded body (only short data)
app.use(bodyParser.json);                           // to extract json


//product routes middleware
app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);


// custom error displaying for other routes
app.use((req, res, next) =>{
    const error = new Error('not found');
    error.status = 404;
    next(error);
});


//other errors handling
app.use( (error, req, res, next ) =>{
    res.status(error.status || 404);
    res.json({
        error: {
            message: error.message
        }
    });
});



module.exports = app;