"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[2091],{1561:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"guides/troubleshooting","title":"Troubleshooting","description":"During your development with ts-jest, you may encounter various issues. Use this guide to resolve them.","source":"@site/versioned_docs/version-26.5/guides/troubleshooting.md","sourceDirName":"guides","slug":"/guides/troubleshooting","permalink":"/ts-jest/docs/26.5/guides/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/guides/troubleshooting.md","tags":[],"version":"26.5","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1730859417000,"frontMatter":{"id":"troubleshooting","title":"Troubleshooting"},"sidebar":"version-26.5-docs","previous":{"title":"Test helpers","permalink":"/ts-jest/docs/26.5/guides/test-helpers"},"next":{"title":"Using with monorepo","permalink":"/ts-jest/docs/26.5/guides/using-with-monorepo"}}');var o=n(4848),i=n(8453);const r={id:"troubleshooting",title:"Troubleshooting"},l=void 0,d={},a=[{value:"Running ts-jest on CI tools",id:"running-ts-jest-on-ci-tools",level:2},{value:"PROBLEM",id:"problem",level:3},{value:"SOLUTION",id:"solution",level:3},{value:"Transform (node)-module explicitly",id:"transform-node-module-explicitly",level:2},{value:"PROBLEM",id:"problem-1",level:3},{value:"SOLUTION",id:"solution-1",level:3},{value:"Tests gets stuck when importing a dependency",id:"tests-gets-stuck-when-importing-a-dependency",level:2},{value:"PROBLEM",id:"problem-2",level:3},{value:"SOLUTION",id:"solution-2",level:3}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"During your development with ts-jest, you may encounter various issues. Use this guide to resolve them."}),"\n",(0,o.jsxs)(s.p,{children:["Please also check Jest ",(0,o.jsx)(s.a,{href:"https://jestjs.io/docs/en/troubleshooting",children:"troubleshooting guide"})," if your issue is related to jest."]}),"\n",(0,o.jsx)(s.h2,{id:"running-ts-jest-on-ci-tools",children:"Running ts-jest on CI tools"}),"\n",(0,o.jsx)(s.h3,{id:"problem",children:"PROBLEM"}),"\n",(0,o.jsx)(s.p,{children:'Cannot find module "" from ""'}),"\n",(0,o.jsx)(s.h3,{id:"solution",children:"SOLUTION"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Check if ",(0,o.jsx)(s.code,{children:"rootDir"})," is referenced correctly. If not add this on your existing jest configuration."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:'module.exports = {\n  ...\n   roots: ["<rootDir>"]\n}\n'})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Check if module directories are included on your jest configuration. If not add this on your existing jest configuration."}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:'module.exports = {\n  ...\n  moduleDirectories: ["node_modules","<module-directory>"],\n  modulePaths: ["<path-of-module>"],\n}\n'})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Check if module name is properly mapped and can be referenced by jest. If not, you can define moduleNameMapper for your jest configuration."}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:'module.exports = {\n  ...\n  moduleNameMapper: {\n    "<import-path>": "<rootDir>/<real-physical-path>",\n  },\n}\n'})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Check github folder names if its identical to you local folder names. Sometimes github never updates your folder names even if you rename it locally. If this happens rename your folders via github or use this command ",(0,o.jsx)(s.code,{children:"git mv <source> <destination>"})," and commit changes."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"transform-node-module-explicitly",children:"Transform (node)-module explicitly"}),"\n",(0,o.jsx)(s.h3,{id:"problem-1",children:"PROBLEM"}),"\n",(0,o.jsx)(s.p,{children:"SyntaxError: Cannot use import statement outside a module"}),"\n",(0,o.jsx)(s.h3,{id:"solution-1",children:"SOLUTION"}),"\n",(0,o.jsx)(s.p,{children:"One of the node modules hasn't the correct syntax for Jests execution step. It needs to\nbe transformed first."}),"\n",(0,o.jsx)(s.p,{children:"There is a good chance that the error message shows which module is affected:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-shell",children:'    SyntaxError: Cannot use import statement outside a module\n    > 22 | import Component from "../../node_modules/some-module/lib";\n         | ^\n'})}),"\n",(0,o.jsxs)(s.p,{children:["In this case ",(0,o.jsx)(s.strong,{children:"some-module"})," is the problem and needs to be transformed.\nBy adding the following line to the configuration file it will tell Jest which modules\nshouldnt be ignored during the transformation step:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:'module.exports = {\n  ...\n  transformIgnorePatterns: ["node_modules/(?!(some-module|another-module))"]\n};\n'})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"some-module"})," and ",(0,o.jsx)(s.strong,{children:"another-module"})," will be transformed."]}),"\n",(0,o.jsxs)(s.p,{children:["For more information see ",(0,o.jsx)(s.a,{href:"https://stackoverflow.com/questions/63389757/jest-unit-test-syntaxerror-cannot-use-import-statement-outside-a-module",children:"here"})," and ",(0,o.jsx)(s.a,{href:"https://stackoverflow.com/questions/52035066/how-to-write-jest-transformignorepatterns",children:"here"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"tests-gets-stuck-when-importing-a-dependency",children:"Tests gets stuck when importing a dependency"}),"\n",(0,o.jsx)(s.h3,{id:"problem-2",children:"PROBLEM"}),"\n",(0,o.jsx)(s.p,{children:"Without cache, jest takes an extremely long time to process files and appears to be stuck."}),"\n",(0,o.jsx)(s.h3,{id:"solution-2",children:"SOLUTION"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"ts-jest"})," internally uses TypeScript compiler API to transform ts/js file into js file. The recommendation is to only transform what is needed."]}),"\n",(0,o.jsxs)(s.p,{children:["A possible cause for that issue is that you may have enabled ",(0,o.jsx)(s.code,{children:"ts-jest"})," to process javascript files in addition to TypeScript files. This leads to the result that more files are loaded which can, in some cases, blow up the machine."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["In your tsconfig file, check if ",(0,o.jsx)(s.code,{children:"compilerOptions.allowJs"})," is unset or set to false."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:'{\n  "compilerOptions": {\n    "allowJs": false,\n  }\n}\n'})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["In your jest configuration, check if the transform property includes only ",(0,o.jsx)(s.code,{children:".ts"})," files for ts-jest. If not, change the regular expression to exclude js files. You can also add the attribute ",(0,o.jsx)(s.code,{children:"isolatedModules: true"})," for ts-jest to disable type checking for tests."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-diff",children:"module.exports = {\n  ...\n  'transform': {\n-    '^.+\\\\.(t|j)s$': ['ts-jest', {}],\n+    '^.+\\\\.ts$': ['ts-jest', { isolatedModules: true }],\n  },\n};\n"})}),"\n",(0,o.jsxs)(s.p,{children:["For more information see ",(0,o.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest/issues/4294",children:"here"})]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var t=n(6540);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);