"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4343],{7727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(4848),s=n(8453),o=n(9489),a=n(7227);const i={id:"paths-mapping",title:"Paths mapping"},l=void 0,c={id:"getting-started/paths-mapping",title:"Paths mapping",description:'If you use "baseUrl" and "paths" options in your tsconfig file, you should make sure the "moduleNameMapper" option in your Jest config is setup accordingly.',source:"@site/versioned_docs/version-29.0/getting-started/paths-mapping.md",sourceDirName:"getting-started",slug:"/getting-started/paths-mapping",permalink:"/ts-jest/docs/getting-started/paths-mapping",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/paths-mapping.md",tags:[],version:"29.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1718358338e3,frontMatter:{id:"paths-mapping",title:"Paths mapping"},sidebar:"version-29.0-docs",previous:{title:"Options",permalink:"/ts-jest/docs/getting-started/options"},next:{title:"Version checking",permalink:"/ts-jest/docs/getting-started/version-checking"}},u={},p=[{value:"Example",id:"example",level:3},{value:"TypeScript config",id:"typescript-config",level:4},{value:"Jest config (without helper)",id:"jest-config-without-helper",level:4},{value:"Jest config (with helper)",id:"jest-config-with-helper",level:4}];function d(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["If you use ",(0,r.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html",children:'"baseUrl" and "paths" options'})," in your ",(0,r.jsx)(t.code,{children:"tsconfig"})," file, you should make sure the ",(0,r.jsx)(t.a,{href:"https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring",children:'"moduleNameMapper"'})," option in your Jest config is setup accordingly."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"ts-jest"})," provides a helper to transform the mapping from ",(0,r.jsx)(t.code,{children:"tsconfig"})," to Jest config format, but it needs the ",(0,r.jsx)(t.code,{children:".js"})," version of the config file."]}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.h4,{id:"typescript-config",children:"TypeScript config"}),"\n",(0,r.jsxs)(t.p,{children:["With the below config in your ",(0,r.jsx)(t.code,{children:"tsconfig"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'// tsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@App/*": ["src/*"],\n      "lib/*": ["common/*"]\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h4,{id:"jest-config-without-helper",children:"Jest config (without helper)"}),"\n",(0,r.jsxs)(o.A,{groupId:"code-examples",children:[(0,r.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  moduleNameMapper: {\n    '^@App/(.*)$': '<rootDir>/src/$1',\n    '^lib/(.*)$': '<rootDir>/common/$1',\n  },\n}\n"})})}),(0,r.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  moduleNameMapper: {\n    '^@App/(.*)$': '<rootDir>/src/$1',\n    '^lib/(.*)$': '<rootDir>/common/$1',\n  },\n}\n\nexport default jestConfig\n"})})}),(0,r.jsx)(a.A,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'{\n  // [...]\n  "jest": {\n    "moduleNameMapper": {\n      "^@App/(.*)$": "<rootDir>/src/$1",\n      "^lib/(.*)$": "<rootDir>/common/$1"\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(t.h4,{id:"jest-config-with-helper",children:"Jest config (with helper)"}),"\n",(0,r.jsxs)(o.A,{groupId:"code-examples",children:[(0,r.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"const { pathsToModuleNameMapper } = require('ts-jest')\n// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file\n// which contains the path mapping (ie the `compilerOptions.paths` option):\nconst { compilerOptions } = require('./tsconfig')\n\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  roots: ['<rootDir>'],\n  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value\n  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),\n}\n"})})}),(0,r.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import { pathsToModuleNameMapper } from 'ts-jest'\n// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file\n// which contains the path mapping (ie the `compilerOptions.paths` option):\nimport { compilerOptions } from './tsconfig'\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  roots: ['<rootDir>'],\n  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value\n  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),\n}\n\nexport default jestConfig\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var o=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),s=n(4164),o=n(4245),a=n(6347),i=n(6494),l=n(2814),c=n(5167),u=n(9900);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=d(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,p]=m({queryString:n,groupId:s}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),b=(()=>{const e=c??f;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var g=n(1062);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(c(t),a(s))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:p,onClick:u,...o,className:(0,s.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...t,...e}),(0,j.jsx)(x,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,j.jsx)(y,{...e,children:p(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(6540);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);