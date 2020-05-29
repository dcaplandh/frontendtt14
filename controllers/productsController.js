const fs = require('fs');

var products = JSON.parse(fs.readFileSync("./database/products.json"));


const controller = {
    list: function(req, res, next) {
        let similars = products.filter(product=>{
            return product.price < 20000;
        });
        res.render('products/list',
        {   products,
            similars
        });
    }
}

module.exports = controller;