var express = require('express');
var router = express.Router();
const user= require('../model/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hai');
});

router.get('/admin', function(req, res) {
  user.findAndCountAll().then(data=>{
      res.json({
        status:200,
        msg:'Berhasil',
        data:data
      });
  }).catch(err=>{
    res.json({
        status:400,
        msg:'error',
        err:err
      });
  })
});

module.exports = router;
