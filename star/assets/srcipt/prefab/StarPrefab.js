
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
    setType: function(starType){
        this.starType = starType;
        this.getComponent(cc.Sprite).SpriteFrame = this["pic"+starType];
    },

    // update (dt) {},
});
