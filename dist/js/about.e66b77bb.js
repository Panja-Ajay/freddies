(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0bd9":function(t,e,i){"use strict";i("e2a1")},"18d5":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{padding:"10px 0px 0px 50px"}},[i("router-link",{attrs:{to:"/"}},[t._v(t._s(t.homeName))])],1),i("div",{staticStyle:{display:"flex","justify-content":"center","margin-top":"10%"}},[i("vs-card",{scopedSlots:t._u([{key:"title",fn:function(){return[i("h3",{staticStyle:{"text-align":"center"}},[t._v("User Profile ")])]},proxy:!0},{key:"text",fn:function(){return[i("div",{staticClass:"center content-inputs",staticStyle:{"margin-top":"30px"}},[i("vs-input",{attrs:{placeholder:"Name"},model:{value:t.profile.name,callback:function(e){t.$set(t.profile,"name",e)},expression:"profile.name"}})],1),i("div",{staticClass:"center content-inputs",staticStyle:{"margin-top":"30px"}},[i("vs-input",{attrs:{placeholder:"Email"},model:{value:t.profile.email,callback:function(e){t.$set(t.profile,"email",e)},expression:"profile.email"}})],1),i("div",{staticClass:"center content-inputs",staticStyle:{"margin-top":"30px"}},[i("vs-input",{attrs:{placeholder:"Mobile"},model:{value:t.profile.mobile,callback:function(e){t.$set(t.profile,"mobile",e)},expression:"profile.mobile"}})],1),i("vs-button",{staticStyle:{margin:"auto","margin-top":"25px"},on:{click:t.submit}},[t._v("Submit")]),i("div",{staticStyle:{"margin-top":"20px"}},[i("p",[t._v("Note: These fields will save in")]),i("p",[t._v("local Storage")])])]},proxy:!0}])})],1)])},l=[],s={data(){return{homeName:"<-- Home",profile:{name:"",mobile:"",email:""}}},methods:{submit(){if(""==this.profile.mobile||""==this.profile.email||""==this.profile.name)return alert("Please fill all fields"),!1;localStorage.mobile=this.profile.mobile,localStorage.email=this.profile.email,localStorage.name=this.profile.name,this.$router.push("/")}}},o=s,r=(i("0bd9"),i("2877")),n=Object(r["a"])(o,a,l,!1,null,"6a5bdfdc",null);e["default"]=n.exports},3711:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{padding:"10px 0px 0px 50px"}},[i("router-link",{attrs:{to:"/"}},[t._v(t._s(t.homeName))])],1),i("div",{staticStyle:{display:"flex","justify-content":"center","margin-top":"5%"}},[i("vs-card",{scopedSlots:t._u([{key:"title",fn:function(){return[i("h3",{staticStyle:{"text-align":"center"}},[t._v("User Form")])]},proxy:!0},{key:"text",fn:function(){return[i("div",{staticClass:"center content-inputs",staticStyle:{"margin-top":"30px"}},[i("vs-input",{attrs:{placeholder:"Name",w:"12"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("div",{staticClass:"center content-inputs",staticStyle:{"margin-top":"30px"}},[i("vs-input",{attrs:{placeholder:"Mobile"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),i("div",{staticClass:"center content-inputs",staticStyle:{"margin-top":"30px"}},[i("vs-input",{attrs:{placeholder:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),i("div",{staticClass:"center content-inputs",staticStyle:{"margin-top":"30px"}},[i("vs-input",{attrs:{placeholder:"Address"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),i("vs-button",{staticStyle:{margin:"auto","margin-top":"25px"},on:{click:t.submitForm}},[t._v("Submit")]),i("div",{staticStyle:{"margin-top":"20px"}},[i("p",[t._v("Note: These fields will be saved using")]),i("p",[t._v("state management")])])]},proxy:!0}])})],1)])},l=[],s=i("2f62"),o={data(){return{homeName:"<-- Home",form:{name:"",mobile:"",email:"",address:""}}},methods:{...Object(s["b"])(["storeForm"]),submitForm(){if(""==this.form.name||""==this.form.mobile||""==this.form.email||""==this.form.address)return alert("Please Fill all fields"),!1;this.storeForm(this.form),this.$router.push("/")}}},r=o,n=i("2877"),c=Object(n["a"])(r,a,l,!1,null,"731d515f",null);e["default"]=c.exports},e2a1:function(t,e,i){},f820:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is an about page")])])}],s=i("2877"),o={},r=Object(s["a"])(o,a,l,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=about.e66b77bb.js.map