export class HelloLayabox {
    constructor() {
        // 不支持WebGL时自动切换至Canvas
        const Stage = Laya.Stage;
        const txt = new Laya.Text();
        const { clientWidth, clientHeight } = Laya.Browser;
        Laya.init(clientWidth, clientHeight, Laya.WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#232628";
        //给文本的text属性赋值
        //设置文本内容
        txt.text = "hello_world";
         //设置文本区背景
        txt.bgColor = "#c30c30";
         //设置文本的宽高，不然 align、valign 不会生效
        txt.width = clientWidth;
        txt.height = clientHeight;
        //设置文本水平居中
        txt.align = "center";
        //设置文本垂直居中
        txt.valign = "middle";
        Laya.stage.addChild(txt);
    }
}
new HelloLayabox();