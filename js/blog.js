(function(){
	const blogData = [
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
		Life: 1,
		Book: 2,
		JS: 3,
		HTML: 4,
		CSS: 5,
		Server: 6
	};

	function getType() {
		let types = Object.keys(blogType);
		return types;
	}

	function renderType() {
		let types = getType();
		let text = '',
				typeContainer = document.getElementsByClassName('blogType')[0];
		for (let i = 0; i < types.length; i++) {
			text += '<label type=' + types[i] + '>' + types[i] + '</label>';
		}
		typeContainer.innerHTML = text;
	}

	function getBlog() {
		return blogData;
	}

	function renderBlog() {
		let blogs = getBlog();
		let text = '',
				blogContainer = document.getElementsByClassName('blogContext')[0];
		for (let i = 0; i < blogs.length; i++) {
			text += '<div><a href="' + blogs[i].href + '"><h3>' + blogs[i].title + '</h3><span>' + blogs[i].date + '</span><div><img src="' +blogs[i].img + '"></img><span>' + blogs[i].text + '</span></div></a></div>';
		}

		blogContainer.innerHTML = text;
	}

	function init() {
		renderType();
		renderBlog();
	}

	init();

}())
