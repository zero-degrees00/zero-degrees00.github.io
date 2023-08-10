gdjs.MainCode = {};
gdjs.MainCode.GDGrassAndTreeBackgroundObjects1= [];
gdjs.MainCode.GDGrassAndTreeBackgroundObjects2= [];
gdjs.MainCode.GDGreenFloorObjects1= [];
gdjs.MainCode.GDGreenFloorObjects2= [];
gdjs.MainCode.GDNativeAngryObjects1= [];
gdjs.MainCode.GDNativeAngryObjects2= [];
gdjs.MainCode.GDBulletObjects1= [];
gdjs.MainCode.GDBulletObjects2= [];
gdjs.MainCode.GDGroundSpikeEnemyObjects1= [];
gdjs.MainCode.GDGroundSpikeEnemyObjects2= [];
gdjs.MainCode.GDFloaterEnemyObjects1= [];
gdjs.MainCode.GDFloaterEnemyObjects2= [];
gdjs.MainCode.GDWallObjects1= [];
gdjs.MainCode.GDWallObjects2= [];
gdjs.MainCode.GDWall2Objects1= [];
gdjs.MainCode.GDWall2Objects2= [];


gdjs.MainCode.mapOfEmptyGDBulletObjects = Hashtable.newFrom({"Bullet": []});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfEmptyGDFloaterEnemyObjects = Hashtable.newFrom({"FloaterEnemy": []});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFloaterEnemyObjects1Objects = Hashtable.newFrom({"FloaterEnemy": gdjs.MainCode.GDFloaterEnemyObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFloaterEnemyObjects1Objects = Hashtable.newFrom({"FloaterEnemy": gdjs.MainCode.GDFloaterEnemyObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDWall2Objects1Objects = Hashtable.newFrom({"Wall2": gdjs.MainCode.GDWall2Objects1});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects1);
{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects1);
{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects1[i].setAnimationName("Walk");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects1);
{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects1[i].setAnimationName("Walk");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects1);
{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects1[i].setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects1);
{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects1[i].setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LControl");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects1);
{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects1[i].setAnimationName("Idle");
}
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8456164);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NativeAngry"), gdjs.MainCode.GDNativeAngryObjects1);
gdjs.MainCode.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects, (( gdjs.MainCode.GDNativeAngryObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDNativeAngryObjects1[0].getCenterXInScene()), (( gdjs.MainCode.GDNativeAngryObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDNativeAngryObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.MainCode.GDNativeAngryObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNativeAngryObjects1[i].setAnimationName("Attack");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("GrassAndTreeBackground"), gdjs.MainCode.GDGrassAndTreeBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenFloor"), gdjs.MainCode.GDGreenFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.MainCode.GDWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall2"), gdjs.MainCode.GDWall2Objects1);
{for(var i = 0, len = gdjs.MainCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects1[i].addPolarForce(360, 600, 0);
}
}{for(var i = 0, len = gdjs.MainCode.GDGreenFloorObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGreenFloorObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.MainCode.GDWallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDWallObjects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.MainCode.GDWall2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDWall2Objects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
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
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfEmptyGDFloaterEnemyObjects) < 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenFloor"), gdjs.MainCode.GDGreenFloorObjects1);
gdjs.MainCode.GDFloaterEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFloaterEnemyObjects1Objects, gdjs.randomInRange(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 4, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.MainCode.GDFloaterEnemyObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDFloaterEnemyObjects1[0].getWidth())), gdjs.randomInRange(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (( gdjs.MainCode.GDGreenFloorObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDGreenFloorObjects1[0].getHeight()) + (( gdjs.MainCode.GDFloaterEnemyObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDFloaterEnemyObjects1[0].getHeight())), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("FloaterEnemy"), gdjs.MainCode.GDFloaterEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBulletObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFloaterEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBulletObjects1 */
/* Reuse gdjs.MainCode.GDFloaterEnemyObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDFloaterEnemyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFloaterEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MainCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
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


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 10;
if (isConditionTrue_0) {
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs.MainCode.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs.MainCode.GDGreenFloorObjects1.length = 0;
gdjs.MainCode.GDGreenFloorObjects2.length = 0;
gdjs.MainCode.GDNativeAngryObjects1.length = 0;
gdjs.MainCode.GDNativeAngryObjects2.length = 0;
gdjs.MainCode.GDBulletObjects1.length = 0;
gdjs.MainCode.GDBulletObjects2.length = 0;
gdjs.MainCode.GDGroundSpikeEnemyObjects1.length = 0;
gdjs.MainCode.GDGroundSpikeEnemyObjects2.length = 0;
gdjs.MainCode.GDFloaterEnemyObjects1.length = 0;
gdjs.MainCode.GDFloaterEnemyObjects2.length = 0;
gdjs.MainCode.GDWallObjects1.length = 0;
gdjs.MainCode.GDWallObjects2.length = 0;
gdjs.MainCode.GDWall2Objects1.length = 0;
gdjs.MainCode.GDWall2Objects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
