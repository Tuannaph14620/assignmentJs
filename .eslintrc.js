module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "airbnb-base",
    ],
    parserOptions: {
        ecmaVersion: 13,
    },
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        indent: ["error", 4],
        "linebreak-style: 0",
    },
};