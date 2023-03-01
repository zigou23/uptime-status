window.Config = {

  // 显示标题
  SiteName: 'Uptime Status',

  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名 https://api.uptimerobot.com/v2/getMonitors 更多可以参考我的 https://github.com/zigou23/cfpages/blob/homepage/functions/api/statu.js
  // 详见 https://github.com/yb/uptime-status/ 说明 
  // 这边请不要填写我的域名，我限制了请求，你可以用自带的，也可用下边的
  // ApiDomain: 'api.uptimerobot.com/v2/getMonitors',
  ApiDomain: 'qsim.top/api/statu',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'ur1680981-5f764d83f8204dffc2b2fac7',
  ],

  // 日志天数
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://qsim.top/'
    },
    {
      text: 'Blog',
      url: 'https://blog.qsim.top/'
    },
  ],
};
