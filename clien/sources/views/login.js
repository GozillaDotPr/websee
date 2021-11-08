import {JetView} from "webix-jet"

export default class Login extends JetView{
	config(){
		var context=this;
		webix.ui({
		modal:true,
		view:"window",
    	id:"loginView",
    	position:"center",
    	width:300,
    	head:"Login",
    	body:{
    		borderless:true,
    		view:"form",
    		id:"loginForm",
    		elements:[
    	    	{ view:"text", label:"Username", name:"nama"},
    	    	{ view:"text", type:"password", label:"Password", name:"pass"},
    	    	{ margin:5, cols:[
    	        	{ view:"button", value:"Login" , css:"webix_primary",click:()=>this.validasi()},
    	        	{template:""}
    	    	]}
    		]
    	}
		}).show();
		return {type:"clean",template:"<style>body{background:#39C0ED;}</style>"};
	}

	ready(){
		var session= webix.storage.session.get("loginNihBos");
		if(session){
			$$("loginView").hide();
		}
	}

	validasi(){
		var kontek = this;

		if($$('loginForm').validate()){
			var data= $$('loginForm').getValue();
			var callbackRes={
				success:function(response,data,xhr){
					$$("loginView").enable();
					response = JSON.parse(response);
					webix.alert(response.pesan);

					if(response.status){
						webix.storage.session.put('loginNihBos', response.data);
						$$("loginView").hide();
						kontek.app.show('/top/start');
					}
				},
				error:function(text,data,xhr){
					webix.alert(text);
					$$("loginView").enable();
					}
				};
				webix.ajax().post("http://localhost:3000/users/login", data, callbackRes);
		}
	}

}