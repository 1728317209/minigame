import GameConfig from "./GameConfig";

module laya {
    import Stage = Laya.Stage;
    import Text = Laya.Text;
    import Event = Laya.Event;
    import Browser = Laya.Browser;
    import WebGL = Laya.WebGL;
    export class HelloLayabox {
      constructor(){
        // 不支持WebGL时自动切换至Canvas
        Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL); 
        Laya["Physics"] && Laya["Physics"].enable(); // 开启物理世界
        Laya["DebugPanel"] && Laya["DebugPanel"].enable(); // Laya["DebugPanel"] undefined
        Laya.stage.scaleMode = GameConfig.scaleMode;
        Laya.stage.screenMode = GameConfig.screenMode;
        Laya.stage.alignV = GameConfig.alignV;
        Laya.stage.alignH = GameConfig.alignH;
        Laya.stage.bgColor = "#3C4192";
        this.createText();
      }
      test(): void {}
      private createText(): void {
        let shape = new Laya.Sprite();//创建一个 Sprite 类的实例对象 sprite 。
        const lineWidth = 2;
        const r = 20;
        const [x, y, width, height] = [100, 100, 100, 100];
        let sp1: Laya.Sprite = new Laya.Sprite();
        let sp2: Laya.Sprite = new Laya.Sprite();
        let sp3: Laya.Sprite = new Laya.Sprite();
        sp1.pos(x, y);
        sp2.pos(x, y);
        sp3.pos(x - (width / 2), y - (height / 2));
        sp1.pivot(x + (width / 2), y + (height / 2));
        sp2.pivot(x + (width / 2), y + (height / 2));
        // sp3.pivot(x + (width / 2), y + (height / 2));
        let halfWidth = (width / 2);
        let halfHeight = (height / 2);
        sp1.graphics.drawPath(x, y, [
          ["moveTo", r, 0],
          ["lineTo", width - r, 0],
          ["arcTo", width, 0, width, 5, r],
          ["lineTo", width, height - r],
          ["arcTo", width, height, width - r, height, r],
          ["lineTo", r, height],
          ["arcTo", 0, height, 0, height - r, r],
          ["lineTo", 0, r],
          ["arcTo", 0, 0, r, 0, r],
          ["closePath"]
        ], { fillStyle: "#964D98" });
        
        sp2.graphics.drawPath(x, y, [
          ["moveTo", r, 0],
          ["lineTo", width - r, 0],
          ["arcTo", width, 0, width, 5, r],
          ["lineTo", width, height - r],
          ["arcTo", width, height, width - r, height, r],
          ["lineTo", r, height],
          ["arcTo", 0, height, 0, height - r, r],
          ["lineTo", 0, r],
          ["arcTo", 0, 0, r, 0, r],
          ["closePath"]
        ], { fillStyle: "#FFEA5A" });
        
        shape.addChild(sp1);
        shape.addChild(sp2);
        shape.addChild(sp3);

        Laya.Tween.to(sp1, { scaleX: 1.5, scaleY: 1.5, fillStyle: '#5E4594' }, 100, Laya.Ease.linearNone, new Laya.Handler(this, (): void => {
          Laya.Tween.to(sp1, { scaleX: 1, scaleY: 1, fillStyle: '#964D98' }, 150, Laya.Ease.linearNone);
        }), 150)
        // Laya.timer.frameLoop(1, this, () => {
        //   sp1.rotation += 2;
        // });
        Laya.timer.frameOnce(1, this, () => {
          sp3.graphics.drawCurves(0, 0, [
            width, r,
            width, 0,
            width - r, 0,
          ], '#964D98', 5);
          sp3.graphics.drawLine(width - r, 0, r, 0, '#964D98', 5);
        })
        Laya.timer.frameOnce(3, this, () => {
          sp3.graphics.drawCurves(0, 0, [
            r, 0,
            0, 0,
            0, r,
          ], '#964D98', 5);
          sp3.graphics.drawLine(0, r, 0, height - r, '#964D98', 5);
        })
        Laya.timer.frameOnce(5, this, () => {
          sp3.graphics.drawCurves(0, 0, [
            0, height - r,
            0, height,
            r, height,
          ], '#964D98', 5);
          sp3.graphics.drawLine(r, height, width - r, height, '#964D98', 5);
        })
        Laya.timer.frameOnce(7, this, () => {
          sp3.graphics.drawCurves(0, 0, [
            width - r, height,
            width, height,
            width, height - r,
          ], '#964D98', 5);
          sp3.graphics.drawLine(width, height - r, width, r, '#964D98', 5);
        })

        console.log("TCL: HelloLayabox -> constructor -> shape", shape)
        Laya.stage.addChild(shape);//将此 shape 对象添加到显示列表。
      }
   }
}
new laya.HelloLayabox();