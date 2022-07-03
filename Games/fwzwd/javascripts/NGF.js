$(function() {
    console.log('NGF loading...');
    var table = $('#options>table>tbody>tr:nth-child(7)');
    var cheatOpen = false;
    var lowInfinityAutoPlay = false;
    var autoPlayID = 0;
	
	//NGF 窗口
	var NGFWnd = $('<div id=ngfwnd> </div>');
	$('body').append(NGFWnd);

    /**
     * 获取哈希值
     * @param {String} str 输入字符串 
     * @returns 字符串哈希值
     */
    function hashcode(str) {
        var hash = 0, i, chr, len;
        if (str.length === 0) return hash;
        for (i = 0, len = str.length; i < len; i++) {
         chr  = str.charCodeAt(i);
         hash = ((hash << 5) - hash) + chr;
         hash |= 0; // Convert to 32bit integer
        }
        return hash;
       }


    /*
     *  前期自动化
     */
    try {
    (function() {
        let cheatBtn = $('<td><div><button id="cheatbtn" class="storebtn" style="width: 200px; height: 55px; font-size:160%;">CHEAT</button></div></td>');
        cheatBtn.click(function() {
            let cmd = $('#saveinputbox').val();
            //指令
            if (cmd[0] === '-') {
                //-login开头
                if (/^-login/.test(cmd)) {
                    let pwd = cmd.match(/[0-9]+/)[0];   //获取密码值
                    //计算哈希值
                    if (hashcode(pwd) === -1810179915) {
                        cheatOpen = true;
                        console.log('Login Successfully');
                    }
                    else {
                        console.log("Fail to login");
                    }
                }

                //前期无限自动
                else if (cmd === '-cheatliap' && cheatOpen) {
                    if (! lowInfinityAutoPlay) {
                        autoPlayID = setInterval(function() {
                            $('#maxall').click();
                            $('#secondSoftReset').click();
                            $('#softReset').click();
                        },200);
                        lowInfinityAutoPlay = true;
                        console.log('LowInfinityAutoPlay begins!');
                    }
                }

                //清楚自动
                else if (cmd === '-cheatcls' && cheatOpen) {
                    if (lowInfinityAutoPlay) {
                        clearInterval(autoPlayID);
                        lowInfinityAutoPlay = false;
                        console.log('LowInfinityAutoPlay stops.');
                    }
                }
                
            }
            $('#saveinputbox').val('');
        })
        
        table.append(cheatBtn);
    })();
    }
    catch (e) {
        console.log('前期自动化 失败');
    }


    /*
     *  更改存档读取为非弹窗读取
     */
    try {
    (function() {
        //增加存档读取栏   
        let inputBox = $('<td><div><input type="text" id="saveinputbox"></div></td>');
        table.append(inputBox);
        
    })();
    }
    catch (e) {
        console.log('存档读取 失败');
    }


    /*
     *  代码行
     */
    try{
    (function() {
        let wnd = $('<div id="cmdwnd"></div>');
        let wbtn = $('<button id="wbtn">CMD</button>');
        let inputBox = $('<input type="text" id="cmdinput">');
        let outputBox = $('<textarea id="cmdoutput" rows="5" cols="40" class="ngfcmd"> </textarea>');
        let dobtn = $('<button id="docmd" class="ngfcmd" >DO</button>');

        let isCMD = false;

        inputBox.hide();
        outputBox.hide();
        dobtn.hide();

        
        wbtn.click(function() {
            if (isCMD) {
                inputBox.hide();
                outputBox.hide();
                dobtn.hide();
            }
            else {
                inputBox.show();
                outputBox.show();
                dobtn.show();
            }
            isCMD = ! isCMD;
        })
        
        //运行
        dobtn.click(function() {
            let cmd = inputBox.val();
            try {
                let out = eval(cmd);
                outputBox.text(`${outputBox.text()}\n${out}`);
            }
            catch (err) {
                outputBox.text(`${outputBox.text()}\n${err}`);
            }
            finally {
                inputBox.val('');
            }
        })


        wnd.append(dobtn);
        wnd.append($('<br>'));
        wnd.append(inputBox);
        wnd.append($('<br>'));
        wnd.append(outputBox);
        wnd.append($('<br>'));
        wnd.append(wbtn);



        NGFWnd.append(wnd);
    })();
    }
    catch(e) {
        console.log('代码 失败');
		console.log(e);
    }
	
	
	/*
	 *攻略	
	 */
	try {
	(function() {
		let div = $('<div id="strategywnd"></div>')
		let btn = $('<button id="strategyload">攻略(未加载)</button>');
		let txt = $('<p id="strategytxt" style="display:none;"></p>');
		let isLoad = false;
		let isStrateging = false;
		
		div.append(btn);
		div.append(txt);
		
		NGFWnd.append(div);
		
        //获得攻略文本
		function GetStrategy() {
			$.get('Strategy.txt',(data) => {
				if (! isLoad) {
					isLoad = true;
					txt.text(data);
					$('button#strategyload').text('攻略');
				}
			});
		}
		
		
		btn.click(function() {
			if (! isLoad) {
				GetStrategy();
			}
			else {
				if (! isStrateging) {
					let body = $('body').children();
					for (let i in body) {
						body[i].style.display = 'none';
					}
					$('#NGFwnd').show();
					$('#strategytxt').show();
					isStrateging =  true;
				}
				else {
					$('#strategytxt').hide();
					let body = $('body').children();
					for (let i in body) {
						body[i].style.display = 'block';
					}
					isStrateging = false;
				}
			}
		});
		
	})();
	}
	catch (e) {
		console.log('攻略 失败');
	}


    //加载成功
    console.log('NGF load successfully');
});
