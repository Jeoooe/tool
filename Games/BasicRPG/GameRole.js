var GameRole = {
    
    //XXX 满级属性
    roleAttrMax : {
        health : 8000,
        psyDefence : 1000,
        magDefence : 0.3,
        power : 2.5,
        magic : 3.5,
        magicLim : 5000,
        stamina : 100,
        luck : 1.5
    },

    // 角色生成
    Role : function () {
        this.roleLevel = 1; //角色自身等级
        //XXX角色属性
        this.attributes = { 
            //生命值
            health : {      
                value : 100,
                level : 10
            },
            //物理防御值（数值抵消）
            psyDefence : {
                value : 0,
                level : 10
            },
            //法术防御值（百分比）
            magDefence : {
                value : 0,
                level : 10
            },
            //物伤
            power : {
                value : 1,
                level : 10
            },
            //法伤
            magic : {
                value : 1,
                level : 10
            },
            //法术条
            magicLim : {
                value : 60,
                level : 10
            },
            //承重
            stamina : {
                value : 25,
                level : 10
            },
            //幸运
            luck : {
                value : 1,
                level : 10
            }
        };
        this.exp = 0;   //经验值
        this.money = 0; //钱
        //XXX角色装备
        this.equip = {
            //头
            helmet : {
                item : null
            },
            //胸
            chest : {
                item : null
            },
            //腿
            leg : {
                item : null
            },
            //手
            hand : {
                item : null
            },
            //四个饰品
            orn_1 : {
                item : null
            },
            orn_2 : {
                item : null
            },
            orn_3 : {
                item : null
            },
            orn_4 : {
                item : null
            }
        };

        //TODO
        /**角色装备
         *@param part{String} 部位
         *@param item{any} 物品
         */
        this.Wear = function(part, item) {

        };
        
        this.LevelUp = function(type) {

        }
    },

}