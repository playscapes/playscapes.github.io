webpackJsonp([1],{DuPI:function(e,t){},GEgz:function(e,t){},KpPp:function(e,t,n){var i;i=function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t){var n;function i(e){return"function"==typeof e.key?e.key():e.key}function a(e){return"[object Object]"===Object.prototype.toString.call(e)}function r(e){var t=e.val(),n=a(t)?t:{".value":t};return n[".key"]=i(e),n}function s(e,t){for(var n=0;n<e.length;n++)if(e[n][".key"]===t)return n;return-1}function o(e,t,n){var o=!1,l=null,u=null;if(a(n)&&n.hasOwnProperty("source")&&(o=n.asObject,l=n.cancelCallback,u=n.readyCallback,n=n.source),!a(n))throw new Error("VueFire: invalid Firebase binding source.");var d,h=("function"==typeof(d=n).ref?d=d.ref():"object"==typeof d.ref&&(d=d.ref),d);e.$firebaseRefs[t]=h,e._firebaseSources[t]=n,l&&(l=l.bind(e)),o?function(e,t,n,i){c(e,t,{});var a=n.on("value",function(n){e[t]=r(n)},i);e._firebaseListeners[t]={value:a}}(e,t,n,l):function(e,t,n,a){var o=[];c(e,t,o);var l=n.on("child_added",function(e,t){var n=t?s(o,t)+1:0;o.splice(n,0,r(e))},a),u=n.on("child_removed",function(e){var t=s(o,i(e));o.splice(t,1)},a),d=n.on("child_changed",function(e){var t=s(o,i(e));o.splice(t,1,r(e))},a),h=n.on("child_moved",function(e,t){var n=s(o,i(e)),a=o.splice(n,1)[0],r=t?s(o,t)+1:0;o.splice(r,0,a)},a);e._firebaseListeners[t]={child_added:l,child_removed:u,child_changed:d,child_moved:h}}(e,t,n,l),u&&n.once("value",u.bind(e))}function c(e,t,i){t in e?e[t]=i:n.util.defineReactive(e,t,i)}function l(e){e.$firebaseRefs||(e.$firebaseRefs=Object.create(null),e._firebaseSources=Object.create(null),e._firebaseListeners=Object.create(null))}var u={created:function(){var e=this.$options.firebase;if("function"==typeof e&&(e=e.call(this)),e)for(var t in l(this),e)o(this,t,e[t])},beforeDestroy:function(){if(this.$firebaseRefs){for(var e in this.$firebaseRefs)this.$firebaseRefs[e]&&this.$unbind(e);this.$firebaseRefs=null,this._firebaseSources=null,this._firebaseListeners=null}}};function d(e){(n=e).mixin(u);var t=n.config.optionMergeStrategies;t.firebase=t.provide,n.prototype.$bindAsObject=function(e,t,n,i){l(this),o(this,e,{source:t,asObject:!0,cancelCallback:n,readyCallback:i})},n.prototype.$bindAsArray=function(e,t,n,i){l(this),o(this,e,{source:t,cancelCallback:n,readyCallback:i})},n.prototype.$unbind=function(e){!function(e,t){var n=e._firebaseSources&&e._firebaseSources[t];if(!n)throw new Error('VueFire: unbind failed: "'+t+'" is not bound to a Firebase reference.');var i=e._firebaseListeners[t];for(var a in i)n.off(a,i[a]);e[t]=null,e.$firebaseRefs[t]=null,e._firebaseSources[t]=null,e._firebaseListeners[t]=null}(this,e)}}"undefined"!=typeof window&&window.Vue&&d(window.Vue),e.exports=d}])},e.exports=i()},MqLM:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a=n("kxiW"),r=n.n(a),s={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){r.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=r.a.auth().currentUser.email)},methods:{logout:function(){var e=this;r.a.auth().signOut().then(function(){e.$router.push("/login"),window.location.reload(!0)})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Playscapes")]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo02"}},[n("ul",{staticClass:"navbar-nav ml-auto mt-2 mt-lg-0"},[e.isLoggedIn?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/rtplay"}},[e._v("RT Playboard")])],1):e._e(),e._v(" "),e.isLoggedIn?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/threed"}},[e._v("3D")])],1):e._e(),e._v(" "),e.isLoggedIn?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v(e._s(e.currentUser))])],1):e._e(),e._v(" "),e.isLoggedIn?e._e():n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[e._v("Login")])],1),e._v(" "),e.isLoggedIn?e._e():n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[e._v("Register")])],1),e._v(" "),e.isLoggedIn?n("li",{staticClass:"nav-item"},[n("button",{staticClass:"btn btn-outline-light my-2 my-sm-0",on:{click:e.logout}},[e._v("Logout")])]):e._e()])])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}]},c={name:"App",components:{Navbar:n("VU/8")(s,o,!1,null,null,null).exports}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",[t("router-view")],1)],1)},staticRenderFns:[]},u=n("VU/8")(c,l,!1,null,null,null).exports,d=n("/ocq"),h=(n("881v"),r.a.initializeApp({apiKey:"AIzaSyCeOmk2Dn8KK175ip0Pmgb7cu1kd7j_M8o",authDomain:"playscapes01.firebaseapp.com",databaseURL:"https://playscapes01.firebaseio.com",projectId:"playscapes01",storageBucket:"playscapes01.appspot.com",messagingSenderId:"370840827427"})),p=h.firestore(),m=h.database(),v={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;p.collection("employees").orderBy("employee_id").get().then(function(t){t.forEach(function(t){var n={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(n)})})}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-5",attrs:{id:"dashboard"}},[n("div",{staticClass:"card"},[e._m(0),e._v(" "),n("table",{staticClass:"table table-striped"},[e._m(1),e._v(" "),n("tbody",e._l(e.employees,function(t){return n("tr",{key:t.id},[n("th",{attrs:{scope:"row"}},[e._v(e._s(t.employee_id))]),e._v(" "),n("td",[e._v(e._s(t.name))]),e._v(" "),n("td",[e._v(e._s(t.dept))]),e._v(" "),n("td",[n("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[e._v("view")])],1)])}),0)]),e._v(" "),n("div",{staticClass:"card-footer"},[n("router-link",{staticClass:"btn btn-success",attrs:{to:"/new"}},[e._v("Add")])],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header"},[t("h4",[this._v("Players")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",{attrs:{scope:"col"}},[this._v("ID")]),this._v(" "),t("th",{attrs:{scope:"col"}},[this._v("Name")]),this._v(" "),t("th",{attrs:{scope:"col"}},[this._v("Role")]),this._v(" "),t("th",{attrs:{scope:"col"}},[this._v("View")])])])}]},_=n("VU/8")(v,f,!1,null,null,null).exports,g={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null}},methods:{saveEmployee:function(){var e=this;p.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){e.$router.push("/")}).catch(function(e){return console.log(err)})}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-5",attrs:{id:"new-employee"}},[n("div",{staticClass:"card"},[e._m(0),e._v(" "),n("div",{staticClass:"card-body"},[n("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[n("div",{staticClass:"input-group mb-3"},[e._m(1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"input-group mb-3"},[e._m(2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"input-group mb-3"},[e._m(3),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})]),e._v(" "),n("hr"),e._v(" "),n("div",[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),n("router-link",{staticClass:"btn btn-outline-danger",attrs:{to:"/"}},[e._v("Cancel")])],1)])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header"},[t("h4",[this._v("Edit Player")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[this._v("Player ID")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[this._v("Name")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[this._v("Role")])])}]},b=n("VU/8")(g,y,!1,null,null,null).exports,w={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,n){p.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){n(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;p.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept})})},updateEmployee:function(){var e=this;confirm("Sure?")&&p.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})})})}}},C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-5",attrs:{id:"edit-employee"}},[n("div",{staticClass:"card"},[e._m(0),e._v(" "),n("div",{staticClass:"card-body"},[n("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[n("div",{staticClass:"input-group mb-3"},[e._m(1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],staticClass:"form-control",attrs:{type:"text",disabled:"",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"input-group mb-3"},[e._m(2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"input-group mb-3"},[e._m(3),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})]),e._v(" "),n("hr"),e._v(" "),n("div",[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),n("router-link",{staticClass:"btn btn-outline-danger",attrs:{to:"/"}},[e._v("Cancel")])],1)])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header"},[t("h4",[this._v("Edit Employees")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[this._v("Player ID")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[this._v("Name")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[this._v("Role")])])}]},x=n("VU/8")(w,C,!1,null,null,null).exports,k={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null}},beforeRouteEnter:function(e,t,n){p.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){n(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;p.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept})})},deleteEmployee:function(){var e=this;confirm("Sure?")&&p.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-5",attrs:{id:"view-employee"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[n("h4",[e._v(e._s(e.name))])]),e._v(" "),n("ul",{staticClass:"list-group list-group-flush"},[n("li",{staticClass:"list-group-item"},[e._v("Player Id : "+e._s(e.employee_id))]),e._v(" "),n("li",{staticClass:"list-group-item"},[e._v("Role : "+e._s(e.dept))])]),e._v(" "),n("div",{staticClass:"card-body"},[n("router-link",{staticClass:"btn btn-outline-dark",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[e._v("Edit")]),e._v(" "),n("button",{staticClass:"btn btn-danger",on:{click:e.deleteEmployee}},[e._v("Delete")])],1),e._v(" "),n("div",{staticClass:"fixed-action-btn"},[n("router-link",{staticClass:"btn-floating btn-larg red",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[n("i",{staticClass:"fa fa-pencil"})])],1)])])},staticRenderFns:[]},A=n("VU/8")(k,E,!1,null,null,null).exports,D={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(e){var t=this;r.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){window.location.reload(!0),t.$router.push("/")},function(e){alert(e.message)}),e.preventDefault()}}},$={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-5"},[n("div",{staticClass:"card"},[e._m(0),e._v(" "),n("div",{staticClass:"card-body"},[n("form",[n("div",{staticClass:"input-group mb-3"},[e._m(1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"input-group mb-3"},[e._m(2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),n("buttun",{staticClass:"btn btn-outline-primary",on:{click:e.login}},[e._v("Login")])],1)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header"},[t("h3",[this._v("Login")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[this._v("Email")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[this._v("Password")])])}]},I=n("VU/8")(D,$,!1,null,null,null).exports,H={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(e){var t=this;r.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){alert("Account Created"),window.location.reload(!0),t.$router.push("/")},function(e){alert(e.message)}),e.preventDefault()}}},S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-5"},[n("div",{staticClass:"card text-black bg-light mb-3"},[e._m(0),e._v(" "),n("div",{staticClass:"card-body"},[n("form",[n("div",{staticClass:"input-group mb-3"},[e._m(1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"input-group mb-3"},[e._m(2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),n("buttun",{staticClass:"btn btn-outline-success",on:{click:e.register}},[e._v("Register")])],1)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header"},[t("h3",[this._v("Register")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[this._v("Email")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[this._v("Password")])])}]},R=n("VU/8")(H,S,!1,null,null,null).exports,L=(n("YrBu"),n("vwbq"),n("M4fF"),{name:"playboard",data:function(){return{employees:[],nrad:7,space:1,color:"#aaa",maxID:0,ratio:32,nindex:0,curAnchor:-1,grid:[],anchors:[],window:{width:0,height:0}}},computed:{numi:function(){return this.window.width/this.ratio},numj:function(){return this.window.height/this.ratio}},created:function(){var e=this;window.addEventListener("resize",this.handleResize),this.handleResize(),this.setGrid(),this.getAnchorLocationFromServer(),this.calculateTheField(),window.addEventListener("keydown",function(t){"s"==t.key&&e.addAnchor(0),"x"==t.key&&e.addAnchor(1),"Backspace"!=t.key&&"d"!=t.key||e.deleteAnchor()})},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.window.width=window.innerWidth,this.window.height=window.innerHeight},addAnchor:function(e){var t={id:this.maxID,x:0,y:0,v:e};this.anchors.push(t),this.curAnchor=this.maxID,this.maxID+=1,this.addAnchorToServer(t),this.calculateTheField()},deleteAnchor:function(){if(-1!=this.curAnchor){var e,t=[];for(e=0;e<this.anchors.length;e++){var n=this.anchors[e];this.curAnchor!=n.id?t.push(n):(this.deleteAnchorFromServer(n),console.log("anchor "+String(n.id)+" deleted"))}this.anchors=t,this.curAnchor=-1,this.calculateTheField()}},getAnchorLocationFromServer:function(){var e=this;p.collection("anchors").get().then(function(t){t.forEach(function(t){var n=e.setHexColor(t.data().v);t.data().id>e.maxID&&(e.maxID=t.data().id+1);var i={id:t.data().id,x:t.data().x,y:t.data().y,v:t.data().v,c:n};e.anchors.push(i)})})},addAnchorToServer:function(e){p.collection("anchors").add(e)},updateAnchorLocationOnServer:function(e){p.collection("anchors").where("id","==",e.id).get().then(function(t){t.forEach(function(t){t.ref.update({x:e.x,y:e.y})})})},deleteAnchorFromServer:function(e){p.collection("anchors").where("id","==",e.id).get().then(function(e){e.forEach(function(e){e.ref.delete()})})},setHexColor:function(e){return n("YrBu")("hsl("+String(240+120*e)+", 100%, 50%)").toHexString()},handleClickPoint:function(e){var t,n;for(n=0;n<this.anchors.length;n++)this.anchors[n].id==this.curAnchor&&(t=this.anchors[n]);t.x=e.x,t.y=e.y,this.updateAnchorLocationOnServer(t),this.calculateTheField(),console.log("anchor "+String(t.id)+" moved")},handleClickAnchor:function(e){this.curAnchor=e.id,console.log("anchor "+String(e.id)+" selected")},setGrid:function(){var e,t,n=1;for(e=0;e<this.numi;e++)for(t=0;t<this.numj;t++){var i={id:n+=1,x:e,y:t,v:.5};this.grid.push(i)}},setAnchors:function(){var e;for(e=0;e<2;e++){var t={id:e,x:e,y:e,v:e};this.anchors.push(t)}},fit:function(e,t,n,i,a){return e>n&&(e=n),e<t&&(e=t),i+(a-i)*(e-t)/(n-t)},calculateTheField:function(){var e;for(e=0;e<this.grid.length;e++){var t,n=this.grid[e],i=0,a=0;for(t=0;t<this.anchors.length;t++){var r=this.anchors[t],s=Math.pow(r.x-n.x,2),o=Math.pow(r.y-n.y,2),c=Math.pow(s+o,.5);if(0==c){i=1e-6,a=r.v;break}var l=Math.pow(c,-3);a+=r.v*l,i+=(1-r.v)*l}var u=a/(a+i);n.v=this.fit(u,.25,.75,0,1),n.c=this.setHexColor(n.v)}for(t=0;t<this.anchors.length;t++){(r=this.anchors[t]).c=this.setHexColor(r.v)}}}}),T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-5",attrs:{id:"playboard"}},[n("svg",{attrs:{id:"picture",viewBox:"-250 -250 500 500"}},[n("circle",{attrs:{cx:(-1.5-e.numi/2)*(e.nrad+e.space)*2,cy:(.5-e.numj/2)*(e.nrad+e.space)*2,r:2*e.nrad,fill:"blue",stroke:"#999"},on:{click:function(t){return e.addAnchor(0)}}}),e._v(" "),n("circle",{attrs:{cx:(-1.5-e.numi/2)*(e.nrad+e.space)*2,cy:(2.5-e.numj/2)*(e.nrad+e.space)*2,r:2*e.nrad,fill:"red",stroke:"#999"},on:{click:function(t){return e.addAnchor(1)}}}),e._v(" "),n("circle",{attrs:{cx:(-1.5-e.numi/2)*(e.nrad+e.space)*2,cy:(4.5-e.numj/2)*(e.nrad+e.space)*2,r:2*e.nrad,fill:"#333",stroke:"#999"},on:{click:function(t){return e.deleteAnchor()}}}),e._v(" "),e._l(e.grid,function(t){return[n("circle",{key:t.id,attrs:{cx:(t.x-e.numi/2)*(e.nrad+e.space)*2,cy:(t.y-e.numj/2)*(e.nrad+e.space)*2,r:e.nrad,fill:"#ddd",stroke:t.c,"stroke-width":"1.4"},on:{click:function(n){return e.handleClickPoint(t)}}})]}),e._v(" "),e._l(e.anchors,function(t){return[n("circle",{key:-t.id,attrs:{cx:(t.x-e.numi/2)*(e.nrad+e.space)*2,cy:(t.y-e.numj/2)*(e.nrad+e.space)*2,r:e.nrad-2,fill:t.c},on:{click:function(n){return e.handleClickAnchor(t)}}})]})],2)])},staticRenderFns:[]};var P=n("VU/8")(L,T,!1,function(e){n("DuPI")},null,null).exports,M=m.ref("anchors"),j={name:"rtplayboard",firebase:{anchors:M},data:function(){return{employees:[],nrad:8,space:1,color:"#aaa",ratio:20,nindex:0,curAnchor:-1,calcCount:0,intervalid1:"",grid:[],anchorManual:[],window:{width:0,height:0},computedAnchorList:this.tempAnchorList()}},computed:{numi:function(){return(this.window.width-50)/this.ratio},numj:function(){return(this.window.height-50)/this.ratio}},created:function(){var e=this;window.addEventListener("resize",this.handleResize),this.handleResize(),this.setGrid(),this.anchorManualUpdate(),this.tempAnchorList(),this.calculateTheField(),window.addEventListener("keydown",function(t){"s"==t.key&&e.addAnchor(0),"x"==t.key&&e.addAnchor(1),"Backspace"!=t.key&&"d"!=t.key||e.deleteAnchor()})},destroyed:function(){window.removeEventListener("resize",this.handleResize)},beforeDestroy:function(){clearInterval(this.intervalid1)},mounted:function(){this.recalc()},methods:{anchorManualUpdate:function(){this.anchorManual=this.tempAnchorList()},recalc:function(){var e=this;this.intervalid1=setInterval(function(){e.anchorManualUpdate(),e.calculateTheField()},100)},maxID:function(){var e,t=1,n=this.tempAnchorList();for(e=0;e<n.length;e++){var i=n[e].Data;t<=i.id&&(t=i.id+1)}return t},tempAnchorList:function(){var e=[];return M.once("value",function(t){t.forEach(function(t){var n={Key:t.key,Data:t.val()};e.push(n)})}),e},handleResize:function(){this.window.width=window.innerWidth,this.window.height=window.innerHeight},addAnchor:function(e){var t={id:this.maxID(),x:0,y:0,v:e};M.push(t),this.curAnchor=t.id},deleteAnchor:function(){if(-1!=this.curAnchor){var e,t=this.tempAnchorList();for(e=0;e<t.length;e++){var n=t[e].Data,i=t[e].Key;this.curAnchor==n.id&&M.child(i).remove()}this.curAnchor=-1}},setHexColor:function(e){return n("YrBu")("hsl("+String(240+120*e)+", 100%, 50%)").toHexString()},setHexColorPlusUpdates:function(e){var t=n("YrBu"),i="hsl("+String(240+120*e)+", 100%, 50%)";return this.calculateTheField(),t(i).toHexString()},handleClickPoint:function(e){var t,n=this.anchorManual;for(t=0;t<n.length;t++){var i=n[t].Data,a=n[t].Key;if(this.curAnchor==n[t].Data.id){i=n[t].Data,a=n[t].Key;break}}i.x=e.x,i.y=e.y,M.child(a).set(i),console.log("anchor "+String(i.id)+" moved")},handleClickAnchor:function(e){this.curAnchor=e.id,console.log("anchor "+String(e.id)+" selected")},setGrid:function(){var e,t,n=1;for(e=0;e<this.numi;e++)for(t=0;t<this.numj;t++){var i={id:n+=1,x:e,y:t,v:.5};this.grid.push(i)}},fit:function(e,t,n,i,a){return e>n&&(e=n),e<t&&(e=t),i+(a-i)*(e-t)/(n-t)},calculateTheField:function(){var e,t=this.anchorManual;for(e=0;e<this.grid.length;e++){var n,i=this.grid[e],a=0,r=0;for(n=0;n<t.length;n++){var s=t[n].Data,o=Math.pow(s.x-i.x,2),c=Math.pow(s.y-i.y,2),l=Math.pow(o+c,.5);if(0==l){a=1e-6,r=s.v;break}var u=Math.pow(l,-3);r+=s.v*u,a+=(1-s.v)*u}var d=r/(r+a);i.v=this.fit(d,0,1,0,1)}this.calcCount+=1},WIDTH:function(){return window.innerWidth},HEIGHT:function(){return window.innerHeight-62},viewBox:function(){var e=String(-this.WIDTH()/2)+" "+String(-this.HEIGHT()/2)+" "+String(this.WIDTH())+" "+String(this.HEIGHT());return console.log(e),e}}},F={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"rtplayboard"}},[n("svg",{attrs:{width:e.WIDTH(),height:e.HEIGHT(),viewBox:e.viewBox()}},[n("circle",{attrs:{cx:(-1.5-(e.numi-2)/2)*(e.nrad+e.space)*2,cy:(.5-e.numj/2)*(e.nrad+e.space)*2,r:2*e.nrad,fill:"blue",stroke:"#999"},on:{click:function(t){return e.addAnchor(0)}}}),e._v(" "),n("circle",{attrs:{cx:(-1.5-(e.numi-2)/2)*(e.nrad+e.space)*2,cy:(2.5-e.numj/2)*(e.nrad+e.space)*2,r:2*e.nrad,fill:"red",stroke:"#999"},on:{click:function(t){return e.addAnchor(1)}}}),e._v(" "),n("circle",{attrs:{cx:(-1.5-(e.numi-2)/2)*(e.nrad+e.space)*2,cy:(4.5-e.numj/2)*(e.nrad+e.space)*2,r:2*e.nrad,fill:"#333",stroke:"#999"},on:{click:function(t){return e.deleteAnchor()}}}),e._v(" "),e._l(e.grid,function(t){return[n("circle",{key:t.id,attrs:{cx:(t.x-(e.numi-2)/2)*(e.nrad+e.space)*2,cy:(t.y-e.numj/2)*(e.nrad+e.space)*2,r:e.nrad,fill:"#ddd",stroke:e.setHexColor(t.v),"stroke-width":"1.4"},on:{click:function(n){return e.handleClickPoint(t)}}})]}),e._v(" "),e._l(e.anchorManual,function(t){return[n("circle",{key:-t.Data.id,attrs:{cx:(t.Data.x-(e.numi-2)/2)*(e.nrad+e.space)*2,cy:(t.Data.y-e.numj/2)*(e.nrad+e.space)*2,r:e.nrad-2,fill:e.setHexColor(t.Data.v)},on:{click:function(n){return e.handleClickAnchor(t.Data)}}})]})],2)])},staticRenderFns:[]};var q=n("VU/8")(j,F,!1,function(e){n("MqLM")},null,null).exports,z=n("Ml+6"),U={name:"threed",data:function(){return{camera:null,scene:null,renderer:null,meshes:[]}},mounted:function(){this.init(),this.constructMeshes(),this.addMeshesToScene(),this.animate()},methods:{init:function(){var e=document.getElementById("threed");this.scene=new z.m,this.scene.background=new z.d(16777215),this.camera=new z.k(40,this.WIDTH()/this.HEIGHT(),1,1e3),this.camera.position={x:4,y:4,z:10};var t=new z.n(0,0,0);this.camera.lookAt(t),this.renderer=new z.o,this.renderer.setSize(this.WIDTH(),this.HEIGHT()),e.appendChild(this.renderer.domElement),window.addEventListener("resize",this.onWindowResize,!1)},constructMeshes:function(){this.makeBox(2,2,2),this.makeCube(2.005)},addMeshesToScene:function(){for(var e=0;e<this.meshes.length;e++)this.scene.add(this.meshes[e])},animate:function(){requestAnimationFrame(this.animate),this.meshes[0].rotation.y+=.005,this.meshes[1].rotation.y+=.005,this.renderer.render(this.scene,this.camera)},makeBox:function(e,t,n){var i=new z.b(e,t,n),a=new z.g({color:16777215,linewidth:1,linecap:"round",linejoin:"round",blending:z.a,transparent:!0,opacity:.8}),r=new z.i(i,a);this.meshes.push(r)},makePlane:function(e){var t=new z.l(e,e),n=new z.j({color:13421772,side:z.e}),i=new z.i(t,n);i.rotation.x=Math.PI/2,this.meshes.push(i)},makeCube:function(e){var t=this.cube(e),n=new z.h(t,new z.g({color:0,dashSize:.02,gapSize:.01}));n.computeLineDistances(),this.meshes.push(n)},cube:function(e){var t=.5*e,n=new z.c,i=[];return i.push(-t,-t,-t,-t,t,-t,-t,t,-t,t,t,-t,t,t,-t,t,-t,-t,t,-t,-t,-t,-t,-t,-t,-t,t,-t,t,t,-t,t,t,t,t,t,t,t,t,t,-t,t,t,-t,t,-t,-t,t,-t,-t,-t,-t,-t,t,-t,t,-t,-t,t,t,t,t,-t,t,t,t,t,-t,-t,t,-t,t),n.addAttribute("position",new z.f(i,3)),n},WIDTH:function(){return 2*window.innerWidth},HEIGHT:function(){return 2*(window.innerHeight-62)},onWindowResize:function(){this.camera.aspect=this.WIDTH()/this.HEIGHT(),console.log(this.WIDTH(),this.HEIGHT()),this.camera.updateProjectionMatrix(),this.renderer.setSize(this.WIDTH(),this.HEIGHT())}}},W={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"threed"}})},staticRenderFns:[]};var G=n("VU/8")(U,W,!1,function(e){n("GEgz")},"data-v-e9371edc",null).exports;i.a.use(d.a);var N=new d.a({routes:[{path:"/",name:"dashboard",component:_,meta:{requiresAuth:!0}},{path:"/threed",name:"threed",component:G,meta:{requiresAuth:!0}},{path:"/play",name:"playboard",component:P,meta:{requiresAuth:!0}},{path:"/rtplay",name:"rtplayboard",component:q,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:I,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:R,meta:{requiresGuest:!0}},{path:"/new",name:"new-employee",component:b,meta:{requiresAuth:!0}},{path:"/edit/:employee_id",name:"edit-employee",component:x,meta:{requiresAuth:!0}},{path:"/:employee_id",name:"view-employee",component:A,meta:{requiresAuth:!0}}]});N.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.requiresAuth})?r.a.auth().currentUser?n():n({path:"/login",querry:{redirect:e.fullPath}}):e.matched.some(function(e){return e.meta.requiresGuest})&&r.a.auth().currentUser?(n(),n({path:"/",querry:{redirect:e.fullPath}})):n()});var B=N;i.a.config.productionTip=!1;var V=n("KpPp");i.a.use(V);var O=void 0;r.a.auth().onAuthStateChanged(function(e){O||(O=new i.a({el:"#app",router:B,components:{App:u},template:"<App/>"}))})}},["NHnr"]);
//# sourceMappingURL=app.f9f3acb64889e23ebfe4.js.map