"use strict";(self["webpackChunksixth"]=self["webpackChunksixth"]||[]).push([[46],{1530:function(t,a,n){function e(t){return{all:t=t||new Map,on:function(a,n){var e=t.get(a);e?e.push(n):t.set(a,[n])},off:function(a,n){var e=t.get(a);e&&(n?e.splice(e.indexOf(n)>>>0,1):t.set(a,[]))},emit:function(a,n){var e=t.get(a);e&&e.slice().map((function(t){t(n)})),(e=t.get("*"))&&e.slice().map((function(t){t(a,n)}))}}}n.d(a,{Z:function(){return s}});const r=e();var s=r},7046:function(t,a,n){n.r(a),n.d(a,{default:function(){return U}});var e=n(6252);function r(t,a,n,r,s,o){const i=(0,e.up)("front-navbar"),l=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(i),(0,e.Wm)(l)],64)}var s=n(3577);const o={class:"navbar navbar-expand-lg navbar-light bg-light"},i={class:"container"},l=(0,e.Uk)("前台"),c=(0,e._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarNav"},p={class:"navbar-nav"},v={class:"nav-item"},b=(0,e.Uk)("產品列表"),d=(0,e.Uk)("登入"),g=(0,e.Uk)("後台"),f=(0,e._)("span",{class:"me-2 fs-4 text-primary"},"|",-1),m=(0,e.Uk)("購物車 "),h={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"};function w(t,a,n,r,w,_){const k=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("nav",o,[(0,e._)("div",i,[(0,e.Wm)(k,{class:"navbar-brand",to:"/"},{default:(0,e.w5)((()=>[l])),_:1}),c,(0,e._)("div",u,[(0,e._)("ul",p,[(0,e._)("li",v,[(0,e.Wm)(k,{class:"nav-link",to:"/products"},{default:(0,e.w5)((()=>[b])),_:1})])])]),(0,e.Wm)(k,{type:"button",class:"btn btn-warning me-2",to:"/login"},{default:(0,e.w5)((()=>[d])),_:1}),(0,e.Wm)(k,{type:"button",class:"btn btn-outline-primary me-2",to:"/admin/products"},{default:(0,e.w5)((()=>[g])),_:1}),f,(0,e.Wm)(k,{type:"button",class:"btn btn-primary position-relative text-white",to:"/cart"},{default:(0,e.w5)((()=>[m,(0,e._)("span",h,(0,s.zw)(w.cartData.carts.length),1)])),_:1})])])}var _=n(1530),k={data(){return{cartData:{carts:[]}}},methods:{getCartList(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/zy123/cart").then((t=>{this.cartData=t.data.data})).catch((t=>{console.log(t)}))}},mounted(){this.getCartList(),_.Z.on("get-cart-list",(()=>{this.getCartList()}))}},x=n(3744);const y=(0,x.Z)(k,[["render",w]]);var W=y,C={components:{FrontNavbar:W}};const D=(0,x.Z)(C,[["render",r]]);var U=D}}]);
//# sourceMappingURL=46.70d45a99.js.map