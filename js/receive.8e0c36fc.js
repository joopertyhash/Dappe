(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["receive"],{"26e1":function(t,e,i){},4316:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"material-design-icon printer-icon",attrs:{"aria-hidden":t.decorative,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"}},[i("title",[t._v(t._s(t.title))])])])])},n=[],c={name:"PrinterIcon",props:{title:{type:String,default:"Printer icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},a=c,r=i("2877"),o=Object(r["a"])(a,s,n,!1,null,null,null);e["a"]=o.exports},"548f":function(t,e,i){"use strict";var s=i("26e1"),n=i.n(s);n.a},"728c":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.loading?s("v-progress-linear",{attrs:{indeterminate:""}}):t.invoice.text?[null===t.invoice.amount||t.invoice.received<t.invoice.amount?s("request",{on:{clear:t.clearInvoice}}):s("balance"),t.invoice.received?s("received",{on:{clear:t.clearInvoice}}):t._e()]:s("div",[s("numpad",{attrs:{currencies:t.currencies,initialAmount:t.invoice.amount,initialRate:t.rate},on:{done:function(e){return t.addInvoice("lightning")},input:t.updateAmount}}),s("div",{staticClass:"d-flex flex-wrap buttons"},[t.nodes.includes("bitcoin")?s("v-btn",{staticClass:"flex-grow-1 mb-2 mr-1",style:t.buttonStyle,attrs:{disabled:!t.isBtc},on:{click:function(e){return t.addInvoice("bitcoin")}}},[s("img",{staticClass:"mr-1",attrs:{src:i("d706"),width:"30px"}}),s("span",[t._v("Bitcoin")])]):t._e(),t.nodes.includes("lightning")?s("v-btn",{staticClass:"flex-grow-1 mb-2 mr-1",style:t.buttonStyle,attrs:{disabled:!t.isBtc},on:{click:function(e){return t.addInvoice("lightning")}}},[s("flash",{attrs:{fillColor:"yellow"}}),s("span",[t._v("Lightning")])],1):t._e(),t.nodes.includes("liquid")?s("v-btn",{staticClass:"flex-grow-1 mr-0",style:t.buttonStyle,on:{click:function(e){return t.addInvoice("liquid")}}},[s("water",{attrs:{fillColor:"#00aaee"}}),s("span",[t._v("Liquid")])],1):t._e()],1)],1)],2)},n=[],c=i("846e"),a=i("7628"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",{staticClass:"pb-4 mb-2"},[t.payment.confirmed?i("v-alert",{staticClass:"headline text-center black--text",attrs:{color:"yellow"}},[t._v(" Payment Received! ")]):i("v-alert",{staticClass:"headline text-center black--text",attrs:{color:"orange lighten-2"}},[t._v(" Unconfirmed Payment Detected! ")]),i("div",{staticClass:"d-flex justify-center display-1"},[i("div",{staticClass:"mr-2 d-flex"},[i("div",{staticClass:"mr-1 my-auto"},[t._v(t._s(t.total))]),i("div",{staticClass:"my-auto"},[i("v-btn",{staticClass:"black--text",attrs:{color:"white"},on:{click:function(e){return t.select(t.ticker)}}},[t._v(t._s(t.ticker))]),i("span",{staticClass:"print"},[t._v(t._s(t.ticker))])],1)]),"BTC"===t.payment.account.ticker?i("div",{staticClass:"d-flex"},[i("div",{staticClass:"yellow--text mr-1 my-auto"},[t.invoice.amount===t.payment.amount?i("span",[t._v(t._s(t.fiatTotal))]):i("span",[t._v(t._s(t.fiat))])]),i("div",{staticClass:"my-auto"},[i("currency-list",{attrs:{currency:t.currency,currencies:[]}})],1)]):t._e()]),i("div",{staticClass:"text-center"},[t.payment.link?i("v-btn",{staticClass:"mt-2",on:{click:function(e){return t.explore(t.payment.link)}}},[i("v-icon",{staticClass:"mr-1"},[t._v("open_in_new")]),i("span",[t._v("Explore")])],1):t._e(),i("v-btn",{staticClass:"ml-auto mr-2 mb-2 mb-sm-0 wide",on:{click:t.print}},[i("printer",{staticClass:"mr-1"}),i("span",[t._v("Print")])],1)],1)],1)],1)},o=[],l=i("fba4"),u=i("7ffd");const d=1e8,v=parseFloat;let p="https://blockstream.info";var h={components:{CurrencyList:l["a"]},computed:{currency(){return this.invoice.amount===this.payment.amount?this.invoice.currency:this.user.currency},total(){let{precision:t}=this.payment.account;return"BTC"===this.payment.account.ticker&&"SAT"===this.user.unit&&(t=0),this.$format(this.payment.amount+this.payment.tip,t)},ticker(){let{ticker:t}=this.payment.account;return"BTC"===t?this.user.unit:t},isBtc(){return"BTC"===this.payment.account.ticker},fiatTotal(){let t=v(this.invoice.fiatAmount||0),e=v(this.invoice.fiatTip||0);return(t+e).toFixed(2)},fiat(){return((this.payment.amount+this.payment.tip)/d*this.payment.rate).toFixed(2)},invoice(){return this.invoices&&this.invoices[0]},invoices:Object(u["c"])("invoices"),link(){return this.isBtc||(p+="/liquid"),`${p}/tx/${payment.hash}`},payment:Object(u["c"])("received"),rate:Object(u["c"])("rate"),user:Object(u["c"])("user")},methods:{select(){this.shiftAccount(this.user.accounts.find(t=>t.ticker===this.ticker).asset)},shiftAccount:Object(u["a"])("shiftAccount"),explore(t){window.open(t,"_blank")}}},m=h,f=i("2877"),b=i("6544"),_=i.n(b),C=i("0798"),y=i("8336"),x=i("b0af"),k=i("132d"),w=Object(f["a"])(m,r,o,!1,null,null,null),g=w.exports;_()(w,{VAlert:C["a"],VBtn:y["a"],VCard:x["a"],VIcon:k["a"]});var T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.tipping?i("tippad",{on:{input:t.setTip}}):i("div",[t.invoice.amount>0||"LNBTC"===t.invoice.network?i("div",[i("h1",{staticClass:"text-center font-weight-black"},[t._v("Requesting")]),t.invoice.amount>0?i("div",{staticClass:"d-flex flex-wrap justify-center"},[i("div",{staticClass:"display-1 mr-1"},[i("span",[t._v(t._s(t.total))]),i("v-btn",{staticClass:"black--text toggle",attrs:{color:"white"},on:{click:t.toggleUnit}},[t._v(t._s(t.ticker))]),i("span",{staticClass:"print body-1"},[t._v(t._s(t.ticker))])],1),t.isBtc?i("div",{staticClass:"yellow--text display-1"},[i("span",[t._v(t._s(t.invoice.fiatAmount))]),t.invoice.tip?i("span",[t._v(" "),i("span",{staticClass:"headline"},[t._v("+"+t._s(t.invoice.fiatTip))])]):t._e(),i("v-btn",{staticClass:"black--text toggle",attrs:{color:"yellow"},on:{click:t.shiftCurrency}},[t._v(t._s(t.invoice.currency))]),i("span",{staticClass:"print body-1"},[t._v(t._s(t.invoice.currency))])],1):t._e()]):t._e()]):i("h1",{staticClass:"text-center font-weight-black"},[t._v("Receiving Address")]),i("v-card",{staticClass:"pa-3 text-center mb-2"},[i("div",{staticClass:"code mb-4",class:{print:!t.showcode}},[t._v(t._s(t.invoice.text))]),t.showcode?t._e():i("qr",{attrs:{text:t.invoice.text}}),t.invoice.amount<=0&&"LNBTC"!==t.invoice.network?i("div",{staticClass:"mb-2"},[i("code",{staticClass:"black--text mb-2",attrs:{"data-clipboard-text":t.invoice.text}},[t._v(t._s(t.invoice.text))])]):t._e(),i("div",[t.invoice.amount>0?i("v-btn",{staticClass:"mr-2 mb-2 mb-sm-0 black--text wide",attrs:{color:"yellow"},nativeOn:{click:function(e){t.tipping=!0}}},[t.invoice.tip?i("span",[i("v-icon",{staticClass:"mr-1"},[t._v("edit")]),i("span",[t._v("Edit Tip")])],1):i("span",[i("v-icon",{staticClass:"mr-1"},[t._v("add")]),i("span",[t._v("Add Tip")])],1)]):t._e(),t.invoice.amount>0||"LNBTC"===t.invoice.network?i("v-btn",{staticClass:"mr-2 mb-2 mb-sm-0 wide",nativeOn:{click:function(e){t.showcode=!t.showcode}}},[t.showcode?i("qrcode",{staticClass:"mr-1"}):i("v-icon",{staticClass:"mr-1"},[t._v("code")]),i("span",[t._v(t._s(t.code))])],1):t._e(),i("v-btn",{staticClass:"wide mr-2 mb-2 mb-sm-0",nativeOn:{click:function(e){return t.copy(t.invoice.text)}}},[i("v-icon",{staticClass:"mr-1"},[t._v("content_copy")]),i("span",[t._v("Copy")])],1),"bitcoin"===t.invoice.method?i("v-btn",{staticClass:"wide",on:{click:t.address}},[i("v-icon",{staticClass:"mr-1"},[t._v("refresh")]),i("span",[t._v("Address")])],1):t._e(),i("v-btn",{staticClass:"ml-auto mr-2 mb-2 mb-sm-0 wide",on:{click:t.print}},[i("printer",{staticClass:"mr-1"}),i("span",[t._v("Print")])],1)],1)],1)],1)],1)},B=[],j=i("2f62"),O=i("b59c"),A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tippad"},[t.custom?i("div",[i("numpad",{attrs:{initialAmount:t.tip,initialRate:t.invoice.rate,currencies:[t.invoice.currency,"SAT","BTC"]},on:{input:t.updateTip}}),i("div",{staticClass:"d-flex my-2"},[i("v-btn",{staticClass:"black--text flex-grow-1",attrs:{color:"primary",dark:""},on:{click:t.done}},[i("v-icon",{staticClass:"mr-1"},[t._v("check")]),i("span",[t._v("Done")])],1)],1)],1):i("div",[i("div",{staticClass:"d-flex display-1 text-center justify-center"},[i("div",{staticClass:"flex-grow-1"},[t._v(t._s(t.tip)+" "),i("span",{staticClass:"body-1"},[t._v(t._s(t.ticker))])]),i("div",{staticClass:"flex-grow-1"},[t._v(t._s(t.percent)+"%")]),"BTC"===t.user.account.ticker?i("div",{staticClass:"flex-grow-1 yellow--text"},[t._v(" "+t._s(t.fiatTip)+" "),i("span",{staticClass:"body-1"},[t._v(t._s(t.invoice.currency))])]):t._e()]),i("v-slider",{attrs:{min:"0",max:t.max},model:{value:t.percent,callback:function(e){t.percent=e},expression:"percent"}}),t._l(t.percents,(function(e){return i("v-btn",{key:e,staticClass:"mb-2",on:{click:function(i){return t.select(e)}}},[i("span",[t._v(t._s(e)+"%")])])})),i("v-btn",{staticClass:"mb-2",on:{click:function(e){t.custom=!0}}},[i("span",[t._v("Custom")])]),i("v-btn",{staticClass:"mb-2",on:{click:function(e){return t.select(0)}}},[i("span",[t._v("None")])]),i("div",{staticClass:"text-center"},[i("v-btn",{staticClass:"mb-2 black--text ok",attrs:{color:"yellow"},on:{click:t.done}},[i("span",[t._v("Ok")])])],1)],2)])},R=[];const $=1e8;var I={components:{Numpad:a["a"]},data(){return{fiatTip:0,percent:0,percents:[10,15,20],custom:!1,customKey:"",max:100,tip:0}},computed:{isBtc(){return"BTC"===this.user.account.ticker},ticker(){return this.isBtc?this.user.unit:this.user.account.ticker},invoice:Object(u["c"])("invoice"),user:Object(u["c"])("user")},methods:{done(){this.custom=!1,this.$emit("input",this.tip,this.fiatTip)},updateTip(t,e){let i=Math.round(t/(.01*this.amount));i>this.max&&(this.max=i),this.tip=t,this.fiatTip=e},select(t){this.percent=t,this.max=100,this.$nextTick(()=>{this.$emit("input",this.tip,this.fiatTip)})}},mounted(){if(this.invoice.tip){let t=Math.round(this.invoice.tip/(.01*this.invoice.amount));t>this.max&&(this.max=t),this.percent=t,this.$nextTick(()=>{this.tip=this.invoice.tip,this.fiatTip=this.invoice.fiatTip})}else this.percent=15},watch:{percent(t){this.tip=Math.round(t*this.invoice.amount*.01),this.fiatTip=(this.tip/$*this.invoice.rate).toFixed(2)}}},V=I,S=(i("be9d"),i("ba0d")),F=Object(f["a"])(V,A,R,!1,null,"21996503",null),N=F.exports;_()(F,{VBtn:y["a"],VIcon:k["a"],VSlider:S["a"]});var q=i("9fd3"),E=i("7385"),L=i("4316");var H={components:{Qrcode:q["a"],Qr:E["a"],Tippad:N,Printer:L["a"]},mixins:[O["a"]],props:{clear:{type:Function}},data(){return{showcode:!1,tipping:!1}},computed:{ticker(){return this.isBtc?this.user.unit:this.user.account.ticker},isBtc(){return"BTC"===this.user.account.ticker},total(){return this.$format(this.invoice.amount+this.invoice.tip)},invoice:Object(u["c"])("invoice"),user:Object(u["c"])("user"),code(){return this.showcode?"Show QR":"Show Text"}},methods:{print(){window.print()},...Object(j["b"])(["addInvoice","getNewAddress","shiftCurrency","snack","toggleUnit"]),async address(){await this.getNewAddress()},async setTip(t,e){this.tipping=!1,this.invoice.tip=t,this.invoice.fiatTip=e,await this.addInvoice()}}},M=H,P=(i("548f"),Object(f["a"])(M,T,B,!1,null,"e21ff52e",null)),U=P.exports;_()(P,{VBtn:y["a"],VCard:x["a"],VIcon:k["a"]});var D=i("1360"),z=i("1cee"),Q={components:{Balance:c["a"],Flash:D["a"],Numpad:a["a"],Received:g,Request:U,Water:z["a"]},computed:{buttonStyle(){return{maxWidth:(100/(window.innerWidth<600?1:this.nodes.length)).toFixed(0)+"%"}},isBtc(){return this.user.account&&"BTC"===this.user.account.ticker},currencies(){return this.user.accounts&&this.user.currencies?["SAT","BTC",...[...this.user.accounts.map(t=>t.ticker).filter(t=>"BTC"!==t)].sort(),...[...this.user.currencies].sort()]:[]},invoice:Object(u["e"])("invoice"),loading:Object(u["e"])("loading"),nodes:Object(u["c"])("nodes"),payment:Object(u["c"])("payment"),rate:Object(u["c"])("rate"),received:Object(u["e"])("received"),user:Object(u["e"])("user")},methods:{...Object(j["b"])(["addInvoice","clearInvoice","snack","setCurrency"]),updateAmount(t,e,i){this.setCurrency(i),this.$nextTick(()=>{this.invoice.amount=t,this.invoice.fiatAmount=e})},checkRefresh(){void 0!==this.$route.query.refresh?this.$router.replace(this.$route.path):this.clearInvoice()}},beforeRouteUpdate(t,e,i){i(),this.checkRefresh()},mounted(){this.clearInvoice(),this.checkRefresh()}},W=Q,J=(i("e694"),i("8e36")),K=Object(f["a"])(W,s,n,!1,null,"7fa5c5fb",null);e["default"]=K.exports;_()(K,{VBtn:y["a"],VProgressLinear:J["a"]})},"73b0":function(t,e,i){},"846e":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mb-2 text-center no-print"},[i("div",{staticClass:"d-flex"},[i("div",{staticClass:"display-2 font-weight-black flex-grow-1 text-right mr-2"},[t._v(" "+t._s(t.$format(t.user.account.balance,t.precision))+" ")]),i("div",{staticClass:"text-left flex-grow-1 my-auto"},[i("currency-list",{attrs:{currency:t.ticker,currencies:t.cryptos}})],1)]),!isNaN(t.animatedRate)&&t.isBtc?i("h3",{staticClass:"d-flex flex-wrap justify-center"},[i("div",{staticClass:"fiat yellow--text display-1 my-auto"},[t._v(t._s(t._f("format")(t.fiat)))]),i("div",{staticClass:"mx-1"},[i("currency-list",{attrs:{currency:t.user.currency,currencies:t.fiats}})],1),i("div",{staticClass:"mt-auto mb-1"},[i("span",[t._v(" @ "),i("span",{staticClass:"font-weight-black yellow--text"},[t._v(t._s(t._f("format")(t.animatedRate)))]),t._v(" / BTC ")])])]):t._e(),t.user.account.pending?i("div",{staticClass:"red--text"},[i("span",{staticClass:"display-1 font-weight-black"},[t._v(t._s(t.$format(t.user.account.pending))+" ")]),i("span",{staticClass:"headline"},[t._v("UNCONFIRMED")])]):t._e()])},n=[],c=i("2f62"),a=i("7ffd"),r=i("fba4");const o=t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,l=1e8;var u={components:{CurrencyList:r["a"]},props:{payobj:{type:Object}},data(){return{interval:null,tweenedRate:null}},filters:{format(t){return parseFloat(t).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}},computed:{cryptos(){return["SAT"===this.ticker?"BTC":"SAT",...this.user.accounts.map(t=>t.ticker).filter(t=>t!==this.user.account.ticker)]},fiats(){return this.user.currencies.filter(t=>t!==this.user.currency)},...Object(c["c"])(["rate","user"]),ticker(){return this.isBtc?this.user.unit:this.user.account.ticker},isBtc(){return"BTC"===this.user.account.ticker},fiat(){return this.user.account.balance/l*this.animatedRate},pendingFiat(){return this.user.account.pending/l*this.animatedRate},precision(){return"SAT"===this.user.unit?0:this.user.account.precision},animatedRate(){return parseFloat(this.tweenedRate).toFixed(2)}},methods:{shiftAccount:Object(a["a"])("shiftAccount"),shiftCurrency:Object(a["a"])("shiftCurrency")},watch:{rate(t){let e=0,i=parseFloat(this.tweenedRate),s=i-t;clearInterval(this.interval),this.interval=setInterval(()=>{let t=s*o(e/100);this.tweenedRate=(i-t).toFixed(2),e>100&&clearInterval(this.interval),e++},10)}},created(){this.tweenedRate=this.rate}},d=u,v=i("2877"),p=Object(v["a"])(d,s,n,!1,null,null,null);e["a"]=p.exports},be9d:function(t,e,i){"use strict";var s=i("73b0"),n=i.n(s);n.a},e694:function(t,e,i){"use strict";var s=i("eb32"),n=i.n(s);n.a},eb32:function(t,e,i){}}]);
//# sourceMappingURL=receive.8e0c36fc.js.map