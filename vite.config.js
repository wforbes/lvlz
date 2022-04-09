import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'~/': `${pathSrc}/`
		},
	},/*
	css: {
		preprocessorOptions: {
			scss: {
			additionalData: `@use "~/styles/element/index.scss" as *;`,
			},
		},
	},*/
	plugins: [
		vue(),
		Components({
			extensions: ['vue', 'md'],
			include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
		})
	],
})