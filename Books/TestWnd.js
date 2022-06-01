var TESTBOXES = undefined;
var runBtn = undefined;
var inputBox = undefined;
var outputBox = undefined;
var IS_ON = false;
var is_first = true;    //第一行代码(感官优化)

//历史记录功能
var histories = [];
var curStep = 0;    //当前所在步数
var curCmd = '';

//指令列表
/*
模板
    '-':{
        'func':() => {

        },
        'description':''
    }
*/
var CMD_LIST = {
    '-help': {
        'func':() => {
            for (let key in CMD_LIST) {
                output(`${key} : ${CMD_LIST[key].description}`);
            }
        },
        'description': '输出所有指令'
    },
    '-showhtml':{
        'func':() => {
            let html = $('html').html();
            html = html.replace(/</g,'&lt;');
            html = html.replace(/>/g,'&gt;');
            output(html);
        },
        'description':'输出整个html'
    },
    '-cls':{
        'func':() => {
            outputBox.html('>');
        },
        'description':'清空outputBox'
    }
}

var TESTBOXES_INIT = () => {
    TESTBOXES = $('div.testboxes');
    runBtn = $('button.run');
    inputBox = $('textarea.inputbox');
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

//获得输入框内容
var GetInput = () => {
    return inputBox.val();
}

//设置输入框内容
var SetInput = (str) => {
    if (typeof str === 'string') inputBox.val(str);
}

//清除输入框
var ClsInput = () => {
    SetInput('');
}


//从outputBox输出
function output(out) {
    if (is_first) {
        outputBox.html(`>${out}\n`);
        is_first = false;
    }
    else outputBox.html(`${outputBox.html()}>${out}\n`);
}

//指令记录
function RecordHistory(cmd) {
    histories.push(cmd);
    curStep = histories.length;
}

//上一步历史记录
function BackStep() {
    if (curStep === 0) return;  //最前面一个不退
    if (curStep === histories.length) {
        curCmd = GetInput();
    }
    curStep --;
    SetInput(histories[curStep]);
}

//下一步历史记录
function NextStep() {
    if (curStep === histories.length) return;
    curStep ++;
    if (curStep === histories.length) {
        SetInput(curCmd);
    }
    else {
        SetInput(histories[curStep]);
    }
}



//运行代码
/*
 *      1. 输入代码执行
 *      2. 简便指令, '-'开头,详见指令列表
 *
*/
function RunAct() {
    let cmd = GetInput();
    if (typeof cmd !== 'string') return;    //非字符串
    try {
        //判断是否是指令输入
        if (cmd[0] === '-') {
            if (cmd in CMD_LIST) {
                CMD_LIST[cmd].func();
            }
            else output('指令错误(-help获得指令列表)');
        }
        else {
            let out = eval(cmd);
            output(out);    
        }
    }
    catch (err) {
        output(err);
    }
    finally {
        ClsInput();
        RecordHistory(cmd); //记录
    }
}            