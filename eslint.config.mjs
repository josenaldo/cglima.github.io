import nextPlugin from '@next/eslint-plugin-next'
import { FlatCompat } from '@eslint/eslintrc'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextTs from 'eslint-config-next/typescript'
import prettierConfig from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const currentFilePath = fileURLToPath(import.meta.url)
const currentDirPath = path.dirname(currentFilePath)

const compat = new FlatCompat({
    baseDirectory: currentDirPath,
})

const eslintConfig = defineConfig([
    ...nextTs,
    ...compat.extends('airbnb'),
    eslintPluginPrettierRecommended,

    // Prettier: disables formatting rules that conflict with prettier
    prettierConfig,

    {
        plugins: {
            '@next/next': nextPlugin,
            'simple-import-sort': simpleImportSort,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'import/order': 'off',
            'sort-imports': 'off',
            camelcase: 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
            'import/no-extraneous-dependencies': 'off',
            'no-undef': 'off',

            // TypeScript handles module resolution — these rules don't apply to TS projects
            'import/no-unresolved': 'off',
            'import/extensions': 'off',

            // TypeScript interfaces replace PropTypes — these rules don't apply to TS
            'react/prop-types': 'off',
            'react/require-default-props': 'off',

            // Prop spreading is necessary in wrapper/primitive UI components (Link, CallToAction…)
            'react/jsx-props-no-spreading': 'off',

            // Named exports are intentional in feature index.ts barrel files
            'import/prefer-default-export': 'off',

            // Static list keys with array index are acceptable — list won't be reordered
            'react/no-array-index-key': 'off',

            // False-positive on Lunr builder callbacks: lunr(function() { this.ref(…) })
            'react/no-this-in-sfc': 'off',

            // Downgrade to warning — 'as any' is legitimate for MUI polymorphic components
            '@typescript-eslint/no-explicit-any': 'warn',

            // TypeScript interfaces replace PropTypes — unused props tracked by TS compiler
            'react/no-unused-prop-types': 'off',

            // Anonymous function in callbacks (e.g. lunr builder) is intentional
            'func-names': 'off',

            // Rule definition missing in current eslint-config-next flat config setup
            '@next/next/no-img-element': 'off',

            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        // 1. React (core framework)
                        ['^react$', '^react/'],
                        // 2. Next.js (meta-framework)
                        ['^next$', '^next/'],
                        // 3. External npm packages
                        //    @mui/*, other @-scoped, and unscoped packages
                        ['^@mui/', '^@[^/]+', '^[a-z]'],
                        // 4. Internal project aliases (@/*)
                        ['^@/'],
                        // 5. Data layer (@/data/*, contentlayer)
                        ['^@/data', '^contentlayer'],
                        // 6. Relative imports (./foo, ../foo)
                        ['^\\.'],
                        // 7. Side-effect imports (CSS, global styles)
                        ['^\\u0000'],
                    ],
                },
            ],
            'simple-import-sort/exports': 'error',
        },
    },
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),
])

export default eslintConfig
