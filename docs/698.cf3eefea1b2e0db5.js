"use strict";(self.webpackChunkangular_ecommerce=self.webpackChunkangular_ecommerce||[]).push([[698],{3698:(b,c,e)=>{e.r(c),e.d(c,{HomeModule:()=>f});var s=e(6895),i=e(3128),a=e(7579),d=e(2722),o=e(8256),u=e(5482),p=e(5631);function m(t,r){1&t&&o._UZ(0,"app-product-card",4),2&t&&o.Q6J("product",r.$implicit)}const l=[{path:"",component:(()=>{class t{constructor(n){this.productsService=n,this.sub$=new a.x,this.products=[]}ngOnDestroy(){this.sub$.next(null),this.sub$.complete()}ngOnInit(){this.getProducts()}getProducts(){this.productsService.getProducts({}).pipe((0,d.R)(this.sub$)).subscribe(n=>{this.products=n})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(u.s))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-home"]],decls:5,vars:1,consts:[[1,"banner-container"],[1,"banner"],[1,"cards-container"],[3,"product",4,"ngFor","ngForOf"],[3,"product"]],template:function(n,v){1&n&&(o.TgZ(0,"div")(1,"div",0),o._UZ(2,"div",1),o.qZA(),o.TgZ(3,"div",2),o.YNc(4,m,1,1,"app-product-card",3),o.qZA()()),2&n&&(o.xp6(4),o.Q6J("ngForOf",v.products))},dependencies:[s.sg,p.Y],styles:[".banner[_ngcontent-%COMP%]{background-image:url(/assets/images/banner.jpg);width:70%;height:700px;background-size:cover;position:absolute;top:0}.banner-container[_ngcontent-%COMP%]{width:100%;height:700px;padding:20px 50px;background-image:url(/assets/images/banner-bg.webp);background-size:cover;display:flex;flex-direction:column;align-items:center;position:relative}.cards-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly;margin-left:auto;margin-right:auto;margin-top:50px;width:100%;padding-left:1%;padding-right:1%}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[i.Bz.forChild(l),i.Bz]}),t})();var h=e(7938);let f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.ez,g,h.$]}),t})()}}]);