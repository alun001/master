
cc.Class({
    extends: cc.Component,

    properties: {
        camera: cc.Node,
        bule:cc.Node,

    },


    onLoad:function() {
        //注册鼠标点击事件
        this.node.on(cc.Node.EventType.MOUSE_DOWN,this.mouseEvent,this);
        //注册触摸移动事件
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this);

    },

    start () {
    },
    //绑定鼠标点击事件
    mouseEvent:function(event){
        var mouseType = event._button;
        if (mouseType == cc.Event.EventMouse.BUTTON_LEFT){
            this.leftMouse();
        }
        else if(mouseType == cc.Event.EventMouse.BUTTON_RIGHT){
            this.rightMouse(event);
        }
    },
    //鼠标左键
    leftMouse:function(){
        cc.log("鼠标点击左键", this.camera);
        // this.camera
        // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // arr.sort(function(){
        //     return Math.random()>0.5 ? -1 : 1;
        // });
        // cc.log("arr。。。。。。",arr);
    },
    //鼠标右键
    rightMouse:function(event){
        var speed = 100;
        this.bule.stopAllActions();
        var bulePos = this.bule.getPosition();
        // cc.log("获取鼠标的点击坐标",pos);
        var pos = event.getLocation();
        // cc.log("转成本地坐标pos",pos);
        pos = this.node.convertToNodeSpaceAR(pos);
        // var distances  = Math.sqrt(Math.pow(pos.x - bulePos.x, 2) + Math.pow(pos.y - bulePos.y, 2));
        // cc.log("赋值坐标给bule",distances);
        // var time = cc.Distance(pos,bulePos)/speed;
        var distance = bulePos.sub(pos).mag();
        var time = distance/speed;
        var action = cc.moveTo(time,pos);
        this.bule.runAction(action);
        this.camera.position = this.bule.position;
    },
    //触摸移动事件
    onTouchMove:function(event){
        // cc.log("触摸屏幕。。。。。");
        // var pos = event.getLocation();
        // pos = this.node.convertToNodeSpaceAR(pos);
        // this.camera.position = pos;
        // this.bule.position = pos;
    },

    // update (dt) {},
});
