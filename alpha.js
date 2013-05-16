// 3DS Content Converter 
// by Alexey Chistyakov
// Started on 01.02.2013

// Known issues:
// 1. Some js scripts might not work and need to be triggered once again
// 2. Chrome has the anti-aliasing bug issue when elements are transformed

// ==============================================================================


$.ajaxSetup({ cache: false }); // Prevents caching

// Global vars

var jsURLs = [];
var zPlaneShiftedObjs = [];
var inputParams = [];

function loadCloneContent( objArr ) {
	
	var cloneContentURL = "j/3dsjq/cloneContent.js";   
	
	$.getScript(cloneContentURL, function(){
		console.log("cloneContent() is loaded ...");
		cloneContent();
		loadStylesAdaptation();
	});
	
}

function loadStylesAdaptation() {
	
	var stylesAdaptationURL = "j/3dsjq/stylesAdaptation.js";   
	
	$.getScript(stylesAdaptationURL, function(){
		console.log("stylesAdaptation() is loaded ...");
		stylesAdaptation();
		loadZPlaneBuilder();
		loadMirroring();
		loadScripts(jsURLs);
		loadContentOverlayBuilder();
	});
	
}

function loadMirroring() {

	var buildMirroringURL = "j/3dsjq/buildMirroring.js";   
	
	$.getScript(buildMirroringURL, function(){
		console.log("buildMirroring() is loaded ...");
		buildMirroring();
	});
	
}

function loadZPlaneBuilder() {

	var buildZPlaneURL = "j/3dsjq/buildZPlane.js";
	$.getScript(buildZPlaneURL, function(){
		console.log("buildZPlane() is loaded ...");
		buildZPlane();
	});
	
}

function loadContentOverlayBuilder() {

	var buildContentOverlayURL = "j/3dsjq/buildContentOverlay.js";
	$.getScript(buildContentOverlayURL, function(){
		console.log("buildContentOverlay() is loaded ...");
	});
	
}

function loadScripts(jsURLs) {
	
	$.each(jsURLs, function(key, URL){
		$.getScript(URL, function(){
			console.log(URL + " is loaded ...");
		});
	});
	
}

function go3DS( objArr, params ) {
	
	if ( objArr ) {
		zPlaneShiftedObjs = objArr;
	}
	
	if ( params ) {
		inputParams = params;
	}
	
	loadCloneContent();
	
}
