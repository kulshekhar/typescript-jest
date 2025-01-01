"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[2365],{9790:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"getting-started/options/tsconfig","title":"TypeScript Config option","description":"The tsconfig option allows you to define which tsconfig JSON file to use. An inline compiler options object can also be specified instead of a file path.","source":"@site/versioned_docs/version-28.0/getting-started/options/tsconfig.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/tsconfig","permalink":"/ts-jest/docs/28.0/getting-started/options/tsconfig","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-28.0/getting-started/options/tsconfig.md","tags":[],"version":"28.0","lastUpdatedBy":"JasonnnW3000","lastUpdatedAt":1735715364000,"frontMatter":{"title":"TypeScript Config option"}}');var s=t(4848),i=t(8453);const c={title:"TypeScript Config option"},l=void 0,r={},a=[{value:"Examples",id:"examples",level:3},{value:"Path to a <code>tsconfig</code> file",id:"path-to-a-tsconfig-file",level:4},{value:"Inline compiler options",id:"inline-compiler-options",level:4},{value:"Disable auto-lookup",id:"disable-auto-lookup",level:4}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"tsconfig"})," option allows you to define which ",(0,s.jsx)(n.code,{children:"tsconfig"})," JSON file to use. An inline ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options",children:"compiler options"})," object can also be specified instead of a file path."]}),"\n",(0,s.jsxs)(n.p,{children:["By default ",(0,s.jsx)(n.code,{children:"ts-jest"})," will try to find a ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," in your project. If it cannot find one, it will use the default TypeScript ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options",children:"compiler options"}),"; except, ",(0,s.jsx)(n.code,{children:"ES2015"})," is used as ",(0,s.jsx)(n.code,{children:"target"})," instead of ",(0,s.jsx)(n.code,{children:"ES5"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you need to use defaults and force ",(0,s.jsx)(n.code,{children:"ts-jest"})," to use the defaults even if there is a ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," in your project, you can set this option to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.h4,{id:"path-to-a-tsconfig-file",children:["Path to a ",(0,s.jsx)(n.code,{children:"tsconfig"})," file"]}),"\n",(0,s.jsxs)(n.p,{children:["The path should be relative to the current working directory where you start Jest from. You can also use ",(0,s.jsx)(n.code,{children:"<rootDir>"})," in the path to start from the project root dir."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      tsconfig: 'tsconfig.test.json',\n    },\n  },\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "tsconfig": "tsconfig.test.json"\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"inline-compiler-options",children:"Inline compiler options"}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the TypeScript ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options",children:"compiler options"})," for reference.\nIt's basically the same object you'd put in your ",(0,s.jsx)(n.code,{children:"tsconfig.json"}),"'s ",(0,s.jsx)(n.code,{children:"compilerOptions"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      tsconfig: {\n        importHelpers: true,\n      },\n    },\n  },\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "tsconfig": {\n          "importHelpers": true\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"disable-auto-lookup",children:"Disable auto-lookup"}),"\n",(0,s.jsxs)(n.p,{children:["By default ",(0,s.jsx)(n.code,{children:"ts-jest"})," will try to find a ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," in your project. But you may not want to use it at all and keep TypeScript default options. You can achieve this by setting ",(0,s.jsx)(n.code,{children:"tsconfig"})," to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      tsconfig: false,\n    },\n  },\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "tsconfig": false\n      }\n    }\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var o=t(6540);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);