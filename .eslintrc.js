module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        "plugin:react/recommended",
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        indent: [
            "error",
            "tab",
            { "SwitchCase": 1 }
        ],
        "no-console": 2,
        "no-alert": 2
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};