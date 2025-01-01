"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4317],{9717:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>p,contentTitle:()=>a,default:()=>j,frontMatter:()=>d,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"guides/esm-support","title":"ESM Support","description":"References","source":"@site/versioned_docs/version-29.2/guides/esm-support.md","sourceDirName":"guides","slug":"/guides/esm-support","permalink":"/ts-jest/docs/guides/esm-support","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.2/guides/esm-support.md","tags":[],"version":"29.2","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1735724600000,"frontMatter":{"id":"esm-support","title":"ESM Support"},"sidebar":"version-29.1-docs","previous":{"title":"Version checking","permalink":"/ts-jest/docs/getting-started/version-checking"},"next":{"title":"Mock ES6 class","permalink":"/ts-jest/docs/guides/mock-es6-class"}}');var r=t(4848),o=t(8453),i=t(9489),l=t(7227),c=t(1574);const d={id:"esm-support",title:"ESM Support"},a=void 0,p={},u=[{value:"References",id:"references",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Example:",id:"example",level:4},{value:"Example:",id:"example-1",level:4},{value:"Resolve <code>.mjs/.mts</code> extensions",id:"resolve-mjsmts-extensions",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"references",children:"References"}),"\n","\n",(0,r.jsx)(c.A,{toc:u.slice(1)}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(s.p,{children:["To use ",(0,r.jsx)(s.code,{children:"ts-jest"})," with ESM support:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Check ",(0,r.jsx)(s.a,{href:"https://jestjs.io/docs/en/ecmascript-modules",children:"ESM Jest documentation"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Ensure that ",(0,r.jsx)(s.code,{children:"tsconfig"})," has ",(0,r.jsx)(s.code,{children:"module"})," with value for ESM, e.g. ",(0,r.jsx)(s.code,{children:"ES2022"}),"/",(0,r.jsx)(s.code,{children:"ESNext"})," etc..."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"example",children:"Example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'// tsconfig.spec.json\n{\n  "compilerOptions": {\n    "module": "ESNext", // or ES2022\n    "target": "ESNext",\n    "esModuleInterop": true\n  }\n}\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Configure your Jest configuration use one of the ",(0,r.jsx)(s.a,{href:"/ts-jest/docs/getting-started/presets",children:"utility functions"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"example-1",children:"Example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"// jest.config.mts\nimport { createDefaultEsmPreset, type JestConfigWithTsJest } from 'ts-jest'\n\nconst presetConfig = createDefaultEsmPreset({\n  //...options\n})\n\nconst jestConfig: JestConfigWithTsJest = {\n  ...presetConfig,\n}\n\nexport default jestConfig\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"resolve-mjsmts-extensions",children:["Resolve ",(0,r.jsx)(s.code,{children:".mjs/.mts"})," extensions"]}),"\n",(0,r.jsxs)(s.p,{children:["To work with ",(0,r.jsx)(s.code,{children:".mts"})," extension, besides the requirement to run Jest and ",(0,r.jsx)(s.code,{children:"ts-jest"})," in ESM mode, there are a few extra requirements to be met:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"package.json"})," should contain ",(0,r.jsx)(s.code,{children:'"type": "module"'})]}),"\n",(0,r.jsxs)(s.li,{children:["A custom Jest resolver to resolve ",(0,r.jsx)(s.code,{children:".mjs"})," extension, for example:"]}),"\n"]}),"\n",(0,r.jsxs)(i.A,{groupId:"code-examples",children:[(0,r.jsx)(l.A,{value:"typescript-cjs",label:"TypeScript CJS",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",metastring:'tab={"label": "TypeScript CJS"}',children:"import type { SyncResolver } from 'jest-resolve'\n\nconst mjsResolver: SyncResolver = (path, options) => {\n  const mjsExtRegex = /\\.mjs$/i\n  const resolver = options.defaultResolver\n  if (mjsExtRegex.test(path)) {\n    try {\n      return resolver(path.replace(mjsExtRegex, '.mts'), options)\n    } catch {\n      // use default resolver\n    }\n  }\n\n  return resolver(path, options)\n}\n\nexport = mjsResolver\n"})})}),(0,r.jsx)(l.A,{value:"typescript-esm",label:"TypeScript ESM",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",metastring:'tab={"label": "TypeScript ESM"}',children:"import type { SyncResolver } from 'jest-resolve'\n\nconst mjsResolver: SyncResolver = (path, options) => {\n  const mjsExtRegex = /\\.mjs$/i\n  const resolver = options.defaultResolver\n  if (mjsExtRegex.test(path)) {\n    try {\n      return resolver(path.replace(mjsExtRegex, '.mts'), options)\n    } catch {\n      // use default resolver\n    }\n  }\n\n  return resolver(path, options)\n}\n\nexport default mjsResolver\n"})})})]})]})}function j(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);