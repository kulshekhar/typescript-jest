"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[106],{8125:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(4848),r=t(8453),o=t(9489),a=t(7227);const i={id:"esm-support",title:"ESM Support"},l=void 0,c={id:"guides/esm-support",title:"ESM Support",description:"To use ts-jest with ESM support:",source:"@site/docs/guides/esm-support.md",sourceDirName:"guides",slug:"/guides/esm-support",permalink:"/ts-jest/docs/next/guides/esm-support",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/guides/esm-support.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1722079567e3,frontMatter:{id:"esm-support",title:"ESM Support"},sidebar:"docs",previous:{title:"Version checking",permalink:"/ts-jest/docs/next/getting-started/version-checking"},next:{title:"Mock ES6 class",permalink:"/ts-jest/docs/next/guides/mock-es6-class"}},u={},d=[{value:"ESM presets",id:"esm-presets",level:3},{value:"Examples",id:"examples",level:3},{value:"Manual configuration",id:"manual-configuration",level:4},{value:"Use ESM presets",id:"use-esm-presets",level:4},{value:"Support <code>.mts</code> extension",id:"support-mts-extension",level:4}];function j(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["To use ",(0,n.jsx)(s.code,{children:"ts-jest"})," with ESM support:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Check ",(0,n.jsx)(s.a,{href:"https://jestjs.io/docs/en/ecmascript-modules",children:"ESM Jest documentation"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Enable ",(0,n.jsx)(s.a,{href:"../getting-started/options/useESM",children:"useESM"})," ",(0,n.jsx)(s.code,{children:"true"})," for ",(0,n.jsx)(s.code,{children:"ts-jest"})," config."]}),"\n",(0,n.jsxs)(s.li,{children:["Include ",(0,n.jsx)(s.code,{children:".ts"})," in ",(0,n.jsx)(s.a,{href:"https://jestjs.io/docs/en/next/configuration#extensionstotreatasesm-arraystring",children:"extensionsToTreatAsEsm"})," Jest config option."]}),"\n",(0,n.jsxs)(s.li,{children:["Ensure that ",(0,n.jsx)(s.code,{children:"tsconfig"})," has ",(0,n.jsx)(s.code,{children:"module"})," with value for ESM, e.g. ",(0,n.jsx)(s.code,{children:"ES2015"})," or ",(0,n.jsx)(s.code,{children:"ES2020"})," etc..."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"esm-presets",children:"ESM presets"}),"\n",(0,n.jsxs)(s.p,{children:["There are also ",(0,n.jsx)(s.a,{href:"/ts-jest/docs/next/getting-started/presets",children:"3 presets"})," to work with ESM."]}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsxs)(s.p,{children:["If you are using custom ",(0,n.jsx)(s.code,{children:"transform"})," config, please remove ",(0,n.jsx)(s.code,{children:"preset"})," from your Jest config to avoid issues that Jest doesn't transform files correctly."]})}),"\n",(0,n.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.h4,{id:"manual-configuration",children:"Manual configuration"}),"\n",(0,n.jsxs)(o.A,{groupId:"code-examples",children:[(0,n.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  extensionsToTreatAsEsm: ['.ts'],\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        useESM: true,\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  extensionsToTreatAsEsm: ['.ts'],\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        useESM: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(a.A,{value:"JSON",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "extensionsToTreatAsEsm": [".ts"],\n    "moduleNameMapper": {\n      "^(\\\\.{1,2}/.*)\\\\.js$": "$1"\n    },\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "useESM": true\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,n.jsx)(s.h4,{id:"use-esm-presets",children:"Use ESM presets"}),"\n",(0,n.jsx)(s.admonition,{type:"important",children:(0,n.jsxs)(s.p,{children:["Starting from ",(0,n.jsx)(s.strong,{children:"v28.0.0"}),", ",(0,n.jsx)(s.code,{children:"ts-jest"})," will gradually switch to ",(0,n.jsx)(s.code,{children:"esbuild"}),"/",(0,n.jsx)(s.code,{children:"swc"})," to transform ",(0,n.jsx)(s.code,{children:"ts"})," to ",(0,n.jsx)(s.code,{children:"js"}),". To make the transition smoothly, we introduce ",(0,n.jsx)(s.code,{children:"legacy"})," presets as a fallback when the new codes don't work yet."]})}),"\n",(0,n.jsxs)(o.A,{groupId:"code-examples",children:[(0,n.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  preset: 'ts-jest/presets/default-esm', // or other ESM presets\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        useESM: true,\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  preset: 'ts-jest/presets/default-esm', // or other ESM presets\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        useESM: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(a.A,{value:"JSON",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "preset": "ts-jest/presets/default-esm", // or other ESM presets,\n    "moduleNameMapper": {\n      "^(\\\\.{1,2}/.*)\\\\.js$": "$1"\n    },\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "useESM": true\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,n.jsxs)(s.h4,{id:"support-mts-extension",children:["Support ",(0,n.jsx)(s.code,{children:".mts"})," extension"]}),"\n",(0,n.jsxs)(s.p,{children:["To work with ",(0,n.jsx)(s.code,{children:".mts"})," extension, besides the requirement to run Jest and ",(0,n.jsx)(s.code,{children:"ts-jest"})," in ESM mode, there are a few extra requirements to be met:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"package.json"})," should contain ",(0,n.jsx)(s.code,{children:'"type": "module"'})]}),"\n",(0,n.jsxs)(s.li,{children:["A custom Jest resolver to resolve ",(0,n.jsx)(s.code,{children:".mjs"})," extension, see our simple one at ",(0,n.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest/blob/main/e2e/native-esm-ts/mjs-resolver.ts",children:"https://github.com/kulshekhar/ts-jest/blob/main/e2e/native-esm-ts/mjs-resolver.ts"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"tsconfig.json"})," should at least contain these following options"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'// tsconfig.spec.json\n{\n  "compilerOptions": {\n    "module": "Node16", // or "NodeNext"\n    "target": "ESNext",\n    "moduleResolution": "Node16", // or "NodeNext"\n    "esModuleInterop": true\n  }\n}\n'})})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},7227:(e,s,t)=>{t.d(s,{A:()=>a});t(6540);var n=t(4164);const r={tabItem:"tabItem_Ymn6"};var o=t(4848);function a(e){let{children:s,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,a),hidden:t,children:s})}},9489:(e,s,t)=>{t.d(s,{A:()=>w});var n=t(6540),r=t(4164),o=t(4245),a=t(6347),i=t(6494),l=t(2814),c=t(5167),u=t(9900);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function j(e){const{values:s,children:t}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:t,attributes:n,default:r}}=e;return{value:s,label:t,attributes:n,default:r}}))}(t);return function(e){const s=(0,c.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,t])}function p(e){let{value:s,tabValues:t}=e;return t.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:t}=e;const r=(0,a.W6)(),o=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:s,groupId:t});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const s=new URLSearchParams(r.location.search);s.set(o,e),r.replace({...r.location,search:s.toString()})}),[o,r])]}function h(e){const{defaultValue:s,queryString:t=!1,groupId:r}=e,o=j(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:o}))),[c,d]=m({queryString:t,groupId:r}),[h,x]=function(e){let{groupId:s}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,o]=(0,u.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),f=(()=>{const e=c??h;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,o]),tabValues:o}}var x=t(1062);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function b(e){let{className:s,block:t,selectedValue:n,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const s=e.currentTarget,t=l.indexOf(s),r=i[t].value;r!==n&&(c(s),a(r))},d=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;s=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;s=l[t]??l[l.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},s),children:i.map((e=>{let{value:s,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":n===s}),children:t??s},s)}))})}function v(e){let{lazy:s,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(s){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function S(e){const s=h(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...s,...e}),(0,g.jsx)(v,{...s,...e})]})}function w(e){const s=(0,x.A)();return(0,g.jsx)(S,{...e,children:d(e.children)},String(s))}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>i});var n=t(6540);const r={},o=n.createContext(r);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);