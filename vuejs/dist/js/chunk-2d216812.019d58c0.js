(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216812"],{c36b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("Login")]),a("form",[a("label",{attrs:{for:"email"}},[t._v("E-Mail Address")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",type:"email",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",type:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),a("div",[a("button",{attrs:{type:"submit"},on:{click:t.handleSubmit}},[t._v(" Login ")])])])])},o=[],r={data:function(){return{email:"",password:""}},methods:{handleSubmit:function(t){var e=this;t.preventDefault(),this.password.length>0&&this.$http.post("http://localhost:3000/login",{email:this.email,password:this.password}).then((function(t){t.data.user.is_admin;localStorage.setItem("user",JSON.stringify(t.data.user)),localStorage.setItem("jwt",t.data.token),null!=localStorage.getItem("jwt")&&(e.$emit("loggedIn"),null!=e.$route.params.nextUrl?e.$router.push(e.$route.params.nextUrl):e.$router.push("0:/"))}))}}},i=r,l=a("2877"),n=Object(l["a"])(i,s,o,!1,null,null,null);e["default"]=n.exports}}]);