"use strict";(self.webpackChunkresume_docs=self.webpackChunkresume_docs||[]).push([[5650],{8551:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>E,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=l(7462),a=(l(7294),l(3905)),r=l(3301),i=l(7777);const o={sidebar_position:1,slug:"/bio/get-full-bio"},s="Get Full Biography",u={unversionedId:"Biography/fullBio",id:"Biography/fullBio",title:"Get Full Biography",description:"Get the full biography section of the resume",source:"@site/api/Biography/fullBio.mdx",sourceDirName:"Biography",slug:"/bio/get-full-bio",permalink:"/resumeapi-docs/api/bio/get-full-bio",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/bio/get-full-bio"},sidebar:"apiSidebar",previous:{title:"Full Resume",permalink:"/resumeapi-docs/api/fullResume"},next:{title:"Get Name",permalink:"/resumeapi-docs/api/api/bio/get-name"}},p={},c=[{value:"Request",id:"request",level:2},{value:"Response",id:"response",level:2},{value:"Try it out",id:"try-it-out",level:2}],m={toc:c},d="wrapper";function E(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-full-biography"},"Get Full Biography"),(0,a.kt)("div",{id:"top"}),(0,a.kt)("p",null,"Get the full biography section of the resume"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Working on a cleaner way to list bullets for description"),(0,a.kt)("li",{parentName:"ul"},"Working on a cleaner UI for entity descriptions"))),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GET ",(0,a.kt)("em",{parentName:"strong"},"/api/v1/bio/getAll")," ")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("hr",null),(0,a.kt)(i.Z,{type:"BioEntity",mdxType:"BioComponent"}),(0,a.kt)("h2",{id:"try-it-out"},"Try it out"),(0,a.kt)("hr",null),(0,a.kt)(r.Z,{url:"bio/getAll",mdxType:"ApiCallComponent"}),(0,a.kt)("a",{href:"#top"},"Back to top"))}E.isMDXComponent=!0},3301:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(7294),a=l(7693);const r=e=>{let{url:t}=e;const[l,r]=(0,n.useState)([]),[i,o]=(0,n.useState)(!1),s="https://resume-api-fnk7.onrender.com/api/v1/"+t,u="/api/v1/"+t;return n.createElement("div",null,n.createElement("button",{className:"apiButton",onClick:function(){o(!0),fetch(s,{method:"GET"}).then((e=>e.text())).then((e=>{let t=JSON.parse(e);e=JSON.stringify(t,null,2),r(e)})).catch((e=>console.log(e))).finally((()=>{o(!1)}))}},i?n.createElement(n.Fragment,null,"Loading.."):n.createElement(n.Fragment,null,"Call ",u)),l&&n.createElement("pre",null,n.createElement(a.Z,{className:"apiWindow",language:"json",title:u,showLineNumbers:!0},l)))}},7777:(e,t,l)=>{l.d(t,{Z:()=>a});var n=l(7294);const a=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement("div",null,n.createElement("div",{onClick:()=>{t(!e)},style:{cursor:"pointer",userSelect:"none"}},n.createElement("h3",null,n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-right-circle-fill",viewBox:"0 0 16 16"},n.createElement("path",{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}))," ",n.createElement("b",null,"bio")," BioEntity")),e&&n.createElement("div",{style:{marginLeft:20}},n.createElement("div",null,n.createElement("p",null,n.createElement("b",null,"name")," string"),n.createElement("p",null,"First and last name"),n.createElement("p",null,'Example value: "Santa Claus"')),n.createElement("div",{style:{paddingTop:10}},n.createElement("p",null,n.createElement("b",null,"location")," string"),n.createElement("p",null,"General location of where I currently reside"),n.createElement("p",null,'Example value: "North Pole, the Arctic"')),n.createElement("div",{style:{paddingTop:10}},n.createElement("p",null,n.createElement("b",null,"phone")," string"),n.createElement("p",null,"Up to date phone number to contact"),n.createElement("p",null,'Example value: "(123)456-7890"')),n.createElement("div",{style:{paddingTop:10}},n.createElement("p",null,n.createElement("b",null,"email")," string"),n.createElement("p",null,"Up to date email address to contact"),n.createElement("p",null,'Example value: "santaclaus@christmas.com"')),n.createElement("div",{style:{paddingTop:10}},n.createElement("p",null,n.createElement("b",null,"linkedin")," string"),n.createElement("p",null,"URL address to my LinkedIn"),n.createElement("p",null,'Example value: "https://linkedin.com/in/santaclaus"')),n.createElement("div",{style:{paddingTop:10}},n.createElement("p",null,n.createElement("b",null,"github")," string"),n.createElement("p",null,"URL address to my Github"),n.createElement("p",null,'Example value: "https://github.com/santaclaus"'))))}}}]);