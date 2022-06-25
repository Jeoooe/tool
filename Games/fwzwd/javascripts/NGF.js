$(function() {
    console.log('NGF loading...');
    var table = $('#options>table>tbody>tr:nth-child(7)');
    var cheatOpen = false;
    var lowInfinityAutoPlay = false;
    var autoPlayID = 0;

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


    /*
     *  更改存档读取为非弹窗读取
     */
    (function() {
        //增加存档读取栏   
        let inputBox = $('<td><div><input type="text" id="saveinputbox"></div></td>');
        table.append(inputBox);
        
    })();


    


    //加载成功
    console.log('NGF load successfully');
})
