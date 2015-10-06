"use strict";define("ryu-web-client/app",["exports","ember","ember/resolver","ember/load-initializers","ryu-web-client/config/environment"],function(e,t,n,a,r){var l;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](l,r["default"].modulePrefix),e["default"]=l}),define("ryu-web-client/application/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"ryu-web-client/application/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=new Array(2);return r[0]=e.createMorphAt(a,1,1),r[1]=e.createMorphAt(a,3,3),r},statements:[["inline","partial",["navbar"],[],["loc",[null,[2,2],[2,22]]]],["content","outlet",["loc",[null,[3,2],[3,12]]]]],locals:[],templates:[]}}())}),define("ryu-web-client/components/app-version",["exports","ember-cli-app-version/components/app-version","ryu-web-client/config/environment"],function(e,t,n){var a=n["default"].APP,r=a.name,l=a.version;e["default"]=t["default"].extend({version:l,name:r})}),define("ryu-web-client/components/nav-link-to/component",["exports","ember"],function(e,t){e["default"]=t["default"].LinkComponent.extend({tagName:"li"})}),define("ryu-web-client/components/nav-link-to/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:1,column:24}},moduleName:"ryu-web-client/components/nav-link-to/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("a");e.setAttribute(n,"href","");var a=e.createComment("");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[0]),0,0),a},statements:[["content","yield",["loc",[null,[1,11],[1,20]]]]],locals:[],templates:[]}}())}),define("ryu-web-client/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("ryu-web-client/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("ryu-web-client/index/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:9,column:6}},moduleName:"ryu-web-client/index/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","row");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","col-md-12");var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("h4"),l=e.createTextNode("1. Launch Open Flow Controller Rest Server");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("pre"),l=e.createTextNode("ryu-manager ./vendor/ryu/ryu/app/ofctl_rest.py");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n\n        ");e.appendChild(a,r);var r=e.createElement("h4"),l=e.createTextNode("2. Launch Mininet");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("pre"),l=e.createTextNode("sudo mn --topo=tree,1,3 --mac --controller=remote --switch ovsk,protocols=OpenFlow13");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("ryu-web-client/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ryu-web-client/config/environment"],function(e,t,n){var a=n["default"].APP,r=a.name,l=a.version;e["default"]={name:"App Version",initialize:t["default"](r,l)}}),define("ryu-web-client/initializers/export-application-global",["exports","ember","ryu-web-client/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("ryu-web-client/navbar/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:10,column:10},end:{line:10,column:65}},moduleName:"ryu-web-client/navbar/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Ryu Web Client");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:15,column:14},end:{line:15,column:42}},moduleName:"ryu-web-client/navbar/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Home");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:16,column:14},end:{line:16,column:64}},moduleName:"ryu-web-client/navbar/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("a");e.setAttribute(n,"href","");var a=e.createTextNode("Stats");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:20,column:6}},moduleName:"ryu-web-client/navbar/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("nav");e.setAttribute(n,"class","navbar navbar-inverse");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","container-fluid");var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","navbar-header");var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("button");e.setAttribute(l,"type","button"),e.setAttribute(l,"class","navbar-toggle collapsed"),e.setAttribute(l,"data-toggle","collapse"),e.setAttribute(l,"data-target","#main-navbar");var d=e.createTextNode("\n                ");e.appendChild(l,d);var d=e.createElement("span");e.setAttribute(d,"class","sr-only");var i=e.createTextNode("Toggle navigation");e.appendChild(d,i),e.appendChild(l,d);var d=e.createTextNode("\n                ");e.appendChild(l,d);var d=e.createElement("span");e.setAttribute(d,"class","icon-bar"),e.appendChild(l,d);var d=e.createTextNode("\n                ");e.appendChild(l,d);var d=e.createElement("span");e.setAttribute(d,"class","icon-bar"),e.appendChild(l,d);var d=e.createTextNode("\n                ");e.appendChild(l,d);var d=e.createElement("span");e.setAttribute(d,"class","icon-bar"),e.appendChild(l,d);var d=e.createTextNode("\n            ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n          ");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("\n        ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n\n        ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","collapse navbar-collapse"),e.setAttribute(r,"id","main-navbar");var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("ul");e.setAttribute(l,"class","nav navbar-nav");var d=e.createTextNode("\n              ");e.appendChild(l,d);var d=e.createComment("");e.appendChild(l,d);var d=e.createTextNode("\n              ");e.appendChild(l,d);var d=e.createComment("");e.appendChild(l,d);var d=e.createTextNode("\n            ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n        ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createComment(" /.navbar-collapse ");e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createComment(" /.container-fluid ");e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0,1]),r=e.childAt(a,[3,1]),l=new Array(3);return l[0]=e.createMorphAt(e.childAt(a,[1]),3,3),l[1]=e.createMorphAt(r,1,1),l[2]=e.createMorphAt(r,3,3),l},statements:[["block","link-to",["index"],["class","navbar-brand"],0,null,["loc",[null,[10,10],[10,77]]]],["block","nav-link-to",["index"],[],1,null,["loc",[null,[15,14],[15,58]]]],["block","link-to",["stats"],["tagName","li"],2,null,["loc",[null,[16,14],[16,76]]]]],locals:[],templates:[e,t,n]}}())}),define("ryu-web-client/router",["exports","ember","ryu-web-client/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("stats",function(){this.route("switches")})}),e["default"]=a}),define("ryu-web-client/stats/index/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:22,column:6}},moduleName:"ryu-web-client/stats/index/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","row");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","col-md-12");var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("h2"),l=e.createTextNode("Retrieve the switch stats");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("ul"),l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("li"),d=e.createTextNode("Get all switches");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("li"),d=e.createTextNode("Get the desc stats");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("li"),d=e.createTextNode("Get all flows stats");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("li"),d=e.createTextNode("Get flows stats filtered by fields");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("li"),d=e.createTextNode("Get aggregate flow stats");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("li"),d=e.createTextNode("Get aggregate flow stats filtered by fields");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("li"),d=e.createTextNode("Get ports stats");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("li"),d=e.createTextNode("Get ports description");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("li"),d=e.createTextNode("Get queues stats");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("li"),d=e.createTextNode("Get groups stats");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("li"),d=e.createTextNode("Get group description stats");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("li"),d=e.createTextNode("Get group features stats");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("li"),d=e.createTextNode("Get meters stats");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("li"),d=e.createTextNode("Get meter config stats");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("li"),d=e.createTextNode("Get meter features stats");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n        ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("ryu-web-client/stats/route",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("ryu-web-client/stats/switch/model",["exports","ember-data"],function(e,t){e["default"]=t["default"].Model.extend({})}),define("ryu-web-client/stats/switches/route",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("ryu-web-client/stats/switches/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"ryu-web-client/stats/switches/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("ryu-web-client/stats/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:5,column:6},end:{line:5,column:69}},moduleName:"ryu-web-client/stats/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("a");e.setAttribute(n,"href","");var a=e.createTextNode("List all");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0",loc:{source:null,start:{line:6,column:6},end:{line:6,column:66}},moduleName:"ryu-web-client/stats/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("a");e.setAttribute(n,"href","");var a=e.createTextNode("Add new");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{topLevel:!1,revision:"Ember@2.1.0",loc:{source:null,start:{line:1,column:0},end:{line:11,column:0}},moduleName:"ryu-web-client/stats/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),a=e.createTextNode("Stats");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","well");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("ul");e.setAttribute(a,"class","nav nav-pills");var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2,1]),r=new Array(3);return r[0]=e.createMorphAt(a,1,1),r[1]=e.createMorphAt(a,3,3),r[2]=e.createMorphAt(t,4,4,n),r},statements:[["block","link-to",["libraries.index"],["tagName","li"],0,null,["loc",[null,[5,6],[5,81]]]],["block","link-to",["libraries.new"],["tagName","li"],1,null,["loc",[null,[6,6],[6,78]]]],["content","outlet",["loc",[null,[10,0],[10,10]]]]],locals:[],templates:[e,t]}}())}),define("ryu-web-client/config/environment",["ember"],function(e){var t="ryu-web-client";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("ryu-web-client/tests/test-helper"):require("ryu-web-client/app")["default"].create({name:"ryu-web-client",version:"0.0.0+996099d5"});