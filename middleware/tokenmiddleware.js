var user=require("../model/user");
var jwt=require("jsonwebtoken");

var cekToken=function(req,res,next){
	var token=req.header("Authorization");
	if(token){
		token=token.replace("Bearer ","");

		try{
			const secretkey="anMgZ2FudGVuZyBzYXlhbmcgc2VtdWE=";
			var verif=jwt.verify(token,secretkey);
			user.findByPk(verif.id).then(data=>{
				if(data){
					next();
				}else{
					res.json({
						status:false,
						msg:"token salah atau user tidak di temukan"
					})						
				}	
			}).catch(err=>{
				res.json({
					status:false,
					msg:err
				})
			})
		}catch(err){
			res.json({
					status:false,
					msg:err
				})
		}



	}else{
		res.json({
			status:false,
			msg:"token tidak di bawa"
		})
	}
}

module.exports=cekToken;