module.exports = {
    "env": {
        "node": true,
        "es6": true,
        "jest/globals": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended",
    ],
    "ignorePatterns": [
        "e2e/__helpers__",
        "e2e/__tests__",
        "dist/",
        "utils/",
        "node_modules/",
        "e2e/__cases__/",
        "e2e/__workdir_synlink__/",
        "coverage/",
        "docs/"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "ecmaVersion": 2020,
        "sourceType": 'module',
        "impliedStrict": true,
        "ecmaFeatures": {
            "jsx": true,
        }
    },
    "plugins": [
        "@typescript-eslint",
        "jest",
        "jsdoc",
    ],
    "rules": {
        "no-console": "warn",
        "indent": "off",
        "linebreak-style": "off",
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "never"
        ],
        "comma-dangle": "off",
        "constructor-super": "error",
        "for-direction": [
            "error"
        ],
        "getter-return": "warn",
        "no-async-promise-executor": [
            "error"
        ],
        "no-case-declarations": [
            "error"
        ],
        "no-class-assign": [
            "error"
        ],
        "no-compare-neg-zero": [
            "error"
        ],
        "no-cond-assign": "error",
        "no-const-assign": [
            "error"
        ],
        "no-constant-condition": [
            "warn"
        ],
        "no-control-regex": [
            "warn"
        ],
        "no-debugger": "error",
        "no-delete-var": [
            "error"
        ],
        "no-dupe-args": [
            "error"
        ],
        "no-dupe-class-members": "warn",
        "no-dupe-keys": [
            "error"
        ],
        "no-duplicate-case": [
            "error"
        ],
        "no-empty": [
            "error",
            {
                "allowEmptyCatch": true
            }
        ],
        "no-empty-character-class": [
            "error"
        ],
        "no-empty-pattern": [
            "error"
        ],
        "no-ex-assign": [
            "error"
        ],
        "no-extra-boolean-cast": [
            "error"
        ],
        "no-extra-semi": "off",
        "no-fallthrough": "off",
        "no-func-assign": [
            "error"
        ],
        "no-global-assign": [
            "error"
        ],
        "no-inner-declarations": [
            "error"
        ],
        "no-invalid-regexp": [
            "error"
        ],
        "no-irregular-whitespace": "off",
        "no-misleading-character-class": [
            "error"
        ],
        "no-mixed-spaces-and-tabs": [
            "error"
        ],
        "no-new-symbol": [
            "error"
        ],
        "no-obj-calls": [
            "error"
        ],
        "no-octal": [
            "error"
        ],
        "no-prototype-builtins": [
            "error"
        ],
        "no-redeclare": "warn",
        "no-regex-spaces": [
            "error"
        ],
        "no-self-assign": [
            "error"
        ],
        "no-shadow-restricted-names": [
            "error"
        ],
        "no-sparse-arrays": [
            "error"
        ],
        "no-this-before-super": [
            "error"
        ],
        "no-undef": [
            "error"
        ],
        "no-unexpected-multiline": [
            "error"
        ],
        "no-unreachable": [
            "error"
        ],
        "no-unsafe-finally": "error",
        "no-unsafe-negation": [
            "error"
        ],
        "no-unused-labels": "error",
        "no-useless-catch": [
            "error"
        ],
        "no-useless-escape": "warn",
        "no-with": [
            "error"
        ],
        "require-yield": [
            "error"
        ],
        "use-isnan": "error",
        "valid-typeof": "off",
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
            "warn",
            {
                "default": "array"
            }
        ],
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Object": {
                        "message": "Avoid using the `Object` type. Did you mean `object`?"
                    },
                    "Function": {
                        "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                    },
                    "Boolean": {
                        "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                    },
                    "Number": {
                        "message": "Avoid using the `Number` type. Did you mean `number`?"
                    },
                    "String": {
                        "message": "Avoid using the `String` type. Did you mean `string`?"
                    },
                    "Symbol": {
                        "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                    }
                }
            }
        ],
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/prefer-regexp-exec": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/prefer-includes": "warn", 
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "no-public"
            }
        ],
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/require-await": "warn",
        "@typescript-eslint/ban-ts-ignore": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "warn",
        "@typescript-eslint/no-null-assertion": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-for-of": "off",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/semi": [
            "warn",
            "never"
        ],
        "@typescript-eslint/triple-slash-reference": [
            "error",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/unified-signatures": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "warn", 
        "arrow-body-style": "warn",
        "arrow-parens": [
            "off",
            "always"
        ],
        "brace-style": [
            "off",
            "off"
        ],
        "camelcase": "warn",
        "class-methods-use-this": "warn",
        "complexity": "off",
        "curly": [
            "warn",
            "multi-line"
        ],
        "default-case": "error",
        "dot-notation": "error",
        "eol-last": "off",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-match": "error",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/newline-after-description": "off",
        "max-classes-per-file": "off",
        "max-len": "off",
        "new-parens": "off",
        "newline-per-chained-call": "off",
        "no-bitwise": "off",
        "no-caller": "error",
        "no-duplicate-imports": "error",
        "no-eval": "error",
        "no-invalid-this": "off",
        "no-multiple-empty-lines": "off",
        "no-new-wrappers": "error",
        "no-return-await": "error",
        "no-shadow": [
            "off",
            {
                "hoist": "all"
            }
        ],
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "off",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unused-expressions": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "prefer-const": "warn",
        "prefer-object-spread": "error",
        "prefer-template": "error",
        "quote-props": "off",
        "radix": "error",
        "space-before-function-paren": "off",
        "space-in-parens": [
            "off",
            "never"
        ],
        "spaced-comment": [
            "warn",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
    },
    "settings": {}
};
