var express = require('express');
var router = express.Router();
const user= require('../model/user');
const {restrue,resfalse} = require('../config/api');
const jwt=require('jsonwebtoken');
const cekTok=require("../middleware/tokenmiddleware");
// function restrue(msg,status,data,res){
//   res.json({
//     status:status,
//     msg:msg,
//     data:data,
//   });
// }

// function resfalse(msg,status,err,res){
//   res.json({
//     status:status,
//     msg:msg,
//     err:err,
//   });
// }

// login
router.post('/login',function(req,res,next){
    var nama=req.body.nama;
    var pass=req.body.pass;

    user.findOne({
        where:{name:nama, password:pass}
    }).then(data=>{
        if(data){
            const payload={
                id:data.id,
                nama:data.nama,
                exp:Math.floor(Date.now()/1000)+3600
            }

            const secretkey="anMgZ2FudGVuZyBzYXlhbmcgc2VtdWE=";

            var token=jwt.sign(payload,secretkey);
            res.json({
                status:true,
                msg:"berhasil login",
                data:token,
            });
        }else{
            res.json({
                status:true,
                msg:"gagal login",
                data:[],
            });
        }
    }).catch(err=>{
        resfalse('error',false,err,res);
    })
});

/*tampil*/
router.get('/',cekTok, function(req, res, next) {
   user.findAndCountAll().then(data=>{
    restrue("berhasil",true,data,res);
  }).catch(err=>{
    resfalse('error',false,err,res);
  })
});

//tambah
router.post('/tambah', function(req, res, next) {
   user.create(req.body).then(data=>{
      restrue("berhasil tambah",true,data,res);
   }).catch(err=>{
      resfalse('error tambah',false,err,res);
   });
});

//update
router.post('/update', function(req, res, next) {
  user.update(req.body,{where:{id:req.body.id}}).then(data=>{
        restrue("berhasil update",true,data,res);
      }).catch(err=>{
        resfalse('error',false,err,res);
      });
});

//delete
router.delete('/delete', function(req, res, next) {
    user.destroy({where:{id:req.body.id}}).then(data=>{
        restrue("berhasil delete",true,data,res);
      }).catch(err=>{
        resfalse('error',false,err,res);
      });
});


module.exports = router;





















