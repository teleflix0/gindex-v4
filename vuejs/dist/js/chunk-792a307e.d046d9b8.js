(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-792a307e"],{"80a7":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t.logged?i("div",{class:t.ismobile?"content mx-1 mt-2 px-0":"content ml-5 mt-2 mr-5 pl-5 pr-5"},[i("h1",{staticClass:"title has-text-centered has-text-weight-bold has-text-white"},[t._v("Settings")]),i("div",{staticClass:"loading"},[i("loading",{attrs:{active:t.loading,"can-cancel":!1,"is-full-page":t.fullpage},on:{"update:active":function(s){t.loading=s}}})],1),i("div",{staticClass:"columns has-text-white is-centered is-multiline"},[i("div",{staticClass:"column is-two-thirds"},[i("div",{staticClass:"box has-background-light"},[i("h3",{staticClass:"title has-text-centered has-text-weight-bold has-text-info-dark"},[t._v("Your Details")]),i("div",{staticClass:"columns is-vcentered is-centered is-multiline is-mobile"},[i("div",{staticClass:"column has-text-centered is-full"},[i("figure",{staticClass:"image is-128x128 is-inline-block"},[i("img",{staticClass:"is-rounded",attrs:{src:t.avatar},on:{click:function(s){return t.alerts("Avatar Under Development")}}})])]),t._m(0),i("div",{staticClass:"column is-two-fifths"},[i("p",{staticClass:"subtitle has-text-weight-bold"},[t._v(t._s(t.user.name))])]),t._m(1),i("div",{staticClass:"column is-two-fifths"},[i("p",{staticClass:"subtitle has-text-weight-bold"},[t._v(t._s(t.user.email))])]),t._m(2),i("div",{staticClass:"column is-two-fifths"},[i("p",{staticClass:"subtitle has-text-weight-bold"},[t._v(t._s(t.user.role))])]),!t.admin&&!t.superadmin||t.admin&&!t.superadmin?i("div",{staticClass:"column is-three-fifths"},[i("p",{staticClass:"subtitle"},[t._v("Request More Scopes")])]):t._e(),!t.admin&&!t.superadmin||t.admin&&!t.superadmin?i("div",{staticClass:"column is-two-fifths"},[i("button",{staticClass:"button is-success",on:{click:function(s){return t.gotoPage("/request/","settings")}}},[t._m(3),i("span",[t._v("Request")])])]):t._e(),t.admin&&t.superadmin?i("div",{staticClass:"column has-text-centered is-full"},[i("p",{staticClass:"subtitle has-text-warning-dark has-text-weight-bold"},[t._v("You Have Maximum Access to this Website")])]):t._e(),t._m(4),i("div",{staticClass:"column is-two-fifths"},[i("p",{staticClass:"subtitle has-text-weight-bold"},[t._v(t._s(t._f("moment")(t.token.issuedate,"dddd, MMMM Do YYYY [at] hh:mm A")))])]),t._m(5),i("div",{staticClass:"column is-two-fifths"},[i("p",{staticClass:"subtitle has-text-weight-bold"},[t._v(t._s(t._f("moment")(t.token.expirydate,"dddd, MMMM Do YYYY [at] hh:mm A")))])])])])]),i("div",{staticClass:"column is-vcentered is-one-third"},[i("div",{staticClass:"columns is-multiline is-desktop is-centered"},[i("div",{staticClass:"column is-full"},[i("div",{staticClass:"box has-background-warning"},[i("h3",{staticClass:"title has-text-centered has-text-weight-bold"},[t._v("Your Preferences")]),i("div",{staticClass:"columns is-vcentered is-centered is-multiline is-mobile"},[t._m(6),i("div",{staticClass:"column is-two-fifths"},[i("button",{staticClass:"button is-rounded is-primary",on:{click:function(s){return t.alerts("Under Development")}}},[t._m(7),i("span",[t._v("Change")])])]),t._m(8),i("div",{staticClass:"column is-two-fifths"},[i("button",{staticClass:"button is-rounded is-primary",on:{click:function(s){return t.gotoPage("/changepassword/","settings")}}},[t._m(9),i("span",[t._v("Change")])])]),t._m(10),i("div",{staticClass:"column is-two-fifths"},[i("button",{staticClass:"button is-rounded is-primary",on:{click:function(s){return t.alerts("Under Development")}}},[t._m(11),i("span",[t._v("Change")])])])])])]),i("div",{staticClass:"column is-full"},[i("div",{staticClass:"box has-background-danger"},[i("h3",{staticClass:"title has-text-centered has-text-white has-text-weight-bold"},[t._v("Danger Zone")]),i("div",{staticClass:"columns is-vcentered is-centered is-multiline is-mobile"},[t._m(12),i("div",{staticClass:"column is-two-fifths"},[i("button",{staticClass:"button is-rounded is-warning",on:{click:function(s){return t.gotoPage("/me/","delete")}}},[t._m(13),i("span",[t._v("Delete")])])])])])])])])])]):t._e()])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-three-fifths"},[i("p",{staticClass:"subtitle"},[t._v("Name")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-three-fifths"},[i("p",{staticClass:"subtitle"},[t._v("Email")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-three-fifths"},[i("p",{staticClass:"subtitle"},[t._v("Current Role")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"fas fa-user-shield"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-three-fifths"},[i("p",{staticClass:"subtitle"},[t._v("Last Token Issue Date")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-three-fifths"},[i("p",{staticClass:"subtitle"},[t._v("Last Token Expiry Date")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-three-fifths"},[i("p",{staticClass:"subtitle"},[t._v("Change Your Avatar")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"far fa-user-circle"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-three-fifths"},[i("p",{staticClass:"subtitle"},[t._v("Change Your Password")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"fas fa-lock"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-three-fifths"},[i("p",{staticClass:"subtitle"},[t._v("Change Your Email")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-three-fifths"},[i("p",{staticClass:"subtitle has-text-white"},[t._v("Delete Your Account")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"fas fa-user-times"})])}],n=(i("d81d"),i("d3b7"),i("25f0"),i("9062")),l=i.n(n),c=(i("e40d"),{components:{Loading:l.a},data:function(){return{user:{},token:{},logged:!1,avatar:"",gds:[],currgd:{},admin:!1,superadmin:!1,loading:!1,fullpage:!0}},methods:{alerts:function(t){window.alert(t)},gotoPage:function(t,s){s?this.$router.push({path:"/"+this.currgd.id+":"+s+t}):this.$router.push({path:"/"+this.currgd.id+":"+t})}},computed:{ismobile:function(){var t=window.innerWidth>0?window.innerWidth:screen.width;return!(t>966)}},beforeMount:function(){this.loading=!0;var t=localStorage.getItem("tokendata"),s=localStorage.getItem("userdata");if(null!=s&&null!=t){var i=JSON.parse(this.$hash.AES.decrypt(t,this.$pass).toString(this.$hash.enc.Utf8)),e=JSON.parse(this.$hash.AES.decrypt(s,this.$pass).toString(this.$hash.enc.Utf8));this.user=e,this.token=i,this.loading=!1,this.logged=!0}else this.user=null,this.token=null,this.loading=!1,this.logged=!0},mounted:function(){this.loading=!0,this.user.admin&&this.user.superadmin?(this.admin=!0,this.superadmin=!0,this.loading=!1,this.user.avatar?this.avatar=this.user.avatar:this.avatar="https://cdn.statically.io/img/www.joyonlineschool.com/static/emptyuserphoto.png?w=64&h=64&quality=100&f=auto"):this.user.admin&&!this.user.superadmin?(this.admin=!0,this.loading=!1,this.user.avatar?this.avatar=this.user.avatar:this.avatar="https://cdn.statically.io/img/www.joyonlineschool.com/static/emptyuserphoto.png?w=64&h=64&quality=100&f=auto"):(this.loading=!1,this.user.avatar?this.avatar=this.user.avatar:this.avatar="https://cdn.statically.io/img/www.joyonlineschool.com/static/emptyuserphoto.png?w=64&h=64&quality=100&f=auto")},created:function(){if(window.gds&&window.gds.length>0){this.gds=window.gds.map((function(t,s){return{name:t,id:s}}));var t=this.$route.params.id;this.gds&&this.gds.length>=t&&(this.currgd=this.gds[t])}}}),r=c,o=i("2877"),u=Object(o["a"])(r,e,a,!1,null,null,null);s["default"]=u.exports},e40d:function(t,s,i){}}]);