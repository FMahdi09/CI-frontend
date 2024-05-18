module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vitest.config.ts'],
    parserOptions: {
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        parser: '@typescript-eslint/parser',
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    plugins: ['react-refresh'],
    rules: {
        'indent': ['error', 4],
        'brace-style' : ['error', 'allman'],
        'quotes' : ['error', 'single'],
        'linebreak-style' : ['error', 'windows'],
        'semi' : ['error', 'always'],
        'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
        ],
    },
}
