var WildArea = {
    //区域
    /*
     *
     *  野外区域在游戏窗口创建时产生
     *  需要判断此时状态是否在野外
     * 
     */
    /**
     * 
     * @param {Array} enemyTypes 怪物种类
     * @param {Array} enemyWeight 各怪物刷新权重
     */
    Area : function(enemyTypes,enemyWeight)  {

            this.enemyTypes = enemyTypes;       //怪物刷新列表
            this.enemies = [];          //已刷新怪物列表
            this.isFighting = false;    //是否正在战斗
            this.isInWild = false;
            this.areaElement = null;    //TODO
            this.EnemyUpdatingID = -1;  //刷新怪物函数的IntervaID
            this.lastUpdateTick = -1;         //上一次刷新的时间
            this.randDelay = Infinity; //随机间隔

            let MIN = 5000,MAX=15000;   //时间间隔上下限
            let MAXENEMY = 20;


            //怪物刷新加权
            enemyWeight.forEach((e,index) => {
                for(let i = 0;i < e - 1;i++) {
                    this.enemyTypes.push(enemyTypes[index]);
                }
            })


            //TODO 增加怪物按钮
            this.AddEnemyBtn = function(index) {
                let btn = $(`<button tag="${index}"> ${this.enemies[index].name} </button>`);
                this.areaElement.append(btn);
            };

            //TODO  增加怪物
            this.CreateEnemy = function() {
                let r = api.Rand(0,this.enemyTypes.length);      //随机怪物
                let obj = api.ObjCopy(this.enemyTypes[r]);       //复制怪物
                this.enemies.push(obj);                          //加入怪物列表
                this.AddEnemyBtn(this.enemies.length - 1);            //增加按钮
            };

            //怪物刷新
            //TODO
            this.EnemyUpdate = function() {
                if (this.isInWild && this.enemies.length < MAXENEMY) {  //地区限制与数量限制
                    let delay = api.CurTick() - this.lastUpdateTick;   //取得间隔
                    //一定间隔后刷新怪物
                    if (delay >= this.randDelay) {
                        //防止跳过几次刷新
                        for (let i = 0;i < Math.floor(delay / this.randDelay);i++) {
                            this.CreateEnemy();
                        }
                        //刷新时间
                        this.randDelay = api.Rand(MIN,MAX);
                        this.lastUpdateTick += this.randDelay * Math.floor(delay / this.randDelay);
                    }
                }
            };


            //进入荒野
            this.GetIntoWild = function() {
                //不在荒野
                if (!this.isInWild) {
                    this.lastUpdateTick = api.CurTick();    //怪物刷新时间调整
                    this.isInWild = true;
                    api.HideSelsDIV();
                    api.ShowSelDIV('wildsel');
                }
            };

            //退出荒野
            this.GetOutWild = function() {
                if (this.isInWild) {
                    this.isInWild = false;
                    api.HideSelsDIV();
                    api.ShowSelDIV('mainsel');
                }
            };


            //TODO 初始化对象
            this.Init = function() {
                this.isFighting = false;   
                this.isInWild = false;
                this.areaElement = $('#wildsel');
                this.randDelay = api.Rand(MIN,MAX);
                this.lastUpdateTick = api.CurTick();
                this.EnemyUpdatingID = setInterval(() => {WorldSelcs.wildArea.EnemyUpdate();},500);   //500ms检测一次刷新
            };

            this.Init();
    }
};