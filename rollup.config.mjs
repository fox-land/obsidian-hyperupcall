import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";

const isProd = process.env.NODE_ENV === "production";

export default {
	input: "src/main.ts",
	output: {
		dir: "./dist",
		sourcemap: "inline",
		sourcemapExcludeSources: isProd,
		format: "cjs",
		exports: "default",
	},
	external: ["obsidian"],
	plugins: [
		typescript(),
		nodeResolve({ browser: true }),
		commonjs(),
		copy({
			targets: [
				{
					src: "manifest.json",
					dest: "dist/",
				},
				{
					src: "styles.css",
					dest: "dist/",
				},
			],
		}),
	],
};
