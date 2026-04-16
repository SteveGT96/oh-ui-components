/// <reference types="vitest/config" />

import { resolve } from 'node:path';
// https://vite.dev/config/
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, esmExternalRequirePlugin } from 'vite';
import dts from 'vite-plugin-dts';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		dts({
			copyDtsFiles: true,
			tsconfigPath: './tsconfig.build.json',
		}),
	],
	build: {
		copyPublicDir: false,
		lib: {
			fileName: (_, entryName) => `${entryName}.js`,
			entry: {
				index: resolve(__dirname, 'lib/index.ts'),
				...Object.fromEntries(
					['lib', 'components'].map((entry) => [
						entry,
						resolve(__dirname, `lib/${entry}/index.ts`),
					]),
				),
			},
			formats: ['es'],
		},
		rolldownOptions: {
			plugins: [
				esmExternalRequirePlugin({
					external: [/^react(-dom)?(\/.+)?$/],
				}),
			],
		},
		rollupOptions: {
			external: ['react', 'react-dom', "**/*.stories.tsx'"],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
	resolve: {
		tsconfigPaths: true,
	},
});
