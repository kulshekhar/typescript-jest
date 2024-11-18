"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[983],{4914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"getting-started/paths-mapping","title":"Paths mapping","description":"If you use \\"baseUrl\\" and \\"paths\\" options in your tsconfig file, you should make sure the \\"moduleNameMapper\\" option in your Jest config is setup accordingly.","source":"@site/versioned_docs/version-29.2/getting-started/paths-mapping.md","sourceDirName":"getting-started","slug":"/getting-started/paths-mapping","permalink":"/ts-jest/docs/getting-started/paths-mapping","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.2/getting-started/paths-mapping.md","tags":[],"version":"29.2","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1731926009000,"frontMatter":{"id":"paths-mapping","title":"Paths mapping"},"sidebar":"version-29.1-docs","previous":{"title":"Options","permalink":"/ts-jest/docs/getting-started/options"},"next":{"title":"Version checking","permalink":"/ts-jest/docs/getting-started/version-checking"}}');var o=n(4848),r=n(8453),a=n(9489),i=n(7227);const l={id:"paths-mapping",title:"Paths mapping"},c=void 0,p={},u=[{value:"Example",id:"example",level:3},{value:"TypeScript config",id:"typescript-config",level:4},{value:"Jest config (without helper)",id:"jest-config-without-helper",level:4},{value:"Jest config (with helper)",id:"jest-config-with-helper",level:4},{value:"If using <code>globalSetup</code> or <code>globalTeardown</code>",id:"if-using-globalsetup-or-globalteardown",level:4},{value:"Global setup file with <code>tsconfig-paths</code>",id:"global-setup-file-with-tsconfig-paths",level:5}];function d(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["If you use ",(0,o.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html",children:'"baseUrl" and "paths" options'})," in your ",(0,o.jsx)(t.code,{children:"tsconfig"})," file, you should make sure the ",(0,o.jsx)(t.a,{href:"https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring",children:'"moduleNameMapper"'})," option in your Jest config is setup accordingly."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ts-jest"})," provides a helper to transform the mapping from ",(0,o.jsx)(t.code,{children:"tsconfig"})," to Jest config format, but it needs the ",(0,o.jsx)(t.code,{children:".js"})," version of the config file."]}),"\n",(0,o.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.h4,{id:"typescript-config",children:"TypeScript config"}),"\n",(0,o.jsxs)(t.p,{children:["With the below config in your ",(0,o.jsx)(t.code,{children:"tsconfig"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'// tsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@App/*": ["src/*"],\n      "lib/*": ["common/*"]\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(t.h4,{id:"jest-config-without-helper",children:"Jest config (without helper)"}),"\n",(0,o.jsxs)(a.A,{groupId:"code-examples",children:[(0,o.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  moduleNameMapper: {\n    '^@App/(.*)$': '<rootDir>/src/$1',\n    '^lib/(.*)$': '<rootDir>/common/$1',\n  },\n}\n"})})}),(0,o.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  moduleNameMapper: {\n    '^@App/(.*)$': '<rootDir>/src/$1',\n    '^lib/(.*)$': '<rootDir>/common/$1',\n  },\n}\n\nexport default jestConfig\n"})})}),(0,o.jsx)(i.A,{value:"JSON",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "moduleNameMapper": {\n      "^@App/(.*)$": "<rootDir>/src/$1",\n      "^lib/(.*)$": "<rootDir>/common/$1"\n    }\n  }\n}\n'})})})]}),"\n",(0,o.jsx)(t.h4,{id:"jest-config-with-helper",children:"Jest config (with helper)"}),"\n",(0,o.jsxs)(a.A,{groupId:"code-examples",children:[(0,o.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\nconst { pathsToModuleNameMapper } = require('ts-jest')\n// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file\n// which contains the path mapping (ie the `compilerOptions.paths` option):\nconst { compilerOptions } = require('./tsconfig')\n\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  roots: ['<rootDir>'],\n  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value\n  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),\n}\n"})})}),(0,o.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport { pathsToModuleNameMapper } from 'ts-jest'\n// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file\n// which contains the path mapping (ie the `compilerOptions.paths` option):\nimport { compilerOptions } from './tsconfig'\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  roots: ['<rootDir>'],\n  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value\n  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),\n}\n\nexport default jestConfig\n"})})})]}),"\n",(0,o.jsx)(t.p,{children:"With extra options as 2nd argument:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"prefix"}),": append prefix to each of mapped config in the result"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"useESM"}),": when using ",(0,o.jsx)(t.code,{children:"type: module"})," in ",(0,o.jsx)(t.code,{children:"package.json"}),", TypeScript enforces users to have explicit ",(0,o.jsx)(t.code,{children:"js"})," extension when importing\na ",(0,o.jsx)(t.code,{children:"ts"})," file. This option is to help ",(0,o.jsx)(t.code,{children:"pathsToModuleNameMapper"})," to create a config to suit with this scenario."]}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"if-using-globalsetup-or-globalteardown",children:["If using ",(0,o.jsx)(t.code,{children:"globalSetup"})," or ",(0,o.jsx)(t.code,{children:"globalTeardown"})]}),"\n",(0,o.jsxs)(t.p,{children:["Files used for ",(0,o.jsx)(t.a,{href:"https://jestjs.io/docs/configuration#globalsetup-string",children:(0,o.jsx)(t.code,{children:"globalSetup"})})," or ",(0,o.jsx)(t.a,{href:"https://jestjs.io/docs/configuration#globalteardown-string",children:(0,o.jsx)(t.code,{children:"globalTeardown"})})," are not directly processes by ",(0,o.jsx)(t.code,{children:"jest"}),", so those do not use the ",(0,o.jsx)(t.a,{href:"https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring",children:'"moduleNameMapper"'})," mapping. So you have to make sure those are able to map the paths themselves."]}),"\n",(0,o.jsxs)(t.h5,{id:"global-setup-file-with-tsconfig-paths",children:["Global setup file with ",(0,o.jsx)(t.code,{children:"tsconfig-paths"})]}),"\n",(0,o.jsxs)(t.p,{children:["For those files to be able to use ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/tsconfig-paths",children:(0,o.jsx)(t.code,{children:"tsconfig-paths"})}),", you have to import it directly"]}),"\n",(0,o.jsxs)(a.A,{groupId:"code-examples",children:[(0,o.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// ./path/to/globalSetup.js\nrequire('tsconfig-paths/register')\n\n/**\n * Your global setup\n */\n\n// ./path/to/globalTeardown.js\nrequire('tsconfig-paths/register')\n\n/**\n * Your global teardown\n */\n"})})}),(0,o.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// ./path/to/globalSetup.ts\nimport 'tsconfig-paths/register'\n\n/**\n * Your global setup\n */\n\n// ./path/to/globalTeardown.ts\nimport 'tsconfig-paths/register'\n\n/**\n * Your global teardown\n */\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var s=n(4164);const o={tabItem:"tabItem_Ymn6"};var r=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,a),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(6540),o=n(4164),r=n(4245),a=n(6347),i=n(6494),l=n(2814),c=n(5167),p=n(9900);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:o}}=e;return{value:t,label:n,attributes:s,default:o}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const o=(0,a.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=d(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[c,u]=g({queryString:n,groupId:o}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,p.Dv)(n);return[o,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),j=(()=>{const e=c??m;return h({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=n(1062);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function x(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),p=e=>{const t=e.currentTarget,n=l.indexOf(t),o=i[n].value;o!==s&&(c(t),a(o))},u=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:u,onClick:p,...r,className:(0,o.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",j.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(6540);const o={},r=s.createContext(o);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);