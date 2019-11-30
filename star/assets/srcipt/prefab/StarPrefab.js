
cc.Class({
    extends: cc.Component,

    properties: {
        pic1 : cc.SpriteFrame,
        pic2 : cc.SpriteFrame,
        pic3 : cc.SpriteFrame,
        pic4 : cc.SpriteFrame,
        pic5 : cc.SpriteFrame,

    },


    onLoad:function() {
        this.node.setScale(1.17)
    },

    start () {

    },

    //设置方块类型
    setType:function(starType){
        this.starType = starType;
        this.getComponent(cc.Sprite).spriteFrame = this["pic" + starType];
    },
    //设置网格坐标
    setGridXY:function(x,y){
        this.gridX = x;
        this.gridY = y;
        this.node.setPosition((x-5)*75 + 75/2, (y-5)*75 + 75/2);
    },
    setSelected:function(selected){
        if(!selected){
            this.node.stopAllActions();
            this.node.setScale(1.17);
        }else{
            this.node.runAction(
                cc.repeatForever(cc.sequence(
                    cc.scaleTo(0.3, 1),
                    cc.scaleTo(0.3, 1.17)
                ))
            );
        }
    },
    goTo : function(x,y,time){
        this.gridX = x;
        this.gridY = y;
        this.node.runAction(cc.sequence(
            cc.delayTime(time),
            cc.moveTo(0.1, cc.p((x-5)*75 + 75/2, (y-5)*75 + 75/2))
            )
        );
    },
    // update (dt) {},
});
