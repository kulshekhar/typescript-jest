"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[2636],{2481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"guides/mock-es6-class","title":"Mock ES6 class","description":"TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.","source":"@site/versioned_docs/version-29.0/guides/mock-es6-class.md","sourceDirName":"guides","slug":"/guides/mock-es6-class","permalink":"/ts-jest/docs/29.0/guides/mock-es6-class","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/guides/mock-es6-class.md","tags":[],"version":"29.0","lastUpdatedBy":"JasonnnW3000","lastUpdatedAt":1735715364000,"frontMatter":{"id":"mock-es6-class","title":"Mock ES6 class"},"sidebar":"version-29.0-docs","previous":{"title":"ESM Support","permalink":"/ts-jest/docs/29.0/guides/esm-support"},"next":{"title":"Using with React Native","permalink":"/ts-jest/docs/29.0/guides/react-native"}}');var s=n(4848),a=n(8453),l=n(9489),o=n(7227);const u={id:"mock-es6-class",title:"Mock ES6 class"},i=void 0,c={},d=[];function p(e){const t={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.\n",(0,s.jsx)(t.code,{children:"const soundPlayer = require('./sound-player')"}),". Therefore creating an instance of the class that was exported as\na default will look like this: ",(0,s.jsx)(t.code,{children:"new soundPlayer.default()"}),". However if you are mocking the class as suggested by the documentation."]}),"\n",(0,s.jsxs)(l.A,{groupId:"code-examples",children:[(0,s.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"tab",children:"jest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return { playSoundFile: mockPlaySoundFile }\n  })\n})\n"})})}),(0,s.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"jest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return { playSoundFile: mockPlaySoundFile }\n  })\n})\n"})})})]}),"\n",(0,s.jsx)(t.p,{children:"You will get the error"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"TypeError: sound_player_1.default is not a constructor\n"})}),"\n",(0,s.jsxs)(t.p,{children:["because ",(0,s.jsx)(t.code,{children:"soundPlayer.default"})," does not point to a function. Your mock has to return an object which has a property default\nthat points to a function."]}),"\n",(0,s.jsxs)(l.A,{groupId:"code-examples",children:[(0,s.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"tab",children:"jest.mock('./sound-player', () => {\n  return {\n    default: jest.fn().mockImplementation(() => {\n      return {\n        playSoundFile: mockPlaySoundFile,\n      }\n    }),\n  }\n})\n"})})}),(0,s.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"jest.mock('./sound-player', () => {\n  return {\n    default: jest.fn().mockImplementation(() => {\n      return {\n        playSoundFile: mockPlaySoundFile,\n      }\n    }),\n  }\n})\n"})})})]}),"\n",(0,s.jsxs)(t.p,{children:["For named imports, like ",(0,s.jsx)(t.code,{children:"import { OAuth2 } from './oauth'"}),", replace ",(0,s.jsx)(t.code,{children:"default"})," with imported module name, ",(0,s.jsx)(t.code,{children:"OAuth2"})," in this example:"]}),"\n",(0,s.jsxs)(l.A,{groupId:"code-examples",children:[(0,s.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"tab",children:"jest.mock('./oauth', () => {\n    return {\n        OAuth2: ... // mock here\n    }\n})\n"})})}),(0,s.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"jest.mock('./oauth', () => {\n    return {\n        OAuth2: ... // mock here\n    }\n})\n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var a=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),s=n(4164),a=n(4245),l=n(6347),o=n(6494),u=n(2814),i=n(5167),c=n(9900);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=p(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[i,d]=h({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),g=(()=>{const e=i??f;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),s=o[n].value;s!==r&&(i(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...t,...e}),(0,j.jsx)(x,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(6540);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);