(function(blogObj){
	let blogType = 	blogObj.blogType;
  let blogData = blogObj.blogData;

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

}(window.blogObj))
