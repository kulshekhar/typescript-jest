"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[7791],{4137:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(i,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(g,l(l({ref:e},u),{},{components:n})):a.createElement(g,l({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(t){let{children:e,hidden:n,className:l}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},e)}},3992:(t,e,n)=>{n.d(e,{Z:()=>j});var a=n(7462),r=n(7294),o=n(6010),l=n(2957),s=n(6775),i=n(5238),p=n(3609),u=n(2560);function d(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:n,attributes:a,default:r}}=t;return{value:e,label:n,attributes:a,default:r}}))}function m(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??d(n);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function c(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:n}=t;const a=(0,s.k6)(),o=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((t=>{if(!o)return;const e=new URLSearchParams(a.location.search);e.set(o,t),a.replace({...a.location,search:e.toString()})}),[o,a])]}function f(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,o=m(t),[l,s]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((t=>t.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:o}))),[i,p]=g({queryString:n,groupId:a}),[d,f]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((t=>{n&&o.set(t)}),[n,o])]}({groupId:a}),k=(()=>{const t=i??d;return c({value:t,tabValues:o})?t:null})();(0,r.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((t=>{if(!c({value:t,tabValues:o}))throw new Error(`Can't select invalid tab value=${t}`);s(t),p(t),f(t)}),[p,f,o]),tabValues:o}}var k=n(1048);const N="tabList__CuJ",b="tabItem_LNqP";function h(t){let{className:e,block:n,selectedValue:s,selectValue:i,tabValues:p}=t;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=t=>{const e=t.currentTarget,n=u.indexOf(e),a=p[n].value;a!==s&&(d(e),i(a))},c=t=>{let e=null;switch(t.key){case"Enter":m(t);break;case"ArrowRight":{const n=u.indexOf(t.currentTarget)+1;e=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(t.currentTarget)-1;e=u[n]??u[u.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},e)},p.map((t=>{let{value:e,label:n,attributes:l}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:t=>u.push(t),onKeyDown:c,onClick:m},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":s===e})}),n??e)})))}function y(t){let{lazy:e,children:n,selectedValue:a}=t;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=o.find((t=>t.props.value===a));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function v(t){const e=f(t);return r.createElement("div",{className:(0,o.Z)("tabs-container",N)},r.createElement(h,(0,a.Z)({},t,e)),r.createElement(y,(0,a.Z)({},t,e)))}function j(t){const e=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(e)},t))}},7645:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(4137)),o=n(3992),l=n(425);const s={id:"options",title:"Options"},i=void 0,p={unversionedId:"getting-started/options",id:"getting-started/options",title:"Options",description:"Introduction",source:"@site/docs/getting-started/options.md",sourceDirName:"getting-started",slug:"/getting-started/options",permalink:"/ts-jest/docs/next/getting-started/options",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1716279054,formattedLastUpdatedAt:"May 21, 2024",frontMatter:{id:"options",title:"Options"},sidebar:"docs",previous:{title:"Presets",permalink:"/ts-jest/docs/next/getting-started/presets"},next:{title:"Paths mapping",permalink:"/ts-jest/docs/next/getting-started/paths-mapping"}},u={},d=[{value:"Introduction",id:"introduction",level:3},{value:"Options",id:"options",level:3}],m={toc:d};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are using custom ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," config, please remove ",(0,r.kt)("inlineCode",{parentName:"p"},"preset")," from your Jest config to avoid issues that Jest doesn't transform files correctly.")),(0,r.kt)("p",null,"All ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," specific options can be defined in Jest ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," config object in the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file of your project,\nor through a ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.js"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.ts")," file."),(0,r.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        // ts-jest configuration goes here\n      },\n    ],\n  },\n}\n"))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        // ts-jest configuration goes here\n      },\n    ],\n  },\n}\n"))),(0,r.kt)(l.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          // ts-jest configuration goes here\n        }\n      ]\n    }\n  }\n}\n')))),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"When using TypeScript Jest config file, Jest will use ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node")," to compile the config file. ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," doesn't take part in\nthat process.")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"All options have default values which should fit most of the projects. Click on the option's name to see details and example(s)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/compiler"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"compiler")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/compiler"},"TypeScript module to use as compiler.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"typescript"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/tsconfig"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"tsconfig")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/tsconfig"},"TypeScript compiler related configuration.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"),"|",(0,r.kt)("inlineCode",{parentName:"td"},"object"),"|",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"auto"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/isolatedModules"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"isolatedModules")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/isolatedModules"},"Disable type-checking")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"disabled"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/astTransformers"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"astTransformers")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/astTransformers"},"Custom TypeScript AST transformers")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"auto"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/diagnostics"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"diagnostics")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/diagnostics"},"Diagnostics related configuration.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"),"|",(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"enabled"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/babelConfig"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"babelConfig")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/babelConfig"},"Babel(Jest) related configuration.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"),"|",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"|",(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"disabled"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/stringifyContentPathRegex"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"stringifyContentPathRegex")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/stringifyContentPathRegex"},"Files which will become modules returning self content.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"),"|",(0,r.kt)("inlineCode",{parentName:"td"},"RegExp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"disabled"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/useESM"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"useESM")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/useESM"},"Enable ESM support")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"auto"))))))}c.isMDXComponent=!0}}]);