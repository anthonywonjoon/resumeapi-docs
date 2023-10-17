"use strict";(self.webpackChunkresume_docs=self.webpackChunkresume_docs||[]).push([[7835],{3221:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var i=t(7462),s=(t(7294),t(3905)),n=t(3301),a=t(8149);const r={sidebar_position:1,slug:"/skills/get-all-skills"},o="Get All Skills",p={unversionedId:"Skills/getAllSkills",id:"Skills/getAllSkills",title:"Get All Skills",description:"Get the full skills section from my resume",source:"@site/api/Skills/getAllSkills.mdx",sourceDirName:"Skills",slug:"/skills/get-all-skills",permalink:"/resumeapi-docs/api/skills/get-all-skills",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/skills/get-all-skills"},sidebar:"apiSidebar",previous:{title:"Get Project By ID",permalink:"/resumeapi-docs/api/api/projects/get-project-by-id"},next:{title:"Get Skill By ID",permalink:"/resumeapi-docs/api/api/skills/get-skill-by-id"}},u={},c=[{value:"Request",id:"request",level:2},{value:"Response",id:"response",level:2},{value:"Try it out",id:"try-it-out",level:2}],m={toc:c},k="wrapper";function d(e){let{components:l,...t}=e;return(0,s.kt)(k,(0,i.Z)({},m,t,{components:l,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"get-all-skills"},"Get All Skills"),(0,s.kt)("div",{id:"top"}),(0,s.kt)("p",null,"Get the full skills section from my resume"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Working on a cleaner way to list bullets for description"),(0,s.kt)("li",{parentName:"ul"},"Working on a cleaner UI for entity descriptions"))),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"GET ",(0,s.kt)("em",{parentName:"strong"},"/api/v1/skills/getAll")," ")),(0,s.kt)("h2",{id:"response"},"Response"),(0,s.kt)("hr",null),(0,s.kt)(a.Z,{type:"array of SkillEntity",mdxType:"SkillComponent"}),(0,s.kt)("h2",{id:"try-it-out"},"Try it out"),(0,s.kt)("hr",null),(0,s.kt)(n.Z,{url:"skills/getAll",mdxType:"ApiCallComponent"}),(0,s.kt)("a",{href:"#top"},"Back to top"))}d.isMDXComponent=!0},3301:(e,l,t)=>{t.d(l,{Z:()=>n});var i=t(7294),s=t(7693);const n=e=>{let{url:l}=e;const[t,n]=(0,i.useState)([]),a="https://resume-api-fnk7.onrender.com/api/v1/"+l,r="/api/v1/"+l;return i.createElement("div",null,i.createElement("button",{className:"apiButton",onClick:function(){fetch(a,{method:"GET"}).then((e=>e.text())).then((e=>{let l=JSON.parse(e);e=JSON.stringify(l,null,2),n(e)})).catch((e=>console.log(e)))}},"Call ",r),t&&i.createElement("pre",null,i.createElement(s.Z,{className:"apiWindow",language:"json",title:"/api/v1/fullResume",showLineNumbers:!0},t)))}},8149:(e,l,t)=>{t.d(l,{Z:()=>s});var i=t(7294);const s=e=>{let{type:l}=e;const[t,s]=(0,i.useState)(!1);return i.createElement("div",null,i.createElement("div",{onClick:()=>{s(!t)},style:{cursor:"pointer",userSelect:"none"}},i.createElement("h3",null,i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-right-circle-fill",viewBox:"0 0 16 16"},i.createElement("path",{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}))," ",i.createElement("b",null,"skill")," ",l)),t&&i.createElement("div",{style:{marginLeft:20}},i.createElement("div",null,i.createElement("p",null,i.createElement("b",null,"skillName")," string"),i.createElement("p",null,"Name of skill"),i.createElement("p",null,'Example value: "Java"')),i.createElement("div",{style:{paddingTop:10}},i.createElement("p",null,i.createElement("b",null,"skillType")," string"),i.createElement("p",null,"Type of skill i.e. language, framework, platform, etc"),i.createElement("p",null,'Example value: "Language"')),i.createElement("div",{style:{paddingTop:10}},i.createElement("p",null,i.createElement("b",null,"relatedProjects")," string"),i.createElement("p",null,"List of projects that showcase this skill"),i.createElement("p",null,'Example value: "Gift tracker"'))))}}}]);