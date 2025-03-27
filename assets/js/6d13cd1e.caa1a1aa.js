"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1698],{977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"plugins/gameliftserver/intro","title":"Introduction","description":"Features","source":"@site/docs/plugins/gameliftserver/intro.md","sourceDirName":"plugins/gameliftserver","slug":"/plugins/gameliftserver/intro","permalink":"/plugins/gameliftserver/intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"steamCoreSidebar","previous":{"title":"Purchase Plugin","permalink":"/plugins/gameliftclient/purchase"},"next":{"title":"Introduction","permalink":"/plugins/gameliftserver/intro"}}');var a=n(4848),i=n(8453);n(5537),n(9329);const s={sidebar_position:3},l="Introduction",o={},u=[{value:"Features",id:"features",level:2},{value:"What is the difference between the Server plugin and the Client plugin?",id:"what-is-the-difference-between-the-server-plugin-and-the-client-plugin",level:2},{value:"Do I need both Server and Client plugins?",id:"do-i-need-both-server-and-client-plugins",level:2},{value:"Purchase",id:"purchase",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,a.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Use AWS GameLift Server in Unreal Engine"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"what-is-the-difference-between-the-server-plugin-and-the-client-plugin",children:"What is the difference between the Server plugin and the Client plugin?"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The Server plugin will be running on your dedicated server instance and is used to communicate with the AWS GameLift Service. It will listen and recieve commands from the gamelift service when it's time to shut down, etc."}),"\n",(0,a.jsx)(t.li,{children:"The Client plugin is used for GameLift Matchmaking features, it's used by game clients to request matchmaking functionality from GameLift and to tell gamelift if new servers need to be allocated, etc."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"do-i-need-both-server-and-client-plugins",children:"Do I need both Server and Client plugins?"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"As described above you may only need one the plugins depending on your needs, if you're going to manually managing your gamelift server instances you only need the Server Plugin (if you're not going to use GameLift matchmaking features etc)"}),"\n",(0,a.jsx)(t.li,{children:"Both Client and Server plugins are required if you're going to use GameLift Anywhere (this is a new functionality that enables you to host gamelift servers on your own home server)."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"purchase",children:"Purchase"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.fab.com/listings/cd85240d-69d1-4810-980c-e9f2bae2d544",children:"https://www.fab.com/listings/cd85240d-69d1-4810-980c-e9f2bae2d544"})}),"\n"]}),"\n",(0,a.jsx)(t.h1,{id:"aws-amazon-documentation",children:"AWS (Amazon) Documentation"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/sns/latest/api/Welcome.html",children:"https://docs.aws.amazon.com/sns/latest/api/Welcome.html"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5537:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(6540),a=n(4164),i=n(5627),s=n(6347),l=n(372),o=n(604),u=n(1861),c=n(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,d]=m({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=u??p;return f({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function w(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(6540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}},9329:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var i=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}}}]);