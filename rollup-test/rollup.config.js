import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import path from "path"; // node的模块，可直接引入
import json from '@rollup/plugin-json';
import pkg from './package.json' assert { type: 'json' }; // 对于node 17.5+用户
import typescript from "@rollup/plugin-typescript2"; // 转换typescript
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';


export default {
	input: 'src/index.ts',
	output: [
			{
				format: 'esm',
				file:pkg.module
			},
			{
				format: 'cjs',
				file:pkg.main
			},
			{ 
				file: 'dist/index.umd.js', //  暂时不知道这里在package.json中应该怎么对应配置？
				format: 'umd',
				name:'tools'
			}
	],

  plugins:[
		peerDepsExternal(), // 同级依赖，是组件库引用的外部库，不会被打包
    resolve(),
		commonjs(), // 一定要早于babel
		typescript(),
		babel({ 
			babelHelpers: 'bundled', // helper函数内联
			exclude: 'node_modules/**',
			extensions: ['.js', '.jsx', '.ts', '.tsx'], // babel 默认不支持 ts 需要手动添加
		 }),
		 terser({ format: { comments: false } }) // 删除所有注释
  ]
};