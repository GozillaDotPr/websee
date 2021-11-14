var express = require('express');
var router = express.Router();
const user= require('../model/user');
const { add,update,drop,} = require('../config/api');
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
                status:false,
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
router.post('/tambah',cekTok, function(req, res, next) {
    add(user,req.body,res);
});

//update
router.post('/update',cekTok, function(req, res, next) {
  update(user,req.body,res);
});

//delete
router.delete('/delete',cekTok, function(req, res, next) {
    drop(user,req.body,res);
});


module.exports = router;





















