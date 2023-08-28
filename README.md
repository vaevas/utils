# 一个前端工具包

[![npm version](https://badge.fury.io/js/vaevas-utils.svg)](https://badge.fury.io/js/vaevas-utils)

整合了一些前端开发过程中使用的一些工具函数，支持单个导入以及全部导入

## 安装方式

```shell
yarn add vaevas-utils
```

or

```shell
npm i vaevas-utils
```

## 目录结构

```shell
formats   ---- 格式化函数
tools     ---- 工具函数
validates ---- 校验函数
```

## 示例代码

```js
const email = 'test@example.com';
/**
 * 单个导入使用
 */
import { emailCheck } from './validates/index.js';
if (emailCheck(email)) {
  console.log('email is valid');
} else {
  console.log('email is invalid');
}
/**
 * 整个导入
 */
import validate from './index.js';
if (validate.emailCheck(email)) {
  console.log('email is valid');
} else {
  console.log('email is invalid');
}
```
