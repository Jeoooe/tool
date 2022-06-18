var api = {
	/**
	 *@param str{String}
	 */
	output: function(str) {
		let msgWindow = $("#msgwindow");
		if (typeof str === 'string')
			msgWindow.text(`${msgWindow.text()}\n{str}`);
	},
	/**
	 *@param msgType{String}
	 *@param str{String}
	 */
	output: function(msgType, str) {
		if (msgType === 'system') {
			output(`<SYSTEM>${str}`);
		}
		else {
			output(str);
		}
	},

	/**
	 * 
	 * @returns {Number} 时间戳
	 */
	CurTick : function() {
		return new Date().getTime();
	},

	/**
	 * 
	 * @param n{Number} 最小 
	 * @param m{Number} 最大
	 * @returns [n,m) 随机数向下取整
	 */
	Rand : function(n,m) {
		return Math.floor((Math.random() * (m - n) + n));
	},

	/**
	 * 
	 * @param obj{*} 对象
	 * @returns 深复制的对象
	 */
	ObjCopy : function(obj) {
		return JSON.parse(JSON.stringify(obj));
	},

	/**
	 * 隐藏所有body>div元素
	 */
	HideSelsDIV : function() {
		let worldSelDIV = $('#worldsel>div');	//世界选项卡下所有板块
		for (let i = 0;i < worldSelDIV.length;i++) {
			$(worldSelDIV[i]).hide();	//转为jQ对象再隐藏
		}
	},

	/**
	 * 显示元素div#id
	 * @param {String} id 元素的id
	 */
	ShowSelDIV : function(id) {
		let sel = $(`#${id}`);
		if (sel.length > 0) {	//判断是否存在
			sel.show();
		}
	}
}

