"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[378],{278:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=n(4848),r=n(8453);const o={title:"AST transformers option"},a=void 0,i={id:"getting-started/options/astTransformers",title:"AST transformers option",description:"ts-jest by default does hoisting for a few jest methods via a TypeScript AST transformer. One can also create custom",source:"@site/versioned_docs/version-28.0/getting-started/options/astTransformers.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/astTransformers",permalink:"/ts-jest/docs/28.0/getting-started/options/astTransformers",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-28.0/getting-started/options/astTransformers.md",tags:[],version:"28.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1718883634e3,frontMatter:{title:"AST transformers option"}},c={},d=[{value:"Examples",id:"examples",level:3},{value:"Basic Transformers",id:"basic-transformers",level:4},{value:"Configuring transformers with options",id:"configuring-transformers-with-options",level:4},{value:"Writing custom TypeScript AST transformers",id:"writing-custom-typescript-ast-transformers",level:3}];function l(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"ts-jest"})," by default does hoisting for a few ",(0,t.jsx)(s.code,{children:"jest"})," methods via a TypeScript AST transformer. One can also create custom\nTypeScript AST transformers and provide them to ",(0,t.jsx)(s.code,{children:"ts-jest"})," to include into compilation process."]}),"\n",(0,t.jsxs)(s.p,{children:["The option is ",(0,t.jsx)(s.code,{children:"astTransformers"})," and it allows ones to specify which 3 types of TypeScript AST transformers to use with ",(0,t.jsx)(s.code,{children:"ts-jest"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"before"})," means your transformers get run before TS ones, which means your transformers will get raw TS syntax\ninstead of transpiled syntax (e.g ",(0,t.jsx)(s.code,{children:"import"})," instead of ",(0,t.jsx)(s.code,{children:"require"})," or ",(0,t.jsx)(s.code,{children:"define"})," )."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"after"})," means your transformers get run after TS ones, which gets transpiled syntax."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"afterDeclarations"})," means your transformers get run during ",(0,t.jsx)(s.code,{children:"d.ts"})," generation phase, allowing you to transform output type declarations."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.h4,{id:"basic-transformers",children:"Basic Transformers"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: ['my-custom-transformer'],\n      },\n    },\n  },\n}\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": ["my-custom-transformer"]\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(s.h4,{id:"configuring-transformers-with-options",children:"Configuring transformers with options"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: [\n          {\n            path: 'my-custom-transformer-that-needs-extra-opts',\n            options: {}, // extra options to pass to transformers here\n          },\n        ],\n      },\n    },\n  },\n}\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": [\n            {\n              "path": "my-custom-transformer-that-needs-extra-opts",\n              "options": {} // extra options to pass to transformers here\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"writing-custom-typescript-ast-transformers",children:"Writing custom TypeScript AST transformers"}),"\n",(0,t.jsxs)(s.p,{children:["To write a custom TypeScript AST transformers, one can take a look at ",(0,t.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest/tree/main/src/transformers",children:"the one"})," that ",(0,t.jsx)(s.code,{children:"ts-jest"})," is using."]})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>i});var t=n(6540);const r={},o=t.createContext(r);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);