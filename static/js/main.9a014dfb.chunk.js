(this["webpackJsonpgetir-frontend-assignment"]=this["webpackJsonpgetir-frontend-assignment"]||[]).push([[0],{43:function(t,e,n){"use strict";n.r(e);var r,c,i,o,a,s,d,u,l,b,j,h,p,f,m,O,x,g,v,w,y,k=n(1),C=n.n(k),P=n(15),T=n.n(P),$=n(2),_=n(3),E=n(28),F=n(12),S=n(20),I=function(){function t(){Object(F.a)(this,t)}return Object(S.a)(t,null,[{key:"sum",value:function(t){return t.reduce((function(t,e){return t+e}),0)}},{key:"isEmpty",value:function(t){return 0===t.length}},{key:"mapToArray",value:function(t){return Object.keys(t).map((function(e){return[e,t[e]]}))}},{key:"range",value:function(t,e){return Array.from({length:e},(function(e,n){return n+t}))}}]),t}(),R="/GetirFrontEnd".concat("assets/"),B=function(t){return R.concat("icons/".concat(t,".svg"))},L=function(t){return String(t).concat("px")},A=function(){return null},z=function(t,e,n){return function(){return t?e.apply(void 0,Object(E.a)(n||[])):null}},N="(max-width: ".concat(L(768),")"),H=$.d.div(r||(r=Object(_.a)(["\n  padding: 0 104px;\n  background-color: ",";\n  min-height: 100vh;\n  padding-bottom: 40px;\n \n  @media "," {\n    padding: 0 0 40px;\n  }\n"])),(function(t){return t.theme.colors.background}),N),W=$.d.main(c||(c=Object(_.a)(["\n  display: flex;\n  @media "," {\n    flex-direction: column;\n    align-items: center;\n  }\n"])),N),D=$.d.div(i||(i=Object(_.a)([""]))),M=$.d.div(o||(o=Object(_.a)(["\n  padding: 6px 16px;\n  border-radius: ",";\n  font-size: 13px;\n  font-weight: 600;\n  display: inline-block;\n  user-select: none;\n  cursor: pointer;\n  background-color: ",";\n  color: ",";\n"])),(function(t){return t.theme.dimensions.borderRadius}),(function(t){var e=t.active,n=t.theme;return e?n.colors.primary:n.colors.primaryLight}),(function(t){var e=t.active,n=t.theme;return e?n.colors.white:n.colors.primary})),G=n(0),J=function(t){return Object(G.jsx)(M,{"data-testid":"item-selector",onClick:t.handleClick,active:t.active,children:t.text})},U=$.d.div(a||(a=Object(_.a)(["\n  width: ",";\n"])),(function(t){return String(t.$size).concat("px")})),X=function(t){return Object(G.jsx)(U,{$size:t.size,children:Object(G.jsx)("div",{})})},q=n(5),K=function(t){return t.totalPrice},Q=function(t){return t.filter},V=function(t){return t.pageId},Y=function(t){return t.shoppingCart},Z=function(t){return t.pageCount},tt=$.d.img(s||(s=Object(_.a)(["\n  object-fit: contain;\n  width: ",";\n  user-select: none;\n"])),(function(t){return L(t.$width)})),et=($.d.div(d||(d=Object(_.a)(["\n  transition: all 0.2s ease-in-out;\n"]))),$.d.input(u||(u=Object(_.a)(["\n  transition: all 0.2s ease-in-out;\n"])))),nt=$.d.div(l||(l=Object(_.a)(["\n  display: flex;\n"]))),rt=$.d.div(b||(b=Object(_.a)(["\n  flex: 1;\n\n  @media "," {\n    width: 100%;\n  }\n"])),N),ct=Object($.d)(nt)(j||(j=Object(_.a)(["\n  justify-content: center;\n  align-items: center;\n"]))),it=(Object($.d)(nt)(h||(h=Object(_.a)(["\n  justify-content: space-between;\n  align-items: center;\n"]))),Object($.e)(p||(p=Object(_.a)(["\n  from {\n    background-color: hsl(200, 20%, 70%);\n  }\n\n  to {\n    background-color: hsl(200, 20%, 95%);\n  }\n"])))),ot=(Object($.c)(f||(f=Object(_.a)(["\n  animation: "," 1s linear infinite alternate;\n"])),it),$.d.div(m||(m=Object(_.a)(["\n  animation: "," 1s linear infinite alternate;\n  border-radius: ",";\n"])),it,(function(t){return t.theme.dimensions.borderRadius}))),at=Object($.d)(nt)(O||(O=Object(_.a)(["\n  background-color: ",";\n  border-radius: ",";\n  box-shadow: ",";\n  padding: 6px 14px;\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.dimensions.borderRadius}),(function(t){return t.theme.effects.filterFrameShadow})),st=$.d.div(x||(x=Object(_.a)(["\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 24px;\n  display: inline-flex;\n  height: 100%;\n"])),(function(t){return t.theme.colors.primaryDark})),dt=$.d.div(g||(g=Object(_.a)(["\n  color: ",";\n"])),(function(t){return t.theme.colors.white})),ut=Object($.d)(nt)(v||(v=Object(_.a)(["\n  @media "," {\n    display: none;\n  }\n"])),N),lt=function(){var t=Object(q.c)(K);return Object(G.jsxs)(st,{children:[Object(G.jsx)(tt,{$width:13,src:B("bag"),alt:"Shopping Cart"}),Object(G.jsxs)(ut,{children:[Object(G.jsx)(X,{size:14}),Object(G.jsxs)(dt,{"data-testid":"price-banner-text",children:["\u20ba ",t]})]})]})},bt=n(4);function jt(){var t=Object(k.useState)(!1),e=Object(bt.a)(t,2),n=e[0],r=e[1],c=Object(k.useCallback)((function(){var t=window.innerWidth;r(t<768)}),[]);return Object(k.useEffect)((function(){return window.addEventListener("resize",c),c(),function(){return window.removeEventListener("resize",c)}}),[c]),n}var ht,pt,ft,mt,Ot,xt,gt=$.d.header(w||(w=Object(_.a)(["\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 104px;\n  margin: 0 -104px 40px;\n  height: 76px;\n\n  @media "," {\n    padding: 0;\n    margin: 0 0 40px;\n    \n  }\n"])),(function(t){return t.theme.colors.primary}),N),vt=$.d.img(y||(y=Object(_.a)(["\n  object-fit: contain;\n  width: 141.25px;\n  position: absolute;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n"]))),wt=function(){var t=jt();return Object(G.jsxs)(gt,{children:[!t&&Object(G.jsx)(X,{size:1}),Object(G.jsx)(vt,{src:B("brand"),alt:"Brand"}),!t&&Object(G.jsx)(lt,{})]})},yt=$.d.div(ht||(ht=Object(_.a)(["\n  margin-bottom: 12px;\n  font-size: 13px;\n  line-height: 17.7px;\n  color: ",";\n"])),(function(t){return t.theme.colors.filterTitle})),kt=$.d.div(pt||(pt=Object(_.a)(["\n  background-color: ",";\n  box-shadow: ",";\n  border-radius: ",";\n  padding: 24px;\n  width: 296px;\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.effects.filterFrameShadow}),(function(t){return t.theme.dimensions.borderRadius})),Ct=function(t){return Object(G.jsxs)("div",{children:[Object(G.jsx)(yt,{"data-testid":"filter-frame-title",children:t.title}),Object(G.jsx)(kt,{children:t.children})]})},Pt=$.d.div(ft||(ft=Object(_.a)(["\n  display: flex;\n  align-items: center;\n"]))),Tt=$.d.div(mt||(mt=Object(_.a)(["\n  border: ",";\n  width: 22px;\n  height: 22px;\n  border-radius: 99px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 12px;\n  cursor: pointer;\n  user-select: none;\n"])),(function(t){var e=t.$active,n=t.theme;return"".concat(n.dimensions.borderRadius," solid ").concat(e?n.colors.primary:n.colors.radioBorder)})),$t=$.d.div(Ot||(Ot=Object(_.a)(["\n  font-weight: 400;\n  color: ",";\n"])),(function(t){return t.theme.colors.filterText})),_t=function(t){return Object(G.jsxs)(Pt,{children:[Object(G.jsx)(Tt,{"data-testid":"radio-button-icon",onClick:t.active?A:t.handleClick,$active:t.active,children:t.active&&Object(G.jsx)(tt,{$width:8,src:B("check-blue"),alt:"Check Icon"})}),Object(G.jsx)($t,{"data-testid":"radio-button-text",children:t.text})]})},Et=Object(k.memo)(_t,(function(t,e){return t.text===e.text&&t.active===e.active})),Ft=n(6);!function(t){t.NO_FILTER="",t.PRICE_LOW_TO_HIGH="_sort=price&_order=asc&",t.PRICE_HIGH_TO_LOW="_sort=price&_order=desc&",t.NEW_TO_OLD="_sort=added&_order=desc&",t.OLD_TO_NEW="_sort=added&_order=asc&"}(xt||(xt={}));var St,It=Object(Ft.b)("filter/update"),Rt=$.d.div(St||(St=Object(_.a)(["\n  &:not(:last-child) {\n    margin-bottom: 16px;\n  }\n"]))),Bt=[["Price low to high",xt.PRICE_LOW_TO_HIGH],["Price high to low",xt.PRICE_HIGH_TO_LOW],["New to old",xt.NEW_TO_OLD],["Old to new",xt.OLD_TO_NEW]],Lt=function(){var t=Object(k.useState)(0),e=Object(bt.a)(t,2),n=e[0],r=e[1],c=Object(q.b)();return Object(G.jsx)(G.Fragment,{children:Bt.map((function(t,e){var i=Object(bt.a)(t,2),o=i[0],a=i[1];return Object(G.jsx)(Rt,{children:Object(G.jsx)(Et,{text:o,handleClick:function(){r(e),c(It({sorting:a}))},active:n===e})},e)}))})},At=n(25),zt=n(10),Nt=n(8),Ht=n(7),Wt=n.n(Ht),Dt=n(9),Mt="http://localhost:5000/",Gt={method:"GET",headers:{Accept:"application/json"}},Jt="items",Ut=function t(){var e=this;Object(F.a)(this,t),this.getAllItems=Object(Dt.a)(Wt.a.mark((function t(){var e;return Wt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(Mt.concat(Jt));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)}))),this.getFilteredItems=function(){var t=Object(Dt.a)(Wt.a.mark((function t(e){var n;return Wt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(Mt.concat(Jt),"?").concat(e.sorting,"&itemType=").concat(e.itemType).concat(e.brand?"&manufacturer=".concat(e.brand):"").concat(e.tag?"&tags_like=".concat(e.tag):""));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getFilteredItemsByPageId=function(){var t=Object(Dt.a)(Wt.a.mark((function t(e,n){var r;return Wt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(Mt.concat(Jt),"?").concat(n.sorting,"_page=").concat(e,"&_limit=").concat(16,"&itemType=").concat(n.itemType).concat(n.brand?"&manufacturer=".concat(n.brand):"").concat(n.tag?"&tags_like=".concat(n.tag):""));case 2:return r=t.sent,t.next=5,r.json();case 5:return t.t0=t.sent,t.t1=Number(r.headers.get("X-Total-Count")),t.abrupt("return",[t.t0,t.t1]);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),this.getTagMap=Object(Dt.a)(Wt.a.mark((function t(){var e;return Wt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(Mt.concat(Jt));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent.map((function(t){return t.tags})).reduce((function(t,e){return e.reduce((function(e,n){return t=Object(Nt.a)(Object(Nt.a)({},t),{},Object(zt.a)({},n,t[n]?t[n]+1:1))}),{})}),{}));case 6:case"end":return t.stop()}}),t)}))),this.getTotalNumberOfFilteredItems=function(){var t=Object(Dt.a)(Wt.a.mark((function t(n){var r;return Wt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getFilteredItems(n);case 2:return r=t.sent,t.abrupt("return",r.length);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};Ut.instance=new Ut;var Xt=function t(){var e=this;Object(F.a)(this,t),this.getCompanies=Object(Dt.a)(Wt.a.mark((function t(){var e;return Wt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(Mt.concat("companies"),Gt);case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)}))),this.getCompanyMap=Object(Dt.a)(Wt.a.mark((function t(){var n,r,c,i,o,a,s,d,u,l,b;return Wt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCompanies();case 2:return n=t.sent,r=n.reduce((function(t,e){return Object(Nt.a)(Object(Nt.a)({},t),{},Object(zt.a)({},e.slug,e.name))}),{}),t.next=6,Ut.instance.getAllItems();case 6:c=t.sent,i={},o=Object(At.a)(c);try{for(o.s();!(a=o.n()).done;)s=a.value,i[s.manufacturer]=i[s.manufacturer]?i[s.manufacturer]+1:1}catch(j){o.e(j)}finally{o.f()}for(d=0,u=Object.keys(i);d<u.length;d++)l=u[d],b=i[l],i[r[l]]=b,delete i[l];return t.abrupt("return",i);case 12:case"end":return t.stop()}}),t)})))};Xt.instance=new Xt;var qt,Kt=Object(Ft.b)("page-count/update");function Qt(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(k.useState)(e),c=Object(bt.a)(r,2),i=c[0],o=c[1],a=Object(k.useState)(!1),s=Object(bt.a)(a,2),d=s[0],u=s[1],l=Object(q.b)();return Object(k.useEffect)((function(){t().then((function(t){if(o(t),n){var e=t;u(0===e[0].length),l(Kt(Math.ceil(e[1]/16)))}}))}),[t,n,l]),[i,d]}var Vt=$.d.div(qt||(qt=Object(_.a)(["\n  & > div:not(:last-child) {\n    margin-bottom: 24px;\n  }\n"])));var Yt,Zt,te,ee,ne,re,ce,ie,oe,ae,se,de,ue,le,be,je,he,pe,fe,me,Oe,xe,ge,ve,we,ye,ke,Ce,Pe,Te,$e,_e,Ee,Fe,Se,Ie,Re,Be,Le,Ae,ze=function(t){var e=t.split(" ");return function(t){return e.reduce((function(e,n){return e&&new RegExp(n,"i").test(t)}),!0)}},Ne=function(t){var e=function(t){var e=Object(k.useState)(t),n=Object(bt.a)(e,2),r=n[0],c=n[1];return Object(k.useEffect)((function(){c(t)}),[t]),[r,c]}(t.list),n=Object(bt.a)(e,2),r=n[0],c=n[1],i=Object(k.useState)(!1),o=Object(bt.a)(i,2),a=o[0],s=o[1];return Object(G.jsxs)(k.Fragment,{children:[Object(G.jsx)(Ge,{updateSearchWord:function(e){if(!e)return c(t.list),void s(!1);s(!0),c(t.list.filter((function(t){return ze(e)(t[0])})))},placeholder:t.placeholder}),Object(G.jsx)(an,{filterProp:t.filterProp,list:r,isPartial:a,totalCount:t.totalCount})]})},He=function(){var t=Object(k.useCallback)((function(){return Xt.instance.getCompanyMap()}),[]),e=Object(k.useCallback)((function(){return Ut.instance.getTagMap()}),[]),n=Qt(t,{}),r=Object(bt.a)(n,1)[0],c=I.sum(I.mapToArray(r).map((function(t){return t[1]}))),i=Qt(e,{}),o=Object(bt.a)(i,1)[0];return Object(G.jsxs)(Vt,{children:[Object(G.jsx)(Ct,{title:"Sorting",children:Object(G.jsx)(Lt,{})}),Object(G.jsx)(Ct,{title:"Brands",children:Object(G.jsx)(Ne,{filterProp:"brand",totalCount:c,placeholder:"Search brand",list:I.mapToArray(r)})}),Object(G.jsx)(Ct,{title:"Tags",children:Object(G.jsx)(Ne,{filterProp:"tag",totalCount:c,placeholder:"Search brand",list:I.mapToArray(o)})})]})},We=n(26),De=n.n(We),Me=Object($.d)(et)(Yt||(Yt=Object(_.a)(["\n  margin-bottom: 16px;\n  font-family: Inter, sans-serif;\n  padding: 12px 16px;\n  line-height: 24px;\n  font-weight: 400;\n  border: ",";\n  border-radius: ",";\n  width: 100%;\n  color: ",";\n  &:focus {\n    outline: none;\n    border-color: ",";\n  }\n\n  ::placeholder {\n    color: ",";\n  }\n"])),(function(t){return"2px solid ".concat(t.theme.colors.searchBarBorder)}),(function(t){return t.theme.dimensions.borderRadius}),(function(t){return t.theme.colors.filterText}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.inputPlaceholder})),Ge=function(t){var e=De()((function(e){var n=e.target.value;t.updateSearchWord(n)}),250);return Object(G.jsx)(Me,{onChange:function(t){e(t)},placeholder:t.placeholder})},Je=$.d.div(Zt||(Zt=Object(_.a)(["\n  display: flex;\n  align-items: center;\n"]))),Ue=$.d.div(te||(te=Object(_.a)(["\n  box-shadow: ",";\n  border-radius: ",";\n  background-color: ",";\n  width: 22px;\n  height: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 8px;\n  cursor: pointer;\n  user-select: none;\n"])),(function(t){return t.theme.effects.checkboxShadow}),(function(t){return t.theme.dimensions.borderRadius}),(function(t){var e=t.$active,n=t.theme;return e?n.colors.primary:n.colors.white})),Xe=$.d.span(ee||(ee=Object(_.a)(["\n  font-weight: 400;\n  color: ",";\n  margin-right: 4px;\n"])),(function(t){return t.theme.colors.filterText})),qe=$.d.span(ne||(ne=Object(_.a)(["\n  font-weight: 400;\n  color: ",";\n"])),(function(t){return t.theme.colors.inputPlaceholder})),Ke=function(t){return Object(G.jsxs)(Je,{children:[Object(G.jsx)(Ue,{"data-testid":"checkbox-icon",onClick:t.active?A:t.handleClick,$active:t.active,children:Object(G.jsx)(tt,{$width:11,src:B("check-white")})}),Object(G.jsxs)(Xe,{"data-testid":"checkbox-text",children:[t.text," ",Object(G.jsxs)(qe,{children:["(",t.count,")"]})]})]})},Qe=Object(k.memo)(Ke,(function(t,e){return t.text===e.text&&t.active===e.active&&t.count===e.count})),Ve=n(27),Ye=n.n(Ve),Ze=Object(Ft.b)("page-id/set-id"),tn=$.d.div(re||(re=Object(_.a)(["\n  padding-top: 4px;\n  padding-left: 4px;\n  & > div:not(:last-child) {\n    margin-bottom: 18px;\n  }\n"]))),en=Object($.d)(tn)(ce||(ce=Object(_.a)(["\n  height: 132px;\n  overflow-y: scroll;\n  & > div > div:nth-child(2) {\n    max-width: 160px;\n  }\n  &::-webkit-scrollbar {\n    width: 4px;\n  }\n  &::-webkit-scrollbar-track {\n    background: none;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: ",";\n  }\n"])),(function(t){return t.theme.colors.searchBarBorder})),nn=Object($.d)(tn)(ie||(ie=Object(_.a)(["\n  display: flex;\n"]))),rn=Object($.d)(ot)(oe||(oe=Object(_.a)(["\n  width: 22px;\n  height: 22px;\n  border-radius: ",";\n  margin-right: 8px;\n  background-color: blue;\n"])),(function(t){return t.theme.dimensions.borderRadius})),cn=Object($.d)(ot)(ae||(ae=Object(_.a)(["\n  width: 160px;\n  height: 22px;\n  border-radius: ",";\n"])),(function(t){return t.theme.dimensions.borderRadius})),on=function(){return Object(G.jsx)(k.Fragment,{children:I.range(1,3).map((function(t){return Object(G.jsxs)(nn,{children:[Object(G.jsx)(rn,{}),Object(G.jsx)(cn,{})]},t)}))})},an=function(t){var e=Object(k.useState)(""),n=Object(bt.a)(e,2),r=n[0],c=n[1],i=Object(q.b)(),o=["All",t.totalCount];return I.isEmpty(t.list)?Object(G.jsx)(on,{}):Object(G.jsx)(en,{children:(t.isPartial?[]:[o]).concat(t.list).map((function(e,n){var o=Object(bt.a)(e,2),a=o[0],s=o[1];return Object(G.jsx)(Qe,{handleClick:function(){i(Ze(1)),i(It(Object(zt.a)({},t.filterProp,0!==n||t.isPartial?"brand"===t.filterProp?Ye()(a):a:""))),c("All"===a?"":a)},text:a,count:s,active:n||t.isPartial?r===a:""===r},n)}))})},sn=$.d.div(se||(se=Object(_.a)(["\n  margin-bottom: 16px;\n\n  & > div > div:not(:last-child) {\n    margin-right: 8px;\n  }\n"]))),dn=function(t){var e=function(e){return e===t.selectedIndex},n=Object(q.b)();return Object(G.jsx)(sn,{children:Object(G.jsx)(nt,{children:["mug","shirt"].map((function(r,c){return Object(G.jsx)(J,{handleClick:z(!e(c),(function(){n(Ze(1)),n(It({itemType:r})),t.clickHandlers[c]()})),text:r,active:e(c)},c)}))})})},un=Object($.d)(ct)(de||(de=Object(_.a)(["\n  padding: 0 16px;\n  flex: 1;\n  flex-direction: column;\n"]))),ln=$.d.h1(ue||(ue=Object(_.a)(["\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 26px;\n  letter-spacing: 0.25px;\n  color: ",";\n"])),(function(t){return t.theme.colors.headline})),bn=$.d.div(le||(le=Object(_.a)(["\n  align-self: flex-start;\n\n  @media "," {\n    align-self: center;\n    text-align: center;\n  }\n"])),N),jn=function(){var t=Object(k.useState)(0),e=Object(bt.a)(t,2),n=e[0],r=e[1];return Object(G.jsxs)(un,{children:[Object(G.jsxs)(bn,{children:[Object(G.jsx)(ln,{children:"Products"}),Object(G.jsx)(dn,{clickHandlers:[function(){return r(0)},function(){return r(1)}],selectedIndex:n})]}),Object(G.jsx)(Nn,{}),Object(G.jsx)(cr,{})]})},hn=$.d.div(be||(be=Object(_.a)(["\n  border-radius: ",";\n  border: 8px solid ",";\n  width: 296px;\n  padding: 24px 24px 16px;\n  background-color: ",";\n  text-align: right;\n"])),(function(t){return t.theme.dimensions.borderRadius}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.white})),pn=$.d.div(je||(je=Object(_.a)(["\n  border-radius: ",";\n  border: 2px solid ",";\n  color: ",";\n  line-height: 16px;\n  padding: 17px 24px;\n  display: inline-block;\n  margin-top: 16px;\n"])),(function(t){return t.theme.dimensions.borderRadius}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.primary})),fn=$.d.div(he||(he=Object(_.a)(["\n  text-align: center;\n  font-weight: 400;\n  color: ",";\n"])),(function(t){return t.theme.colors.primary})),mn=function(){var t=Object.values(Object(q.c)(Y)),e=Object(q.c)(K);return Object(G.jsx)(hn,{children:I.isEmpty(t)?Object(G.jsx)(fn,{children:"No items added to the cart"}):Object(G.jsxs)(k.Fragment,{children:[t.map((function(t,e){return Object(G.jsx)(Mn,{shoppingCartPayload:t},e)})),Object(G.jsxs)(pn,{children:["\u20ba",e]})]})})},On=Object(Ft.b)("shopping-cart/add-item"),xn=Object(Ft.b)("shopping-cart/remove-item"),gn=Object(Ft.b)("total-price/add-price"),vn=Object(Ft.b)("total-price/subtract-price"),wn=$.d.div(pe||(pe=Object(_.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  width: 124px;\n"]))),yn=$.d.div(fe||(fe=Object(_.a)(["\n  border-radius: 12px;\n  padding: 16px;\n  border: 1px solid ",";\n  display: inline-block;\n  background-color: ",";\n  margin-bottom: 8px;\n\n  & > img {\n    width: 92px;\n    height: 92px;\n  }\n"])),(function(t){return t.theme.colors.imageBorder}),(function(t){return t.theme.colors.white})),kn=$.d.div(me||(me=Object(_.a)(["\n  line-height: 20px;\n  color: ",";\n"])),(function(t){return t.theme.colors.primary})),Cn=Object($.d)(kn)(Oe||(Oe=Object(_.a)(["\n  font-weight: 400;\n  margin-right: 4px;\n"]))),Pn=Object($.d)(kn)(xe||(xe=Object(_.a)(["\n  font-weight: 700;\n"]))),Tn=$.d.div(ge||(ge=Object(_.a)(["\n  line-height: 20px;\n  color: ",";\n  margin-bottom: 8px;\n  min-height: 40px;\n"])),(function(t){return t.theme.colors.itemName})),$n=$.d.div(ve||(ve=Object(_.a)(["\n  padding: 1px 0;\n  text-align: center;\n  color: ",";\n  border-radius: ",";\n  line-height: 20px;\n  font-size: 12px;\n  background-color: ",";\n  cursor: pointer;\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.dimensions.borderRadius}),(function(t){return t.theme.colors.primary})),_n=function(t){var e=Object(q.b)();return Object(G.jsxs)(wn,{children:[Object(G.jsx)(yn,{children:Object(G.jsx)("img",{"data-testid":"item-card-image",src:t.imageUrl,alt:"Mug"})}),Object(G.jsxs)(nt,{"data-testid":"item-card-price",children:[Object(G.jsx)(Cn,{children:"\u20ba"}),Object(G.jsx)(Pn,{children:t.item.price})]}),Object(G.jsx)(Tn,{"data-testid":"item-card-name",children:t.item.name}),Object(G.jsx)($n,{"data-testid":"item-card-button",onClick:function(){e(On(t.item)),e(gn(t.item.price))},children:"Add"})]})},En=$.d.div(we||(we=Object(_.a)(["\n  padding: 20px;\n  background-color: ",";\n  border-radius: ",";\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.dimensions.borderRadius})),Fn=Object($.d)(En)(ye||(ye=Object(_.a)(["\n  display: grid;\n  place-items: center;\n  grid-template-columns: repeat(auto-fill, minmax(124px, 1fr));\n  grid-gap: 24px;\n  margin-bottom: 32px;\n  width: 100%;\n"]))),Sn=$.d.div(ke||(ke=Object(_.a)([""]))),In=Object($.d)(ot)(Ce||(Ce=Object(_.a)(["\n  width: 124px;\n  height: 124px;\n  border-radius: 12px;\n  margin-bottom: 8px;\n"]))),Rn=Object($.d)(ot)(Pe||(Pe=Object(_.a)(["\n  width: 40px;\n"]))),Bn=Object($.d)(ot)(Te||(Te=Object(_.a)(["\n  width: ",";\n  height: 16px;\n  margin-bottom: ",";\n"])),(function(t){return L(t.$width)}),(function(t){return L(t.$marginBottom)})),Ln=Object($.d)(ot)($e||($e=Object(_.a)(["\n  width: 124px;\n  height: 22px;\n"]))),An=Object($.d)(En)(_e||(_e=Object(_.a)(["\n  font-weight: 400;\n"]))),zn=function(){return Object(G.jsx)(k.Fragment,{children:I.range(1,16).map((function(t){return Object(G.jsxs)(Sn,{children:[Object(G.jsx)(In,{}),Object(G.jsx)(Rn,{}),Object(G.jsx)(Bn,{$width:116,$marginBottom:4}),Object(G.jsx)(Bn,{$width:32,$marginBottom:8}),Object(G.jsx)(Ln,{})]},t)}))})},Nn=function(){var t=Object(q.c)(V),e=Object(q.c)(Q),n=Qt(Object(k.useCallback)((function(){return Ut.instance.getFilteredItemsByPageId(t,e)}),[t,e]),[[],0],!0),r=Object(bt.a)(n,2),c=Object(bt.a)(r[0],1)[0];return r[1]?Object(G.jsx)(An,{children:"There is no item with the given filter"}):Object(G.jsx)(Fn,{children:I.isEmpty(c)?Object(G.jsx)(zn,{}):c.map((function(t,n){return Object(G.jsx)(_n,{item:t,imageUrl:"mug"===e.itemType?"https://kazanfederaluniversitesi.com/wp-content/uploads/2018/08/2.jpg":"https://imgmedia.lbb.in/media/2020/05/5eac0e7c833b2b7acdc583b2_1588334204878.jpg"},n)}))})},Hn=$.d.div(Ee||(Ee=Object(_.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid\n    ",";\n  padding: 0 6px 16px;\n  margin-top: 16px;\n\n  & img {\n    cursor: pointer;\n  }\n"])),(function(t){return t.theme.colors.shoppingCartSeparator})),Wn=$.d.div(Fe||(Fe=Object(_.a)(["\n  text-align: left;\n  max-width: 120px;\n  color: ",";\n\n  & > div:first-child {\n    color: ",";\n    font-weight: 400;\n  }\n"])),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.itemName})),Dn=$.d.div(Se||(Se=Object(_.a)(["\n  margin: 0 11px;\n  min-width: 32px;\n  height: 32px;\n  padding: 6px 12px;\n  background-color: ",";\n  color: ",";\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: 700;\n"])),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.white})),Mn=function(t){var e=Object(q.b)();return Object(G.jsxs)(Hn,{children:[Object(G.jsxs)(Wn,{"data-testid":"shopping-cart-item-info",children:[Object(G.jsx)("div",{children:t.shoppingCartPayload.item.name}),Object(G.jsxs)("div",{children:["\u20ba",t.shoppingCartPayload.item.price]})]}),Object(G.jsxs)(nt,{children:[Object(G.jsx)(tt,{"data-testid":"shopping-cart-remove-item-button",onClick:function(){e(vn(t.shoppingCartPayload.item.price)),e(xn(t.shoppingCartPayload.item.slug))},$width:10,src:B("minus"),alt:"Minus Sign"}),Object(G.jsx)(Dn,{"data-testid":"shopping-cart-item-count",children:t.shoppingCartPayload.count}),Object(G.jsx)(tt,{"data-testid":"shopping-cart-add-item-button",onClick:function(){e(gn(t.shoppingCartPayload.item.price)),e(On(t.shoppingCartPayload.item))},$width:10,src:B("plus"),alt:"Plus Sign"})]})]})},Gn=n(29);function Jn(){var t=Object(k.useState)(!1),e=Object(bt.a)(t,2),n=e[0],r=e[1],c=Object(k.useRef)(null),i=function(){return r(!0)},o=function(){return r(!1)};return Object(k.useEffect)((function(){var t=c.current;if(t)return t.addEventListener("mouseover",i),t.addEventListener("mouseout",o),function(){t.removeEventListener("mouseover",i),t.removeEventListener("mouseout",o)}}),[]),[c,n]}var Un,Xn,qn,Kn,Qn,Vn,Yn=$.d.div(Ie||(Ie=Object(_.a)(["\n  color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),(function(t){return t.theme.colors.filterTitle})),Zn=Object($.d)(ct)(Re||(Re=Object(_.a)(["\n  margin: 0 45px;\n"]))),tr=$.d.a(Be||(Be=Object(_.a)(["\n  & {\n    user-select: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 32px;\n    height: 40px;\n    background-color: ",";\n    color: ",";\n    border-radius: ",";\n    cursor: pointer;\n  }\n\n  &:hover {\n    color: ",";\n  }\n\n  @media "," {\n    min-width: 32px;\n  }\n"])),(function(t){return t.$active?t.theme.colors.primary:"transparent"}),(function(t){return t.$active?t.theme.colors.white:t.theme.colors.filterTitle}),(function(t){return t.theme.dimensions.borderRadius}),(function(t){return t.$active?t.theme.colors.white:t.theme.colors.primary}),N),er=$.d.a(Le||(Le=Object(_.a)(["\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: ",";\n"])),(function(t){return t.$active?t.theme.colors.primary:t.theme.colors.filterTitle})),nr=Object($.d)(at)(Ae||(Ae=Object(_.a)(["\n  overflow-x: scroll;\n  display: 'inline-block';\n  max-width: 100%;\n"]))),rr=Object(k.memo)((function(t){var e=Object(q.c)(V),n=Object(q.c)(Z),r=Object(q.b)();return Object(G.jsx)(Zn,{children:n<9?I.range(1,n).map((function(t){return Object(G.jsx)(tr,{href:"#jump-point",onClick:z(t!==e,(function(){return r(Ze(t))})),$active:t===e,children:t},t)})):t.generatePageSelectorButtons(e,n)})})),cr=function(){var t=jt(),e=Jn(),n=Object(bt.a)(e,2),r=n[0],c=n[1],i=Jn(),o=Object(bt.a)(i,2),a=o[0],s=o[1],d=Object(q.b)(),u=Object(q.c)(V),l=Object(q.c)(Z),b=Object(k.useCallback)((function(t,e){var n=I.range(1,9).map((function(){return Object(Gn.a)()}));return(t<4?[1,2,3,4,-1,e-3,e-2,e-1,e]:4===t?[1,-1,3,4,5,6,-1,e-1,e]:t>4&&t<e-3?[1,2,-1,t-1,t,t+1,-1,e-1,e]:t===e-3?[1,2,-1,e-5,e-4,e-3,e-2,-1,e]:t>e-3?[1,2,3,4,-1,e-3,e-2,e-1,e]:[-1]).map((function(e,r){return-1!==e?Object(G.jsx)(tr,{href:"#jump-point",onClick:z(e!==t,(function(){return d(Ze(e))})),$active:e===t,children:e},n[r]):Object(G.jsx)(tt,{style:{margin:"0 12px"},$width:10,src:B("three-dots"),alt:"Three dots"},n[r])}))}),[d]);return 0===l?null:t?Object(G.jsx)(nr,{children:I.range(1,l).map((function(t){return Object(G.jsx)(tr,{onClick:z(t!==u,(function(){return d(Ze(t))})),$active:t===u,href:"#jump-point",children:t},t)}))}):Object(G.jsxs)(Yn,{children:[Object(G.jsx)("div",{ref:r,children:Object(G.jsxs)(er,{href:"#jump-point",onClick:z(u>1,(function(){return d(Ze(u-1))})),$active:c,children:[Object(G.jsx)(tt,{$width:14,alt:"Left Arrow",src:B(c?"arrow-left-active":"arrow-left")}),Object(G.jsx)(X,{size:12}),"Prev"]})}),Object(G.jsx)(rr,{generatePageSelectorButtons:b}),Object(G.jsx)("div",{ref:a,children:Object(G.jsxs)(er,{href:"#jump-point",onClick:z(u<l,(function(){return d(Ze(u+1))})),$active:s,children:["Next",Object(G.jsx)(X,{size:12}),Object(G.jsx)(tt,{$width:14,alt:"Right Arrow",src:B(s?"arrow-right-active":"arrow-right")})]})})]})},ir=$.d.footer(Un||(Un=Object(_.a)(["\n  color: ",";\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 136px;\n  line-height: 22px;\n  text-align: center;\n"])),(function(t){return t.theme.colors.primary})),or=$.d.span(Xn||(Xn=Object(_.a)(["\n  margin: 0 16px;\n"]))),ar=function(){return Object(G.jsxs)(ir,{"data-testid":"footer-text",children:["\xa92021 Omer Market ",Object(G.jsx)(or,{children:"\u2022"})," Privacy Policy"]})},sr=Object($.d)(ct)(qn||(qn=Object(_.a)(["\n  flex-direction: column;\n  margin-bottom: 16px;\n"]))),dr=Object($.d)(at)(Kn||(Kn=Object(_.a)(["\n  & > div:first-child {\n    margin-right: 16px;\n  }\n  display: inline-flex;\n  margin-bottom: 12px;\n"]))),ur=$.d.div(Qn||(Qn=Object(_.a)(["\n  color: ",";\n    background-color: ",";\n    font-weight: 400;\n    padding: 4px 8px;\n    border-radius: ",";\n"])),(function(t){return t.$active?t.theme.colors.white:t.theme.colors.filterText}),(function(t){return t.$active?t.theme.colors.primary:t.theme.colors.white}),(function(t){return t.theme.dimensions.borderRadius})),lr=$.d.div(Vn||(Vn=Object(_.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(t){return t.$visible?"auto":0})),br=function(){var t=Object(k.useState)(-1),e=Object(bt.a)(t,2),n=e[0],r=e[1];return Object(G.jsxs)(sr,{children:[Object(G.jsxs)(dr,{children:[Object(G.jsx)(ur,{onClick:function(){return r(0===n?-1:0)},$active:0===n,children:"Filter"}),Object(G.jsx)(ur,{onClick:function(){return r(1===n?-1:1)},$active:1===n,children:"Shopping Cart"})]}),Object(G.jsx)(lr,{$visible:0===n,children:Object(G.jsx)(He,{})}),Object(G.jsx)(lr,{$visible:1===n,children:Object(G.jsx)(mn,{})})]})},jr={colors:{primary:"#1EA4CE",primaryDark:"#147594",white:"#fff",primaryLight:"#F2F0FD",radioBorder:"#DFDEE2",searchBarBorder:"#E0E0E0",inputPlaceholder:"#A8A8A8",filterTitle:"#697488",filterText:"#525252",itemName:"#191919",background:"#FAFAFA",headline:"#6F6F6F",imageBorder:"#F3F0FE",shoppingCartSeparator:"#f4f4f4"},effects:{checkboxShadow:"0px 1px 7px rgba(93, 56, 192, 0.4);",filterFrameShadow:"0px 6px 24px rgba(93, 62, 188, 0.04);"},dimensions:{borderRadius:"2px"}};var hr,pr=function(){var t=jt();return Object(G.jsx)($.a,{theme:jr,children:Object(G.jsxs)(H,{children:[Object(G.jsx)("div",{id:"jump-point"}),Object(G.jsx)(wt,{}),Object(G.jsxs)(W,{children:[Object(G.jsx)(D,{children:t?Object(G.jsx)(br,{}):Object(G.jsx)(He,{})}),Object(G.jsx)(rt,{children:Object(G.jsx)(jn,{})}),!t&&Object(G.jsx)(D,{children:Object(G.jsx)(mn,{})})]}),Object(G.jsx)(ar,{})]})})},fr=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),i(t),o(t)}))},mr=(n(42),{sorting:xt.PRICE_LOW_TO_HIGH,itemType:"mug",tag:"",brand:""}),Or=Object(Ft.c)(mr,(function(t){t.addCase(It,(function(t,e){return Object(Nt.a)(Object(Nt.a)({},t),e.payload)}))})),xr=Object(Ft.c)(1,(function(t){return t.addCase(Kt,(function(t,e){return e.payload}))})),gr=Object(Ft.c)(1,(function(t){return t.addCase(Ze,(function(t,e){return e.payload}))})),vr={},wr={filter:mr,shoppingCart:vr,totalPrice:0,pageId:1,pageCount:1},yr={filter:Or,shoppingCart:Object(Ft.c)(vr,(function(t){return t.addCase(On,(function(t,e){var n=e.payload;t[n.slug]?t[n.slug].count+=1:t[n.slug]={count:1,item:n}})).addCase(xn,(function(t,e){var n=e.payload;1===t[n].count?delete t[n]:--t[n].count}))})),totalPrice:Object(Ft.c)(0,(function(t){return t.addCase(gn,(function(t,e){return+(t+=e.payload).toFixed(2)})).addCase(vn,(function(t,e){return+(t-=e.payload).toFixed(2)}))})),pageId:gr,pageCount:xr},kr=Object(Ft.a)({reducer:yr,devTools:!1,preloadedState:wr,middleware:function(t){return t()}}),Cr=Object($.b)(hr||(hr=Object(_.a)(["\n* {\n  box-sizing: border-box;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 18px;\n  transition: inherit;\n  text-decoration: none;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  font-family: 'Open Sans', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"])));T.a.render(Object(G.jsx)(C.a.StrictMode,{children:Object(G.jsxs)(q.a,{store:kr,children:[Object(G.jsx)(Cr,{}),Object(G.jsx)(pr,{})]})}),document.getElementById("root")),fr()}},[[43,1,2]]]);
//# sourceMappingURL=main.9a014dfb.chunk.js.map