"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[2817],{1369:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"getting-started/presets","title":"Presets","description":"The presets","source":"@site/versioned_docs/version-27.1/getting-started/presets.md","sourceDirName":"getting-started","slug":"/getting-started/presets","permalink":"/ts-jest/docs/27.1/getting-started/presets","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.1/getting-started/presets.md","tags":[],"version":"27.1","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1733463612000,"frontMatter":{"id":"presets","title":"Presets"},"sidebar":"version-27.1-docs","previous":{"title":"Installation","permalink":"/ts-jest/docs/27.1/getting-started/installation"},"next":{"title":"Options","permalink":"/ts-jest/docs/27.1/getting-started/options"}}');var r=t(4848),i=t(8453);const d={id:"presets",title:"Presets"},c=void 0,o={},l=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}];function j(e){const s={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h3,{id:"the-presets",children:"The presets"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"ts-jest"})," comes with several presets, covering most of the project's base configuration:"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Preset name"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/default"}),(0,r.jsx)("br",{}),"or ",(0,r.jsx)(s.code,{children:"ts-jest"})]}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax, leaving JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),") as-is."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/default-esm"}),(0,r.jsx)("br",{})]}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax, leaving JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),") as-is."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-ts"})}),(0,r.jsxs)(s.td,{children:["TypeScript and JavaScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),", ",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:".jsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax.",(0,r.jsx)("br",{}),"You'll need to set ",(0,r.jsx)(s.code,{children:"allowJs"})," to ",(0,r.jsx)(s.code,{children:"true"})," in your ",(0,r.jsx)(s.code,{children:"tsconfig.json"})," file."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-ts-esm"})}),(0,r.jsxs)(s.td,{children:["TypeScript and JavaScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),", ",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:".jsx"}),", ",(0,r.jsx)(s.code,{children:".mjs"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax.",(0,r.jsx)("br",{}),"You'll need to set ",(0,r.jsx)(s.code,{children:"allowJs"})," to ",(0,r.jsx)(s.code,{children:"true"})," in your ",(0,r.jsx)(s.code,{children:"tsconfig.json"})," file."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-babel"})}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax, and JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"babel-jest"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-babel-esm"})}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax, and JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),", ",(0,r.jsx)(s.code,{children:".mjs"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"babel-jest"}),"."]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,r.jsxs)(s.p,{children:["In most cases, simply setting the ",(0,r.jsx)(s.code,{children:"preset"})," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,r.jsx)(s.code,{children:"ts-jest"})," to your ",(0,r.jsx)(s.code,{children:"devDependencies"})," of course):"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  // Replace `ts-jest` with the preset you want to use\n  // from the above list\n  preset: 'ts-jest',\n}\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    // Replace `ts-jest` with the preset you want to use\n    // from the above list\n    "preset": "ts-jest"\n  }\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," presets use ",(0,r.jsx)(s.code,{children:"testMatch"}),", like Jest does in its defaults. If you want to use ",(0,r.jsx)(s.code,{children:"testRegex"})," instead in your configuration, you MUST set ",(0,r.jsx)(s.code,{children:"testMatch"})," to ",(0,r.jsx)(s.code,{children:"null"})," or Jest will bail."]}),"\n",(0,r.jsx)(s.h3,{id:"advanced",children:"Advanced"}),"\n",(0,r.jsxs)(s.p,{children:["Any preset can also be used with other options.\nIf you're already using another preset, you might want only some specific settings from the chosen ",(0,r.jsx)(s.code,{children:"ts-jest"})," preset.\nIn this case you'll need to use the JavaScript version of Jest config (comment/uncomment according to your use case):"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nconst { defaults: tsjPreset } = require('ts-jest/presets')\n// const { defaultsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTs: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabel: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabelESM: tsjPreset } = require('ts-jest/presets')\n\nmodule.exports = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Or through TypeScript (if ",(0,r.jsx)(s.code,{children:"ts-node"})," is installed):"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"// jest.config.ts\nimport type { InitialOptionsTsJest } from 'ts-jest'\nimport { defaults as tsjPreset } from 'ts-jest/presets'\n// import { defaultsESM as tsjPreset } from 'ts-jest/presets'\n// import { jsWithTs as tsjPreset } from 'ts-jest/presets'\n// import { jsWithTsESM as tsjPreset } from 'ts-jest/presets'\n// import { jsWithBabel as tsjPreset } from 'ts-jest/presets'\n// import { jsWithBabelESM as tsjPreset } from 'ts-jest/presets'\n\nconst config: InitialOptionsTsJest = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n\nexport default config\n"})})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>c});var n=t(6540);const r={},i=n.createContext(r);function d(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);