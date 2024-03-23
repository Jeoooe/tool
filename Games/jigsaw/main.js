//？
global = {
    pics: [],
    isGame: false,
    empty:null
};

//创建拼图
function createJigsaw() {
    var rand=(min,max) => parseInt((Math.random() * (max-min)) + min);
    var image=rand(1,4);
    global.image = image;
    // 先将16个小div存在DocumentFragment, 页面只需渲染一次, 提高性能
    var frag = document.createDocumentFragment();
    for (var i = 1; i <= 4; ++i) {
        for (var j = 1; j <= 4; ++j) {
            if (i == 4 && j == 4) {
                var empty = document.createElement("div");
                empty.setAttribute('id', 'empty');
                empty.setAttribute('class', 'row4 col4');
                //empty.style.backgroundImage=`url(image/${image}.jpg)`
                frag.appendChild(empty);
                global.empty = empty;
                break;
            }
            var pic = document.createElement("div");
            pic.setAttribute("id", "pic" + ((i - 1) * 4 + j));
            pic.setAttribute("class", "row" + i + " col" + j);
            pic.style.backgroundImage=`url(image/${image}.jpg)`
            frag.appendChild(pic);
            global.pics.push(pic);
        }
    }
    document.getElementById("fifteen").appendChild(frag);
}

// 初始化图片位置, 3 种不同难度
function initPos(difficulty) {
    var arr = [];
    if (difficulty == 1)
        arr = [10, 11, 14];
    else if (difficulty == 2)
        arr = [5, 6, 7, 9, 10, 11, 13, 14];
    else arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    // 随机打乱数组
    arr.sort(function () {
        return Math.random() - 0.5;
    });

    // 每次交换3张图片的位置, 最后的拼图一定是可还原的
    // 难度越大, 交换的图片数越多
    for (i = 0; i < difficulty * 3; i += 3) {
        var temp = global.pics[arr[i]].className;
        global.pics[arr[i]].className = global.pics[arr[i + 1]].className;
        global.pics[arr[i + 1]].className = global.pics[arr[i + 2]].className;
        global.pics[arr[i + 2]].className = temp;
    }
}

//游戏结束
function success() {
    global.empty.id='pic16';
    global.empty.style.backgroundImage=`url(image/${global.image}.jpg)`
}

//判断坐标是否合法
function isValid(a, b) {
    a = a.map((a) => parseInt(a));
    b = b.map((a) => parseInt(a));
    return (Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])) === 1;
}

//判断游戏是否完成
function isDone() {
    var isComplete = (i, a) => (parseInt(a[0]) === (parseInt(i / 4) + 1) && parseInt(a[1]) === ((i % 4) + 1));
    for (let i in global.pics) {
        if (!isComplete(i, global.pics[i].className.match(/[0-9]/g))) {
            return false;
        }
    }
    return true;
}

//拼图点击事件
function puzzleClick() {
    if (!global.isGame) return;
    var clickPos = this.className.match(/[0-9]/g); // 被点击的图片坐标
    var emptyPos = global.empty.className.match(/[0-9]/g); // 空白格的坐标
    // 如果点击图片的坐标合法, 与空白格相邻，和空白格交换
    if (isValid(clickPos, emptyPos)) {
        var temp = this.className;
        this.className = global.empty.className;
        global.empty.className = temp;
        // 判断是否完成拼图
        if (isDone())
            success();
    }
}

//开始游戏
function gameStart(difficulty) {
    createJigsaw();
    initPos(difficulty);
    for (let e of global.pics) {
        e.onclick = puzzleClick;
    }
    global.isGame = true;
    document.getElementById('menu').style.display='none';
    document.getElementById('gamepad').style.display='';
}

