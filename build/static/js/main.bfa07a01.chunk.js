(this.webpackJsonptextviz=this.webpackJsonptextviz||[]).push([[0],{124:function(t,e){},125:function(t,e){},150:function(t,e,n){},184:function(t,e){},186:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(31),s=n.n(r),i=(n(150),n(30)),o=n(132),l=n(245),d=n(240),p=n(233),j=n(246),u=n(248),x=n(1),b=Object(d.a)((function(t){return{root:{flexGrow:1},appbar:{alignItems:"center"},title:{flexGrow:1,padding:t.spacing(1)}}}));function h(){var t=b();return Object(x.jsxs)(p.a,{className:t.root,children:[Object(x.jsx)(j.a,{position:"static",className:t.appbar,sx:{backgroundColor:"primary.dark"},children:Object(x.jsx)(u.a,{variant:"h4",className:t.title,children:"TextViz"})}),Object(x.jsx)(j.a,{position:"static",className:t.appbar,sx:{backgroundColor:"primary.main"},children:Object(x.jsx)(u.a,{variant:"subtitle1",className:t.title,children:"\u6587\u5b57\u5217\u306e\u63a5\u5c3e\u8f9e\u6728\u3092\u7c21\u5358\u306b\u53ef\u8996\u5316\u3067\u304d\u307e\u3059\u3002"})})]})}var O=Object(d.a)({footer:{width:"100%",marginTop:"10px"}}),f=function(){var t=O();return Object(x.jsx)("div",{className:t.footer,children:Object(x.jsx)(u.a,{align:"center",variant:"body1",color:"primary",children:"\xa92021 Yuma Arakawa. All rights reserved."})})},m=n(33),g=n.n(m),y=n(49),v=n(13),T=n(249),w=n(239),k=n(243),E=n(36),G=n.n(E),N=Object(d.a)((function(t){return{button:{margin:t.spacing(1)}}})),C=function(){var t=N(),e=Object(i.b)(),n=Object(a.useState)(""),c=Object(v.a)(n,2),r=c[0],s=c[1],o=function(){var t=Object(y.a)(g.a.mark((function t(){var n,a,c,s,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://indextify.herokuapp.com/texts/",t.next=3,G.a.post(n,r,{headers:{"Content-Type":"text/plain"}});case 3:return a=t.sent,console.log("postresponse: ",a),c="https://indextify.herokuapp.com/text/".concat(a.data.id),t.next=8,G.a.get(c);case 8:return s=t.sent,console.log(s.data),200===s.status?e({type:"GET_TEXT",payload:s.data}):e({type:"GET_TEXT",payload:null}),t.next=13,G.a.get(n);case 13:i=t.sent,console.log(i.data),e({type:"GET_TEXTS",payload:i.data});case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(x.jsx)(T.a,{children:Object(x.jsx)("div",{style:{textAlign:"center",padding:"10px"},children:Object(x.jsxs)("div",{className:"postBox",style:{width:"100%"},children:[Object(x.jsx)(w.a,{id:"post-text",placeholder:"\u63a5\u5c3e\u8f9e\u6728\u3092\u77e5\u308a\u305f\u3044\u6587\u5b57\u5217\u3092\u5165\u529b (\u4f8b) helloworld",value:r,onChange:function(t){return s(t.target.value)},margin:"normal",fullWidth:!0,InputLabelProps:{shrink:!0},required:!0,type:"search",inputProps:{title:"\u6587\u5b57\u5217",maxLength:100,minLength:0}}),Object(x.jsx)(k.a,{className:t.button,variant:"outlined",color:"primary",onClick:o,disabled:""===r,children:"\u9001\u4fe1"})]})})})},X=n(14),_=n(251),S=n(247),A=n(252),z=n(253),I=n(254),B=n(255),D=n(256),L=n(133),P=Object(d.a)((function(t){return{button:{margin:t.spacing(1)}}})),F=function(){var t=P(),e=Object(i.b)(),n=Object(i.c)((function(t){return t.text})),a=function(){var t=Object(y.a)(g.a.mark((function t(){var a,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://indextify.herokuapp.com/text/".concat(n.id),t.next=3,G.a.delete(a);case 3:return 200===t.sent.status?alert("\u6b63\u5e38\u306b\u6587\u5b57\u5217".concat(n.id,"\u3092\u524a\u9664\u3057\u307e\u3057\u305f\u3002")):alert("\u6587\u5b57\u5217".concat(n.id,"\u306e\u524a\u9664\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002")),e({type:"GET_TEXT",payload:null}),"https://indextify.herokuapp.com/texts/",t.next=9,G.a.get("https://indextify.herokuapp.com/texts/");case 9:c=t.sent,console.log(c.data),e({type:"GET_TEXTS",payload:c.data});case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=null!==n&&{sa:n.sa,bwt:n.bwt.split(""),lf:n.lf,psi:n.psi,lcp:n.lcp};return Object(x.jsx)("div",{style:{width:"100%",textAlign:"center"},children:Object(x.jsx)("div",{className:"getBox",style:{width:"100%"},children:Object(x.jsx)("div",{children:n?Object(x.jsxs)("div",{children:[Object(x.jsxs)(u.a,{children:["\u6587\u5b57\u5217 ",n.text]}),Object(x.jsxs)(u.a,{children:["ID:",n.id," \u9577\u3055:",n.text.length," \u9001\u4fe1\u65e5\u6642:",n.date]}),Object(x.jsx)(T.a,{component:"div",sx:{border:"1px solid black",marginBottom:"10px"},children:Object(x.jsx)(L.a,{dot:n.dot,options:{width:"100%",height:"500px",zoom:!0,fit:!0,zoomScaleExtent:[.1,10]}})}),Object(x.jsx)(_.a,{component:S.a,children:Object(x.jsxs)(A.a,{"aria-label":"text index table",size:"small",children:[Object(x.jsx)(z.a,{children:Object(x.jsxs)(I.a,{children:[Object(x.jsx)(B.a,{children:"i"}),Object(X.a)(Array(n.text.length+1)).map((function(t,e){return Object(x.jsx)(B.a,{align:"center",children:e})}))]})}),Object(x.jsx)(D.a,{children:["sa","bwt","lf","psi","lcp"].map((function(t){return Object(x.jsxs)(I.a,{children:[Object(x.jsx)(B.a,{scope:"row",children:t}),c[t].map((function(t){return Object(x.jsx)(B.a,{align:"center",children:t})}))]})}))})]})}),Object(x.jsx)(k.a,{className:t.button,variant:"outlined",color:"secondary",onClick:a,children:"\u9078\u629e\u3057\u3066\u3044\u308b\u6587\u5b57\u5217\u3092\u524a\u9664"})]}):null})})})},J=n(250),M=n(241),R=n(238),V=n(257),W=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.texts})),n=Object(i.c)((function(t){return t.text})),c=Object(a.useState)(""),r=Object(v.a)(c,2),s=(r[0],r[1]);Object(a.useEffect)((function(){var e=function(){var e=Object(y.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://indextify.herokuapp.com/texts/",e.next=3,G.a.get("https://indextify.herokuapp.com/texts/");case 3:n=e.sent,console.log(n.data),t({type:"GET_TEXTS",payload:n.data});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s(!0),e(),s(!1)}),[t]);return Object(x.jsx)(T.a,{children:Object(x.jsx)(J.a,{style:{maxHeight:"1000px",overflow:"auto"},children:e.map((function(e){return Object(x.jsx)(M.a,{component:"div",disablepadding:!0,children:Object(x.jsx)(R.a,{onClick:(a=e.id,Object(y.a)(g.a.mark((function e(){var n,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://indextify.herokuapp.com/text/".concat(a),e.next=3,G.a.get(n);case 3:c=e.sent,console.log(c.data),200===c.status?t({type:"GET_TEXT",payload:c.data}):t({type:"GET_TEXT",payload:null});case 6:case"end":return e.stop()}}),e)})))),selected:null!==n&&e.id===n.id,children:Object(x.jsx)(V.a,{primary:e.text,secondary:"ID:".concat(e.id," Date:").concat(e.date)})})});var a}))})})},q=n(258),H=n(244),Y=Object(o.a)({shadows:["none"],palette:{primary:{light:"#4fb3bf",main:"#00838f",dark:"#005662",contrastText:"#fff"},secondary:{light:"#fff263",main:"#fbc02d",dark:"#c49000",contrastText:"#000"}}});var K=function(){return Object(x.jsx)(l.a,{theme:Y,children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(h,{}),Object(x.jsxs)(q.a,{fixed:!0,style:{marginTop:"10px"},children:[Object(x.jsxs)(H.a,{container:!0,spacing:1,children:[Object(x.jsx)(H.a,{item:!0,xs:8,children:Object(x.jsxs)(p.a,{spacing:1,children:[Object(x.jsx)(C,{}),Object(x.jsx)(F,{})]})}),Object(x.jsx)(H.a,{item:!0,xs:4,children:Object(x.jsx)(W,{})})]}),Object(x.jsx)(f,{})]})]})})},Q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,259)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))},U=n(75),Z={texts:[],text:null},$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_TEXTS":return Object(U.a)(Object(U.a)({},t),{},{texts:e.payload});case"GET_TEXT":return Object(U.a)(Object(U.a)({},t),{},{text:e.payload});default:return t}},tt=n(134);console.log("React",c.a),console.log("ReactDOM",s.a),console.log("Provider",i.a),console.log("App",K),console.log("reportWebVitals",Q),console.log("reducer",$);var et=Object(tt.a)($);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(i.a,{store:et,children:Object(x.jsx)(K,{})})}),document.getElementById("root")),Q()}},[[186,1,2]]]);
//# sourceMappingURL=main.bfa07a01.chunk.js.map