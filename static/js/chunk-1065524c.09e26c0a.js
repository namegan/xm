(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1065524c"],{1811:function(t,s,a){"use strict";var e=a("bb36"),n=a.n(e);n.a},"578a":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"ssk"},[a("van-row",{attrs:{gutter:"20"}},[a("van-col",{attrs:{span:"4"}},[a("van-button",{staticStyle:{margin:"5px","margin-left":"-5px","font-size":"24px"},attrs:{icon:"arrow-left",color:"transparent",to:"/",size:"small"}})],1),a("van-col",{attrs:{span:"16"}},[a("div",{staticClass:"logins"},[t._v("登录")])])],1)],1),a("div",{staticClass:"main",staticStyle:{"margin-top":"60px"}},[a("mt-field",{attrs:{type:"text",label:"用户名"},model:{value:t.username,callback:function(s){t.username=s},expression:"username"}}),a("mt-field",{attrs:{type:"password",label:"密码"},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}}),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.login}},[t._v("快速登录")])],1)])},n=[],o={data:function(){return{username:"",password:""}},methods:{login:function(){var t=this;console.log("1"),this.axios.post("/login","username="+this.username+"&password="+this.password).then((function(s){console.log("2");var a=s.data.code;0==a?t.$messagebox.alert("用户名或密码错误","登录失败"):(t.$messagebox.confirm("用户登陆成功",{confirmButtonText:"是",cancelButtonText:"否"}),t.$store.commit("已登录",t.username),t.$router.push("/")),console.log("3")}))}}},r=o,i=(a("1811"),a("2877")),l=Object(i["a"])(r,e,n,!1,null,"17ec7980",null);s["default"]=l.exports},bb36:function(t,s,a){}}]);