// var TipPrefab = require("./prefab/Tip.js");
// var ConfirmDialogPrefab = require("./prefab/ConfirmDialog.js");
module.exports ={
    //网格大小
    gridSize:10,
    //计算消除得分
    calcClearScore: function(count){
        return count*count*5;
    },
    //计算剩余星星的分数
    calcLastScore: function(count){
        return Math.max(0,2000 - count*count*20);
    },
    //显示tip
    tip:function(tipStr){
        cc.loader.loadRes("prefab/Tip",function (err,prefab){
            if (err)  {
                return;
            } 
            var newNode = cc.instantiate(prefab);
            cc.director.getScene().addChild(newNode);
            newNode.getComponent(tip).show(tipStr);
        });
    },
    //读取所有关卡的分数
    readLevelScores:function(){
        var strScores = cc.sys.localStorage.getItem("LEVEL_SCORES");
        if (strScores){
            this.levelScores = JSON.parse(strScores);
        }else{
            this.levelScores = {};
        }
    },
    //保存所有关卡的分数
    saveLevelScores:function(){
        var strScores = JSON.stringify(this.levelScores);
        cc.sys.localStorage.setItem("LEVEL_SCORES",strScores);
    },
    

}