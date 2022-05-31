var TESTBOXES = undefined;
var runBtn = undefined;
var inputBox = undefined;
var outputBox = undefined;
var IS_ON = false;
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

//运行代码
let is_first = true;
function RunAct() {
    try {
        let cmd = inputBox.val();
        let out = eval(cmd);
        if (is_first) {
            outputBox.html(`>${out}`);
            is_first = false;
        }
        else outputBox.html(`${outputBox.html()}\n>${out}`);
    }
    catch (e) {
        if (is_first) {
            outputBox.html(`>${e}`);
            is_first = false;
        }
        else outputBox.html(`${outputBox.html()}\n>${e}`);
    }
    finally {
        inputBox.val('');//设为空值
    }
}