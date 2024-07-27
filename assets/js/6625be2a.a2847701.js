"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4136],{1918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(4848),a=n(8453),s=n(9489),l=n(7227);const o={id:"mock-es6-class",title:"Mock ES6 class"},u=void 0,i={id:"guides/mock-es6-class",title:"Mock ES6 class",description:"TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.",source:"@site/docs/guides/mock-es6-class.md",sourceDirName:"guides",slug:"/guides/mock-es6-class",permalink:"/ts-jest/docs/next/guides/mock-es6-class",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/guides/mock-es6-class.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1722079567e3,frontMatter:{id:"mock-es6-class",title:"Mock ES6 class"},sidebar:"docs",previous:{title:"ESM Support",permalink:"/ts-jest/docs/next/guides/esm-support"},next:{title:"Using with React Native",permalink:"/ts-jest/docs/next/guides/react-native"}},c={},d=[];function p(e){const t={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.\n",(0,r.jsx)(t.code,{children:"const soundPlayer = require('./sound-player')"}),". Therefore creating an instance of the class that was exported as\na default will look like this: ",(0,r.jsx)(t.code,{children:"new soundPlayer.default()"}),". However if you are mocking the class as suggested by the documentation."]}),"\n",(0,r.jsxs)(s.A,{groupId:"code-examples",children:[(0,r.jsx)(l.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"jest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return { playSoundFile: mockPlaySoundFile }\n  })\n})\n"})})}),(0,r.jsx)(l.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"jest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return { playSoundFile: mockPlaySoundFile }\n  })\n})\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"You will get the error"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"TypeError: sound_player_1.default is not a constructor\n"})}),"\n",(0,r.jsxs)(t.p,{children:["because ",(0,r.jsx)(t.code,{children:"soundPlayer.default"})," does not point to a function. Your mock has to return an object which has a property default\nthat points to a function."]}),"\n",(0,r.jsxs)(s.A,{groupId:"code-examples",children:[(0,r.jsx)(l.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"jest.mock('./sound-player', () => {\n  return {\n    default: jest.fn().mockImplementation(() => {\n      return {\n        playSoundFile: mockPlaySoundFile,\n      }\n    }),\n  }\n})\n"})})}),(0,r.jsx)(l.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"jest.mock('./sound-player', () => {\n  return {\n    default: jest.fn().mockImplementation(() => {\n      return {\n        playSoundFile: mockPlaySoundFile,\n      }\n    }),\n  }\n})\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["For named imports, like ",(0,r.jsx)(t.code,{children:"import { OAuth2 } from './oauth'"}),", replace ",(0,r.jsx)(t.code,{children:"default"})," with imported module name, ",(0,r.jsx)(t.code,{children:"OAuth2"})," in this example:"]}),"\n",(0,r.jsxs)(s.A,{groupId:"code-examples",children:[(0,r.jsx)(l.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"jest.mock('./oauth', () => {\n    return {\n        OAuth2: ... // mock here\n    }\n})\n"})})}),(0,r.jsx)(l.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"jest.mock('./oauth', () => {\n    return {\n        OAuth2: ... // mock here\n    }\n})\n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),a=n(4164),s=n(4245),l=n(6347),o=n(6494),u=n(2814),i=n(5167),c=n(9900);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[i,d]=h({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=i??f;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=o[n].value;a!==r&&(i(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,j.jsx)(x,{...t,...e}),(0,j.jsx)(v,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(6540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);