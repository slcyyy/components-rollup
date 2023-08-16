# components-rollup
rollup实现打包组件库


参考文章：

- [rollup从入门到打包一个按需加载的组件库](https://juejin.cn/post/6934698510436859912?searchId=20230814144751304530FCBE0E59F6075E#heading-12)
- [【实战篇】最详细的Rollup打包项目教程](https://juejin.cn/post/7145090564801691684?searchId=20230814142652BC2AF97A393338F3AB26#heading-22)
- [怎么样在本地调试组件库](https://juejin.cn/post/6932736907830886413#heading-4)
https://juejin.cn/post/7145090564801691684?searchId=20230814142652BC2AF97A393338F3AB26#heading-6
https://juejin.cn/post/7115416426088759309?searchId=20230814144751304530FCBE0E59F6075E

官网：
https://rollupjs.org/tutorial/#using-config-files


# 插件
## 加载第三方模块
@rollup/plugin-node-resolve：处理第三方模块
@rollup/plugin-commonjs:不识别commonjs模块，只支持es6+

## 处理css
@rollup/plugin-postcss:
- 加载css，css默认会以style插入；
- 默认支持预处理器less,stylus,sass;
- css前缀 autoprefixer+browserslist ?
- css压缩 cssnano
- 抽离css成单独文件 ?
```javascript
postcss({
  plugins: [
    autoprefixer(),
    cssnano()
  ],
  extract: 'css/index.css'  
})
```
# 处理js
rollup-plugin-babel: 转换js,创建.babelrc文件
rollup-plugin-terser: 压缩
# 按需加载
- 组件库导出es模块，自然能够按需加载
- 按照功能抽离成单独的文件，在引入的时候按照文件路径去引入
  那么其他格式的模块呢？
# 避免打包一些库
external可以避免，但是也担心引入方没有安装，使用peerDependencies中比较好
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
# 引入typescript & 导出声明文件
tsconfig
利用typescript
@rollup/plugin-typescript
# 打包保持源代码的文件结构
# 清除调试代码
terser不可以做到吗？
# 组件添加eslint & prettier

# treeShaking
# package.json相关字段配置
type

module

main: 定义了npm包的入口文件
