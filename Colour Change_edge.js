/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['rosario, sans-serif']='<script src=\"http://use.edgefonts.net/rosario:n7,i7,i4,n4:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Tub',
                type: 'image',
                rect: ['24.6%', '29.3%','50.7%','614px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"Tub.jpg",'0px','0px']
            },
            {
                id: 'Purple',
                type: 'image',
                rect: ['29.8%', '49%','38.5%','429px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Purple.png",'0px','0px']
            },
            {
                id: 'Pink',
                type: 'image',
                rect: ['29.8%', '49.1%','38.5%','429px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Pink.png",'0px','0px']
            },
            {
                id: 'tab',
                type: 'image',
                rect: ['45%', '26.2%','9.9%','99px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tab.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Tub}": [
                ["style", "top", '29.3%'],
                ["style", "opacity", '1'],
                ["style", "left", '24.6%']
            ],
            "${_Purple}": [
                ["style", "top", '43.1%'],
                ["style", "opacity", '0'],
                ["style", "left", '30%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "min-width", '200px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '1000px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
                ["style", "width", '1000px']
            ],
            "${_Pink}": [
                ["style", "top", '43.1%'],
                ["style", "opacity", '0'],
                ["style", "left", '30%']
            ],
            "${_tab}": [
                ["style", "top", '9.3%'],
                ["style", "right", 'auto'],
                ["style", "opacity", '1'],
                ["style", "bottom", 'auto'],
                ["style", "height", '99px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '45%'],
                ["style", "width", '9.9%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 31000,
            autoPlay: true,
            timeline: [
                { id: "eid499", tween: [ "style", "${_Pink}", "top", '43.1%', { fromValue: '43.1%'}], position: 1000, duration: 0 },
                { id: "eid443", tween: [ "subproperty", "${_tab}", "filter.blur", '2px', { fromValue: '0px'}], position: 2661, duration: 339 },
                { id: "eid444", tween: [ "subproperty", "${_tab}", "filter.blur", '0px', { fromValue: '2px'}], position: 26000, duration: 1148 },
                { id: "eid4", tween: [ "style", "${_Stage}", "width", '1000px', { fromValue: '1000px'}], position: 1000, duration: 0 },
                { id: "eid521", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 6867, duration: 0, easing: "easeInQuint" },
                { id: "eid502", tween: [ "style", "${_Purple}", "top", '43.1%', { fromValue: '43.1%'}], position: 1000, duration: 0 },
                { id: "eid508", tween: [ "style", "${_tab}", "left", '45%', { fromValue: '45%'}], position: 1000, duration: 0 },
                { id: "eid509", tween: [ "style", "${_tab}", "left", '45%', { fromValue: '45%'}], position: 3000, duration: 0 },
                { id: "eid516", tween: [ "style", "${_Purple}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 3000 },
                { id: "eid517", tween: [ "style", "${_Purple}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 5000 },
                { id: "eid514", tween: [ "style", "${_Pink}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 5000 },
                { id: "eid515", tween: [ "style", "${_Pink}", "opacity", '0', { fromValue: '1'}], position: 19000, duration: 9000 },
                { id: "eid3", tween: [ "gradient", "${_Stage}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 1000, duration: 0 },
                { id: "eid437", tween: [ "style", "${_tab}", "top", '75.1%', { fromValue: '9.3%'}], position: 1000, duration: 2000, easing: "easeInQuint" },
                { id: "eid438", tween: [ "style", "${_tab}", "top", '9.3%', { fromValue: '75.1%'}], position: 11000, duration: 15000 },
                { id: "eid439", tween: [ "style", "${_tab}", "top", '9.3%', { fromValue: '9.3%'}], position: 29371, duration: 0 },
                { id: "eid440", tween: [ "style", "${_tab}", "opacity", '0.7', { fromValue: '1'}], position: 1000, duration: 2000 },
                { id: "eid441", tween: [ "style", "${_tab}", "opacity", '0', { fromValue: '0.7'}], position: 5000, duration: 3000 },
                { id: "eid442", tween: [ "style", "${_tab}", "opacity", '1', { fromValue: '0'}], position: 29000, duration: 371 },
                { id: "eid511", tween: [ "style", "${_Purple}", "left", '30%', { fromValue: '30%'}], position: 1000, duration: 0 },
                { id: "eid510", tween: [ "style", "${_Pink}", "left", '30%', { fromValue: '30%'}], position: 1000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-11389168");
