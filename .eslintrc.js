module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        "plugin:react/recommended",
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
    rules: {
        "no-var-requires": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],
        '@typescript-eslint/array-type': ['error', { default: 'generic' } ],
        "prettier/prettier": [
            "error", 
            {
                "trailingComma": "all",
                "tabWidth": 2,
                "semi": true,
                "arrowParens": "always",
                "jsxBracketSameLine": true,
                "endOfLine":"auto",
                "printWidth": 120
            }, 
            {
                "usePrettierrc": false
            }
        ]
    },
    settings: {
        react: {
            version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
}