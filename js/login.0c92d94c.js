(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{1360:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"material-design-icon flash-icon",attrs:{"aria-hidden":t.decorative,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M7,2V13H10V22L17,10H13L17,2H7Z"}},[i("title",[t._v(t._s(t.title))])])])])},r=[],s={name:"FlashIcon",props:{title:{type:String,default:"Flash icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},l=s,n=i("2877"),o=Object(n["a"])(l,a,r,!1,null,null,null);e["a"]=o.exports},"1cee":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"material-design-icon water-icon",attrs:{"aria-hidden":t.decorative,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z"}},[i("title",[t._v(t._s(t.title))])])])])},r=[],s={name:"WaterIcon",props:{title:{type:String,default:"Water icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},l=s,n=i("2877"),o=Object(n["a"])(l,a,r,!1,null,null,null);e["a"]=o.exports},"4bd4":function(t,e,i){"use strict";var a=i("58df"),r=i("7e2b"),s=i("3206");e["a"]=Object(a["a"])(r["a"],Object(s["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const i=this.watchers.find(t=>t._uid===e._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"578a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.initializing?t._e():i("div",[t.loading?i("v-progress-linear",{attrs:{indeterminate:""}}):i("div",[i("div",{staticClass:"text-center"},[i("h2",[t._v(" Send and receive "),i("a",{staticClass:"yellow--text",attrs:{href:"https://bitcoin.org/"}},[t._v("bitcoin")])]),i("p",{staticClass:"mb-0",staticStyle:{display:"inline-flex"}},[t._v(" with "),i("water",{attrs:{fillColor:"#06ddff",size:24}}),i("a",{staticStyle:{color:"#06ddff"},attrs:{href:"https://blockstream.com/liquid/"}},[t._v("Liquid")]),i("span",{staticClass:"ml-1"},[t._v("and")]),i("flash",{attrs:{fillColor:"yellow",size:24}}),i("a",{attrs:{href:"http://lightning.network/"}},[t._v("Lightning")])],1)]),i("div",{staticClass:"text-center d-flex flex-wrap justify-center"}),i("v-divider",{staticClass:"mb-2"}),i("v-card",[i("v-card-text",[i("v-form",{staticClass:"mt-4",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[i("v-text-field",{ref:"username",attrs:{label:"Username",dark:"",autocapitalize:"none"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}}),i("v-text-field",{attrs:{label:"Password",type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),i("v-btn",{staticClass:"mr-2 mb-2 mb-sm-0 wide",attrs:{color:"secondary",type:"submit"}},[i("login",{staticClass:"mr-1"}),t._v(" Sign in ")],1),i("v-btn",{staticClass:"mr-2 mb-2 mb-sm-0 wide",attrs:{color:"green"},on:{click:function(e){return t.$go("/register")}}},[i("v-icon",{staticClass:"mr-1"},[t._v("account_balance_wallet")]),t._v(" New Account ")],1)],1)],1)],1),i("div",{staticClass:"text-center my-2 d-flex flex-wrap justify-center"})],1)],1)},r=[],s=i("2f62"),l=i("1360"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"material-design-icon login-icon",attrs:{"aria-hidden":t.decorative,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"}},[i("title",[t._v(t._s(t.title))])])])])},o=[],c={name:"LoginIcon",props:{title:{type:String,default:"Login icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},d=c,u=i("2877"),h=Object(u["a"])(d,n,o,!1,null,null,null),f=h.exports,m=i("1cee"),v=i("7ffd"),p={components:{Flash:l["a"],Login:f,Water:m["a"]},props:{logout:{type:Boolean,default:!1}},data(){return{loggingIn:!1,form:{username:"",password:""}}},computed:{...Object(s["c"])(["error","user","initializing"]),loading:Object(v["e"])("loading"),twofa:Object(v["e"])("twofa")},methods:{...Object(s["b"])(["login"]),submit(t){this.login(this.form)}},created(){this.logout&&this.$store.dispatch("logout")},mounted(){window.innerWidth>600&&this.$refs.username&&this.$refs.username.focus()}},g=p,b=(i("bab7"),i("6544")),w=i.n(b),_=i("8336"),C=i("b0af"),y=i("99d9"),V=i("ce7e"),x=i("4bd4"),$=i("132d"),B=i("8e36"),z=i("8654"),k=Object(u["a"])(g,a,r,!1,null,"446a9b77",null);e["default"]=k.exports;w()(k,{VBtn:_["a"],VCard:C["a"],VCardText:y["b"],VDivider:V["a"],VForm:x["a"],VIcon:$["a"],VProgressLinear:B["a"],VTextField:z["a"]})},"8ce9":function(t,e,i){},bab7:function(t,e,i){"use strict";var a=i("f705"),r=i.n(a);r.a},ce7e:function(t,e,i){"use strict";i("8ce9");var a=i("7560");e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},f705:function(t,e,i){}}]);
//# sourceMappingURL=login.0c92d94c.js.map