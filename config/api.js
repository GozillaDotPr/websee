

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
	}

}