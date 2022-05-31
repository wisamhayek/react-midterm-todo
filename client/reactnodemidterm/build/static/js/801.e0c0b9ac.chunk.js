"use strict";(self.webpackChunkreactnodemidterm=self.webpackChunkreactnodemidterm||[]).push([[801],{801:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(885),r=n(2791),i=n(8155),s=n(6871),o=n(4395),l=n(4554),c=n(4663),d=n(3400),u=n(890),m=n(4894),x=n(8008),h=n(1614),p=n(3044),g=n(6151),f=n(1469),v=n(9891),j=n(6459),Z=n(4569),k=n.n(Z),y=n(184);function b(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],i=t[1],s=(0,r.useState)(""),o=(0,a.Z)(s,2),c=o[0],d=o[1],m=(0,r.useState)(null),x=(0,a.Z)(m,2),h=x[0],p=x[1],f=JSON.parse(localStorage.getItem("activeUser"));function v(){window.location.reload(!1)}var Z=""===n||""===c;return(0,y.jsxs)(l.Z,{sx:{border:"none",width:{xs:"80%",md:"60%"},padding:{xs:"1rem",md:"2rem"},margin:"auto",textAlign:"center",justifyContent:"center",display:"flex",flexDirection:"column",rowGap:"1rem",marginTop:"2rem",borderRadius:"2rem",boxShadow:"1rem 1rem 10px 0px #3c8db2"},children:[(0,y.jsx)(u.Z,{variant:"h4",gutterBottom:!0,component:"div",children:"Add Task"}),h&&(0,y.jsx)("p",{style:{color:"red"},children:h}),(0,y.jsx)(j.Z,{required:!0,id:"outlined-required",className:"titlelInput",label:"Task title",value:n,onChange:function(e){var t=e.target;return i(t.value)},sx:{margin:"auto",width:{xs:"100%",md:"50%"}}}),(0,y.jsx)(j.Z,{id:"outlined-multiline-static",label:"Description",required:!0,multiline:!0,rows:4,className:"descriptionlInput",value:c,onChange:function(e){var t=e.target;return d(t.value)},sx:{margin:"auto",width:{xs:"100%",md:"50%"}}}),(0,y.jsx)(g.Z,{disabled:Z,sx:{margin:"auto",width:{xs:"60%",md:"40%"}},variant:"contained",onClick:function(){k().post("https://firstnodedeployment.herokuapp.com/api/v1/tasks",{title:n,description:c,user:f.id,ownerID:f.id}).then((function(e){console.log(e.data.message)})).catch((function(e){p(e.message)})),i(""),d(""),setTimeout(v,2e3)},children:"Add Task"})]})}var w=n(7621),C=n(9504),S=n(2363),T=n(7247),I=n(872);function G(){var e=JSON.parse(localStorage.getItem("activeUser")),t=(0,r.useState)(""),n=(0,a.Z)(t,2),i=n[0],s=n[1],o=(0,r.useState)(""),c=(0,a.Z)(o,2),d=(c[0],c[1],(0,r.useState)(null)),u=(0,a.Z)(d,2),m=(u[0],u[1]),x=(0,r.useState)([]),h=(0,a.Z)(x,2),p=h[0],f=h[1];function v(){k().get("https://firstnodedeployment.herokuapp.com/api/v1/tasks/byUser",{headers:{ownerid:e.id}}).then((function(e){console.log(e.data.message),f(e.data.data)})).catch((function(e){m(e.message)}))}(0,r.useEffect)((function(){v()}),[]);var j=(0,r.useState)(""),Z=(0,a.Z)(j,2),b=Z[0],G=Z[1],z=function(e){s(e.target.value)},D=function(e){"Enter"===e.key&&e.target.blur(),"Escape"===e.key&&(e.target.value=b,e.target.blur())},N=function(e){""===e.target.value.trim()&&(e.target.value=b,s(b))},O=function(e){G(e.target.value)},U=function(e){e.target.scrollHeight>33&&(e.target.style.height="5px",e.target.style.height=e.target.scrollHeight-16+"px")};return(0,y.jsxs)(l.Z,{sx:{border:"2px black solid",width:{xs:"85%",sm:"70",md:"70%"},padding:{xs:"1rem",sm:"1rem",md:"2rem"},margin:"auto",display:"grid",gridTemplateColumns:{xs:"1fr",sm:"1fr",md:"1fr 1fr"},rowGap:"1rem",columnGap:"1rem",marginTop:"2rem",borderRadius:"1rem",marginBottom:"2rem"},children:[p.map((function(e,t){return(0,y.jsx)(r.Fragment,{children:(0,y.jsxs)(w.Z,{sx:{minWidth:275},id:e._id,children:[(0,y.jsxs)(C.Z,{children:[(0,y.jsx)("input",{className:"changeInput",type:"text","aria-label":"Field name",defaultValue:e.title,onChange:z,onKeyDown:D,onBlur:function(t){var n;N(t),t.target.value!==b&&(n=e._id,k().put("https://firstnodedeployment.herokuapp.com/api/v1/tasks/byUser",{},{headers:{taskid:n,newtitle:i}}).then((function(e){console.log(e.data.message),v()})).catch((function(e){m(e.message)})))},onFocus:O,style:{width:"80%"}}),(0,y.jsx)("textarea",{rows:4,className:"changeInput",type:"text","aria-label":"Field name",defaultValue:e.description,onChange:z,onKeyDown:D,onBlur:function(t){var n;N(t),t.target.value!==b&&(n=e._id,k().put("https://firstnodedeployment.herokuapp.com/api/v1/tasks/byUser",{},{headers:{taskid:n,newdesc:i}}).then((function(e){console.log(e.data.message),v()})).catch((function(e){m(e.message)})))},onFocus:O,onInput:U,style:{width:"80%"}})]}),(0,y.jsxs)(S.Z,{children:[(0,y.jsx)(g.Z,{size:"small",onClick:function(){},children:(0,y.jsx)(I.Z,{size:"small"})}),(0,y.jsx)(g.Z,{size:"small",onClick:function(){var t;t=e._id,k().delete("https://firstnodedeployment.herokuapp.com/api/v1/tasks/byUser",{headers:{taskid:t}}).then((function(e){console.log(e.data.message),v()})).catch((function(e){m(e.message)}))},children:(0,y.jsx)(T.Z,{size:"small"})})]})]})},t)})),0===p.length&&(0,y.jsx)("h2",{style:{margin:"auto",textAlign:"center"},children:"No Tasks"})]})}var z=["To Do"],D=["Logout"];function N(){var e=(0,s.s0)(),t=JSON.parse(localStorage.getItem("activeUser"));(0,r.useEffect)((function(){t||setTimeout(e(i.ym),2e3)}),[t]);var n=r.useState(null),j=(0,a.Z)(n,2),Z=j[0],k=j[1],w=r.useState(null),C=(0,a.Z)(w,2),S=C[0],T=C[1],I=function(){k(null)},N=function(){T(null)};return t?(0,y.jsxs)(r.Fragment,{children:[(0,y.jsx)(o.Z,{position:"static",children:(0,y.jsx)(h.Z,{maxWidth:"xl",children:(0,y.jsxs)(c.Z,{disableGutters:!0,children:[(0,y.jsx)(u.Z,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"Dunder Mifflin Inc."}),(0,y.jsxs)(l.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[(0,y.jsx)(d.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){k(e.currentTarget)},color:"inherit",children:(0,y.jsx)(x.Z,{})}),(0,y.jsx)(m.Z,{id:"menu-appbar",anchorEl:Z,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(Z),onClose:I,sx:{display:{xs:"block",md:"none"}},children:z.map((function(e){return(0,y.jsx)(v.Z,{onClick:I,children:(0,y.jsx)(u.Z,{textAlign:"center",children:e})},e)}))})]}),(0,y.jsx)(u.Z,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:t.name}),(0,y.jsx)(l.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:z.map((function(e){return(0,y.jsx)(g.Z,{onClick:I,sx:{my:2,color:"white",display:"block"},children:e},e)}))}),(0,y.jsx)(l.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:(0,y.jsx)(u.Z,{variant:"h6",noWrap:!0,component:"div",sx:{margin:"auto",flexGrow:1,display:{xs:"none",md:"flex"}},children:t.name})}),(0,y.jsxs)(l.Z,{sx:{flexGrow:0},children:[(0,y.jsx)(f.Z,{title:"Open settings",children:(0,y.jsx)(d.Z,{onClick:function(e){T(e.currentTarget)},sx:{p:0},children:(0,y.jsx)(p.Z,{alt:t.name,src:"#"})})}),(0,y.jsx)(m.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:S,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(S),onClose:N,children:D.map((function(t){return(0,y.jsx)(v.Z,{onClick:function(t){N(),"Logout"===t.target.textContent&&(localStorage.removeItem("activeUser"),localStorage.removeItem("userToken"),e(i.ym))},children:(0,y.jsx)(u.Z,{textAlign:"center",children:t})},t)}))})]})]})})}),(0,y.jsx)(b,{}),(0,y.jsx)(G,{})]}):(0,y.jsx)("h3",{style:{textAlign:"center",margin:"auto",justifyContent:"center"},children:"Loading Dashboard"})}}}]);
//# sourceMappingURL=801.e0c0b9ac.chunk.js.map