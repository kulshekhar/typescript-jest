"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[106],{8125:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=s(4848),r=s(8453),o=s(9489),a=s(7227);const i={id:"esm-support",title:"ESM Support"},l=void 0,c={id:"guides/esm-support",title:"ESM Support",description:"To use ts-jest with ESM support:",source:"@site/docs/guides/esm-support.md",sourceDirName:"guides",slug:"/guides/esm-support",permalink:"/ts-jest/docs/next/guides/esm-support",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/guides/esm-support.md",tags:[],version:"current",lastUpdatedBy:"ShinProg (Logan Tann)",lastUpdatedAt:172823981e4,frontMatter:{id:"esm-support",title:"ESM Support"},sidebar:"docs",previous:{title:"Version checking",permalink:"/ts-jest/docs/next/getting-started/version-checking"},next:{title:"Mock ES6 class",permalink:"/ts-jest/docs/next/guides/mock-es6-class"}},u={},d=[{value:"ESM presets",id:"esm-presets",level:3},{value:"Examples",id:"examples",level:3},{value:"Manual configuration",id:"manual-configuration",level:4},{value:"Use ESM presets",id:"use-esm-presets",level:4},{value:"Support <code>.mts</code> extension",id:"support-mts-extension",level:4}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["To use ",(0,n.jsx)(t.code,{children:"ts-jest"})," with ESM support:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Check ",(0,n.jsx)(t.a,{href:"https://jestjs.io/docs/en/ecmascript-modules",children:"ESM Jest documentation"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Enable ",(0,n.jsx)(t.a,{href:"../getting-started/options/useESM",children:"useESM"})," ",(0,n.jsx)(t.code,{children:"true"})," for ",(0,n.jsx)(t.code,{children:"ts-jest"})," config."]}),"\n",(0,n.jsxs)(t.li,{children:["Include ",(0,n.jsx)(t.code,{children:".ts"})," in ",(0,n.jsx)(t.a,{href:"https://jestjs.io/docs/en/next/configuration#extensionstotreatasesm-arraystring",children:"extensionsToTreatAsEsm"})," Jest config option."]}),"\n",(0,n.jsxs)(t.li,{children:["Ensure that ",(0,n.jsx)(t.code,{children:"tsconfig"})," has ",(0,n.jsx)(t.code,{children:"module"})," with value for ESM, e.g. ",(0,n.jsx)(t.code,{children:"ES2015"})," or ",(0,n.jsx)(t.code,{children:"ES2020"})," etc..."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"esm-presets",children:"ESM presets"}),"\n",(0,n.jsxs)(t.p,{children:["There are also ",(0,n.jsx)(t.a,{href:"/ts-jest/docs/next/getting-started/presets",children:"3 presets"})," to work with ESM."]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["If you are using custom ",(0,n.jsx)(t.code,{children:"transform"})," config, please remove ",(0,n.jsx)(t.code,{children:"preset"})," from your Jest config to avoid issues that Jest doesn't transform files correctly."]})}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.h4,{id:"manual-configuration",children:"Manual configuration"}),"\n",(0,n.jsxs)(o.A,{groupId:"code-examples",children:[(0,n.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  extensionsToTreatAsEsm: ['.ts'],\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        useESM: true,\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  extensionsToTreatAsEsm: ['.ts'],\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        useESM: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(a.A,{value:"JSON",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "extensionsToTreatAsEsm": [".ts"],\n    "moduleNameMapper": {\n      "^(\\\\.{1,2}/.*)\\\\.js$": "$1"\n    },\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "useESM": true\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,n.jsx)(t.h4,{id:"use-esm-presets",children:"Use ESM presets"}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsxs)(t.p,{children:["Starting from ",(0,n.jsx)(t.strong,{children:"v28.0.0"}),", ",(0,n.jsx)(t.code,{children:"ts-jest"})," will gradually switch to ",(0,n.jsx)(t.code,{children:"esbuild"}),"/",(0,n.jsx)(t.code,{children:"swc"})," to transform ",(0,n.jsx)(t.code,{children:"ts"})," to ",(0,n.jsx)(t.code,{children:"js"}),". To make the transition smoothly, we introduce ",(0,n.jsx)(t.code,{children:"legacy"})," presets as a fallback when the new codes don't work yet."]})}),"\n",(0,n.jsxs)(o.A,{groupId:"code-examples",children:[(0,n.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\nconst { createDefaultEsmPreset } = require('ts-jest')\n\nconst defaultEsmPreset = createDefaultEsmPreset()\n\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  ...defaultEsmPreset,\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n}\n"})})}),(0,n.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport { createDefaultEsmPreset, type JestConfigWithTsJest } from 'ts-jest'\n\nconst defaultEsmPreset = createDefaultEsmPreset()\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  ...defaultEsmPreset,\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n}\n\nexport default jestConfig\n"})})})]}),"\n",(0,n.jsxs)(t.h4,{id:"support-mts-extension",children:["Support ",(0,n.jsx)(t.code,{children:".mts"})," extension"]}),"\n",(0,n.jsxs)(t.p,{children:["To work with ",(0,n.jsx)(t.code,{children:".mts"})," extension, besides the requirement to run Jest and ",(0,n.jsx)(t.code,{children:"ts-jest"})," in ESM mode, there are a few extra requirements to be met:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"package.json"})," should contain ",(0,n.jsx)(t.code,{children:'"type": "module"'})]}),"\n",(0,n.jsxs)(t.li,{children:["A custom Jest resolver to resolve ",(0,n.jsx)(t.code,{children:".mjs"})," extension, see our simple one at ",(0,n.jsx)(t.a,{href:"https://github.com/kulshekhar/ts-jest/blob/main/e2e/native-esm-ts/mjs-resolver.ts",children:"https://github.com/kulshekhar/ts-jest/blob/main/e2e/native-esm-ts/mjs-resolver.ts"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"tsconfig.json"})," should at least contain these following options"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'// tsconfig.spec.json\n{\n  "compilerOptions": {\n    "module": "ESNext", // or ES2015/ES2020/ES2022\n    "target": "ESNext",\n    "esModuleInterop": true\n  }\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},7227:(e,t,s)=>{s.d(t,{A:()=>a});s(6540);var n=s(4164);const r={tabItem:"tabItem_Ymn6"};var o=s(4848);function a(e){let{children:t,hidden:s,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,a),hidden:s,children:t})}},9489:(e,t,s)=>{s.d(t,{A:()=>S});var n=s(6540),r=s(4164),o=s(4245),a=s(6347),i=s(6494),l=s(2814),c=s(5167),u=s(9900);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const r=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function j(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,o=p(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,d]=m({queryString:s,groupId:r}),[j,x]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:r}),f=(()=>{const e=c??j;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,o]),tabValues:o}}var x=s(1062);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(4848);function b(e){let{className:t,block:s,selectedValue:n,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,s=l.indexOf(t),r=i[s].value;r!==n&&(c(t),a(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:o}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function E(e){const t=j(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function S(e){const t=(0,x.A)();return(0,g.jsx)(E,{...e,children:d(e.children)},String(t))}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(6540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);