gdjs.MainCode = {};
gdjs.MainCode.GDGrassAndTreeBackgroundObjects1= [];
gdjs.MainCode.GDGrassAndTreeBackgroundObjects2= [];
gdjs.MainCode.GDGrassAndTreeBackgroundObjects3= [];
gdjs.MainCode.GDGreenFloorObjects1= [];
gdjs.MainCode.GDGreenFloorObjects2= [];
gdjs.MainCode.GDGreenFloorObjects3= [];
gdjs.MainCode.GDNativeAngryObjects1= [];
gdjs.MainCode.GDNativeAngryObjects2= [];
gdjs.MainCode.GDNativeAngryObjects3= [];
gdjs.MainCode.GDBulletObjects1= [];
gdjs.MainCode.GDBulletObjects2= [];
gdjs.MainCode.GDBulletObjects3= [];
gdjs.MainCode.GDWallObjects1= [];
gdjs.MainCode.GDWallObjects2= [];
gdjs.MainCode.GDWallObjects3= [];
gdjs.MainCode.GDWall2Objects1= [];
gdjs.MainCode.GDWall2Objects2= [];
gdjs.MainCode.GDWall2Objects3= [];
gdjs.MainCode.GDEmoteHeartObjects1= [];
gdjs.MainCode.GDEmoteHeartObjects2= [];
gdjs.MainCode.GDEmoteHeartObjects3= [];
gdjs.MainCode.GDEmoteHeart2Objects1= [];
gdjs.MainCode.GDEmoteHeart2Objects2= [];
gdjs.MainCode.GDEmoteHeart2Objects3= [];
gdjs.MainCode.GDEmoteHeart3Objects1= [];
gdjs.MainCode.GDEmoteHeart3Objects2= [];
gdjs.MainCode.GDEmoteHeart3Objects3= [];
gdjs.MainCode.GDBlueFloorObjects1= [];
gdjs.MainCode.GDBlueFloorObjects2= [];
gdjs.MainCode.GDBlueFloorObjects3= [];
gdjs.MainCode.GDBlueFloor2Objects1= [];
gdjs.MainCode.GDBlueFloor2Objects2= [];
gdjs.MainCode.GDBlueFloor2Objects3= [];
gdjs.MainCode.GDSquidSpaceEnemyObjects1= [];
gdjs.MainCode.GDSquidSpaceEnemyObjects2= [];
gdjs.MainCode.GDSquidSpaceEnemyObjects3= [];
gdjs.MainCode.GDGreenUfoObjects1= [];
gdjs.MainCode.GDGreenUfoObjects2= [];
gdjs.MainCode.GDGreenUfoObjects3= [];
gdjs.MainCode.GDGreenUfo2Objects1= [];
gdjs.MainCode.GDGreenUfo2Objects2= [];
gdjs.MainCode.GDGreenUfo2Objects3= [];
gdjs.MainCode.GDGreenUfo3Objects1= [];
gdjs.MainCode.GDGreenUfo3Objects2= [];
gdjs.MainCode.GDGreenUfo3Objects3= [];
gdjs.MainCode.GDIcePickObjects1= [];
gdjs.MainCode.GDIcePickObjects2= [];
gdjs.MainCode.GDIcePickObjects3= [];
gdjs.MainCode.GDSeparatorObjects1= [];
gdjs.MainCode.GDSeparatorObjects2= [];
gdjs.MainCode.GDSeparatorObjects3= [];
gdjs.MainCode.GDDeadObjects1= [];
gdjs.MainCode.GDDeadObjects2= [];
gdjs.MainCode.GDDeadObjects3= [];
gdjs.MainCode.GDSkyWallObjects1= [];
gdjs.MainCode.GDSkyWallObjects2= [];
gdjs.MainCode.GDSkyWallObjects3= [];
gdjs.MainCode.GDUFOSeparatorObjects1= [];
gdjs.MainCode.GDUFOSeparatorObjects2= [];
gdjs.MainCode.GDUFOSeparatorObjects3= [];


gdjs.MainCode.mapOfEmptyGDGreenUfoObjectsEmptyGDGreenUfo2ObjectsEmptyGDGreenUfo3Objects = Hashtable.newFrom({"GreenUfo": [], "GreenUfo2": [], "GreenUfo3": []});
gdjs.MainCode.mapOfEmptyGDBulletObjects = Hashtable.newFrom({"Bullet": []});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects2});
gdjs.MainCode.mapOfEmptyGDBulletObjects = Hashtable.newFrom({"Bullet": []});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects2);
{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects2[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects2);
{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects2[i].setAnimationName("Walk");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects2);
{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects2[i].setAnimationName("Walk");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects2);
{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects2[i].setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects2);
{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects2[i].setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LControl");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects2);
{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects2[i].setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "RControl");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects2);
{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects2[i].setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RControl");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfEmptyGDBulletObjects) < 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9324988);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects2);
gdjs.MainCode.GDBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects2Objects, (( gdjs.MainCode.GDNativeAngryObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDNativeAngryObjects2[0].getCenterXInScene()), (( gdjs.MainCode.GDNativeAngryObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDNativeAngryObjects2[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects2[i].setAnimationName("Attack");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\NativeFire.wav", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfEmptyGDBulletObjects) < 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9326492);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects1);
gdjs.MainCode.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects, (( gdjs.MainCode.GDNativeAngryObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDNativeAngryObjects1[0].getCenterXInScene()), (( gdjs.MainCode.GDNativeAngryObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDNativeAngryObjects1[0].getCenterYInScene()), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\NativeFire.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects1[i].setAnimationName("Attack");
}
}}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDIcePickObjects1Objects = Hashtable.newFrom({"IcePick": gdjs.MainCode.GDIcePickObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDIcePickObjects1Objects = Hashtable.newFrom({"IcePick": gdjs.MainCode.GDIcePickObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSquidSpaceEnemyObjects1Objects = Hashtable.newFrom({"SquidSpaceEnemy": gdjs.MainCode.GDSquidSpaceEnemyObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDIcePickObjects1Objects = Hashtable.newFrom({"IcePick": gdjs.MainCode.GDIcePickObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDIcePickObjects1Objects = Hashtable.newFrom({"IcePick": gdjs.MainCode.GDIcePickObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGreenUfo2Objects1Objects = Hashtable.newFrom({"GreenUfo2": gdjs.MainCode.GDGreenUfo2Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSkyWallObjects1Objects = Hashtable.newFrom({"SkyWall": gdjs.MainCode.GDSkyWallObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGreenUfo2Objects1Objects = Hashtable.newFrom({"GreenUfo2": gdjs.MainCode.GDGreenUfo2Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDUFOSeparatorObjects1Objects = Hashtable.newFrom({"UFOSeparator": gdjs.MainCode.GDUFOSeparatorObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBlueFloorObjects1Objects = Hashtable.newFrom({"BlueFloor": gdjs.MainCode.GDBlueFloorObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSeparatorObjects1Objects = Hashtable.newFrom({"Separator": gdjs.MainCode.GDSeparatorObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBlueFloorObjects1Objects = Hashtable.newFrom({"BlueFloor": gdjs.MainCode.GDBlueFloorObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.MainCode.GDWallObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBlueFloor2Objects1Objects = Hashtable.newFrom({"BlueFloor2": gdjs.MainCode.GDBlueFloor2Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSeparatorObjects1Objects = Hashtable.newFrom({"Separator": gdjs.MainCode.GDSeparatorObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBlueFloor2Objects1Objects = Hashtable.newFrom({"BlueFloor2": gdjs.MainCode.GDBlueFloor2Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.MainCode.GDWallObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDWall2Objects1Objects = Hashtable.newFrom({"Wall2": gdjs.MainCode.GDWall2Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGreenUfoObjects1Objects = Hashtable.newFrom({"GreenUfo": gdjs.MainCode.GDGreenUfoObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGreenUfo2Objects1Objects = Hashtable.newFrom({"GreenUfo2": gdjs.MainCode.GDGreenUfo2Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGreenUfo3Objects1Objects = Hashtable.newFrom({"GreenUfo3": gdjs.MainCode.GDGreenUfo3Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSquidSpaceEnemyObjects1Objects = Hashtable.newFrom({"SquidSpaceEnemy": gdjs.MainCode.GDSquidSpaceEnemyObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDIcePickObjects1Objects = Hashtable.newFrom({"IcePick": gdjs.MainCode.GDIcePickObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNativeAngryObjects1Objects = Hashtable.newFrom({"NativeAngry": gdjs.MainCode.GDNativeAngryObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDIcePickObjects1Objects = Hashtable.newFrom({"IcePick": gdjs.MainCode.GDIcePickObjects1});
gdjs.MainCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainCode.GDNativeAngryObjects1, gdjs.MainCode.GDNativeAngryObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDNativeAngryObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDNativeAngryObjects2[i].getVariableNumber(gdjs.MainCode.GDNativeAngryObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDNativeAngryObjects2[k] = gdjs.MainCode.GDNativeAngryObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDNativeAngryObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EmoteHeart3"), gdjs.MainCode.GDEmoteHeart3Objects2);
{for(var i = 0, len = gdjs.MainCode.GDEmoteHeart3Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDEmoteHeart3Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(gdjs.MainCode.GDNativeAngryObjects1, gdjs.MainCode.GDNativeAngryObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDNativeAngryObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDNativeAngryObjects2[i].getVariableNumber(gdjs.MainCode.GDNativeAngryObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDNativeAngryObjects2[k] = gdjs.MainCode.GDNativeAngryObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDNativeAngryObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EmoteHeart2"), gdjs.MainCode.GDEmoteHeart2Objects2);
{for(var i = 0, len = gdjs.MainCode.GDEmoteHeart2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDEmoteHeart2Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

/* Reuse gdjs.MainCode.GDNativeAngryObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDNativeAngryObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDNativeAngryObjects1[i].getVariableNumber(gdjs.MainCode.GDNativeAngryObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDNativeAngryObjects1[k] = gdjs.MainCode.GDNativeAngryObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDNativeAngryObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dead"), gdjs.MainCode.GDDeadObjects1);
gdjs.copyArray(runtimeScene.getObjects("EmoteHeart"), gdjs.MainCode.GDEmoteHeartObjects1);
/* Reuse gdjs.MainCode.GDNativeAngryObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDDeadObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDeadObjects1[i].setString("You DIED");
}
}{for(var i = 0, len = gdjs.MainCode.GDDeadObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDeadObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainCode.GDEmoteHeartObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDEmoteHeartObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deadTimer");
}{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects1[i].setAnimationName("Dead");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dead"), gdjs.MainCode.GDDeadObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenUfo2"), gdjs.MainCode.GDGreenUfo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Separator"), gdjs.MainCode.GDSeparatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("UFOSeparator"), gdjs.MainCode.GDUFOSeparatorObjects1);
{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects1[i].returnVariable(gdjs.MainCode.GDNativeAngryObjects1[i].getVariables().getFromIndex(0)).setNumber(3);
}
}{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects1[i].setAnimationName("Idle");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
}{for(var i = 0, len = gdjs.MainCode.GDSeparatorObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSeparatorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDUFOSeparatorObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDUFOSeparatorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDDeadObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDeadObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDGreenUfo2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfo2Objects1[i].resetTimer("firePick");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfEmptyGDGreenUfoObjectsEmptyGDGreenUfo2ObjectsEmptyGDGreenUfo3Objects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9317764);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dead"), gdjs.MainCode.GDDeadObjects1);
{for(var i = 0, len = gdjs.MainCode.GDDeadObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDeadObjects1[i].setString("You WIN");
}
}{for(var i = 0, len = gdjs.MainCode.GDDeadObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDeadObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "winTimer");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "winTimer") >= 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "winTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BlueFloor2"), gdjs.MainCode.GDBlueFloor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dead"), gdjs.MainCode.GDDeadObjects1);
gdjs.copyArray(runtimeScene.getObjects("GrassAndTreeBackground"), gdjs.MainCode.GDGrassAndTreeBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenFloor"), gdjs.MainCode.GDGreenFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenUfo"), gdjs.MainCode.GDGreenUfoObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenUfo2"), gdjs.MainCode.GDGreenUfo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenUfo3"), gdjs.MainCode.GDGreenUfo3Objects1);
gdjs.copyArray(runtimeScene.getObjects("IcePick"), gdjs.MainCode.GDIcePickObjects1);
gdjs.copyArray(runtimeScene.getObjects("Separator"), gdjs.MainCode.GDSeparatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkyWall"), gdjs.MainCode.GDSkyWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("SquidSpaceEnemy"), gdjs.MainCode.GDSquidSpaceEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("UFOSeparator"), gdjs.MainCode.GDUFOSeparatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.MainCode.GDWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall2"), gdjs.MainCode.GDWall2Objects1);
{for(var i = 0, len = gdjs.MainCode.GDIcePickObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDIcePickObjects1[i].setColor("74;144;226");
}
}{for(var i = 0, len = gdjs.MainCode.GDIcePickObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDIcePickObjects1[i].addPolarForce(180, 600, 0);
}
}{for(var i = 0, len = gdjs.MainCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects1[i].addPolarForce(360, 600, 0);
}
}{for(var i = 0, len = gdjs.MainCode.GDGreenFloorObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenFloorObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.MainCode.GDSeparatorObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSeparatorObjects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.MainCode.GDWallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDWallObjects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.MainCode.GDSkyWallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSkyWallObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.MainCode.GDWall2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDWall2Objects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.MainCode.GDSeparatorObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSeparatorObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,0);
}
}{for(var i = 0, len = gdjs.MainCode.GDUFOSeparatorObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDUFOSeparatorObjects1[i].setY((( gdjs.MainCode.GDBlueFloor2Objects1.length === 0 ) ? 0 :gdjs.MainCode.GDBlueFloor2Objects1[0].getY()));
}
}{for(var i = 0, len = gdjs.MainCode.GDSkyWallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSkyWallObjects1[i].setPosition(0,0 - (gdjs.MainCode.GDSkyWallObjects1[i].getHeight()));
}
}{for(var i = 0, len = gdjs.MainCode.GDWallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDWallObjects1[i].setPosition(0 - (gdjs.MainCode.GDWallObjects1[i].getWidth()),0);
}
}{for(var i = 0, len = gdjs.MainCode.GDWall2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDWall2Objects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene),0);
}
}{for(var i = 0, len = gdjs.MainCode.GDGrassAndTreeBackgroundObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGrassAndTreeBackgroundObjects1[i].setSize(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.MainCode.GDGreenFloorObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenFloorObjects1[i].setX(0);
}
}{for(var i = 0, len = gdjs.MainCode.GDGreenUfoObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfoObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDIcePickObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDGreenUfo3Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfo3Objects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDIcePickObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDGreenUfo2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfo2Objects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSquidSpaceEnemyObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDSquidSpaceEnemyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSquidSpaceEnemyObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDIcePickObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDIcePickObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDIcePickObjects1[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.MainCode.GDDeadObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDeadObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MainCode.GDDeadObjects1[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.MainCode.GDDeadObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.MainCode.GDGreenUfoObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfoObjects1[i].addForceTowardObject((gdjs.MainCode.GDGreenUfo2Objects1.length !== 0 ? gdjs.MainCode.GDGreenUfo2Objects1[0] : null), gdjs.randomInRange(10, 50), 1);
}
}{for(var i = 0, len = gdjs.MainCode.GDGreenUfo3Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfo3Objects1[i].addForceTowardObject((gdjs.MainCode.GDGreenUfo2Objects1.length !== 0 ? gdjs.MainCode.GDGreenUfo2Objects1[0] : null), gdjs.randomInRange(10, 50), 1);
}
}{for(var i = 0, len = gdjs.MainCode.GDGreenUfo2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfo2Objects1[i].getBehavior("ObjectSpawner").SetSpawnPeriod(gdjs.randomInRange(5, 10), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDGreenUfoObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfoObjects1[i].getBehavior("ObjectSpawner").SetSpawnPeriod(gdjs.randomInRange(2, 8), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDGreenUfo3Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfo3Objects1[i].getBehavior("ObjectSpawner").SetSpawnPeriod(gdjs.randomInRange(3, 6), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDSquidSpaceEnemyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSquidSpaceEnemyObjects1[i].getBehavior("ObjectSpawner").SetSpawnPeriod(gdjs.randomInRange(1, 10), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenUfo2"), gdjs.MainCode.GDGreenUfo2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDGreenUfo2Objects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDGreenUfo2Objects1[i].getTimerElapsedTimeInSecondsOrNaN("firePick") >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDGreenUfo2Objects1[k] = gdjs.MainCode.GDGreenUfo2Objects1[i];
        ++k;
    }
}
gdjs.MainCode.GDGreenUfo2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDGreenUfo2Objects1 */
gdjs.MainCode.GDIcePickObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDIcePickObjects1Objects, (( gdjs.MainCode.GDGreenUfo2Objects1.length === 0 ) ? 0 :gdjs.MainCode.GDGreenUfo2Objects1[0].getPointX("FirePoint")), (( gdjs.MainCode.GDGreenUfo2Objects1.length === 0 ) ? 0 :gdjs.MainCode.GDGreenUfo2Objects1[0].getPointY("FirePoint")), "");
}{for(var i = 0, len = gdjs.MainCode.GDGreenUfo2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfo2Objects1[i].resetTimer("firePick");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenUfo2"), gdjs.MainCode.GDGreenUfo2Objects1);
{for(var i = 0, len = gdjs.MainCode.GDGreenUfo2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfo2Objects1[i].addPolarForce(270, gdjs.randomInRange(100, 200), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueFloor"), gdjs.MainCode.GDBlueFloorObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBlueFloorObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBlueFloorObjects1[i].addPolarForce(180, gdjs.randomInRange(200, 250), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueFloor2"), gdjs.MainCode.GDBlueFloor2Objects1);
{for(var i = 0, len = gdjs.MainCode.GDBlueFloor2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDBlueFloor2Objects1[i].addPolarForce(360, gdjs.randomInRange(200, 250), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenUfo2"), gdjs.MainCode.GDGreenUfo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("SkyWall"), gdjs.MainCode.GDSkyWallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGreenUfo2Objects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSkyWallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDGreenUfo2Objects1 */
{for(var i = 0, len = gdjs.MainCode.GDGreenUfo2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfo2Objects1[i].addPolarForce(90, gdjs.randomInRange(50, 100), 1);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenUfo2"), gdjs.MainCode.GDGreenUfo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("UFOSeparator"), gdjs.MainCode.GDUFOSeparatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGreenUfo2Objects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDUFOSeparatorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDGreenUfo2Objects1 */
{for(var i = 0, len = gdjs.MainCode.GDGreenUfo2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfo2Objects1[i].addPolarForce(270, gdjs.randomInRange(50, 100), 1);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueFloor"), gdjs.MainCode.GDBlueFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Separator"), gdjs.MainCode.GDSeparatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBlueFloorObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSeparatorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBlueFloorObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDBlueFloorObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBlueFloorObjects1[i].addPolarForce(180, gdjs.randomInRange(200, 250), 1);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueFloor"), gdjs.MainCode.GDBlueFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.MainCode.GDWallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBlueFloorObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDWallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBlueFloorObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDBlueFloorObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBlueFloorObjects1[i].addPolarForce(360, gdjs.randomInRange(200, 250), 1);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueFloor2"), gdjs.MainCode.GDBlueFloor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Separator"), gdjs.MainCode.GDSeparatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBlueFloor2Objects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSeparatorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBlueFloor2Objects1 */
{for(var i = 0, len = gdjs.MainCode.GDBlueFloor2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDBlueFloor2Objects1[i].addPolarForce(180, gdjs.randomInRange(200, 250), 1);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueFloor2"), gdjs.MainCode.GDBlueFloor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.MainCode.GDWallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBlueFloor2Objects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDWallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBlueFloor2Objects1 */
{for(var i = 0, len = gdjs.MainCode.GDBlueFloor2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDBlueFloor2Objects1[i].addPolarForce(360, gdjs.randomInRange(200, 250), 1);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall2"), gdjs.MainCode.GDWall2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDWall2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenUfo"), gdjs.MainCode.GDGreenUfoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGreenUfoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBulletObjects1 */
/* Reuse gdjs.MainCode.GDGreenUfoObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDGreenUfoObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfoObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MainCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\UFO Explode.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenUfo2"), gdjs.MainCode.GDGreenUfo2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGreenUfo2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBulletObjects1 */
/* Reuse gdjs.MainCode.GDGreenUfo2Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\UFOExplode.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDGreenUfo2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfo2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MainCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenUfo3"), gdjs.MainCode.GDGreenUfo3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGreenUfo3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBulletObjects1 */
/* Reuse gdjs.MainCode.GDGreenUfo3Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\UFOExplode.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.MainCode.GDGreenUfo3Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenUfo3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MainCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("SquidSpaceEnemy"), gdjs.MainCode.GDSquidSpaceEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSquidSpaceEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBulletObjects1 */
/* Reuse gdjs.MainCode.GDSquidSpaceEnemyObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSquidSpaceEnemyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSquidSpaceEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MainCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\SquidExplode.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("IcePick"), gdjs.MainCode.GDIcePickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDIcePickObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBulletObjects1 */
/* Reuse gdjs.MainCode.GDIcePickObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDIcePickObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDIcePickObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MainCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\IceFireExplode.wav", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "deadTimer") > 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "deadTimer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("IcePick"), gdjs.MainCode.GDIcePickObjects1);
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDNativeAngryObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDIcePickObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9349948);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDNativeAngryObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects1[i].setAnimationName("Hit");
}
}{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects1[i].returnVariable(gdjs.MainCode.GDNativeAngryObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Hurt.wav", false, 100, 1);
}
{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs.MainCode.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs.MainCode.GDGrassAndTreeBackgroundObjects3.length = 0;
gdjs.MainCode.GDGreenFloorObjects1.length = 0;
gdjs.MainCode.GDGreenFloorObjects2.length = 0;
gdjs.MainCode.GDGreenFloorObjects3.length = 0;
gdjs.MainCode.GDNativeAngryObjects1.length = 0;
gdjs.MainCode.GDNativeAngryObjects2.length = 0;
gdjs.MainCode.GDNativeAngryObjects3.length = 0;
gdjs.MainCode.GDBulletObjects1.length = 0;
gdjs.MainCode.GDBulletObjects2.length = 0;
gdjs.MainCode.GDBulletObjects3.length = 0;
gdjs.MainCode.GDWallObjects1.length = 0;
gdjs.MainCode.GDWallObjects2.length = 0;
gdjs.MainCode.GDWallObjects3.length = 0;
gdjs.MainCode.GDWall2Objects1.length = 0;
gdjs.MainCode.GDWall2Objects2.length = 0;
gdjs.MainCode.GDWall2Objects3.length = 0;
gdjs.MainCode.GDEmoteHeartObjects1.length = 0;
gdjs.MainCode.GDEmoteHeartObjects2.length = 0;
gdjs.MainCode.GDEmoteHeartObjects3.length = 0;
gdjs.MainCode.GDEmoteHeart2Objects1.length = 0;
gdjs.MainCode.GDEmoteHeart2Objects2.length = 0;
gdjs.MainCode.GDEmoteHeart2Objects3.length = 0;
gdjs.MainCode.GDEmoteHeart3Objects1.length = 0;
gdjs.MainCode.GDEmoteHeart3Objects2.length = 0;
gdjs.MainCode.GDEmoteHeart3Objects3.length = 0;
gdjs.MainCode.GDBlueFloorObjects1.length = 0;
gdjs.MainCode.GDBlueFloorObjects2.length = 0;
gdjs.MainCode.GDBlueFloorObjects3.length = 0;
gdjs.MainCode.GDBlueFloor2Objects1.length = 0;
gdjs.MainCode.GDBlueFloor2Objects2.length = 0;
gdjs.MainCode.GDBlueFloor2Objects3.length = 0;
gdjs.MainCode.GDSquidSpaceEnemyObjects1.length = 0;
gdjs.MainCode.GDSquidSpaceEnemyObjects2.length = 0;
gdjs.MainCode.GDSquidSpaceEnemyObjects3.length = 0;
gdjs.MainCode.GDGreenUfoObjects1.length = 0;
gdjs.MainCode.GDGreenUfoObjects2.length = 0;
gdjs.MainCode.GDGreenUfoObjects3.length = 0;
gdjs.MainCode.GDGreenUfo2Objects1.length = 0;
gdjs.MainCode.GDGreenUfo2Objects2.length = 0;
gdjs.MainCode.GDGreenUfo2Objects3.length = 0;
gdjs.MainCode.GDGreenUfo3Objects1.length = 0;
gdjs.MainCode.GDGreenUfo3Objects2.length = 0;
gdjs.MainCode.GDGreenUfo3Objects3.length = 0;
gdjs.MainCode.GDIcePickObjects1.length = 0;
gdjs.MainCode.GDIcePickObjects2.length = 0;
gdjs.MainCode.GDIcePickObjects3.length = 0;
gdjs.MainCode.GDSeparatorObjects1.length = 0;
gdjs.MainCode.GDSeparatorObjects2.length = 0;
gdjs.MainCode.GDSeparatorObjects3.length = 0;
gdjs.MainCode.GDDeadObjects1.length = 0;
gdjs.MainCode.GDDeadObjects2.length = 0;
gdjs.MainCode.GDDeadObjects3.length = 0;
gdjs.MainCode.GDSkyWallObjects1.length = 0;
gdjs.MainCode.GDSkyWallObjects2.length = 0;
gdjs.MainCode.GDSkyWallObjects3.length = 0;
gdjs.MainCode.GDUFOSeparatorObjects1.length = 0;
gdjs.MainCode.GDUFOSeparatorObjects2.length = 0;
gdjs.MainCode.GDUFOSeparatorObjects3.length = 0;

gdjs.MainCode.eventsList2(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
