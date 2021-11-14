import {JetView, plugins} from "webix-jet";



export default class TopView extends JetView{
	config(){
		var header = {
			type:"header", template:this.app.config.name, css:"webix_header app_header"
		};

		var menu = {
			view:"menu", id:"top:menu", 
			css:"app_menu",
			width:180, layout:"y", select:true,
			template:"<span class='webix_icon #icon#'></span> #value# ",
			data:[
				{ value:"Dashboard",id:"start", icon:"wxi-columns" },
				{ value:"Data",id:"data",  icon:"wxi-pencil" },
				{ value:"Pasien",id:"pasien",  icon:"wxi-pencil" },
			]
		};

		var keluar={view:"button",label:"Logout",click:()=>this.logoutz()}

		var ui = {
			type:"clean", paddingX:5, css:"app_layout", cols:[
				{  paddingX:5, paddingY:10, rows: [ {css:"webix_shadow_medium", rows:[header, menu,keluar]} ]},
				{ type:"wide", paddingY:10, paddingX:5, rows:[
					{ $subview:true } 
				]}
			]
		};

		return ui;
	}
	init(){
		this.use(plugins.Menu, "top:menu");
	}

	ready(){
		var session=webix.storage.session.get("loginNihBos");

		if(session){
			this.app.show("/top/start");
		}else{
			this.app.show("/login");
		}
		
	}

	logoutz() {
		webix.storage.session.clear();
		this.app.show("/login");
	}























}