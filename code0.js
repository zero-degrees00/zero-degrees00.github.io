gdjs.IntroCode = {};
gdjs.IntroCode.GDPizzaObjects1= [];
gdjs.IntroCode.GDPizzaObjects2= [];
gdjs.IntroCode.GDWinterBackgroundObjects1= [];
gdjs.IntroCode.GDWinterBackgroundObjects2= [];
gdjs.IntroCode.GDPlayDemoObjects1= [];
gdjs.IntroCode.GDPlayDemoObjects2= [];
gdjs.IntroCode.GDPlayHouseObjects1= [];
gdjs.IntroCode.GDPlayHouseObjects2= [];
gdjs.IntroCode.GDPlayPestzObjects1= [];
gdjs.IntroCode.GDPlayPestzObjects2= [];
gdjs.IntroCode.GDPlayCheezyObjects1= [];
gdjs.IntroCode.GDPlayCheezyObjects2= [];
gdjs.IntroCode.GDPlaySeekObjects1= [];
gdjs.IntroCode.GDPlaySeekObjects2= [];
gdjs.IntroCode.GDPlaySeaObjects1= [];
gdjs.IntroCode.GDPlaySeaObjects2= [];
gdjs.IntroCode.GDPlaySpinObjects1= [];
gdjs.IntroCode.GDPlaySpinObjects2= [];
gdjs.IntroCode.GDMobileObjects1= [];
gdjs.IntroCode.GDMobileObjects2= [];
gdjs.IntroCode.GDTitle1Objects1= [];
gdjs.IntroCode.GDTitle1Objects2= [];
gdjs.IntroCode.GDTitle2Objects1= [];
gdjs.IntroCode.GDTitle2Objects2= [];
gdjs.IntroCode.GDHouseBalloonObjects1= [];
gdjs.IntroCode.GDHouseBalloonObjects2= [];
gdjs.IntroCode.GDPestzControlObjects1= [];
gdjs.IntroCode.GDPestzControlObjects2= [];
gdjs.IntroCode.GDCheezyPathObjects1= [];
gdjs.IntroCode.GDCheezyPathObjects2= [];
gdjs.IntroCode.GDSeekNTapObjects1= [];
gdjs.IntroCode.GDSeekNTapObjects2= [];
gdjs.IntroCode.GDSeaSnagObjects1= [];
gdjs.IntroCode.GDSeaSnagObjects2= [];
gdjs.IntroCode.GDSpinASpaceObjects1= [];
gdjs.IntroCode.GDSpinASpaceObjects2= [];
gdjs.IntroCode.GDDemoObjects1= [];
gdjs.IntroCode.GDDemoObjects2= [];
gdjs.IntroCode.GDMobile_9595APKsObjects1= [];
gdjs.IntroCode.GDMobile_9595APKsObjects2= [];
gdjs.IntroCode.GDBuyMeObjects1= [];
gdjs.IntroCode.GDBuyMeObjects2= [];
gdjs.IntroCode.GDQRObjects1= [];
gdjs.IntroCode.GDQRObjects2= [];


gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPizzaObjects1Objects = Hashtable.newFrom({"Pizza": gdjs.IntroCode.GDPizzaObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlayDemoObjects1Objects = Hashtable.newFrom({"PlayDemo": gdjs.IntroCode.GDPlayDemoObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlayHouseObjects1Objects = Hashtable.newFrom({"PlayHouse": gdjs.IntroCode.GDPlayHouseObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlayPestzObjects1Objects = Hashtable.newFrom({"PlayPestz": gdjs.IntroCode.GDPlayPestzObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlayCheezyObjects1Objects = Hashtable.newFrom({"PlayCheezy": gdjs.IntroCode.GDPlayCheezyObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlaySeekObjects1Objects = Hashtable.newFrom({"PlaySeek": gdjs.IntroCode.GDPlaySeekObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlaySeaObjects1Objects = Hashtable.newFrom({"PlaySea": gdjs.IntroCode.GDPlaySeaObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlaySpinObjects1Objects = Hashtable.newFrom({"PlaySpin": gdjs.IntroCode.GDPlaySpinObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDMobileObjects1Objects = Hashtable.newFrom({"Mobile": gdjs.IntroCode.GDMobileObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPizzaObjects1Objects = Hashtable.newFrom({"Pizza": gdjs.IntroCode.GDPizzaObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPizzaObjects1Objects = Hashtable.newFrom({"Pizza": gdjs.IntroCode.GDPizzaObjects1});
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BuyMe"), gdjs.IntroCode.GDBuyMeObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDBuyMeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDBuyMeObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Komiku_-_12_-_Bicycle.mp3", 1, true, 100, 1);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12718540);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://bmc.link/zero_degrees", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayDemo"), gdjs.IntroCode.GDPlayDemoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlayDemoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12719756);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayHouse"), gdjs.IntroCode.GDPlayHouseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlayHouseObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12720684);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.window.openURL("https://zero-degrees.itch.io/animal-diff", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayPestz"), gdjs.IntroCode.GDPlayPestzObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlayPestzObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12722268);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.window.openURL("https://zero-degrees.itch.io/puff-escape", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayCheezy"), gdjs.IntroCode.GDPlayCheezyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlayCheezyObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12723908);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.window.openURL("https://zero-degrees.itch.io/house-balloon-boundless", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlaySeek"), gdjs.IntroCode.GDPlaySeekObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlaySeekObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12725364);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.window.openURL("https://zero-degrees.itch.io/sea-snag", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlaySea"), gdjs.IntroCode.GDPlaySeaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlaySeaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12726612);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.window.openURL("https://zero-degrees.itch.io/path-out", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlaySpin"), gdjs.IntroCode.GDPlaySpinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPlaySpinObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12727860);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.window.openURL("https://zero-degrees.itch.io/word-puff", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mobile"), gdjs.IntroCode.GDMobileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDMobileObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12729036);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://zero-degrees.itch.io/", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BuyMe"), gdjs.IntroCode.GDBuyMeObjects1);
gdjs.copyArray(runtimeScene.getObjects("CheezyPath"), gdjs.IntroCode.GDCheezyPathObjects1);
gdjs.copyArray(runtimeScene.getObjects("HouseBalloon"), gdjs.IntroCode.GDHouseBalloonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PestzControl"), gdjs.IntroCode.GDPestzControlObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pizza"), gdjs.IntroCode.GDPizzaObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayCheezy"), gdjs.IntroCode.GDPlayCheezyObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayHouse"), gdjs.IntroCode.GDPlayHouseObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayPestz"), gdjs.IntroCode.GDPlayPestzObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlaySea"), gdjs.IntroCode.GDPlaySeaObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlaySeek"), gdjs.IntroCode.GDPlaySeekObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlaySpin"), gdjs.IntroCode.GDPlaySpinObjects1);
gdjs.copyArray(runtimeScene.getObjects("SeaSnag"), gdjs.IntroCode.GDSeaSnagObjects1);
gdjs.copyArray(runtimeScene.getObjects("SeekNTap"), gdjs.IntroCode.GDSeekNTapObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpinASpace"), gdjs.IntroCode.GDSpinASpaceObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title1"), gdjs.IntroCode.GDTitle1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Title2"), gdjs.IntroCode.GDTitle2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WinterBackground"), gdjs.IntroCode.GDWinterBackgroundObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDBuyMeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDBuyMeObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.IntroCode.GDBuyMeObjects1[i].getWidth()));
}
}{for(var i = 0, len = gdjs.IntroCode.GDTitle1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTitle1Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 3 - (gdjs.IntroCode.GDTitle1Objects1[i].getWidth()));
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlayHouseObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayHouseObjects1[i].setX((( gdjs.IntroCode.GDTitle1Objects1.length === 0 ) ? 0 :gdjs.IntroCode.GDTitle1Objects1[0].getX()));
}
}{for(var i = 0, len = gdjs.IntroCode.GDHouseBalloonObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHouseBalloonObjects1[i].setX((( gdjs.IntroCode.GDPlayHouseObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDPlayHouseObjects1[0].getPointX("")) + (( gdjs.IntroCode.GDPlayHouseObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDPlayHouseObjects1[0].getWidth()) * 1.5);
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlayCheezyObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayCheezyObjects1[i].setX((( gdjs.IntroCode.GDTitle1Objects1.length === 0 ) ? 0 :gdjs.IntroCode.GDTitle1Objects1[0].getX()));
}
}{for(var i = 0, len = gdjs.IntroCode.GDCheezyPathObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDCheezyPathObjects1[i].setX((( gdjs.IntroCode.GDPlayHouseObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDPlayHouseObjects1[0].getPointX("")) + (( gdjs.IntroCode.GDPlayHouseObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDPlayHouseObjects1[0].getWidth()) * 1.5);
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlaySeaObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlaySeaObjects1[i].setX((( gdjs.IntroCode.GDTitle1Objects1.length === 0 ) ? 0 :gdjs.IntroCode.GDTitle1Objects1[0].getX()));
}
}{for(var i = 0, len = gdjs.IntroCode.GDSeaSnagObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSeaSnagObjects1[i].setX((( gdjs.IntroCode.GDPlayHouseObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDPlayHouseObjects1[0].getPointX("")) + (( gdjs.IntroCode.GDPlayHouseObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDPlayHouseObjects1[0].getWidth()) * 1.5);
}
}{for(var i = 0, len = gdjs.IntroCode.GDTitle2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTitle2Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 4 - (gdjs.IntroCode.GDTitle2Objects1[i].getWidth()));
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlayPestzObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlayPestzObjects1[i].setX((( gdjs.IntroCode.GDTitle2Objects1.length === 0 ) ? 0 :gdjs.IntroCode.GDTitle2Objects1[0].getX()));
}
}{for(var i = 0, len = gdjs.IntroCode.GDPestzControlObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPestzControlObjects1[i].setX((( gdjs.IntroCode.GDPlayPestzObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDPlayPestzObjects1[0].getPointX("")) + (( gdjs.IntroCode.GDPlayPestzObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDPlayPestzObjects1[0].getWidth()) * 1.5);
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlaySeekObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlaySeekObjects1[i].setX((( gdjs.IntroCode.GDTitle2Objects1.length === 0 ) ? 0 :gdjs.IntroCode.GDTitle2Objects1[0].getX()));
}
}{for(var i = 0, len = gdjs.IntroCode.GDSeekNTapObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSeekNTapObjects1[i].setX((( gdjs.IntroCode.GDPlayPestzObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDPlayPestzObjects1[0].getPointX("")) + (( gdjs.IntroCode.GDPlayPestzObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDPlayPestzObjects1[0].getWidth()) * 1.5);
}
}{for(var i = 0, len = gdjs.IntroCode.GDPlaySpinObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPlaySpinObjects1[i].setX((( gdjs.IntroCode.GDTitle2Objects1.length === 0 ) ? 0 :gdjs.IntroCode.GDTitle2Objects1[0].getX()));
}
}{for(var i = 0, len = gdjs.IntroCode.GDSpinASpaceObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSpinASpaceObjects1[i].setX((( gdjs.IntroCode.GDPlayPestzObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDPlayPestzObjects1[0].getPointX("")) + (( gdjs.IntroCode.GDPlayPestzObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDPlayPestzObjects1[0].getWidth()) * 1.5);
}
}{for(var i = 0, len = gdjs.IntroCode.GDPizzaObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPizzaObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.IntroCode.GDPizzaObjects1[i].getWidth()));
}
}{for(var i = 0, len = gdjs.IntroCode.GDWinterBackgroundObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDWinterBackgroundObjects1[i].setSize(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.IntroCode.GDWinterBackgroundObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDWinterBackgroundObjects1[i].setPosition(0,0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pizza"), gdjs.IntroCode.GDPizzaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPizzaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BuyMe"), gdjs.IntroCode.GDBuyMeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title1"), gdjs.IntroCode.GDTitle1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Title2"), gdjs.IntroCode.GDTitle2Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDBuyMeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDBuyMeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.IntroCode.GDTitle1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTitle1Objects1[i].setColor("248;231;28");
}
}{for(var i = 0, len = gdjs.IntroCode.GDTitle2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTitle2Objects1[i].setColor("248;231;28");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pizza"), gdjs.IntroCode.GDPizzaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDPizzaObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BuyMe"), gdjs.IntroCode.GDBuyMeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title1"), gdjs.IntroCode.GDTitle1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Title2"), gdjs.IntroCode.GDTitle2Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDBuyMeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDBuyMeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDTitle1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTitle1Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.IntroCode.GDTitle2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTitle2Objects1[i].setColor("255;255;255");
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
gdjs.IntroCode.GDPlayDemoObjects1.length = 0;
gdjs.IntroCode.GDPlayDemoObjects2.length = 0;
gdjs.IntroCode.GDPlayHouseObjects1.length = 0;
gdjs.IntroCode.GDPlayHouseObjects2.length = 0;
gdjs.IntroCode.GDPlayPestzObjects1.length = 0;
gdjs.IntroCode.GDPlayPestzObjects2.length = 0;
gdjs.IntroCode.GDPlayCheezyObjects1.length = 0;
gdjs.IntroCode.GDPlayCheezyObjects2.length = 0;
gdjs.IntroCode.GDPlaySeekObjects1.length = 0;
gdjs.IntroCode.GDPlaySeekObjects2.length = 0;
gdjs.IntroCode.GDPlaySeaObjects1.length = 0;
gdjs.IntroCode.GDPlaySeaObjects2.length = 0;
gdjs.IntroCode.GDPlaySpinObjects1.length = 0;
gdjs.IntroCode.GDPlaySpinObjects2.length = 0;
gdjs.IntroCode.GDMobileObjects1.length = 0;
gdjs.IntroCode.GDMobileObjects2.length = 0;
gdjs.IntroCode.GDTitle1Objects1.length = 0;
gdjs.IntroCode.GDTitle1Objects2.length = 0;
gdjs.IntroCode.GDTitle2Objects1.length = 0;
gdjs.IntroCode.GDTitle2Objects2.length = 0;
gdjs.IntroCode.GDHouseBalloonObjects1.length = 0;
gdjs.IntroCode.GDHouseBalloonObjects2.length = 0;
gdjs.IntroCode.GDPestzControlObjects1.length = 0;
gdjs.IntroCode.GDPestzControlObjects2.length = 0;
gdjs.IntroCode.GDCheezyPathObjects1.length = 0;
gdjs.IntroCode.GDCheezyPathObjects2.length = 0;
gdjs.IntroCode.GDSeekNTapObjects1.length = 0;
gdjs.IntroCode.GDSeekNTapObjects2.length = 0;
gdjs.IntroCode.GDSeaSnagObjects1.length = 0;
gdjs.IntroCode.GDSeaSnagObjects2.length = 0;
gdjs.IntroCode.GDSpinASpaceObjects1.length = 0;
gdjs.IntroCode.GDSpinASpaceObjects2.length = 0;
gdjs.IntroCode.GDDemoObjects1.length = 0;
gdjs.IntroCode.GDDemoObjects2.length = 0;
gdjs.IntroCode.GDMobile_9595APKsObjects1.length = 0;
gdjs.IntroCode.GDMobile_9595APKsObjects2.length = 0;
gdjs.IntroCode.GDBuyMeObjects1.length = 0;
gdjs.IntroCode.GDBuyMeObjects2.length = 0;
gdjs.IntroCode.GDQRObjects1.length = 0;
gdjs.IntroCode.GDQRObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
