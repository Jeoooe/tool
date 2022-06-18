var ShowAttr = {
	//闭包，没什么意义
	/*
	RefreshAttr : function (player) {
		//顺便初始化
		let attrWindow = $("attributespad");
		//遍历属性
		for (let key in player.attr) {
			let newP = $(`<p class="attrshow" tag="${key}"> ${key} : ${player.attr[key].value} </p>`);
			attrWindow.append(newP);
		}
		
		//刷新函数
		return function (player) {
			for (let key in player.attr) {
				//XXX 可能有误
				let Ps = $(`p[@class="attrshow" @tag=${key}]`);
				Ps.text(`${key} : ${player.attr[key].value}`);
			}
		}
	}()
	*/
}