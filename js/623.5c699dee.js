"use strict";(self["webpackChunksixth"]=self["webpackChunksixth"]||[]).push([[623],{1530:function(t,i,s){function e(t){return{all:t=t||new Map,on:function(i,s){var e=t.get(i);e?e.push(s):t.set(i,[s])},off:function(i,s){var e=t.get(i);e&&(s?e.splice(e.indexOf(s)>>>0,1):t.set(i,[]))},emit:function(i,s){var e=t.get(i);e&&e.slice().map((function(t){t(s)})),(e=t.get("*"))&&e.slice().map((function(t){t(i,s)}))}}}s.d(i,{Z:function(){return n}});const c=e();var n=c},5623:function(t,i,s){s.r(i),s.d(i,{default:function(){return D}});var e=s(6252),c=s(3577),n=s(9963);const a=(0,e._)("h2",{class:"text-center py-3"},"單一產品",-1),o={class:"container"},r={class:"card"},d={class:"row align-items-center"},l={class:"col-sm-6"},u=["src"],p={class:"col-sm-6"},h={class:"pe-5"},g={class:"badge bg-primary rounded-pill"},m={key:0,class:"h5"},v={key:1},_={class:"h6"},f={class:"h5"},y={class:"input-group"},w=["disabled"],b=(0,e._)("i",{class:"fas fa-spinner fa-pulse"},null,-1),z=[b],k=(0,e.Uk)(" 加入購物車"),x=(0,e._)("div",null,null,-1);function q(t,i,s,b,q,C){return(0,e.wg)(),(0,e.iD)(e.HY,null,[a,(0,e._)("div",o,[(0,e._)("div",r,[(0,e._)("div",d,[(0,e._)("div",l,[(0,e._)("img",{class:"w-100",style:{height:"400px","object-fit":"cover"},src:q.product.imageUrl,alt:""},null,8,u)]),(0,e._)("div",p,[(0,e._)("div",h,[(0,e._)("h5",null,(0,c.zw)(q.product.title),1),(0,e._)("span",g,(0,c.zw)(q.product.category),1),(0,e._)("p",null,"商品描述："+(0,c.zw)(q.product.description),1),(0,e._)("p",null,"商品內容："+(0,c.zw)(q.product.content),1),q.product.price===q.product.origin_price?((0,e.wg)(),(0,e.iD)("div",m,(0,c.zw)(q.product.price)+" 元",1)):((0,e.wg)(),(0,e.iD)("div",v,[(0,e._)("del",_,"原價 "+(0,c.zw)(q.product.origin_price)+" 元",1),(0,e._)("div",f,"現在只要 "+(0,c.zw)(q.product.price)+" 元",1)])),(0,e._)("div",y,[(0,e.wy)((0,e._)("input",{type:"number",class:"form-control","onUpdate:modelValue":i[0]||(i[0]=t=>q.qty=t),min:"1"},null,512),[[n.nr,q.qty]]),(0,e._)("button",{type:"button",class:"btn btn-primary",onClick:i[1]||(i[1]=t=>C.addToCart(q.product.id,q.qty)),disabled:q.isLoadingItem===q.product.id},[(0,e.wy)((0,e._)("span",null,z,512),[[n.F8,q.isLoadingItem===q.product.id]]),k],8,w)])]),x])])])])],64)}var C=s(1530),I={data(){return{product:[],isLoadingItem:"",qty:1}},methods:{getProduct(){const t=this.$route.params.id;this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/zy123/product/${t}`).then((t=>{this.product=t.data.product})).catch((t=>{console.log(t)}))},addToCart(t,i=1){this.isLoadingItem=t,this.$http.post("https://vue3-course-api.hexschool.io/v2/api/zy123/cart",{data:{product_id:t,qty:i}}).then((t=>{this.isLoadingItem="",this.getProduct(),C.Z.emit("get-cart-list"),alert(t.data.message),this.qty=1})).catch((t=>{alert(t.data.message)}))}},mounted(){this.getProduct()}},L=s(3744);const $=(0,L.Z)(I,[["render",q]]);var D=$}}]);
//# sourceMappingURL=623.5c699dee.js.map