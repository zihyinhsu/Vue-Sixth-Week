"use strict";(self["webpackChunksixth"]=self["webpackChunksixth"]||[]).push([[351],{2351:function(a,t,n){n.r(t),n.d(t,{default:function(){return x}});var s=n(6252);function e(a,t,n,e,o,c){const i=(0,s.up)("admin-navbar"),r=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i),o.checkSuccess?((0,s.wg)(),(0,s.j4)(r,{key:0})):(0,s.kq)("",!0)],64)}const o={class:"navbar navbar-expand-lg navbar-dark bg-dark"},c={class:"container"},i=(0,s.Uk)("後台"),r=(0,s._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarNav"},u={class:"navbar-nav"},d={class:"nav-item"},v=(0,s.Uk)("後台產品列表"),h={class:"nav-item"},p=(0,s.Uk)("後台優惠券"),b=(0,s.Uk)("首頁");function k(a,t,n,e,k,g){const m=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",o,[(0,s._)("div",c,[(0,s.Wm)(m,{class:"navbar-brand",to:"/admin/products"},{default:(0,s.w5)((()=>[i])),_:1}),r,(0,s._)("div",l,[(0,s._)("ul",u,[(0,s._)("li",d,[(0,s.Wm)(m,{class:"nav-link active",to:"/admin/products"},{default:(0,s.w5)((()=>[v])),_:1})]),(0,s._)("li",h,[(0,s.Wm)(m,{class:"nav-link active",to:"/admin/coupon"},{default:(0,s.w5)((()=>[p])),_:1})])])]),(0,s._)("div",{class:"btn btn-light me-2",onClick:t[0]||(t[0]=(...a)=>g.signout&&g.signout(...a))},"登出"),(0,s.Wm)(m,{type:"button",class:"btn btn-outline-light",to:"/"},{default:(0,s.w5)((()=>[b])),_:1})])])}var g={methods:{signout(){document.cookie="zyToken=; expires=;",alert("已登出!"),this.$router.push("/login")}}},m=n(3744);const f=(0,m.Z)(g,[["render",k]]);var _=f,w={data(){return{checkSuccess:!1}},components:{AdminNavbar:_},methods:{checkLogin(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)zyToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a,this.$http.post("https://vue3-course-api.hexschool.io/v2/api/user/check").then((()=>{this.checkSuccess=!0})).catch((()=>{alert("尚未登入"),this.$router.push("/login")}))}},mounted(){this.checkLogin()}};const $=(0,m.Z)(w,[["render",e]]);var x=$}}]);
//# sourceMappingURL=351.477cece1.js.map