(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{184:function(t,e,n){},185:function(t,e,n){},324:function(t,e,n){"use strict";n.r(e);var c,s=n(0),a=n.n(s),o=n(47),i=n.n(o),r=(n(184),n(185),n(21)),u=n(149),j=n(331),d=n(326),h=n(172),b=n(23),l=n(173),p=n(175),f=n(170),O=n(150),g=n(15),x=O.a.div(c||(c=Object(u.a)(["\n  font-size: 15px;\n"]))),m=function(){var t=Object(s.useRef)(null),e=Object(s.useState)([{}]),n=Object(r.a)(e,2),c=n[0],a=n[1];return Object(s.useEffect)((function(){return t.current=new WebSocket("wss://3.17.176.204:8002"),t.current.onopen=function(){return console.log("ws opened")},t.current.onclose=function(){return console.log("ws closed")},t.current.onmessage=function(t){var e=JSON.parse(t.data);a(e)},function(){}}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:"Hashtag top trends"}),Object(g.jsx)(j.a,{width:"100%",height:"80%",children:Object(g.jsxs)(d.a,{data:c,layout:"vertical",margin:{top:0,right:50,bottom:10,left:200},children:[Object(g.jsx)(h.a,{type:"number",children:Object(g.jsx)(b.a,{value:"Number of tweets (Last 10 minutes)",offset:-10,position:"insideBottom"})}),Object(g.jsx)(l.a,{type:"category",dataKey:"hashtag"}),Object(g.jsx)(p.a,{dataKey:"hashtag_count",fill:"#1DA1F2",isAnimationActive:!0,children:Object(g.jsx)(f.a,{dataKey:"hashtag_count",position:"right"})})]})}),Object(g.jsx)(x,{children:Object(g.jsx)("p",{children:"Coded with \ud83e\udd19\ud83c\udffb by Baptiste Monpezat"})})]})};var y=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(m,{})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,332)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),s(t),a(t),o(t)}))};i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(y,{})}),document.getElementById("root")),v()}},[[324,1,2]]]);
//# sourceMappingURL=main.8a2f0c06.chunk.js.map