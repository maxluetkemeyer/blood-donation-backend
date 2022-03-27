module.exports = {
    'env': {
        'node': true,
        'es2022': true,
        'jest': true,
        'mongo': true,
    },
    'extends': [
        'google',
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'rules': {
        'indent': ['error', 4],
    },
};
