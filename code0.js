gdjs.GamePlayCode = {};
gdjs.GamePlayCode.GDredbgObjects1= [];
gdjs.GamePlayCode.GDredbgObjects2= [];
gdjs.GamePlayCode.GDbluebgObjects1= [];
gdjs.GamePlayCode.GDbluebgObjects2= [];
gdjs.GamePlayCode.GDtictacgridObjects1= [];
gdjs.GamePlayCode.GDtictacgridObjects2= [];
gdjs.GamePlayCode.GDcrossObjects1= [];
gdjs.GamePlayCode.GDcrossObjects2= [];
gdjs.GamePlayCode.GDcircleObjects1= [];
gdjs.GamePlayCode.GDcircleObjects2= [];

gdjs.GamePlayCode.conditionTrue_0 = {val:false};
gdjs.GamePlayCode.condition0IsTrue_0 = {val:false};
gdjs.GamePlayCode.condition1IsTrue_0 = {val:false};
gdjs.GamePlayCode.condition2IsTrue_0 = {val:false};


gdjs.GamePlayCode.eventsList0 = function(runtimeScene) {

{


gdjs.GamePlayCode.condition0IsTrue_0.val = false;
gdjs.GamePlayCode.condition1IsTrue_0.val = false;
{
gdjs.GamePlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.GamePlayCode.condition0IsTrue_0.val ) {
{
gdjs.GamePlayCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}}
if (gdjs.GamePlayCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.GamePlayCode.GDcircleObjects1);
gdjs.copyArray(runtimeScene.getObjects("cross"), gdjs.GamePlayCode.GDcrossObjects1);
{for(var i = 0, len = gdjs.GamePlayCode.GDcrossObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDcrossObjects1[i].setPosition(0,225);
}
}{for(var i = 0, len = gdjs.GamePlayCode.GDcircleObjects1.length ;i < len;++i) {
    gdjs.GamePlayCode.GDcircleObjects1[i].setPosition(660,225);
}
}}

}


};

gdjs.GamePlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GamePlayCode.GDredbgObjects1.length = 0;
gdjs.GamePlayCode.GDredbgObjects2.length = 0;
gdjs.GamePlayCode.GDbluebgObjects1.length = 0;
gdjs.GamePlayCode.GDbluebgObjects2.length = 0;
gdjs.GamePlayCode.GDtictacgridObjects1.length = 0;
gdjs.GamePlayCode.GDtictacgridObjects2.length = 0;
gdjs.GamePlayCode.GDcrossObjects1.length = 0;
gdjs.GamePlayCode.GDcrossObjects2.length = 0;
gdjs.GamePlayCode.GDcircleObjects1.length = 0;
gdjs.GamePlayCode.GDcircleObjects2.length = 0;

gdjs.GamePlayCode.eventsList0(runtimeScene);
return;

}

gdjs['GamePlayCode'] = gdjs.GamePlayCode;
