const blogObj = {
  blogType: {
		All: 0,
		Life: 1,
		Book: 2,
		JS: 3,
		HTML: 4,
		CSS: 5,
		Server: 6,
		System: 7
	},
  blogData: [
		{
			title: 'Node PM2',
			date: '2020-09-30',
			type: 6,
			img: 'https://pm2.keymetrics.io/assets/pm2-logo-1.png',
			text: 'PM2 上手',
			href: 'article/service/node/pm2'
		},
		{
			title: 'WEB 工具',
			date: '2020-09-27',
			type: 7,
			img: 'https://pic.downk.cc/item/5f74316e160a154a67c0f4d7.png',
			text: 'WEB 工具',
			href: 'article/tool/web'
		},
		{
			title: 'new life,new life',
			date: '2020-09-23',
			type: 1,
			img: 'https://s1.ax1x.com/2020/09/23/wj143D.jpg',
			text: '记录食材',
			href: 'article/life/baby/shipu'
		},
		{
			title: 'new life,new life',
			date: '2020-09-23',
			type: 1,
			img: 'https://s1.ax1x.com/2020/09/23/wj143D.jpg',
			text: '记录三餐',
			href: 'article/life/baby/babylife'
		},
		{
			title: '甲方乙方',
			date: '2020-09-11',
			type: 1,
			img: 'https://s2.ax1x.com/2019/11/09/MecDit.jpg',
			text: '甲方乙方的江湖故事',
			href: 'article/life/duanzi/jiayi'
		},
		{
			title: '事件',
			date: '2020-08-25',
			type: 3,
			img: 'https://s2.ax1x.com/2019/11/09/Me2v26.jpg',
			text: '介绍 Event',
			href: 'article/js/Event'
		},
		{
			title: 'GO Code',
			date: '2020-08-24',
			type: 6,
			img: 'https://s1.ax1x.com/2020/08/24/dBHHI0.jpg',
			text: 'Go Code',
			href: 'article/service/go/code'
		},
		{
			title: 'Node_Work',
			date: '2020-08-18',
			type: 3,
			img: 'https://s2.ax1x.com/2019/11/09/Me2v26.jpg',
			text: '介绍 Node 工作中经验',
			href: 'article/js/node/work_node'
		},
		{
			title: 'MongoDB',
			date: '2020-05-22',
			type: 6,
			img: 'https://s2.ax1x.com/2019/11/27/Qpea1s.png',
			text: 'MongoDB 初始',
			href: 'article/service/mongoDB/mongo'
		},
		{
			title: 'JSError',
			date: '2020-05-18',
			type: 3,
			img: 'https://s2.ax1x.com/2019/11/09/Me2v26.jpg',
			text: '介绍 JS 异常处理',
			href: 'article/js/JSError'
		},
		{
			title: 'Linux 配置',
			date: '2020-05-18',
			type: 7,
			img: 'https://s2.ax1x.com/2019/11/22/M7uSzQ.jpg',
			text: '介绍 Linux 各种配置文件',
			href: 'article/system/linux配置'
		},
		{
			title: 'Mac 进阶 IIS',
			date: '2020-02-12',
			type: 7,
			img: 'https://s2.ax1x.com/2020/02/12/1HfCnO.jpg',
			text: 'mac 上面部署 IIS 服务的替代品，mono、nginx',
			href: 'article/system/mono'
		},
		{
			title: '各个系统命令',
			date: '2020-01-17',
			type: 7,
			img: 'https://s2.ax1x.com/2019/11/22/M7uSzQ.jpg',
			text: '介绍各个系统通用方法的不同命令',
			href: 'article/system/各系统命令'
		},
		{
			title: '闲谈 Vue',
			date: '2019-12-12',
			type: 3,
			img: 'https://s2.ax1x.com/2019/11/09/Me2v26.jpg',
			text: '进阶 Vue',
			href: 'article/js/闲谈Vue'
		},
		{
			title: 'Git',
			date: '2019-12-10',
			type: 7,
			img: 'https://s2.ax1x.com/2020/02/12/1HWr1P.png',
			text: 'git 常用配置以及命令',
			href: 'article/git/20191017'
		},
		{
			title: 'Linux install mysql',
			date: '2019-11-26',
			type: 6,
			img: 'https://s2.ax1x.com/2019/11/27/Qpea1s.png',
			text: '介绍 Linux 系统安装 mysql',
			href: 'article/service/mysql/linuxInstallMysql'
		},
		{
			title: '良言',
			date: '2019-11-26',
			type: 1,
			img: 'https://s2.ax1x.com/2019/11/09/MecDit.jpg',
			text: '汇总一些良言精句',
			href: 'article/life/perfect'
		},
		{
			title: 'Linux 基础',
			date: '2019-11-22',
			type: 7,
			img: 'https://s2.ax1x.com/2019/11/22/M7uSzQ.jpg',
			text: 'Linux 基础',
			href: 'article/system/Linux命令'
		},
		{
			title: 'Nginx 配置 Https',
			date: '2019-11-21',
			type: 6,
			img: 'https://s2.ax1x.com/2019/11/18/M6s9Xj.jpg',
			text: 'Nginx 配置 Https',
			href: 'article/service/nginx/nginx_https'
		},
		{
			title: 'Nginx 基础',
			date: '2019-11-18',
			type: 6,
			img: 'https://s2.ax1x.com/2019/11/18/M6s9Xj.jpg',
			text: '介绍 Nginx 基础篇',
			href: 'article/service/nginx/nginx基础'
		},
		{
			title: '浏览器工作流程',
			date: '2019-11-13',
			type: 3,
			img: 'https://s2.ax1x.com/2019/11/09/Me2v26.jpg',
			text: '介绍浏览器发送一个请求的整个流程',
			href: 'article/js/浏览器工作流程'
		},
		{
			title: '识别 Array',
			date: '2019-11-13',
			type: 3,
			img: 'https://s2.ax1x.com/2019/11/09/Me2v26.jpg',
			text: '识别是否为 Array 的几种方法',
			href: 'article/js/Array/识别Array'
		},
		{
			title: '闲谈 Http',
			date: '2019-11-09',
			type: 3,
			img: 'https://s2.ax1x.com/2019/11/09/Me2v26.jpg',
			text: '主要介绍 Http 基础内容',
			href: 'article/js/闲谈Http'
		},
		{
			title: '江雪',
			date: '2019-11-09',
			type: 1,
			img: 'https://s2.ax1x.com/2019/11/09/MecDit.jpg',
			text: '千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。',
			href: 'article/life/jiangxue'
		},
		{
			title: '闲谈 Cookie',
			date: '2019-11-08',
			type: 3,
			img: 'https://s2.ax1x.com/2019/11/09/Me2v26.jpg',
			text: '主要介绍 Cookie 基础内容',
			href: 'article/js/闲谈Cookie'
		},
		{
			title: '进阶 Vim',
			date: '2019-11-07',
			type: 7,
			img: 'https://s2.ax1x.com/2019/11/09/Megtf0.jpg',
			text: '进阶 Vim',
			href: 'article/tool/vim/'
		},
		{
			title: '谈谈如何解脱劳动力',
			date: '2019-11-07',
			type: 1,
			img: 'https://s2.ax1x.com/2019/11/09/MegI7d.jpg',
			text: '猜猜是什么内容，也许将来你的工作就是这个走向',
			href: 'article/life/draw/index.html'
		},
		{
			title: 'Js 基础篇',
			date: '2019-11-07',
			type: 3,
			img: 'https://s2.ax1x.com/2019/11/09/Me2v26.jpg',
			text: '主要介绍 Js 基础内容',
			href: 'article/js/Js基础篇'
		},
		{
			title: '闲谈 Promise',
			date: '2019-11-07',
			type: 3,
			img: 'https://s2.ax1x.com/2019/11/09/Me2v26.jpg',
			text: '主要介绍 Promise 基础内容',
			href: 'article/js/闲谈Promise'
		},
		{
			title: '闲谈 Async',
			date: '2019-11-07',
			type: 3,
			img: 'https://s2.ax1x.com/2019/11/09/Me2v26.jpg',
			text: '主要介绍 Async 基础内容',
			href: 'article/js/闲谈Async'
		},
		{
			title: '闲谈 Generator',
			date: '2019-11-07',
			type: 3,
			img: 'https://s2.ax1x.com/2019/11/09/Me2v26.jpg',
			text: '主要介绍 Generator 基础内容',
			href: 'article/js/闲谈Generator'
		}
	]
}
