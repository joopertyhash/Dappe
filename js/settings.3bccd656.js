(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"2bfd":function(e,t,s){},"4bd4":function(e,t,s){"use strict";var i=s("58df"),n=s("7e2b"),r=s("3206");t["a"]=Object(i["a"])(n["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),s={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=e.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(e._uid)||(s.valid=t(e)))}):s.valid=t(e),s},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const s=this.watchers.find(e=>e._uid===t._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},"7cb2":function(e,t,s){"use strict";var i=s("a1a1"),n=s.n(i);n.a},a1a1:function(e,t,s){},f13c:function(e,t,s){
/*!
  * vue-scrollto v2.18.1
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */
(function(t,s){e.exports=s()})(0,(function(){"use strict";function e(t){return e="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){return t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},t.apply(this,arguments)}var s=4,i=.001,n=1e-7,r=10,a=11,o=1/(a-1),l="function"===typeof Float32Array;function c(e,t){return 1-3*t+3*e}function u(e,t){return 3*t-6*e}function h(e){return 3*e}function d(e,t,s){return((c(t,s)*e+u(t,s))*e+h(t))*e}function f(e,t,s){return 3*c(t,s)*e*e+2*u(t,s)*e+h(t)}function m(e,t,s,i,a){var o,l,c=0;do{l=t+(s-t)/2,o=d(l,i,a)-e,o>0?s=l:t=l}while(Math.abs(o)>n&&++c<r);return l}function p(e,t,i,n){for(var r=0;r<s;++r){var a=f(t,i,n);if(0===a)return t;var o=d(t,i,n)-e;t-=o/a}return t}function v(e){return e}var g=function(e,t,s,n){if(!(0<=e&&e<=1&&0<=s&&s<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&s===n)return v;for(var r=l?new Float32Array(a):new Array(a),c=0;c<a;++c)r[c]=d(c*o,e,s);function u(t){for(var n=0,l=1,c=a-1;l!==c&&r[l]<=t;++l)n+=o;--l;var u=(t-r[l])/(r[l+1]-r[l]),h=n+u*o,d=f(h,e,s);return d>=i?p(t,h,e,s):0===d?h:m(t,n,n+o,e,s)}return function(e){return 0===e?0:1===e?1:d(u(e),t,n)}},y={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},w=!1;try{var b=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("test",null,b)}catch(E){}var x={$:function(e){return"string"!==typeof e?e:document.querySelector(e)},on:function(e,t,s){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};t instanceof Array||(t=[t]);for(var n=0;n<t.length;n++)e.addEventListener(t[n],s,!!w&&i)},off:function(e,t,s){t instanceof Array||(t=[t]);for(var i=0;i<t.length;i++)e.removeEventListener(t[i],s)},cumulativeOffset:function(e){var t=0,s=0;do{t+=e.offsetTop||0,s+=e.offsetLeft||0,e=e.offsetParent}while(e);return{top:t,left:s}}},I=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],k={container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function S(e){k=t({},k,e)}var C=function(){var t,s,i,n,r,a,o,l,c,u,h,d,f,m,p,v,w,b,S,C,P,_,O,D,F=function(e){o&&(C=e,S=!0)};function V(e){var t=e.scrollTop;return"body"===e.tagName.toLowerCase()&&(t=t||document.documentElement.scrollTop),t}function $(e){var t=e.scrollLeft;return"body"===e.tagName.toLowerCase()&&(t=t||document.documentElement.scrollLeft),t}function T(e){if(S)return E();_||(_=e),O=e-_,D=Math.min(O/i,1),D=P(D),A(s,p+b*D,f+w*D),O<i?window.requestAnimationFrame(T):E()}function E(){S||A(s,v,m),_=!1,x.off(s,I,F),S&&u&&u(C,t),!S&&c&&c(t)}function A(e,t,s){d&&(e.scrollTop=t),h&&(e.scrollLeft=s),"body"===e.tagName.toLowerCase()&&(d&&(document.documentElement.scrollTop=t),h&&(document.documentElement.scrollLeft=s))}function B(_,O){var D=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===e(O)?D=O:"number"===typeof O&&(D.duration=O),t=x.$(_),!t)return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+_);s=x.$(D.container||k.container),i=D.duration||k.duration,n=D.easing||k.easing,r=D.hasOwnProperty("offset")?D.offset:k.offset,a=D.hasOwnProperty("force")?!1!==D.force:k.force,o=D.hasOwnProperty("cancelable")?!1!==D.cancelable:k.cancelable,l=D.onStart||k.onStart,c=D.onDone||k.onDone,u=D.onCancel||k.onCancel,h=void 0===D.x?k.x:D.x,d=void 0===D.y?k.y:D.y;var E=x.cumulativeOffset(s),A=x.cumulativeOffset(t);if("function"===typeof r&&(r=r(t,s)),p=V(s),v=A.top-E.top+r,f=$(s),m=A.left-E.left+r,S=!1,b=v-p,w=m-f,!a){var B="body"===s.tagName.toLowerCase()?document.documentElement.clientHeight||window.innerHeight:s.offsetHeight,L=p,j=L+B,N=v-r,q=N+t.offsetHeight;if(N>=L&&q<=j)return void(c&&c(t))}if(l&&l(t),b||w)return"string"===typeof n&&(n=y[n]||y["ease"]),P=g.apply(g,n),x.on(s,I,F,{passive:!0}),window.requestAnimationFrame(T),function(){C=null,S=!0};c&&c(t)}return B},P=C(),_=[];function O(e){for(var t=0;t<_.length;++t)if(_[t].el===e)return _.splice(t,1),!0;return!1}function D(e){for(var t=0;t<_.length;++t)if(_[t].el===e)return _[t]}function F(e){var t=D(e);return t||(_.push(t={el:e,binding:{}}),t)}function V(e){var t=F(this).binding;if(t.value){if(e.preventDefault(),"string"===typeof t.value)return P(t.value);P(t.value.el||t.value.element,t.value)}}var $={bind:function(e,t){F(e).binding=t,x.on(e,"click",V)},unbind:function(e){O(e),x.off(e,"click",V)},update:function(e,t){F(e).binding=t},scrollTo:P,bindings:_},T=function(e,t){t&&S(t),e.directive("scroll-to",$),e.prototype.$scrollTo=$.scrollTo};return"undefined"!==typeof window&&window.Vue&&(window.VueScrollTo=$,window.VueScrollTo.setDefaults=S,window.Vue.use(T)),$.install=T,$}))},f9ea:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.saving?s("v-progress-linear",{attrs:{indeterminate:""}}):e._e(),s("v-alert",{staticClass:"mb-4",attrs:{color:"success",icon:"info",dismissible:"",transition:"scale-transition"},model:{value:e.success,callback:function(t){e.success=t},expression:"success"}},[e._v("Settings saved successfully")]),s("v-card",{staticClass:"mb-2"},[s("v-card-title",[e._v("Security")]),s("v-card-text",[s("div",{staticClass:"d-flex flex-wrap justify-center"},[s("v-btn",{staticClass:"mr-sm-2 mb-2",on:{click:e.changePassword}},[s("v-icon",{staticClass:"mr-1 yellow--text"},[e._v("lock")]),s("span",[e._v(e._s(e.user.password?"Change":"Set")+" Password")])],1),s("v-btn",{staticClass:"mr-sm-2 mb-2",on:{click:function(t){t.stopPropagation(),e.showPinDialog=!e.showPinDialog}}},[s("v-icon",{staticClass:"mr-1 yellow--text"},[e._v("dialpad")]),e._v(" "+e._s(e.user.pin?"Change":"Set")+" PIN ")],1),s("set-pin",{attrs:{showPinDialog:e.showPinDialog},on:{pin:e.pin}}),s("v-btn",{on:{click:e.twofa}},[s("v-icon",{staticClass:"mr-1 yellow--text"},[e._v("stay_current_portrait")]),e._v(" "+e._s(e.user.twofa?"Disable":"Setup")+" 2FA ")],1)],1),e.set2fa?s("div",[s("v-card",{staticClass:"pa-3 text-center mb-2"},[s("v-alert",{staticClass:"mb-4",attrs:{color:"error",icon:"info",dismissible:"",transition:"scale-transition"},model:{value:e.twofaFail,callback:function(t){e.twofaFail=t},expression:"twofaFail"}},[e._v("Invalid token, try again")]),e.user.twofa?s("div",[s("label",{staticClass:"font-weight-bold"},[e._v("Enter Code to Disable")]),s("pincode-input",{key:e.tokenKey,staticClass:"mx-auto yellow--text mb-2 d-block",attrs:{placeholder:"0",length:6},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}}),s("v-btn",{on:{click:e.disable}},[s("v-icon",{staticClass:"mr-1 red--text"},[e._v("cancel")]),s("span",[e._v("Disable")])],1)],1):s("div",[s("canvas",{staticClass:"w-100 mx-auto mb-2",attrs:{id:"qr",width:"100",height:"100"},on:{click:e.fullscreen}}),s("div",{staticClass:"mb-2"},[s("code",{staticClass:"black--text",attrs:{"data-clipboard-text":e.user.otpsecret}},[e._v(e._s(e.user.otpsecret))])]),s("label",{staticClass:"font-weight-bold"},[e._v("Enter Code to Enable")]),s("pincode-input",{key:e.tokenKey,staticClass:"mx-auto yellow--text mb-2 d-block",attrs:{placeholder:"0",length:6},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}})],1)],1)],1):e._e(),e.changingPassword?s("div",{staticClass:"mb-2"},[s("v-form",{nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}}},[s("div",{attrs:{id:"password"}},[s("v-text-field",{ref:"password",attrs:{label:"New Password",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),s("v-text-field",{attrs:{label:"Confirm Password",type:"password"},model:{value:e.form.passconfirm,callback:function(t){e.$set(e.form,"passconfirm",t)},expression:"form.passconfirm"}}),s("div",{staticClass:"text-right"},[s("v-btn",{on:{click:e.submit}},[s("v-icon",{staticClass:"mr-1 yellow--text"},[e._v("check")]),s("span",[e._v("save")])],1)],1)],1)],1):e._e()])],1),s("v-card",[s("v-card-text",[s("v-form",{nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}}},[s("v-text-field",{ref:"username",attrs:{label:"Username",type:"text"},on:{focus:e.scroll},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),s("v-autocomplete",{attrs:{items:e.currencies,chips:"",label:"Currencies",multiple:"","menu-props":{closeOnContentClick:!0,maxHeight:200},"search-input":e.searchInput,"full-width":!1},on:{change:e.filterCurrencies,focus:e.scroll,"update:searchInput":function(t){e.searchInput=t},"update:search-input":function(t){e.searchInput=t}},scopedSlots:e._u([{key:"selection",fn:function(t){var i=t.attrs,n=t.item,r=t.select,a=t.selected;return[s("v-chip",e._b({attrs:{"input-value":a,close:""},on:{click:r,"click:close":function(t){return e.remove(n)}}},"v-chip",i,!1),[s("strong",[e._v(e._s(n))])])]}}]),model:{value:e.form.currencies,callback:function(t){e.$set(e.form,"currencies",t)},expression:"form.currencies"}}),s("div",{staticClass:"text-right"},[s("v-btn",{on:{click:e.submit}},[s("v-icon",{staticClass:"mr-1 yellow--text"},[e._v("check")]),s("span",[e._v("Save")])],1)],1)],1)],1)],1)],1)},n=[],r=s("2f62"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{attrs:{width:"500"},on:{"click:outside":e.close},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[e._v(" "+e._s(e.state)+" PIN ")]),s("v-card-text",[e.error?s("v-alert",{attrs:{color:"red"}},[e._v(e._s(e.error))]):e._e()],1),s("v-card-text",{staticClass:"text-center"},[e.success?s("v-alert",{attrs:{color:"green"}},[e._v("PIN Set Successfully!")]):s("div",[e.pinRequired?s("pincode-input",{key:e.oldPinKey,ref:"oldPin",staticClass:"mx-auto yellow--text",attrs:{placeholder:"0",length:6},on:{keyup:function(t){return t.preventDefault(),e.keyup(t)}},model:{value:e.oldPin,callback:function(t){e.oldPin=t},expression:"oldPin"}}):e._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.pinRequired,expression:"!pinRequired"}]},[e.confirming?s("pincode-input",{key:e.verifyPinKey,ref:"verifyPin",staticClass:"mx-auto yellow--text",attrs:{placeholder:"0",length:6},model:{value:e.verifyPin,callback:function(t){e.verifyPin=t},expression:"verifyPin"}}):s("pincode-input",{key:e.newPinKey,ref:"newPin",staticClass:"mx-auto yellow--text",attrs:{placeholder:"0",length:6},model:{value:e.newPin,callback:function(t){e.newPin=t},expression:"newPin"}}),s("p",{staticClass:"mt-2"},[e._v(" This PIN will be required to send outgoing payments ")])],1)],1)],1),s("v-card-actions",[e.success?e._e():s("v-btn",{attrs:{color:"red",text:""},on:{click:e.close}},[e._v(" Cancel ")]),s("v-spacer"),e.success?s("v-btn",{attrs:{color:"primary",text:""},on:{click:e.close}},[e._v(" Done ")]):e.confirming?s("v-btn",{attrs:{color:"primary",text:""},on:{click:e.submit}},[e._v(" Ok ")]):e.pinRequired?s("v-btn",{attrs:{color:"primary",text:""},on:{click:e.submitOldPin}},[e._v(" Ok ")]):s("v-btn",{attrs:{color:"primary",text:""},on:{click:e.startConfirming}},[e._v(" Ok ")])],1)],1)],1)},o=[],l=s("a7d0"),c=s("7ffd"),u={components:{PincodeInput:l["a"]},props:{showPinDialog:{type:Boolean}},data(){return{dialog:!1,confirming:!1,newPin:"",verifyPin:"",oldPin:"",error:!1,success:!1,newPinKey:"a",verifyPinKey:"b",oldPinKey:"c"}},computed:{state(){const{confirming:e,user:t,pin:s,success:i}=this;return e?"Confirm":t.pin?t.pin===s||i?"Set":"Old":"New"},pinRequired(){return this.user.pin&&this.user.pin!==this.pin},pin:Object(c["e"])("pin"),user:Object(c["e"])("user")},methods:{updateUser:Object(c["a"])("updateUser"),submitOldPin(){this.oldPin===this.user.pin?(this.pin=this.oldPin,this.error=""):(this.error="Wrong PIN, try again",this.clear())},open(){this.dialog=!0,this.$nextTick(()=>{this.$refs.newPin.focusLetterByIndex(0)})},startConfirming(){this.confirming=!0,this.$nextTick(()=>{this.$refs.verifyPin.focusLetterByIndex(0)})},submit(){this.verifyPin===this.newPin?(this.$emit("pin",this.verifyPin),this.error="",this.success=!0,this.user.pin=this.verifyPin,this.updateUser(this.user)):(this.error="PIN mismatch",this.clear())},close(){this.pin="",this.clear(),this.success=!1,this.error="",this.$nextTick(()=>this.dialog=!1)},clear(){this.newPinKey+="a",this.verifyPinKey+="b",this.oldPinKey+="c",this.newPin="",this.verifyPin="",this.oldPin="",this.confirming=!1}},watch:{showPinDialog(){this.dialog=!0},newPin(e){6===e.length&&this.startConfirming()},verifyPin(e){6===e.length&&this.submit()}}},h=u,d=s("2877"),f=s("6544"),m=s.n(f),p=s("0798"),v=s("8336"),g=s("b0af"),y=s("99d9"),w=s("169a"),b=s("2fa4"),x=Object(d["a"])(h,a,o,!1,null,null,null),I=x.exports;m()(x,{VAlert:p["a"],VBtn:v["a"],VCard:g["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VDialog:w["a"],VSpacer:b["a"]});var k,S,C=s("d055"),P=s.n(C),_={data(){return{full:!1}},methods:{fullscreen(){if(this.full)return document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),void(this.full=!1);let e=document.getElementById("qr");e.requestFullscreen?e.requestFullscreen(Element.ALLOW_KEYBOARD_INPUT):e.mozRequestFullScreen?e.mozRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):e.webkitRequestFullscreen?e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):e.msRequestFullscreen&&e.msRequestFullscreen(),this.full=!0}}},O=_,D=Object(d["a"])(O,k,S,!1,null,null,null),F=D.exports,V=s("f13c"),$=s.n(V),T={components:{SetPin:I,PincodeInput:l["a"]},mixins:[F],data(){return{tokenKey:"a",twofaFail:!1,token:"",full:!1,saving:!1,searchInput:"",showPinDialog:!1,success:!1,changingPassword:!1,set2fa:!1,initialized:!1,code:"",dialog:!1,form:{username:"",password:"",passconfirm:"",currency:"",currencies:"",pin:"",twofa:!1}}},computed:{...Object(r["c"])(["error","rates","user"]),currencies(){return this.rates?Object.keys(this.rates).sort():[]}},methods:{scroll(e){$.a.scrollTo(e.target,100,{offset:-15})},clear(){this.tokenKey+="a",this.token=""},async disable(){try{this.twofaFail=!1,await this.disable2fa(this.token),this.twofa()}catch(e){this.twofaFail=!0}this.clear()},async enable(){try{this.twofaFail=!1,await this.enable2fa(this.token),this.twofa()}catch(e){this.twofaFail=!0}this.clear()},filterCurrencies(){this.form.currencies=this.form.currencies.filter(e=>this.currencies.includes(e))},remove(e){this.form.currencies.splice(this.form.currencies.indexOf(e),1),this.form.currencies=[...this.form.currencies]},twofa(){this.set2fa=!this.set2fa,this.$nextTick(()=>{let e=document.getElementById("qr"),{otpsecret:t,username:s}=this.user,i=`otpauth://totp/CoinOS:${s}?secret=${t}&period=30&digits=6&algorithm=SHA1&issuer=CoinOS`;e&&P.a.toCanvas(e,i,e=>{e&&console.log(e)})})},changePassword(){this.changingPassword=!this.changingPassword,this.changingPassword&&this.$nextTick(()=>{this.$refs.password.focus(),$.a.scrollTo(this.$refs.password.$refs.input,100,{offset:-15})})},pin(e){this.form.pin=e},async submit(e){if(e&&e.preventDefault(),this.form.password&&this.form.password!==this.form.passconfirm)this.$store.commit("error","Passwords don't match");else{this.saving=!0;let e=await this.updateUser(this.form);this.$nextTick(()=>this.saving=!1),e&&(this.success=!0,this.changingPassword=!1,window.scrollTo(0,0),setTimeout(()=>this.success=!1,5e3),this.$store.commit("error",""))}},...Object(r["b"])(["updateUser","enable2fa","disable2fa"])},watch:{token(e){this.user.twofa||6!==e.length||this.enable()},user(e){if(!this.initialized){Object.keys(e).filter(t=>t in this.form&&e[t]).forEach(t=>this.form[t]=e[t]),this.form["password"]="",this.form["passconfirm"]="";try{this.form.currencies=JSON.parse(e.currencies)}catch(t){}}}},mounted(){let{user:e}=this;Object.keys(e).filter(t=>t in this.form&&e[t]).forEach(t=>this.form[t]=e[t]),this.form["password"]="",this.form["passconfirm"]="";try{this.form.currencies=JSON.parse(e.currencies)}catch(t){}}},E=T,A=(s("7cb2"),s("2bfd"),s("b974")),B=s("8654"),L=s("d9f7"),j=s("80d2");const N={...A["b"],offsetY:!0,offsetOverflow:!0,transition:!1};var q=A["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:A["a"].options.props.menuProps.type,default:()=>N},noFilter:Boolean,searchInput:{type:String,default:void 0}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...A["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(j["n"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch=e,this.$emit("update:search-input",e)}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=A["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...N,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=A["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=void 0)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},methods:{onFilteredItemsChanged(e,t){e!==t&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===j["s"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===j["s"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==j["s"].backspace&&e!==j["s"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,n=e!==i-1?e:e-1,r=this.selectedItems[n];r?this.selectItem(t):this.setValue(this.multiple?[]:void 0),this.selectedIndex=n},clearableCallback(){this.internalSearch=void 0,A["a"].options.methods.clearableCallback.call(this)},genInput(){const e=B["a"].options.methods.genInput.call(this);return e.data=Object(L["a"])(e.data,{attrs:{"aria-activedescendant":Object(j["m"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(j["m"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=A["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?A["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;A["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){A["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){A["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){A["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){if(-1===this.selectedIndex)return;const t=this.selectedItems[this.selectedIndex],s=this.getText(t);e.clipboardData.setData("text/plain",s),e.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",s),e.preventDefault()}}}),K=s("cc20"),z=s("4bd4"),M=s("132d"),R=s("8e36"),U=Object(d["a"])(E,i,n,!1,null,"7549c356",null);t["default"]=U.exports;m()(U,{VAlert:p["a"],VAutocomplete:q,VBtn:v["a"],VCard:g["a"],VCardText:y["b"],VCardTitle:y["c"],VChip:K["a"],VForm:z["a"],VIcon:M["a"],VProgressLinear:R["a"],VTextField:B["a"]})}}]);
//# sourceMappingURL=settings.3bccd656.js.map