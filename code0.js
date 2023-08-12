gdjs.IntroCode = {};
gdjs.IntroCode.GDPizzaObjects1= [];
gdjs.IntroCode.GDPizzaObjects2= [];
gdjs.IntroCode.GDWinterBackgroundObjects1= [];
gdjs.IntroCode.GDWinterBackgroundObjects2= [];
gdjs.IntroCode.GDPlayObjects1= [];
gdjs.IntroCode.GDPlayObjects2= [];
gdjs.IntroCode.GDTitle1Objects1= [];
gdjs.IntroCode.GDTitle1Objects2= [];
gdjs.IntroCode.GDTitle2Objects1= [];
gdjs.IntroCode.GDTitle2Objects2= [];


gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.IntroCode.GDPlayObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPizzaObjects1Objects = Hashtable.newFrom({"Pizza": gdjs.IntroCode.GDPizzaObjects1});
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Komiku_-_12_-_Bicycle.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.IntroCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9083924);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pizza"), gdjs.IntroCode.GDPizzaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPizzaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9084860);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://bmc.link/PrimordialGamez", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Pizza"), gdjs.IntroCode.GDPizzaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.IntroCode.GDPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title1"), gdjs.IntroCode.GDTitle1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Title2"), gdjs.IntroCode.GDTitle2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WinterBackground"), gdjs.IntroCode.GDWinterBackgroundObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDTitle1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTitle1Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 3 - (gdjs.IntroCode.GDTitle1Objects1[i].getWidth()));
}
}{for(var i = 0, len = gdjs.IntroCode.GDTitle2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTitle2Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 4 - (gdjs.IntroCode.GDTitle2Objects1[i].getWidth()));
}
}{for(var i = 0, len = gdjs.IntroCode.GDPizzaObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPizzaObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.IntroCode.GDPizzaObjects1[i].getWidth()));
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.IntroCode.GDPlayObjects1[i].getWidth()));
}
}{for(var i = 0, len = gdjs.IntroCode.GDWinterBackgroundObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDWinterBackgroundObjects1[i].setSize(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.IntroCode.GDWinterBackgroundObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDWinterBackgroundObjects1[i].setPosition(0,0);
}
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDPizzaObjects1.length = 0;
gdjs.IntroCode.GDPizzaObjects2.length = 0;
gdjs.IntroCode.GDWinterBackgroundObjects1.length = 0;
gdjs.IntroCode.GDWinterBackgroundObjects2.length = 0;
gdjs.IntroCode.GDPlayObjects1.length = 0;
gdjs.IntroCode.GDPlayObjects2.length = 0;
gdjs.IntroCode.GDTitle1Objects1.length = 0;
gdjs.IntroCode.GDTitle1Objects2.length = 0;
gdjs.IntroCode.GDTitle2Objects1.length = 0;
gdjs.IntroCode.GDTitle2Objects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
