"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4672],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||a;return n?s.createElement(k,i(i({ref:t},d),{},{components:n})):s.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var s=n(7462),r=(n(7294),n(4137));const a={id:"presets",title:"Presets"},i=void 0,o={unversionedId:"getting-started/presets",id:"version-27.0/getting-started/presets",title:"Presets",description:"The presets",source:"@site/versioned_docs/version-27.0/getting-started/presets.md",sourceDirName:"getting-started",slug:"/getting-started/presets",permalink:"/ts-jest/docs/27.0/getting-started/presets",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/getting-started/presets.md",tags:[],version:"27.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1716270404,formattedLastUpdatedAt:"May 21, 2024",frontMatter:{id:"presets",title:"Presets"},sidebar:"version-27.0-docs",previous:{title:"Installation",permalink:"/ts-jest/docs/27.0/getting-started/installation"},next:{title:"Options",permalink:"/ts-jest/docs/27.0/getting-started/options"}},l={},p=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"the-presets"},"The presets"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," comes with several presets, covering most of the project's base configuration:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Preset name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default"),(0,r.kt)("br",null),"or ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"CommonJS")," syntax, leaving JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default-esm"),(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"ESM")," syntax, leaving JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".jsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"CommonJS")," syntax.",(0,r.kt)("br",null),"You'll need to set ",(0,r.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts-esm")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".jsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"ESM")," syntax.",(0,r.kt)("br",null),"You'll need to set ",(0,r.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"CommonJS")," syntax, and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel-esm")),(0,r.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,r.kt)("strong",{parentName:"td"},"ESM")," syntax, and JavaScript files (",(0,r.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"jsx"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,r.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")))),(0,r.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,r.kt)("p",null,"In most cases, simply setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"preset")," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," to your ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," of course):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  // Replace `ts-jest` with the preset you want to use\n  // from the above list\n  preset: 'ts-jest',\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    // Replace `ts-jest` with the preset you want to use\n    // from the above list\n    "preset": "ts-jest"\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," presets use ",(0,r.kt)("inlineCode",{parentName:"p"},"testMatch"),", like Jest does in its defaults. If you want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"testRegex")," instead in your configuration, you MUST set ",(0,r.kt)("inlineCode",{parentName:"p"},"testMatch")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or Jest will bail."),(0,r.kt)("h3",{id:"advanced"},"Advanced"),(0,r.kt)("p",null,"Any preset can also be used with other options.\nIf you're already using another preset, you might want only some specific settings from the chosen ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," preset.\nIn this case you'll need to use the JavaScript version of Jest config (comment/uncomment according to your use case):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nconst { defaults: tsjPreset } = require('ts-jest/presets')\n// const { defaultsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTs: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabel: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabelESM: tsjPreset } = require('ts-jest/presets')\n\nmodule.exports = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n")),(0,r.kt)("p",null,"Or through TypeScript (if ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node")," is installed):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// jest.config.ts\nimport type { InitialOptionsTsJest } from 'ts-jest/dist/types'\nimport { defaults as tsjPreset } from 'ts-jest/presets'\n// import { defaultsESM as tsjPreset } from 'ts-jest/presets'\n// import { jsWithTs as tsjPreset } from 'ts-jest/presets'\n// import { jsWithTsESM as tsjPreset } from 'ts-jest/presets'\n// import { jsWithBabel as tsjPreset } from 'ts-jest/presets'\n// import { jsWithBabelESM as tsjPreset } from 'ts-jest/presets'\n\nconst config: InitialOptionsTsJest = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n\nexport default config\n")))}m.isMDXComponent=!0}}]);