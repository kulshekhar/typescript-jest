"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[2716],{4137:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=p(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(g,l(l({ref:e},d),{},{components:n})):a.createElement(g,l({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},425:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(t){let{children:e,hidden:n,className:l}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},e)}},4259:(t,e,n)=>{n.d(e,{Z:()=>c});var a=n(7462),r=n(7294),o=n(6010),l=n(1048),i=n(3609),s=n(1943),p=n(2957);const d="tabList__CuJ",m="tabItem_LNqP";function u(t){var e;const{lazy:n,block:l,defaultValue:u,values:c,groupId:g,className:k}=t,f=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??f.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),b=(0,i.l)(N,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===u?u:u??(null==(e=f.find((t=>t.props.default)))?void 0:e.props.value)??f[0].props.value;if(null!==h&&!N.some((t=>t.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,s.U)(),[C,j]=(0,r.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=g){const t=y[g];null!=t&&t!==C&&N.some((e=>e.value===t))&&j(t)}const w=t=>{const e=t.currentTarget,n=T.indexOf(e),a=N[n].value;a!==C&&(O(e),j(a),null!=g&&v(g,String(a)))},E=t=>{var e;let n=null;switch(t.key){case"ArrowRight":{const e=T.indexOf(t.currentTarget)+1;n=T[e]??T[0];break}case"ArrowLeft":{const e=T.indexOf(t.currentTarget)-1;n=T[e]??T[T.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},k)},N.map((t=>{let{value:e,label:n,attributes:l}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:t=>T.push(t),onKeyDown:E,onFocus:w,onClick:w},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":C===e})}),n??e)}))),n?(0,r.cloneElement)(f.filter((t=>t.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==C})))))}function c(t){const e=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(e)},t))}},8930:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(4137)),o=n(4259),l=n(425);const i={id:"options",title:"Options"},s=void 0,p={unversionedId:"getting-started/options",id:"version-29.0/getting-started/options",title:"Options",description:"Introduction",source:"@site/versioned_docs/version-29.0/getting-started/options.md",sourceDirName:"getting-started",slug:"/getting-started/options",permalink:"/ts-jest/docs/getting-started/options",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/options.md",tags:[],version:"29.0",lastUpdatedBy:"Ahn",lastUpdatedAt:1663946417,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{id:"options",title:"Options"},sidebar:"version-29.0-docs",previous:{title:"Presets",permalink:"/ts-jest/docs/getting-started/presets"},next:{title:"Paths mapping",permalink:"/ts-jest/docs/getting-started/paths-mapping"}},d={},m=[{value:"Introduction",id:"introduction",level:3},{value:"Options",id:"options",level:3}],u={toc:m};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"All ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," specific options can be defined in Jest ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," config object in the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file of your project,\nor through a ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.js"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.ts")," file."),(0,r.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    '<regex_match_files>': [\n      'ts-jest',\n      {\n        // ts-jest configuration goes here\n      },\n    ],\n  },\n}\n"))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    '<regex_match_files>': [\n      'ts-jest',\n      {\n        // ts-jest configuration goes here\n      },\n    ],\n  },\n}\n"))),(0,r.kt)(l.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      "<regex_match_files>": [\n        "ts-jest",\n        {\n          // ts-jest configuration goes here\n        }\n      ]\n    }\n  }\n}\n')))),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"When using TypeScript Jest config file, Jest will use ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node")," to compile the config file. ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," doesn't take part in\nthat process.")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"All options have default values which should fit most of the projects. Click on the option's name to see details and example(s)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/compiler"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"compiler")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/compiler"},"TypeScript module to use as compiler.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"typescript"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/tsconfig"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"tsconfig")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/tsconfig"},"TypeScript compiler related configuration.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"),"|",(0,r.kt)("inlineCode",{parentName:"td"},"object"),"|",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"auto"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/isolatedModules"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"isolatedModules")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/isolatedModules"},"Disable type-checking")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"disabled"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/astTransformers"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"astTransformers")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/astTransformers"},"Custom TypeScript AST transformers")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"auto"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/diagnostics"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"diagnostics")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/diagnostics"},"Diagnostics related configuration.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"),"|",(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"enabled"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/babelConfig"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"babelConfig")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/babelConfig"},"Babel(Jest) related configuration.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"),"|",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"|",(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"disabled"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/stringifyContentPathRegex"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"stringifyContentPathRegex")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/stringifyContentPathRegex"},"Files which will become modules returning self content.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"),"|",(0,r.kt)("inlineCode",{parentName:"td"},"RegExp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"disabled"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/useESM"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"useESM")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"options/useESM"},"Enable ESM support")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"auto"))))))}c.isMDXComponent=!0}}]);