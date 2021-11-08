import "./styles/app.css";
import {JetApp, EmptyRouter, HashRouter } from "webix-jet";

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	: !PRODUCTION,
			start 	: "/top/start"
		};

		super({ ...defaults, ...config });
	}
}

if (!BUILD_AS_MODULE){
webix.ready(() => {
webix.attachEvent("onBeforeAjax",
function(mode, url, data, request, headers, files, promise){
var token = webix.storage.session.get('loginNihBos');
if(token){
headers["Authorization"] = "Bearer "+token;
}
}
);
new MyApp().render();
});
}