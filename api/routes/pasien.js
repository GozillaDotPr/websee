var express = require('express');
var router = express.Router();
const pasien= require('../model/pasien');
const {restrue,resfalse} = require('../config/api');

router.get('/', function(req, res, next) {
   pasien.findAll().then(data=>{
    restrue("berhasil",true,data,res);
  }).catch(err=>{
    resfalse('error',false,err,res);
  })
});

//tambah
router.post('/tambah', function(req, res, next) {
   pasien.create(req.body).then(data=>{
      restrue("berhasil tambah",true,data,res);
   }).catch(err=>{
      resfalse('error tambah',false,err,res);
   });
});

//update
router.post('/update', function(req, res, next) {
    console.log(req.body);
    pasien.update(req.body,{where:{no_rm:req.body.no_rm}}).then(data=>{
        restrue("berhasil update",true,data,res);
      }).catch(err=>{
        resfalse('error',false,err,res);
      });
});

//delete
router.delete('/delete', function(req, res, next) {
    pasien.destroy({where:{no_rm:req.body.no_rm}}).then(data=>{
        restrue("berhasil delete",true,data,res);
      }).catch(err=>{
        resfalse('error',false,err,res);
      });
});


module.exports = router;
