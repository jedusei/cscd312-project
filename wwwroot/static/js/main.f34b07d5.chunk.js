(this.webpackJsonpfrontend_react=this.webpackJsonpfrontend_react||[]).push([[0],{27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),c=(a(32),a(20)),i=a.n(c),s=a(23),m=a(13),p=a(59),u=a(65),d=a(61),f=a(63),g=a(62),b=a(64),v=a(21),h=(a(34),Object(p.a)((function(e){return{root:{flexGrow:1},appBarIcon:{display:"flex",marginRight:e.spacing(2)},title:{flexGrow:1},container:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:50,paddingBottom:50},stepTitle:{width:"30%",marginTop:20,marginBottom:10},img:{marginTop:10},placeholder_img_overlay:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:"#00000080",display:"flex",alignItems:"center",justifyContent:"center"},label_box_container:{position:"absolute",left:0,right:0,top:0,bottom:0},label_box:{borderStyle:"solid",borderWidth:2,borderColor:"#ffffff50"}}})));function E(e){var t=e.label,a=e.coords,n=e.className;return r.a.createElement("div",{className:n,style:{position:"absolute",left:a[0],top:a[1],width:a[2]-a[0],height:a[3]-a[1]}},r.a.createElement("span",{style:{position:"absolute",left:-2,top:-24,backgroundColor:"#ffffffcc",lineHeight:"14px",padding:"5px",whiteSpace:"nowrap"}},t))}var y=function(){var e,t=h(),a=r.a.useState(1),n=Object(m.a)(a,2),o=n[0],l=n[1],c=r.a.useState(),p=Object(m.a)(c,2),y=p[0],w=p[1],x=r.a.useState(),j=Object(m.a)(x,2),_=j[0],k=j[1],N=r.a.useState(!1),S=Object(m.a)(N,2),O=S[0],I=S[1],T=r.a.useState(),B=Object(m.a)(T,2),C=B[0],R=B[1],U=function(e){var t=e.target.files[0];w(t),I(!1),R(!1),""!==_&&URL.revokeObjectURL(_),k(t?URL.createObjectURL(t):""),l(t?2:1)};return r.a.createElement("div",{className:t.root},r.a.createElement(u.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement("div",{className:t.appBarIcon},r.a.createElement(g.a,null,"blur_on")),r.a.createElement(f.a,{variant:"h6",className:t.title},"AI - Multiple Object Recognition"),r.a.createElement("div",{style:{marginLeft:"auto"}},r.a.createElement(f.a,{variant:"h6",style:{opacity:.8}},"By Joseph Edusei & Ofoe Agbettor")))),r.a.createElement("div",{className:t.container},r.a.createElement(f.a,{variant:"h6",className:t.stepTitle},"1. Select Image"),r.a.createElement("input",{type:"file",accept:"image/*",onChange:U,disabled:o>2,ref:function(t){return e=t}}),y&&r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:_,alt:"",className:t.img}),r.a.createElement(f.a,{variant:"h6",className:t.stepTitle},"2. Upload Image")),(2===o&&!O||o>2)&&r.a.createElement(b.a,{variant:"contained",color:"primary",disabled:2!==o,onClick:function(){if(!O){I(!0);var e=new FormData;e.append("image",y),fetch("/api/detect",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){l(3),I(!1);var t=setInterval(Object(s.a)(i.a.mark((function a(){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("".concat("","/api/results?job_id=").concat(e.job_id)).then((function(e){return e.json()}));case 3:(n=a.sent).completed&&(R(n),clearInterval(t)),a.next=12;break;case 7:a.prev=7,a.t0=a.catch(0),alert("Something went wrong. Please try again later."),clearInterval(t),l(2);case 12:case"end":return a.stop()}}),a,null,[[0,7]])}))),5e3)})).catch((function(){alert("Couldn't connect to server. Make sure the server is running and try again."),I(!1)}))}}},"Upload"),y&&O&&!C&&r.a.createElement(b.a,{variant:"contained",color:"primary",disabled:!0},r.a.createElement("span",null," ",r.a.createElement(v.Bounce,{size:15,color:"#fff"}))),3===o&&r.a.createElement(f.a,{variant:"h6",className:t.stepTitle},"3. View Result"),3===o&&r.a.createElement("div",{className:t.img,style:{position:"relative"}},r.a.createElement("img",{src:_,alt:""}),C?[r.a.createElement("div",{key:0,className:t.label_box_container},C.labels.map((function(e,a){return C.scores[a]>.4&&r.a.createElement(E,{className:t.label_box,key:String(a),label:"".concat(e," (").concat((100*C.scores[a]).toFixed(2),"%)"),coords:C.boxes[a]})})))]:r.a.createElement("div",{className:t.placeholder_img_overlay},r.a.createElement(v.Spinner,{size:20,color:"#fff"}))),3===o&&r.a.createElement("div",{style:{marginTop:30}},r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){e.value=null,U({target:e})}},"Start Over"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.f34b07d5.chunk.js.map