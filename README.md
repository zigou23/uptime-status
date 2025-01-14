# uptime-status

一个基于 UptimeRobot API 的在线状态面板

<img width="1152" alt="image" src="https://user-images.githubusercontent.com/25887822/178935137-6d23521d-5894-4fb8-922d-3575be4f7abc.png">

## BUG
- [ ] 当屏幕宽度正好549px时，会出现左上面框框变成35格，下边日期显示60天(你填写的日期)前

## 更改内容
- [x] 自适应屏幕大小(目前需自己改代码
- [x] 从右往左排序
- [x] 添加老接口，可自定义ApiDomain
- [x] 把方块变得更长一点
- [x] 红色变浅一点(因为整天不在线的话，会显示无数据
- [x] 颜色变灰，不使用纯白
- [x] 增加Footer间距

## 事先准备

- 您需要先到 [UptimeRobot](https://uptimerobot.com/ "UptimeRobot") 添加站点监控，并在 My Settings 页面获取 API Key
- 您需要拥有一个网站空间，常见的 Nginx / PHP 等空间即可，甚至是阿里云的 OSS 等纯静态空间也行

## 如何部署：

- 下载并解压缩：[uptime-status.zip](https://github.com/yb/uptime-status/releases/latest/download/uptime-status.zip "uptime-status.zip") 
- 修改 `config.js` 文件：
   - `SiteName`: 要显示的网站名称
   - `ApiKeys`: 从 UptimeRobot 获取的 API Key，支持 Monitor-Specific API Keys 和 Read-Only API Key
   - `CountDays`: 要显示的日志天数，建议 60 或 90，显示效果比较好
   - `ShowLink`: 是否显示站点链接
   - `Navi`: 导航栏的菜单列表
- 将所有文件上传到网站空间

⚠️ 如果没有修改代码的需求，您不需要 git clone 本项目，只需要下载 Release 的文件包即可。

## 重构

首先git clone此项目，再安装环境

```
npm install update
npm install
```

等待环境安装完成（如果出问题尝试 `npm audit fix`

本地实时预览 `npm run start` ，并修改你的文件

完成后，`npm run build` 生成静态文件，去 `build` 文件夹下查看。

本地查看出问题尝试 `href="/ `改成 `href="./` 试试

