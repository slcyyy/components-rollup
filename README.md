# storybook

## 安装和启动

必须在已存在的项目中，所以先用 vite cli 初始化项目

```shell
npx storybook@latest init
```

默认会在 package.json 中添加启动命令

7.4.2+已经内置了 vite 的配置构建器`@storybook/react-vite`
然后通过如下，可以覆盖和使用 vite.config.js 的配置

```js
async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    });
  }
```

直接通过 pnpm run storybook 启动，并且借助 vite 能够实现热更新和预构建

## 样式

配置全局的 css，适合作为入口引入 tailwind.css
需要利用`@storybook/addon-styling`,用脚手架搭建时已经默认内置并配置
告知
