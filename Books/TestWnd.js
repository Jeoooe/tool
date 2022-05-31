var TESTBOXES = undefined;
var runBtn = undefined;
var inputBox = undefined;
var outputBox = undefined;
var IS_ON = false;
var is_first = true;    //第一行代码(感官优化)
var TESTBOXES_INIT = () => {
    TESTBOXES = $('div.testboxes');
    runBtn = $('button.run');
    inputBox = $('input.inputbox');
    outputBox = $('textarea.outputbox');
    TESTBOXES.hide();
}
var TESTBOXESSWITCH = () => {
    if (IS_ON) {
        TESTBOXES.hide();
        IS_ON = false;
    }
    else {
        TESTBOXES.show();
        IS_ON = true;
    }
}
//从outputBox输出
function output(out) {
    inputBox.val('');   //清空输入框
    if (is_first) {
        outputBox.html(`>${out}\n`);
        is_first = false;
    }
    else outputBox.html(`${outputBox.html()}>${out}\n`);
}

//指令列表
var CMD_LIST = {
    '-help': {
        'func':()=>{
            for (let key in CMD_LIST) {
                output(`${key} : ${CMD_LIST[key].description}`);
            }
        },
        'description': '输出所有指令'
    },
    '-showhtml':{
        'func':() =>{
            let html = $('html').html();
            html = html.replace(/</g,'&lt;');
            html = html.replace(/>/g,'&gt;');
            output(html);
        },
        'description':'输出整个html'
    }
}


//运行代码
/*
 *      1. 输入代码执行
 *      2. 简便指令, '-'开头,详见指令列表
 *
*/
function RunAct() {
    let cmd = inputBox.val();
    //判断是否是指令输入
    if (cmd[0] === '-') {
        if (cmd in CMD_LIST) {
            CMD_LIST[cmd].func();
        }
        else output('指令错误(-help获得指令列表)');
    }
    else {
        try {
            let out = eval(cmd);
            output(out);
        }
        catch (err) {
            output(err);
        }
    }
}