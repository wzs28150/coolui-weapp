<!--
 * @Descripttion:
 * @version:
 * @Author: wzs
 * @Date: 2020-04-02 19:28:48
 * @LastEditors: wzs
 * @LastEditTime: 2020-04-14 23:47:14
 -->

# xxx 小程序

## 项目技术选型

> 原生小程序 + vant 组件 + cool 组件

## 项目目录结构

```bash
.
+-- api(接口目录目录)
|   +-- base.js(api配置文件)
|   +-- login.js(登录api)
|   +-- search.js(搜索api)
+-- components(自定义组件目录)
|   +-- loginPannel(登录组件)
+-- icons(图标目录)
|
+-- miniprogram_npm(第三方组件目录)
|   +-- @vant(vant组件库)
|   +-- wx-axios-promise(小程序axios封装库)
+-- pages(页面目录)
|   |   +-- index(首页页面目录)
|   |   +-- info(详细页面目录)
|   |   +-- Inspector(检测员目录)
|   |   |   +-- index(检测员首页目录)
|   |   |   +-- login(检测员登录目录)
+-- app.js
+-- app.json
+-- app.wxss
```

## 命令

> 安装项目工程cli 只需安装一次 安过无需再安
```
npm i coolui-cli -g
```
> 初始化项目 自动创建站点
```
coolui init 你的项目名(字母)
```
> 建立页面
```
coolui -p 你的页面名称
```
> 建立组件
```
coolui -c 你的组件名
```
> 建立接口
```
coolui -a 你的接口名
```

## 项目日志

> 2020.04.14

1.  建立目录结构, 决定采用 vant 组件 + cool 组件
2.  安装 wx-axios-promise, 建立 api 接口系统
3.  使用 vscode less2wxss 编写样式
