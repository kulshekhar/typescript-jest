"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[1173],{5547:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=s(4848),o=s(8453);const i={id:"react-native",title:"Using with React Native"},c=void 0,r={id:"guides/react-native",title:"Using with React Native",description:"To use ts-jest with React Native + TypeScript and Babel 7, you'll first need to follow this tutorial.",source:"@site/versioned_docs/version-28.0/guides/react-native.md",sourceDirName:"guides",slug:"/guides/react-native",permalink:"/ts-jest/docs/28.0/guides/react-native",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-28.0/guides/react-native.md",tags:[],version:"28.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:172996283e4,frontMatter:{id:"react-native",title:"Using with React Native"},sidebar:"version-28.0-docs",previous:{title:"Mock ES6 class",permalink:"/ts-jest/docs/28.0/guides/mock-es6-class"},next:{title:"Troubleshooting",permalink:"/ts-jest/docs/28.0/guides/troubleshooting"}},a={},l=[{value:"Babel config",id:"babel-config",level:3},{value:"TypeScript Configuration",id:"typescript-configuration",level:3},{value:"Jest config",id:"jest-config",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["To use ",(0,n.jsx)(t.code,{children:"ts-jest"})," with React Native + TypeScript and Babel 7, you'll first need to follow ",(0,n.jsx)(t.a,{href:"https://reactnative.dev/blog/2018/05/07/using-typescript-with-react-native",children:"this tutorial"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"After that, some little modifications will be required as follows:"}),"\n",(0,n.jsx)(t.h3,{id:"babel-config",children:"Babel config"}),"\n",(0,n.jsxs)(t.p,{children:["If you didn't yet, move any Babel config from ",(0,n.jsx)(t.code,{children:".babelrc"})," to ",(0,n.jsx)(t.code,{children:"babel.config.js"}),". It should at least contain:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// babel.config.js\nmodule.exports = {\n  presets: ['module:metro-react-native-babel-preset'],\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"typescript-configuration",children:"TypeScript Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["Create a new ",(0,n.jsx)(t.code,{children:"tsconfig.spec.json"})," at the root of your project with the following content"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'// tsconfig.spec.json\n{\n  "extends": "./tsconfig.json",\n  "compilerOptions": {\n    "jsx": "react"\n  }\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"jest-config",children:"Jest config"}),"\n",(0,n.jsxs)(t.p,{children:["In the same way that you moved Babel config, move Jest config from ",(0,n.jsx)(t.code,{children:"jest"})," key of ",(0,n.jsx)(t.code,{children:"package.json"})," to ",(0,n.jsx)(t.code,{children:"jest.config.js"}),". It should look like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// jest.config.js\nconst { defaults: tsjPreset } = require('ts-jest/presets')\n\nmodule.exports = {\n  preset: 'react-native',\n  globals: {\n    'ts-jest': {\n      tsconfig: 'tsconfig.spec.json',\n    },\n  },\n  transform: {\n    '^.+\\\\.jsx$': 'babel-jest',\n    '^.+\\\\.tsx?$': 'ts-jest',\n  },\n  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>r});var n=s(6540);const o={},i=n.createContext(o);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);