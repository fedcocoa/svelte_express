import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';

export default {
	input: './src/index.js',
	output: {
		file: './build/bundled.js',
		format: 'iife',
		name: 'app'
	},
	plugins: [
		svelte(),
		commonjs(),
		css({output: 'bundle.css'}),
		resolve({
            browser: true,
            dedupe: ['svelte']
        })
	]
}