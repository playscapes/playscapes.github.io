webpackJsonp([1],{NEz9:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s=a("kxiW"),n=a.n(s),r={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){n.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=n.a.auth().currentUser.email)},methods:{logout:function(){var t=this;n.a.auth().signOut().then(function(){t.$router.push("/login"),window.location.reload(!0)})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Playscapes")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo02"}},[a("ul",{staticClass:"navbar-nav ml-auto mt-2 mt-lg-0"},[t.isLoggedIn?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/play"}},[t._v("Playboard")])],1):t._e(),t._v(" "),t.isLoggedIn?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v(t._s(t.currentUser))])],1):t._e(),t._v(" "),t.isLoggedIn?t._e():a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),t.isLoggedIn?t._e():a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Register")])],1),t._v(" "),t.isLoggedIn?a("li",{staticClass:"nav-item"},[a("button",{staticClass:"btn btn-outline-light my-2 my-sm-0",on:{click:t.logout}},[t._v("Logout")])]):t._e()])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]},l={name:"App",components:{Navbar:a("VU/8")(r,o,!1,null,null,null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},u=a("VU/8")(l,c,!1,null,null,null).exports,p=a("/ocq"),d=(a("881v"),n.a.initializeApp({apiKey:"AIzaSyCeOmk2Dn8KK175ip0Pmgb7cu1kd7j_M8o",authDomain:"playscapes01.firebaseapp.com",databaseURL:"https://playscapes01.firebaseio.com",projectId:"playscapes01",storageBucket:"playscapes01.appspot.com",messagingSenderId:"370840827427"}).firestore()),m={name:"dashboard",data:function(){return{employees:[]}},created:function(){var t=this;d.collection("employees").orderBy("employee_id").get().then(function(e){e.forEach(function(e){var a={id:e.id,employee_id:e.data().employee_id,name:e.data().name,dept:e.data().dept,position:e.data().position};t.employees.push(a)})})}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-5",attrs:{id:"dashboard"}},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("table",{staticClass:"table table-striped"},[t._m(1),t._v(" "),a("tbody",t._l(t.employees,function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(t._s(e.employee_id))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.dept))]),t._v(" "),a("td",[a("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:{name:"view-employee",params:{employee_id:e.employee_id}}}},[t._v("view")])],1)])}),0)]),t._v(" "),a("div",{staticClass:"card-footer"},[a("router-link",{staticClass:"btn btn-success",attrs:{to:"/new"}},[t._v("Add")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h4",[this._v("Employees")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("ID")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Name")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Department")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Edit")])])])}]},h=a("VU/8")(m,v,!1,null,null,null).exports,_={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var t=this;d.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(e){t.$router.push("/")}).catch(function(t){return console.log(err)})}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-5",attrs:{id:"new-employee"}},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.saveEmployee(e)}}},[a("div",{staticClass:"input-group mb-3"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.employee_id,expression:"employee_id"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.employee_id},on:{input:function(e){e.target.composing||(t.employee_id=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[t._m(2),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[t._m(3),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dept,expression:"dept"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.dept},on:{input:function(e){e.target.composing||(t.dept=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[t._m(4),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.position,expression:"position"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.position},on:{input:function(e){e.target.composing||(t.position=e.target.value)}}})]),t._v(" "),a("hr"),t._v(" "),a("div",[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn btn-outline-danger",attrs:{to:"/"}},[t._v("Cancel")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h4",[this._v("Edit Employees")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Employee ID")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Name")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Department")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Position")])])}]},g=a("VU/8")(_,f,!1,null,null,null).exports,y={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(t,e,a){d.collection("employees").where("employee_id","==",t.params.employee_id).get().then(function(t){t.forEach(function(t){a(function(e){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;d.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(e){e.forEach(function(e){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})},updateEmployee:function(){var t=this;confirm("Sure?")&&d.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(e){e.forEach(function(e){e.ref.update({employee_id:t.employee_id,name:t.name,dept:t.dept,position:t.position}).then(function(){t.$router.push({name:"view-employee",params:{employee_id:t.employee_id}})})})})}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-5",attrs:{id:"edit-employee"}},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.updateEmployee(e)}}},[a("div",{staticClass:"input-group mb-3"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.employee_id,expression:"employee_id"}],staticClass:"form-control",attrs:{type:"text",disabled:"",required:""},domProps:{value:t.employee_id},on:{input:function(e){e.target.composing||(t.employee_id=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[t._m(2),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[t._m(3),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dept,expression:"dept"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.dept},on:{input:function(e){e.target.composing||(t.dept=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[t._m(4),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.position,expression:"position"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.position},on:{input:function(e){e.target.composing||(t.position=e.target.value)}}})]),t._v(" "),a("hr"),t._v(" "),a("div",[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn btn-outline-danger",attrs:{to:"/"}},[t._v("Cancel")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h4",[this._v("Edit Employees")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Employee ID")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Name")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Department")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Position")])])}]},b=a("VU/8")(y,C,!1,null,null,null).exports,w={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(t,e,a){d.collection("employees").where("employee_id","==",t.params.employee_id).get().then(function(t){t.forEach(function(t){a(function(e){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;d.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(e){e.forEach(function(e){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})},deleteEmployee:function(){var t=this;confirm("Sure?")&&d.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-5",attrs:{id:"view-employee"}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h4",[t._v(t._s(t.name))])]),t._v(" "),a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item"},[t._v("Employee Id : "+t._s(t.employee_id))]),t._v(" "),a("li",{staticClass:"list-group-item"},[t._v("Department : "+t._s(t.dept))]),t._v(" "),a("li",{staticClass:"list-group-item"},[t._v("Position : "+t._s(t.position))])]),t._v(" "),a("div",{staticClass:"card-body"},[a("router-link",{staticClass:"btn btn-outline-dark",attrs:{to:"/"}},[t._v("Back")]),t._v(" "),a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"edit-employee",params:{employee_id:t.employee_id}}}},[t._v("Edit")]),t._v(" "),a("button",{staticClass:"btn btn-danger",on:{click:t.deleteEmployee}},[t._v("Delete")])],1),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-larg red",attrs:{to:{name:"edit-employee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)])])},staticRenderFns:[]},E=a("VU/8")(w,x,!1,null,null,null).exports,k={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(t){var e=this;n.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){alert("you are logged in"),window.location.reload(!0),e.$router.push("/")},function(t){alert(t.message)}),t.preventDefault()}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-5"},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body"},[a("form",[a("div",{staticClass:"input-group mb-3"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[t._m(2),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("buttun",{staticClass:"btn btn-outline-primary",on:{click:t.login}},[t._v("Login")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",[this._v("Login")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Email")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Password")])])}]},A=a("VU/8")(k,$,!1,null,null,null).exports,P={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(t){var e=this;n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(t){alert("Account Created"),window.location.reload(!0),e.$router.push("/")},function(t){alert(t.message)}),t.preventDefault()}}},q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-5"},[a("div",{staticClass:"card text-black bg-light mb-3"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body"},[a("form",[a("div",{staticClass:"input-group mb-3"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[t._m(2),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("buttun",{staticClass:"btn btn-outline-success",on:{click:t.register}},[t._v("Register")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",[this._v("Register")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Email")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Password")])])}]},D=a("VU/8")(P,q,!1,null,null,null).exports,N=(a("YrBu"),a("vwbq"),a("M4fF"),{name:"playboard",data:function(){return{employees:[],nrad:7,space:1,color:"#aaa",numi:50,numj:25,nindex:0,curAnchor:-1,grid:[],anchors:[]}},created:function(){var t=this;this.setGrid(),this.setAnchors(),this.calculateTheField(),window.addEventListener("keydown",function(e){"s"==e.key&&t.addAnchor(0),"x"==e.key&&t.addAnchor(1),"Backspace"!=e.key&&"d"!=e.key||t.deleteAnchor()})},methods:{addAnchor:function(t){var e={id:this.anchors.length,x:0,y:0,v:t};this.anchors.push(e),this.curAnchor=this.anchors.length-1,this.calculateTheField()},deleteAnchor:function(){-1!=this.curAnchor&&(this.anchors.splice(this.curAnchor),this.curAnchor=-1,this.calculateTheField())},setHexColor:function(t){return a("YrBu")("hsl("+String(240+120*t)+", 100%, 50%)").toHexString()},handleClickPoint:function(t){var e=this.anchors[this.curAnchor];e.x=t.x,e.y=t.y,this.calculateTheField(),console.log("anchor moved")},handleClickAnchor:function(t){this.curAnchor=t.id,console.log("anchor selected")},updateAnchorLocation:function(t){d.collection("anchors").where("id","==",t.id).get().then(function(e){e.forEach(function(e){e.ref.update({x:t.x,y:t.y})})})},setGrid:function(){var t,e,a=1;for(t=0;t<this.numi;t++)for(e=0;e<this.numj;e++){var i={id:a+=1,x:t,y:e,v:.5};this.grid.push(i)}},setAnchors:function(){var t;for(t=0;t<2;t++){var e={id:t,x:t,y:t,v:t};this.anchors.push(e)}},fit:function(t,e,a,i,s){return t>a&&(t=a),t<e&&(t=e),i+(s-i)*(t-e)/(a-e)},calculateTheField:function(){var t;for(t=0;t<this.grid.length;t++){var e,a=this.grid[t],i=0,s=0;for(e=0;e<this.anchors.length;e++){var n=this.anchors[e],r=Math.pow(n.x-a.x,2),o=Math.pow(n.y-a.y,2),l=Math.pow(r+o,.5);if(0==l){i=1e-6,s=n.v;break}var c=Math.pow(l,-3);s+=n.v*c,i+=(1-n.v)*c}var u=s/(s+i);a.v=this.fit(u,.25,.75,0,1),a.c=this.setHexColor(a.v)}for(e=0;e<this.anchors.length;e++){(n=this.anchors[e]).c=this.setHexColor(n.v)}}}}),U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-5",attrs:{id:"playboard"}},[a("svg",{attrs:{id:"picture",viewBox:"-250 -250 500 500"}},[a("circle",{attrs:{cx:"-450",cy:"-180",r:"18",fill:"blue",stroke:"#999"},on:{click:function(e){return t.addAnchor(0)}}}),t._v(" "),a("circle",{attrs:{cx:"-450",cy:"-140",r:"18",fill:"red",stroke:"#999"},on:{click:function(e){return t.addAnchor(1)}}}),t._v(" "),a("circle",{attrs:{cx:"-450",cy:"-100",r:"18",fill:"#333",stroke:"#999"},on:{click:function(e){return t.deleteAnchor()}}}),t._v(" "),t._l(t.grid,function(e){return[a("circle",{key:e.id,attrs:{cx:(e.x-t.numi/2)*(t.nrad+t.space)*2,cy:(e.y-t.numj/2)*(t.nrad+t.space)*2,r:t.nrad,fill:"#ddd",stroke:e.c,"stroke-width":"1.4"},on:{click:function(a){return t.handleClickPoint(e)}}})]}),t._v(" "),t._l(t.anchors,function(e){return[a("circle",{key:e.id,attrs:{cx:(e.x-t.numi/2)*(t.nrad+t.space)*2,cy:(e.y-t.numj/2)*(t.nrad+t.space)*2,r:t.nrad-2,fill:e.c},on:{click:function(a){return t.handleClickAnchor(e)}}})]})],2)])},staticRenderFns:[]};var F=a("VU/8")(N,U,!1,function(t){a("NEz9")},null,null).exports;i.a.use(p.a);var I=new p.a({routes:[{path:"/",name:"dashboard",component:h,meta:{requiresAuth:!0}},{path:"/play",name:"playboard",component:F,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:A,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:D,meta:{requiresGuest:!0}},{path:"/new",name:"new-employee",component:g,meta:{requiresAuth:!0}},{path:"/edit/:employee_id",name:"edit-employee",component:b,meta:{requiresAuth:!0}},{path:"/:employee_id",name:"view-employee",component:E,meta:{requiresAuth:!0}}]});I.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requiresAuth})?n.a.auth().currentUser?a():a({path:"/login",querry:{redirect:t.fullPath}}):t.matched.some(function(t){return t.meta.requiresGuest})&&n.a.auth().currentUser?(a(),a({path:"/",querry:{redirect:t.fullPath}})):a()});var R=I;i.a.config.productionTip=!1;var L=void 0;n.a.auth().onAuthStateChanged(function(t){L||(L=new i.a({el:"#app",router:R,components:{App:u},template:"<App/>"}))})}},["NHnr"]);
//# sourceMappingURL=app.62623c2e7613a129c391.js.map