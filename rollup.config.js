import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import path from "path";
// import typescript from "@rollup/plugin-typescript";

export default {
	input: 'src/main.js',
	output: {
		dir: path.dirname('dist/index.js'),
		format: 'esm',
		exports: 'named', // 指定导出模式（自动、默认、命名、无）
    preserveModules: true, // 保留模块结构
    preserveModulesRoot: 'src', // 将保留的模块放在根级别的此路径下
	},
  plugins:[
    resolve(),
		commonjs(),
		// 导出类型声明文件
		// typescript({
		// 	outDir: "dist",
		// 	declaration: true,
		// 	declarationDir: "dist",
	// })
  ]
};