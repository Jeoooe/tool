var txt = '';   //小说
var curChapter = 0; //章节数 - 1
var books = [];
var GoToLock = false;    //进程锁
var curBook = '';	 //当前书目
var projects = {};
//数组除空
var RmvEmp = (arr) => {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] == undefined) {
			arr.splice(i,1);
			i = i - 1;
		}
    }
	return arr;
}

//LOADING界面
function ShowLoad() {
    for(let key in projects) {
        projects[key].hide();
    }
    if (projects.hasOwnProperty('LOADING'))
        projects.LOADING.show();
}

//切换别的界面
function HideLoad(element) {
    for(let key in projects) {
        projects[key].hide();
    }
    element.show();
}


//分割章节
function Split(str) {
    let tmp = str.split(/\s第.*?[章话卷][\s：]/);	//分章
    //while !(tmp[0]) tmp.shift();
	tmp = RmvEmp(tmp);
    return tmp;
}

//设置文本
function SetTxt(str) {
    if (typeof str == 'string') {
		txt = str;
		txt = Split(txt);	//分割
	}
}

//阅读页面初始化
function BookReadInit() {
    for (let i = 1;i <= txt.length;i++) {
        txt[i - 1] = `第${i}章` + txt[i - 1];
    }
    $('[name=cptsum]').text(`共${txt.length}章`);
    GoToChapter(0);
	HideLoad(projects.BOOKREAD);
};

//跳转按钮 onclick
function UpdateChapter() {
    let value = $('[name=cptind]').val();
    value = parseInt(value) - 1;
    //alert(value);
    GoToChapter(value);
}

//跳转章节
function GoToChapter(index) {
    if (index < 0 || index > txt.length) return 1;
    if (txt[index]) {
        $('#content').html('Loading');  //先变成loading防止误会
        $('#content').html(txt[index].split('\n').join('<br>'));
        curChapter = index; //更新当前章节数
        return 1;
    }
    else return 0;
}

//上一章
function BackChapter() {
    if (GoToChapter(curChapter - 1) == 0) BackChapter();
}

//下一章
function NextChapter() {
    if (GoToChapter(curChapter + 1) == 0) NextChapter();
}

//Get请求
function Get(urlName,func) {
    //使用资源仓库
    $.get(`https://raw.githubusercontent.com/jeoooe/tool/main/Books/shelter/${urlName}`,func);
}

//书本跳转
function GoToBook(bookname) {
    if (GoToLock) return;   //防止多次加载
	GoToLock = true;    //锁
    ShowLoad(); //LOADING
	if (curBook !== bookname) {	//不重复进入
		curBook = bookname;
        urlname = bookname + '.txt';
		//请求小说
        Get(urlname,(data) => {
            if (data) {
                SetTxt(data);
                BookReadInit();
                GoToLock = false;   //开锁
            }
        })
	}
	
	//重复进入同一本书
    else {  
		BookReadInit();
        GoToLock = false;   //开锁
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
    HideLoad(projects.BOOKLIST);
}

//书架初始化
function ShelterInit() {
    ShowLoad();
    //已加载的情况
    if (books.length !== 0) {
        HideLoad(projects.BOOKLIST);
    }
    //未加载
    else Get('BookList.json',UpdateList);
}

//返回目录
function BackToList() {
    //txt = ''; 
    ShowLoad();
    ShelterInit();
}
