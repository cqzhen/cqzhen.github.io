(function(){
	const blogData = [
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
			href: 'article/js/Js基础篇.md'
		},
		{
			title: '闲谈 Promise',
			date: '2019-11-07',
			type: 3,
			img: 'https://s2.ax1x.com/2019/11/09/Me2v26.jpg',
			text: '主要介绍 Promise 基础内容',
			href: 'article/js/闲谈Promise.md'
		},
		{
			title: '闲谈 Async',
			date: '2019-11-07',
			type: 3,
			img: 'https://s2.ax1x.com/2019/11/09/Me2v26.jpg',
			text: '主要介绍 Async 基础内容',
			href: 'article/js/闲谈Async.md'
		},
		{
			title: '闲谈 Generator',
			date: '2019-11-07',
			type: 3,
			img: 'https://s2.ax1x.com/2019/11/09/Me2v26.jpg',
			text: '主要介绍 Generator 基础内容',
			href: 'article/js/闲谈Generator.md'
		}
	];

	const blogType = {
		All: 0,
		Life: 1,
		Book: 2,
		JS: 3,
		HTML: 4,
		CSS: 5,
		Server: 6,
		System: 7
	};

	function getType() {
		let types = Object.keys(blogType);
		return types;
	}

	function renderType(cur = 'All') {
		let types = getType();
		let text = '',
				typeContainer = document.getElementsByClassName('blogType')[0];
		for (let i = 0; i < types.length; i++) {
			if (types[i] == cur) {
				text += '<label style="background:#007a80" type=' + types[i] + '>' + types[i] + '</label>';
			} else {
				text += '<label type=' + types[i] + '>' + types[i] + '</label>';
			}
		}
		typeContainer.innerHTML = text;
	}

	function updateType(target) {
		document.querySelectorAll('.blogType label').forEach(item => item.style.background = '#daebec');
		target.style.background = '#007a80';
	}

	function getBlog(type = 'All') {
		type = blogType[type];

		if (!type) return blogData;

		return blogData.filter(item => item.type === type);
	}

	function renderBlog(type) {
		let blogs = getBlog(type);
		let text = '',
				blogContainer = document.getElementsByClassName('blogContext')[0];
		for (let i = 0; i < blogs.length; i++) {
			text += '<div><a href="' + blogs[i].href + '"><h3>' + blogs[i].title + '</h3><span>' + blogs[i].date + '</span><div><img src="' +blogs[i].img + '"></img><span>' + blogs[i].text + '</span></div></a></div>';
		}

		if (!blogs.length) text = '<p style="text-align:center">抱歉，暂无 ' + type + ' 相关内容。</p>';

		blogContainer.innerHTML = text;
	}

	function addEvent() {
		let typeContainer = document.getElementsByClassName('blogType')[0];
		typeContainer.onclick = function(event) {
			let target = event.target;
			switch(target.tagName) {
				case 'LABEL':
					renderBlog(target.attributes.type.value);
					updateType(target);
					break;
				default:
					console.log('haha');
					break;
			}
		}
	}

	function init() {
		renderType('All');
		renderBlog('All');
		addEvent();
	}

	init();

}())
