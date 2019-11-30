var StarPrefab = require("../prefab/StarPrefab.js");
var Comm = require("../Comm.js");

cc.Class({
    extends: cc.Component,

    properties: {
        starPrefab:cc.Prefab,
        starGrld: cc.Node,
        scoreLabel: cc.Label,
        targetLabel:cc.Label,

    },
    onLoad:function(){
        var self = this;
        self.starGrld.on(cc.Node.EventType.TOUCH_START, function(e){
            var pos = self.starGrld.convertToNodeSpace(e.touch.getLocation());
            self.touchStar(parseInt(pos.x / (self.starGrld.width/10)),parseInt(pos.y / (self.starGrld.height/10)));
        });
        this.starGame();
    },
    start () {

    },
    //开始游戏
    starGame:function(){
        //存放状态变量的对象
        this.stVar = {};
        // 是否在选中状态
        this.stVar.selected = false;
         // 总分
        this.totalScore = 0;
        //生成网格
        this.initGrid();
    },
    //生成网格
    initGrid:function(){
        var gridStarUI = []; // 网格星星UI
        var gridData =[];  // 网格数据
        for (var i=0;i<10;i++){
            gridData[i] = [];
            gridStarUI[i] = [];
            for(var j = 0;j<10;j++){
                var star = cc.instantiate(this.starPrefab);
                var starClass = star.getComponent("StarPrefab");
                star.parent = this.starGrld;
                starClass.setGridXY(i,j);
                var rnd = parseInt(Math.random()*5+1);
                starClass.setType(rnd);
                gridData[i][j] = rnd;
                gridStarUI[i][j]=star;
            }
        }
        this.gridData =gridData;
        this.gridStarUI = gridStarUI;
    },
    //点击星星
    touchStar:function(x,y){
        // 是否有选中状态
        if(this.stVar.selected){
            //点击已被选中的
            if(this.connectContain(x,y)){
                this.cleanOnce(x,y);
                this.stVar.selected = false;
            }else{  //点击未被选中的
                this.setConnectStarSelect(false);
                this.scoreLabel.node.active = false;
                this.touchStar(x,y);
            }
        }else{ //没有选中
            if(this.gridData[x][y]==0) {return;};
            this.stVar.connectStars = [[x, y]];
            this.checkStar(x, y);
            if (this.stVar.connectStars.length >= 2) {
                this.setConnectStarSelect(true);
                this.scoreLabel.string = Comm.calcClearScore(this.stVar.connectStars.length);
                this.scoreLabel.node.stopAllActions();
                this.scoreLabel.node.setPosition(this.gridStarUI[x][y].position);
                this.scoreLabel.node.opacity = 255;
                this.scoreLabel.fontSize = 32;
                this.scoreLabel.node.active = true;
            }
        }

    },
    checkStar:function(x,y){
        var starType = this.gridData[x][y];
        var scanStar = [[x+1, y],[x-1, y],[x, y-1],[x, y+1]];
        for(var i = scanStar.length-1;i >= 0;i--){
            scanStar[i]
            var scanX = scanStar[i][0];
            var scanY = scanStar[i][1];
            if(this.inGrid(scanX,scanY)&& this.gridData[scanX][scanY] == starType && (! this.connectContain(scanX, scanY))){
                 this.stVar.connectStars[this.stVar.connectStars.length] = [scanX, scanY];
                 this.checkStar(scanX, scanY);
            }

        }

    },
    // 是否在网格范围内
    inGrid: function (x,y) {
        return x >= 0 && x < 10 && y >= 0 && y < 10
    },
    // 相连数组里是否有该坐标
    connectContain: function(x, y){
        for (var i = this.stVar.connectStars.length - 1; i >= 0; i--) {
            var star = this.stVar.connectStars[i];
            if (star[0] == x && star[1] == y) {
                return true;
            }
        }
        return false;
    },
    //选中或取消相连的星星
    setConnectStarSelect:function(selected){
        for(var i = this.stVar.connectStars.length-1;i>=0;i--){
            var star = this.stVar.connectStars[i];
            this.gridStarUI[star[0]][star[1]].getComponent(StarPrefab).setSelected(selected);
        }
        this.stVar.selected = selected;
    },
    cleanOnce:function(x,y){
        //消除星星
        this.clearConnectStar();
        //向下落
        this.fellDownStar();
        //向左移动
        this.fellLeftStar();

    },
    //清除相连的星星
    clearConnectStar:function(){
        for(var i=0;i < this.stVar.connectStars.length;i++){
            var star = this.stVar.connectStars[i];
            this.gridData[star[0]][star[1]] = 0;
            this.gridStarUI[star[0]][star[1]].destroy();
        }
    },
    //让星星下落
    fellDownStar:function(){
        //遍历每一列
        for(var x = 0;x < Comm.gridSize;x++){
            var fellDistance = 0;
            //从下往上，遍历每一个星星
            for (var y = 0; y < Comm.gridSize; y++){
                if(this.gridData[x][y]==0){   // 如果是空，则增加一个下落距离
                    fellDistance++;
                }
                if(fellDistance > 0&&this.gridData[x][y]>0){
                    this.gridData[x][y-fellDistance] =this.gridData[x][y];                
                    this.gridData[x][y] =0;
                    this.gridStarUI[x][y].getComponent(StarPrefab).goTo(x,y-fellDistance,0);
                    this.gridStarUI[x][y-fellDistance] = this.gridStarUI[x][y];
                    this.gridStarUI[x][y] = null;
                }
            }

        }
    },
    //向左移动
    fellLeftStar:function(){
        var fellDistance = 0;
        for(var x = 0;x < Comm.gridSize;x++){
            if (this.gridData[x][0] == 0){
                fellDistance++;
            }
            if (this.gridData[x][0] != 0 && fellDistance != 0) {
                for(var y = 0;y<Comm.gridSize;y++){
                    if (this.gridData[x][y] > 0) {
                        this.gridData[x - fellDistance][y] = this.gridData[x][y];
                        this.gridData[x][y] = 0;
                        this.gridStarUI[x][y].getComponent(StarPrefab).goTo(x - fellDistance, y, 0.1);
                        this.gridStarUI[x - fellDistance][y] = this.gridStarUI[x][y];
                        this.gridStarUI[x][y] = null;
                    } else {
                        break;
                    }
                    
                }
            }
        }
    },
    //判断是否结束
    checkOver:function(){
        for(var x =0;x < Comm.gridSize;x++){
            for (var y=0; y < Comm.gridSize; y++){
                var starType = this.gridData[x][y];
                if(starType == 0){
                    break;
                }
                var scanStar =[[x+1,y],[x-1,y],[x,y-1],[x,y+1]];
                for(var i = 0;i < scanStar.length; i++){
                    var tmpX = scanStar[i][0];
                    var tmpY = scanStar[i][1];
                    if (this.inGrid(tmpX, tmpY) && this.gridData[tmpX][tmpY] == starType){
                        return false;
                    }
                }
            }
        }
        return true;
    },

});
