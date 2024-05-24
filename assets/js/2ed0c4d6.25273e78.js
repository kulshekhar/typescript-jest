"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[9243],{5374:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"27.0","label":"27.0","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-27.0","isLast":false,"docsSidebars":{"version-27.0-docs":[{"collapsed":true,"type":"category","label":"ts-jest","items":[{"type":"link","label":"Introduction","href":"/ts-jest/docs/27.0/","docId":"introduction","unlisted":false},{"type":"link","label":"Processing flow","href":"/ts-jest/docs/27.0/processing","docId":"processing","unlisted":false},{"type":"link","label":"Contributing","href":"/ts-jest/docs/27.0/contributing","docId":"contributing","unlisted":false}],"collapsible":true},{"collapsed":false,"type":"category","label":"Getting Started","items":[{"type":"link","label":"Installation","href":"/ts-jest/docs/27.0/getting-started/installation","docId":"getting-started/installation","unlisted":false},{"type":"link","label":"Presets","href":"/ts-jest/docs/27.0/getting-started/presets","docId":"getting-started/presets","unlisted":false},{"type":"link","label":"Options","href":"/ts-jest/docs/27.0/getting-started/options","docId":"getting-started/options","unlisted":false},{"type":"link","label":"Paths mapping","href":"/ts-jest/docs/27.0/getting-started/paths-mapping","docId":"getting-started/paths-mapping","unlisted":false},{"type":"link","label":"Version checking","href":"/ts-jest/docs/27.0/getting-started/version-checking","docId":"getting-started/version-checking","unlisted":false}],"collapsible":true},{"collapsed":false,"type":"category","label":"Guides","items":[{"type":"link","label":"ESM Support","href":"/ts-jest/docs/27.0/guides/esm-support","docId":"guides/esm-support","unlisted":false},{"type":"link","label":"Mock ES6 class","href":"/ts-jest/docs/27.0/guides/mock-es6-class","docId":"guides/mock-es6-class","unlisted":false},{"type":"link","label":"Using with React Native","href":"/ts-jest/docs/27.0/guides/react-native","docId":"guides/react-native","unlisted":false},{"type":"link","label":"Test helpers","href":"/ts-jest/docs/27.0/guides/test-helpers","docId":"guides/test-helpers","unlisted":false},{"type":"link","label":"Troubleshooting","href":"/ts-jest/docs/27.0/guides/troubleshooting","docId":"guides/troubleshooting","unlisted":false},{"type":"link","label":"Using with monorepo","href":"/ts-jest/docs/27.0/guides/using-with-monorepo","docId":"guides/using-with-monorepo","unlisted":false}],"collapsible":true},{"type":"link","label":"Babel7 or TypeScript","href":"/ts-jest/docs/27.0/babel7-or-ts","docId":"babel7-or-ts","unlisted":false},{"type":"link","label":"Migration from <=23.10","href":"/ts-jest/docs/27.0/migration","docId":"migration","unlisted":false},{"type":"link","label":"Debugging ts-jest","href":"/ts-jest/docs/27.0/debugging","docId":"debugging","unlisted":false}]},"docs":{"babel7-or-ts":{"id":"babel7-or-ts","title":"Babel7 or TypeScript","description":"In Sept. 2018 Babel7 got released with an interesting preset: @babel/preset-typescript.","sidebar":"version-27.0-docs"},"contributing":{"id":"contributing","title":"Contributing","description":"When contributing to this repository, please first discuss the change you wish to make via ts-jest GitHub discussion or issue with the owners of this repository before making a change.","sidebar":"version-27.0-docs"},"debugging":{"id":"debugging","title":"Debugging ts-jest","description":"You can activate the debug logger by setting the environment variable TSJESTLOG before running tests.","sidebar":"version-27.0-docs"},"getting-started/installation":{"id":"getting-started/installation","title":"Installation","description":"Dependencies","sidebar":"version-27.0-docs"},"getting-started/options":{"id":"getting-started/options","title":"Options","description":"Introduction","sidebar":"version-27.0-docs"},"getting-started/options/astTransformers":{"id":"getting-started/options/astTransformers","title":"AST transformers option","description":"ts-jest by default does hoisting for a few jest methods via a TypeScript AST transformer. One can also create custom"},"getting-started/options/babelConfig":{"id":"getting-started/options/babelConfig","title":"Babel Config option","description":"ts-jest by default does NOT use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ts-jest can call the BabelJest processor once TypeScript has transformed the source into JavaScript."},"getting-started/options/compiler":{"id":"getting-started/options/compiler","title":"Compiler option","description":"The compiler option allows you to define the compiler to be used. It\'ll be used to load the NodeJS module holding the TypeScript compiler."},"getting-started/options/diagnostics":{"id":"getting-started/options/diagnostics","title":"Diagnostics option","description":"The diagnostics option configures error reporting."},"getting-started/options/isolatedModules":{"id":"getting-started/options/isolatedModules","title":"Isolated Modules option","description":"By default ts-jest uses TypeScript compiler in the context of a project (yours), with full type-checking and features."},"getting-started/options/stringifyContentPathRegex":{"id":"getting-started/options/stringifyContentPathRegex","title":"Stringify content option","description":"The stringifyContentPathRegex option has been kept for backward compatibility of HTML_TRANSFORM"},"getting-started/options/tsconfig":{"id":"getting-started/options/tsconfig","title":"TypeScript Config option","description":"The tsconfig option allows you to define which tsconfig JSON file to use. An inline compiler options object can also be specified instead of a file path."},"getting-started/options/useESM":{"id":"getting-started/options/useESM","title":"useESM option","description":"The useESM option allows ts-jest to transform codes to ESM syntax if possible."},"getting-started/paths-mapping":{"id":"getting-started/paths-mapping","title":"Paths mapping","description":"If you use \\"baseUrl\\" and \\"paths\\" options in your tsconfig file, you should make sure the \\"moduleNameMapper\\" option in your Jest config is setup accordingly.","sidebar":"version-27.0-docs"},"getting-started/presets":{"id":"getting-started/presets","title":"Presets","description":"The presets","sidebar":"version-27.0-docs"},"getting-started/version-checking":{"id":"getting-started/version-checking","title":"Version checking","description":"By default, ts-jest supports a range of versions for jest/typescript. One uses incompatible versions will receive a warning","sidebar":"version-27.0-docs"},"guides/esm-support":{"id":"guides/esm-support","title":"ESM Support","description":"To use ts-jest with ESM support:","sidebar":"version-27.0-docs"},"guides/mock-es6-class":{"id":"guides/mock-es6-class","title":"Mock ES6 class","description":"TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.","sidebar":"version-27.0-docs"},"guides/react-native":{"id":"guides/react-native","title":"Using with React Native","description":"To use ts-jest with React Native + TypeScript and Babel 7, you\'ll first need to follow this tutorial.","sidebar":"version-27.0-docs"},"guides/test-helpers":{"id":"guides/test-helpers","title":"Test helpers","description":"ts-jest provides some test utilities to be used in your test, related to TypeScript.","sidebar":"version-27.0-docs"},"guides/troubleshooting":{"id":"guides/troubleshooting","title":"Troubleshooting","description":"You can check Jest troubleshooting guide or visit ts-jest [troubleshooting","sidebar":"version-27.0-docs"},"guides/using-with-monorepo":{"id":"guides/using-with-monorepo","title":"Using with monorepo","description":"To use ts-jest in a project with monorepo structure, you\'ll need to use Jest projects configuration.","sidebar":"version-27.0-docs"},"introduction":{"id":"introduction","title":"Introduction","description":"A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.","sidebar":"version-27.0-docs"},"migration":{"id":"migration","title":"Migration from <=23.10","description":"You can use the config:migrate tool of ts-jest CLI if you\'re coming from an older version to help you migrate your Jest configuration.","sidebar":"version-27.0-docs"},"processing":{"id":"processing","title":"Processing flow","description":"These are internal technical documents. If you\'re not a contributor to ts-jest, but simply trying to use the library you\'ll find nothing of value here","sidebar":"version-27.0-docs"}}}}')}}]);