const bcrypt = require('bcrypt');

const controller = {
    register :function(req, res, next) {
        console.log(bcrypt.hashSync(req.body.password,10));
        console.log(req.files[0].filename);
      }
}

module.exports = controller;