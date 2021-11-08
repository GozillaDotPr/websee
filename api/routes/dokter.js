var express = require('express');
var router = express.Router(); 
const dokter= require('../model/dokter');
const {restrue,resfalse} = require('../config/api');
const cekTok=require("../middleware/tokenmiddleware");

router.get('/',cekTok, function(req, res, next) {
   dokter.findAndCountAll().then(data=>{
    restrue("berhasil",true,data,res);
  }).catch(err=>{
    resfalse('error',false,err,res);
  })
});

//tambah
router.post('/tambah',cekTok, function(req, res, next) {
   dokter.create(req.body).then(data=>{
      restrue("berhasil tambah",true,data,res);
   }).catch(err=>{
      resfalse('error tambah',false,err,res);
   });
});

//update
router.post('/update',cekTok, function(req, res, next) {
  dokter.update(req.body,{where:{id:req.body.id}}).then(data=>{
        restrue("berhasil update",true,data,res);
      }).catch(err=>{
        resfalse('error',false,err,res);
      });
});

//delete
router.delete('/delete',cekTok, function(req, res, next) {
    dokter.destroy({where:{id:req.body.id}}).then(data=>{
        restrue("berhasil delete",true,data,res);
      }).catch(err=>{
        resfalse('error',false,err,res);
      });
});


module.exports = router;
