module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
		"react-native/react-native": true // Para o react native
  },
extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
							'react',
							'prettier',
							'react-hooks', // para o react hooks
							'react-native', // Para o react native
						],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
		'react-native/no-unused-styles': 2,  // Para o react native
    'react-native/split-platform-components': 2,  // Para o react native
    'react-native/no-inline-styles': 2,  // Para o react native
    'react-native/no-color-literals': 2,  // Para o react native
    'react-native/no-raw-text': 2,  // Para o react native
    'react-native/no-single-element-style-arrays': 2,  // Para o react native
  },
};