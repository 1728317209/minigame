var laya = (function (exports) {
    'use strict';

    class HelloLayabox {
        constructor() {
            const Stage = Laya.Stage;
            const txt = new Laya.Text();
            const { clientWidth, clientHeight } = Laya.Browser;
            Laya.init(clientWidth, clientHeight, Laya.WebGL);
            Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#232628";
            txt.text = "hello_world";
            txt.bgColor = "#c30c30";
            txt.width = clientWidth;
            txt.height = clientHeight;
            txt.align = "center";
            txt.valign = "middle";
            Laya.stage.addChild(txt);
        }
    }
    new HelloLayabox();

    exports.HelloLayabox = HelloLayabox;

    return exports;

}({}));
