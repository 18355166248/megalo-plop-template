# 常用 plop 模板

首先必须安装 plop 的依赖

```js
yarn add -D plop
```

## react-crud-hook

react 增删改查 使用 官方的 hook 实现状态管理
没有使用任何第三方的状态管理库

## react-crud-mobx

react 增删改查 使用 mobx + mobx-react-lite 实现状态管理
所以需要安装对应的依赖

## react-crud-mi-design

react 增删改查 使用 mobx + hook + mi-design 实现状态管理
所以需要安装对应的依赖

## react-crud-mi-zustand

react 增删改查 使用 mobx + mi-design + zustand 实现状态管理
所以需要安装对应的依赖

## package.json

添加命令

```js
"script": {
  "plop": "plop --plopfile ./plop-template/plopfile.js",
}
```
