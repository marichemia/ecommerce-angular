"use strict";(self.webpackChunkangular_ecommerce=self.webpackChunkangular_ecommerce||[]).push([[774],{8774:(M,u,c)=>{c.r(u),c.d(u,{ProductsModule:()=>v});var i=c(6895),s=c(3128),t=c(8256),a=c(4561),p=c(8773),l=c(5631);const d=function(){return["/products"]},g=function(o){return{category:o}};function f(o,e){if(1&o&&(t.TgZ(0,"div",6)(1,"a"),t._uU(2),t.qZA()()),2&o){const r=e.$implicit;t.Q6J("routerLink",t.DdM(3,d))("queryParams",t.VKq(4,g,r.id)),t.xp6(2),t.Oqu(r.name)}}function m(o,e){1&o&&t._UZ(0,"app-product-card",7),2&o&&t.Q6J("product",e.$implicit)}const y=[{path:"",component:(()=>{class o{constructor(r,n,C){this.productService=r,this.categoryService=n,this.route=C,this.products=[],this.categories$=this.categoryService.getCategories()}ngOnInit(){this.route.queryParams.subscribe(r=>{this.categoryId=r.category,this.getProducts()})}getProducts(){this.productService.getProducts({categoryId:this.categoryId}).pipe().subscribe(n=>{this.products=n})}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(a.su),t.Y36(p.G),t.Y36(s.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:8,vars:6,consts:[[1,"container"],[1,"categories"],[1,"category-link",3,"routerLink"],["class","category-link",3,"routerLink","queryParams",4,"ngFor","ngForOf"],[1,"products"],[3,"product",4,"ngFor","ngForOf"],[1,"category-link",3,"routerLink","queryParams"],[3,"product"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"a",2),t._uU(3,"All"),t.qZA(),t.YNc(4,f,3,6,"div",3),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"div",4),t.YNc(7,m,1,1,"app-product-card",5),t.qZA()()),2&r&&(t.xp6(2),t.Q6J("routerLink",t.DdM(5,d)),t.xp6(2),t.Q6J("ngForOf",t.lcZ(5,3,n.categories$)),t.xp6(3),t.Q6J("ngForOf",n.products))},dependencies:[i.sg,s.rH,s.yS,l.Y,i.Ov],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.container[_ngcontent-%COMP%]{width:80%;height:auto;position:relative;left:10%;display:flex;flex-direction:row;justify-content:space-between;font-family:Roboto,sans-serif;color:#000}.categories[_ngcontent-%COMP%]{width:30%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;font-size:20px;line-height:30px}.category-link[_ngcontent-%COMP%]{width:100%;cursor:pointer}.category-link[_ngcontent-%COMP%]:hover{background-color:#3d7bc2e1}.products[_ngcontent-%COMP%]{width:70%;height:100%;display:flex;flex-direction:row;flex-wrap:wrap}"]}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forChild(y),s.Bz]}),o})();var P=c(7938);let v=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[i.ez,h,P.$]}),o})()}}]);