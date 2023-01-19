//UI
//主界面
var main = document.getElementById('maincont');
var inputCont = document.getElementById('inputcont');
var text = document.getElementById('resultcont');

//逻辑
const basic = ['kg', 's', 'm', 'A', 'mol', 'K', 'cd'];
const voidBtn = '<p class="largename">N/A</p><p class="midname">N/A</p>'; //空按钮内容
var units = {};
var inputBtns = {}; //输入按钮
var glyph1Btn = document.getElementById('gly1');   //符号1
var glyph2Btn = document.getElementById('gly2');   //符号2
var operatorBtn = document.getElementById('operator');  //运算符
var ansBtn = document.getElementById('glyans');//答案
var curOperator = '*';    //当前运算符
var curGlyph = ['/','/'];
var curAns = '/';

//输出
function outp(str) {
    if (typeof str === 'object') {
        for (let i in str) {
            text.innerText += i + ':';
            outp(str[i])
        }
    }
    text.innerText += str + '\n';
}

//读档
function LoadFile() {
    let json = localStorage.getItem('savefile');
    //空
    if (! json) {
        return {};
    }
    else {
        return JSON.parse(json);
    }
}

//存档
function SaveFile() {
    let json = {};
    for (let i in inputBtns) {
        json[i] = inputBtns[i].state;
    }
    localStorage.setItem('savefile',JSON.stringify(json));
}

//算式单项提取
function formtounit(str) {
    let form = str.split(' ')
    let out = {};
    for (let i in basic) {
        out[basic[i]] = 0
    }


    if (str) {
        for (let i in form) {
            let num;
            if (form[i].search(/\d/) < 0) num = 1; //1次
            else num = parseInt(form[i].match(/-?\d+/)[0]); //高次
            let u = [form[i].match(/[A-Za-z]+/)[0], num]; //物理量
            out[u[0]] = u[1]
        }
    }

    return out
}

//乘法
//a,b: units
function multiple(a, b) {
    let c = {}
    for (let i in basic) {
        let n = basic[i]
        c[n] = a[n] + b[n]
    }
    return c
}

//除法
//a,b: units
function divide(a, b) {
    let c = {}
    for (let i in basic) {
        let n = basic[i]
        c[n] = a[n] - b[n]
    }
    return c
}

//两式相等
//a,b:units
function equal(a, b) {
    let flag = true
    for (let i in basic) {
        if (a[basic[i]] !== b[basic[i]]) {
            flag = false;
            break;
        }
    }
    return flag
}

//算式结果
function result(str) {
    let unit = [],
        glyph = [];
    let tmp = '';
    let a;
    for (let i in str) {
        if (str[i] === '*') {
            if (!units[tmp]) return 'None'
            unit.push(units[tmp][2]);
            glyph.push(1)
            tmp = '';
        } else if (str[i] === '/') {
            if (!units[tmp]) return 'None'
            unit.push(units[tmp][2]);
            glyph.push(2)
            tmp = '';
        } else {
            tmp += str[i]
        }
    }
    if (!units[tmp]) return 'None'
    unit.push(units[tmp][2]);

    //没有运算符
    if (glyph.length == 0) {
        if (!units[str]) return 'None';
        else return unit[0];
    }

    //有运算符
    a = unit[0]
    for (let i = 1; i < unit.length; i++) {
        let g = glyph[i - 1];
        if (g == 1) a = multiple(a, unit[i]);
        else a = divide(a, unit[i]);
    }
    return a;
}

//单位输出
function answer(str) {
    let res = result(str)
    //相等
    for (let i in units)
        if (equal(res, units[i][2])) return i;
    return 'None';
}

//单位初始化处理
async function UnitsInit() {
    let utils = GetUnits();
    
    for (let i in utils) {
        let u = utils[i][3];
        let t;
        //定义式
        if (u.search(/\*/) > 0 || u.search('/') > 0) t = result(u);
        //基本表达式
        else t = formtounit(u);
        units[utils[i][0]] = [utils[i][1], utils[i][2], t]
    }

}

/*
 *      按钮
 *
 */
//按钮事件
//运算符按钮
function OperatorBtnClick() {
    //乘法
    if (curOperator === '*')  { 
        curOperator = '/';
        operatorBtn.innerHTML = '<p class="largename">÷</p><p class="midname">÷</p>';
    }
    //除法
    else {
        curOperator = '*';
        operatorBtn.innerHTML = '<p class="largename">X</p><p class="midname">X</p>';
    }
    //输出答案
    if (curGlyph[0] !== '/' && curGlyph[1] !== '/') {
        let ans = answer(curGlyph[0] + curOperator + curGlyph[1]);
        AnswerOutoBtn(ans);
    }
}

//符号按钮
function GlyphBtnClick(type) {
    return function() {
        curGlyph[type] = '/';
        if (type === 0) glyph1Btn.innerHTML = voidBtn;
        else glyph2Btn.innerHTML = voidBtn;
    }
}

//输入按钮
function InputBtnClick(index) {
    return function(){
        if (! inputBtns[index].state) return;
        else {
            let isPress = false;
            if (curGlyph[0] === '/') {
                curGlyph[0] = index;
                glyph1Btn.innerHTML = inputBtns[index].btn.innerHTML;
                isPress = true;
            }
            else if (curGlyph[1] === '/') {
                curGlyph[1] = index;
                glyph2Btn.innerHTML = inputBtns[index].btn.innerHTML;
                isPress = true;
            }

            //算式满 输出结果
            if (isPress && curGlyph[0] !== '/' && curGlyph[1] !== '/') {
                let ans = answer(curGlyph[0] + curOperator + curGlyph[1]);
                AnswerOutoBtn(ans);
            }
        }
    }
}

//输出到结果按钮
function AnswerOutoBtn(ans) {
    if (ans === 'None') {
        ansBtn.innerHTML = voidBtn;
        curAns = 'None'
        ansBtn.disabled = '1'
    }
    else {
        ansBtn.innerHTML = inputBtns[ans].inner;    //输出答案
        curAns = ans;
        if (inputBtns[ans].state) {
            ansBtn.disabled = '1';
        }
        else {
            ansBtn.disabled = '';
        }
    }
}

//结果按钮
function AnswerBtnClick () {
    if (curAns !== 'None') {
        //解锁新单位
        let unlock = inputBtns[curAns];
        unlock.btn.innerHTML = unlock.inner;
        unlock.btn.disabled = '';
        unlock.state = true;
        ansBtn.disabled = '1';
    }
}

//所有按钮初始化
function InitAllInputBtns() {
    let saveFile = LoadFile();
    for (let index in units) {
        let btn = document.createElement('button');

        let kv = {};
        btn.className = 'glyph';
        btn.innerHTML = `<p class="largename">${units[index][1]}</p><p class="midname">${units[index][0]}</p>`
        btn.onclick = InputBtnClick(index);

        //按钮控件、状态、内部文字
        kv = {
            btn:btn, 
            state: true, 
            inner:btn.innerHTML
        };

        //非基本量禁用
        if (! (index === '1' || basic.includes(units[index][1]))) {
            //没有存档
            if (! saveFile[index]) {
                btn.disabled = '1'; //禁用
                btn.innerHTML = voidBtn;
                kv.state = false;
            }
        }
        
        inputBtns[index] = kv;      //按钮控件 , state
        inputCont.appendChild(btn);
    }
    operatorBtn.onclick = OperatorBtnClick; //运算符按钮事件
    glyph1Btn.onclick = GlyphBtnClick(0);
    glyph2Btn.onclick = GlyphBtnClick(1);
    ansBtn.onclick = AnswerBtnClick;
    document.getElementById('save').onclick = SaveFile;
    document.getElementById('delete').onclick = ()=> {localStorage.removeItem('savefile');};
}


UnitsInit();
InitAllInputBtns();