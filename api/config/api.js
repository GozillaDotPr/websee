function resbener(msg,status,data,res){
	res.json({
    		status:status,
    		msg:msg,
    		data:data,
 		 });
}

function ressalah(msg,status,err,res){
	  res.json({
    	status:status,
    	msg:msg,
    	err:err,
  	 });
}
module.exports = {

	restrue: (msg,status,data,res)=>{
		res.json({
    		status:status,
    		msg:msg,
    		data:data,
 		 });
	},

	resfalse: (msg,status,err,res)=>{
	  res.json({
    	status:status,
    	msg:msg,
    	err:err,
  	 });
	},

	add:(model,data,res)=>{
		model.create(data).then(data=>{
      		resbener("berhasil tambah",true,data,res);
   		}).catch(err=>{
      		ressalah('error tambah',false,err,res);
   		});
	},

	drop:(model,data,res)=>{
		model.destroy({where:{id:data.id}}).then(data=>{
        	resbener("berhasil tambah",true,data,res);
      	}).catch(err=>{
        	ressalah('error tambah',false,err,res);
      	});
	},

	update:(model,data,res)=>{
		model.update(data,{where:{id:data.id}}).then(data=>{
        	resbener("berhasil tambah",true,data,res);
      	}).catch(err=>{
        	ressalah('error tambah',false,err,res);
     	});
	}


}