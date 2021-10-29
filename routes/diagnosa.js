var express = require('express');
var router = express.Router();
const di= require('../model/diagnosa');
const {restrue,resfalse} = require('../config/api');

router.get('/', function(req, res, next) {
   di.findAndCountAll().then(data=>{
    restrue("berhasil",true,data,res);
  }).catch(err=>{
    resfalse('error',false,err,res);
  })
});

//tambah
router.post('/tambah', function(req, res, next) {
   di.create(req.body).then(data=>{
      restrue("berhasil tambah",true,data,res);
   }).catch(err=>{
      resfalse('error tambah',false,err,res);
   });
});

//update
router.post('/update', function(req, res, next) {
  di.update(req.body,{where:{id:req.body.id}}).then(data=>{
        restrue("berhasil update",true,data,res);
      }).catch(err=>{
        resfalse('error',false,err,res);
      });
});

//delete
router.delete('/delete', function(req, res, next) {
    di.destroy({where:{id:req.body.id}}).then(data=>{
        restrue("berhasil delete",true,data,res);
      }).catch(err=>{
        resfalse('error',false,err,res);
      });
});


module.exports = router;
