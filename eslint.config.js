// eslint.config.js
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import astro from 'eslint-plugin-astro'
import react from 'eslint-plugin-react'

export default {
  files: ['**/*.{js,ts,jsx,tsx,astro}'], // 対象ファイルのパターン
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      project: './tsconfig.json',
      extraFileExtensions: ['.astro'],
    },
  },
  plugins: {
    astro,
    react,
    '@typescript-eslint': tsPlugin,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off', // React 17+ の場合
  },
}
