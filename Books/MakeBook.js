var txt = '未加载';
var curChapter = 0;

function Split(str) {
    tmp = str.split(/第.*?章/)
    tmp.shift()
    return tmp;
}


function SetTxt(str) {
    txt = str;
}

function SetPage() {
    let div = $('#txtsave')
    txt = div.html();
    div.hide();
    txt = Split(txt);
    for (let i = 1;i <= txt.length;i++) {
        txt[i - 1] = `第${i}章` + txt[i - 1];
    }
    $('[name=cptsum]').text(`共${txt.length}章`);
    GoToChapter(0);
}

function GoTo() {
    let value = $('[name=cptind]').val();
    value = parseInt(value) - 1;
    //alert(value);
    GoToChapter(value);
}

function GoToChapter(index) {
    if (index < 0 || index > txt.length) return;
    $('#content').html(txt[index].split('\n').join('<br>'));
}

function NextChapter() {
    curChapter++;
    GoToChapter(curChapter);
}