var txt = '';   //小说
var curChapter = 0;
var books = [];
var GoToLock = false;    //进程锁

function Split(str) {
    let tmp = str.split(/第.*?章/)
    tmp.shift()
    return tmp;
}


function SetTxt(str) {
    if (typeof str == 'string') txt = str;
}

//页面初始化
function BookReadInit() {
    txt = Split(txt);
    for (let i = 1;i <= txt.length;i++) {
        txt[i - 1] = `第${i}章` + txt[i - 1];
    }
    $('[name=cptsum]').text(`共${txt.length}章`);
    GoToChapter(0);
}

//跳转按钮 onclick
function UpdateChapter() {
    let value = $('[name=cptind]').val();
    value = parseInt(value) - 1;
    //alert(value);
    curChapter = value;
    GoToChapter(value);
}

//跳转章节
function GoToChapter(index) {
    if (index < 0 || index > txt.length) return 1;
    if (txt[index]) {
        $('#content').html(txt[index].split('\n').join('<br>'));
        return 1;
    }
    else return 0;
}

//下一章
function NextChapter() {
    curChapter++;
    if (GoToChapter(curChapter) == 0) NextChapter();
}

//Get请求
function Get(urlName,func) {
    //使用资源仓库
    $.get(`https://raw.githubusercontent.com/jeoooe/tool/main/Books/shelter/${urlName}`,func);
}

//书本跳转
function GoToBook(bookname) {
    if (GoToLock) return;   //防止多次加载
    else {
        GoToLock = true;    //锁
        $('#booklist').hide();
        $('#loading').show();
        urlname = bookname + '.txt';
        Get(urlname,(data) => {
            if (data) {
                SetTxt(data);
                BookReadInit();
                $('#booklist').hide();
                $('#loading').hide();
                $('#bookread').show();
                GoToLock = false;   //开锁
            }
        })
    }
}

//书目更新(string, json)
function UpdateList(data) {
    if (typeof data == "string") data = JSON.parse(data);
    let form = $('form.list');
    books = data.list;
    books.forEach((element) => {
        btn = document.createElement('button');
        btn.type = "button"
        btn.name=element.urlname;
        btn.onclick = () => {GoToBook(element.urlname)};
        btn.innerText = element.name;
        form.append(btn);
        form.append("<br><br>")
    })
    $('#booklist').show();
    $('#loading').hide();
}

//书架初始化
function ShelterInit() {
    //已加载的情况
    if (books.length !== 0) {
        $('#loading').hide();
        $('#booklist').show();
    }
    //未加载
    else Get('BookList.json',UpdateList);
}

//返回目录
function BackToList() {
    txt = ''; 
    $('#bookread').hide();
    $('#loading').show();
    ShelterInit();
}