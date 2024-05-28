"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[2078],{9529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var s=n(4848),r=n(8453),a=n(9489),o=n(7227);const l={title:"Compiler option"},i=void 0,u={id:"getting-started/options/compiler",title:"Compiler option",description:"The compiler option allows you to define the compiler to be used. It'll be used to load the NodeJS module holding the TypeScript compiler.",source:"@site/docs/getting-started/options/compiler.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/compiler",permalink:"/ts-jest/docs/next/getting-started/options/compiler",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/compiler.md",tags:[],version:"current",lastUpdatedBy:"ahnpnl",lastUpdatedAt:1716894495e3,frontMatter:{title:"Compiler option"}},c={},d=[{value:"Example",id:"example",level:3}];function p(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"compiler"})," option allows you to define the compiler to be used. It'll be used to load the NodeJS module holding the TypeScript compiler."]}),"\n",(0,s.jsxs)(t.p,{children:["The default value is ",(0,s.jsx)(t.code,{children:"typescript"}),", which will load the original ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/typescript",children:"TypeScript compiler module"}),".\nThe loaded version will depend on the one installed in your project."]}),"\n",(0,s.jsxs)(t.p,{children:["If you use a custom compiler, such as ",(0,s.jsx)(t.code,{children:"ttypescript"}),", make sure its API is the same as the original TypeScript, at least for what ",(0,s.jsx)(t.code,{children:"ts-jest"})," is using."]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(a.A,{groupId:"code-examples",children:[(0,s.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"tab",children:"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        compiler: 'ttypescript',\n      },\n    ],\n  },\n}\n"})})}),(0,s.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        compiler: 'ttypescript',\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,s.jsx)(o.A,{value:"JSON",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "compiler": "ttypescript"\n        }\n      ]\n    }\n  }\n}\n'})})})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(4164);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(6540),r=n(4164),a=n(4245),o=n(6347),l=n(6494),i=n(2814),u=n(5167),c=n(1269);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[u,d]=h({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),j=(()=>{const e=u??f;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(1062);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=l[n].value;r!==s&&(u(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(6540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);