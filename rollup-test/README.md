# components

rollup 实现打包组件库

参考文章：
https://juejin.cn/post/7267167108609310783?searchId=20230817111632A212928C904726EE9B86#heading-21

- [rollup 从入门到打包一个按需加载的组件库](https://juejin.cn/post/6934698510436859912?searchId=20230814144751304530FCBE0E59F6075E#heading-12)
- [【实战篇】最详细的 Rollup 打包项目教程](https://juejin.cn/post/7145090564801691684?searchId=20230814142652BC2AF97A393338F3AB26#heading-22)
- [怎么样在本地调试组件库](https://juejin.cn/post/6932736907830886413#heading-4)
- [从 package.json 来聊聊如何管理一款优秀的 Npm 包](https://juejin.cn/post/7126394898445500423?searchId=20230816154458D69E7ACF2407CD5C10DC#heading-6)
  https://juejin.cn/post/7145090564801691684?searchId=20230814142652BC2AF97A393338F3AB26#heading-6
  https://juejin.cn/post/7115416426088759309?searchId=20230814144751304530FCBE0E59F6075E
  [rollup 从 0 到 1 将 react 组件库打包发布 npm](https://juejin.cn/post/7115416426088759309?searchId=20230814144751304530FCBE0E59F6075E#heading-1)
  官网：
  https://rollupjs.org/tutorial/#using-config-files

# 插件

## 加载第三方模块

@rollup/plugin-node-resolve：处理第三方模块
@rollup/plugin-commonjs:不识别 commonjs 模块，只支持 es6+

## 处理 css

@rollup/plugin-postcss:

- 加载 css，css 默认会以 style 插入；
- 默认支持预处理器 less,stylus,sass;
- css 前缀 autoprefixer+browserslist ?
- css 压缩 cssnano
- 抽离 css 成单独文件 ?

```javascript
postcss({
  plugins: [autoprefixer(), cssnano()],
  extract: "css/index.css",
});
```

# 处理 js

rollup-plugin-babel: 转换 js,创建.babelrc 文件
rollup-plugin-terser: 压缩

# 按需加载

- 组件库导出 es 模块，自然能够按需加载
- 按照功能抽离成单独的文件，在引入的时候按照文件路径去引入
  那么其他格式的模块呢？

# 避免打包一些库

external 是 Rollup 的原生配置项，用于告诉 Rollup 哪些模块是外部依赖，不应该被打包进最终的输出文件中。
external 可以避免，但是也担心引入方没有安装，使用 peerDependencies 中比较好
rollup-plugin-peer-deps-external 插件是一个 Rollup 插件，用于自动处理项目的同级依赖（Peer Dependencies）。
当你的项目被其他项目引入时，通常不应该将同级依赖打包进你的项目的输出中。
当其他项目引入你的项目时，它们会自动检查 Peer Dependencies，并在依赖安装过程中要求安装这些依赖的正确版本。这有助于避免潜在的版本冲突和依赖重复加载的问题。

# 启动服务器 & 热更新

rollup-plugin-serve：用于启动一个服务器
rollup-plugin-livereload：用于文件变化时，实时刷新页面

```javascript
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
export default {
  ...
  plugins:[
    serve({
      contentBase: '',  //服务器启动的文件夹，默认是项目根目录，需要在该文件下创建index.html
      port: 8020   //端口号，默认10001
    }),
    livereload('dist')   //watch dist目录，当目录中的文件发生变化时，刷新页面
  ]
}
```

# 引入 typescript & 导出声明文件

tsconfig
利用 typescript
@rollup/plugin-typescript

# 打包保持源代码的文件结构

什么时候需要这么做呢？

```javascript
	{s
		dir: path.dirname('dist/index.js'),
		format: 'esm',
		exports: 'named', // 指定导出模式（自动、默认、命名、无）
    preserveModules: true, // 保留模块结构
    preserveModulesRoot: 'src', // 将保留的模块放在根级别的此路径下
	},
```

# 清除调试代码

terser 不可以做到吗？

# 组件添加 eslint & prettier

[配置 eslint](https://juejin.cn/post/6844904035309322254?searchId=202308171008071BF3990A1A9C99EAB9A1#heading-6)

# treeShaking

# package.json 相关字段配置

[package.json 最新最全指南](https://juejin.cn/post/7240805459288522808?searchId=20230816154458D69E7ACF2407CD5C10DC#heading-41)

- types: 指定 npm 包的类型定义文件的位置，方便引入者识别和加载
  > 当其他开发者在 TypeScript 项目中使用该包时，TypeScript 编译器会自动查找并加载与包关联的类型声明文件，从而提供正确的类型检查和类型推断。

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "types": "dist/index.d.ts",
  ...
}
```

- module

- main: 定义了 npm 包的入口文件

## scripts

rimraf 模块：基于 Node.js 的第三方模块，用于跨平台删除文件和目录，用于删除文件和目录

# output

file 只有在打包输出文件不超过一个时使用

# babel

babelrc 放在 src 下，可以方便各种环境？

# 疑问

name: 'myLib'  
 //当入口文件有 export 时，'umd'格式必须指定 name
//这样，在通过<script>标签引入时，才能通过 name 访问到 export 的内容

      @babel/plugin-external-helpers"
