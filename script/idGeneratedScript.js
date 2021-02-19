function RegisterInteractiveHandlers() {
RegisterButtonEventHandlers();
ProcessAnimations();
ProcessMedia();
}
function ProcessMedia() {
var oFrame = document.getElementsByClassName("_idGenMedia");
for (var i = 0; i < oFrame.length; i++) {
var actions = oFrame[i].getAttribute("data-mediaOnPageLoadActions");
if(actions) {
var descendants = oFrame[i].getElementsByTagName('*');
for(var j = 0; j < descendants.length; j++) {
var e = descendants[j];
var tagName = e.tagName.toLowerCase();
if(tagName == 'video' || tagName == 'audio') {
if(e.paused) {
var selfContainerID = e.id;
eval(actions);
}
}
}
}
}
}
function ProcessAnimations() {
	var oFrame = document.getElementsByClassName("_idGenAnimation");
	for (var i = 0; i < oFrame.length; i++) {
		var actions = oFrame[i].getAttribute("data-animationOnPageLoadActions");
		if(actions) {
			var selfContainerID = oFrame[i].id
			eval(actions);
		}
		var cn = oFrame[i].className;
		if(cn.indexOf("_idGenCurrentState") != -1) {
			var actions = oFrame[i].getAttribute("data-animationOnStateLoadActions");
			if(actions) {
				var selfContainerID = oFrame[i].id
				eval(actions);
			}
		}
		actions = oFrame[i].getAttribute("data-animationOnSelfClickActions");
		if(actions) {
			oFrame[i].addEventListener("touchend", function(event) { onTouchEndForAnimations(this, event) }, false);
			oFrame[i].addEventListener("mouseup", function(event) { onMouseUpForAnimations(this, event) }, false);
		}
		actions = oFrame[i].getAttribute("data-animationOnSelfRolloverActions");
		if(actions) {
			oFrame[i].addEventListener("mouseover", function(event) { onMouseOverForAnimations(this, event) }, false);
		}
	}
	document.body.addEventListener("touchend", function(event) { onPageTouchEndForAnimations(this, event) }, false);
	document.body.addEventListener("mouseup", function(event) { onPageMouseUpForAnimations(this, event) }, false);
}
function onPageTouchEndForAnimations(element, event) {
var oFrame = document.getElementsByClassName("_idGenAnimation");
for (var i = 0; i < oFrame.length; i++) {
var actions = oFrame[i].getAttribute("data-animationOnPageClickActions");
if(actions) {
var selfContainerID = oFrame[i].id;
eval(actions);
event.target.__id_touched = true;
}
}
event.stopPropagation();
}
function onPageMouseUpForAnimations(element, event) {
if (event.target && event.target.__id_touched) {event.target.__id_touched=false; return;}
var oFrame = document.getElementsByClassName("_idGenAnimation");
for (var i = 0; i < oFrame.length; i++) {
var actions = oFrame[i].getAttribute("data-animationOnPageClickActions");
if(actions) {
var selfContainerID = oFrame[i].id;
eval(actions);
}
}
event.stopPropagation();
}
function onTouchEndForAnimations(element, event) {
var classID = element.getAttribute("data-animationObjectType");
var oFrame = document.getElementsByClassName(classID);
for (var i = 0; i < oFrame.length; i++) {
var actions = oFrame[i].getAttribute("data-animationOnSelfClickActions");
if(actions) {
var selfContainerID = oFrame[i].id;
eval(actions);
event.target.__id_touched = true;
}
}
event.stopPropagation();
event.preventDefault();
}
function onMouseUpForAnimations(element, event) {
if (event.target && event.target.__id_touched) {event.target.__id_touched=false; return;}
var classID = element.getAttribute("data-animationObjectType");
var oFrame = document.getElementsByClassName(classID);
for (var i = 0; i < oFrame.length; i++) {
var actions = oFrame[i].getAttribute("data-animationOnSelfClickActions");
if(actions) {
var selfContainerID = oFrame[i].id;
eval(actions);
}
}
event.stopPropagation();
event.preventDefault();
}
function onMouseOverForAnimations(element, event) {
var animationClassName = element.getAttribute("data-idGenAnimationClass");
var cn = element.className;
if (cn.indexOf(animationClassName) != -1 ) {
return;
}
var classID = element.getAttribute("data-animationObjectType");
var oFrame = document.getElementsByClassName(classID);
for (var i = 0; i < oFrame.length; i++) {
var actions = oFrame[i].getAttribute("data-animationOnSelfRolloverActions");
if(actions) {
var selfContainerID = oFrame[i].id;
eval(actions);
}
}
event.stopPropagation();
event.preventDefault();
}
function RegisterButtonEventHandlers() {
var oFrame = document.getElementsByClassName("_idGenButton");
for (var i = 0; i < oFrame.length; i++) {
oFrame[i].addEventListener("touchstart", function(event) { onTouchStart(this, event) }, false);
oFrame[i].addEventListener("touchend", function(event) { onTouchEnd(this, event) }, false);
oFrame[i].addEventListener("mousedown", function(event) { onMouseDown(this, event) }, false);
oFrame[i].addEventListener("mouseup", function(event) { onMouseUp(this, event) }, false);
oFrame[i].addEventListener("mouseover", function(event) { onMouseOver(this, event) }, false);
oFrame[i].addEventListener("mouseout", function(event) { onMouseOut(this, event) }, false);
}
}
function hasAppearance(element, appearance) {
var childArray = element.children;
for(var i=0; i< childArray.length; i++) {
var cn = childArray[i].className;
if(cn.indexOf(appearance) != -1) {
return true;
}
}
return false;
}
function isDescendantOf(child, parent) {
var current = child;
while(current) {
if(current == parent)
return true;
current = current.parentNode;
}
return false;
}
function addClass(element,classname) { 
var cn = element.className;
if (cn.indexOf(classname) != -1 ) {
return;
}
if (cn != '') {
classname = ' ' + classname;
}
element.className = cn + classname;
}
function removeClass(element, classname) {
var cn = element.className;
var rxp = new RegExp("\\s?\\b" + classname + "\\b", "g");
cn = cn.replace(rxp, '');
element.className = cn;
}
function onMouseDown(element, event) {
if (event.target && event.target.__id_touched) {event.target.__id_touched=false; return;}
if (hasAppearance(element, '_idGen-Appearance-Click')) {
addClass(element, '_idGenStateClick');
}
var actions = element.getAttribute("data-clickactions");
if(actions) {
eval(actions);
}
event.stopPropagation();
event.preventDefault();
}
function onMouseUp(element, event) {
if (event.target && event.target.__id_touched) {event.target.__id_touched=false; return;}
removeClass(element, '_idGenStateClick');
var actions = element.getAttribute("data-releaseactions");
if(actions) {
eval(actions);
}
event.stopPropagation();
event.preventDefault();
}
function onMouseOver(element, event) {
if (event.relatedTarget) {
if(isDescendantOf(event.relatedTarget, element)) return;
}
if (hasAppearance(element, '_idGen-Appearance-Rollover')) {
addClass(element, '_idGenStateHover');
}
var actions = element.getAttribute("data-rolloveractions");
if(actions) {
eval(actions);
}
event.stopPropagation();
event.preventDefault();
}
function onMouseOut(element, event) {
if (event.relatedTarget) {
if(isDescendantOf(event.relatedTarget, element)) return;
}
removeClass(element, '_idGenStateHover');
removeClass(element, '_idGenStateClick');
var actions = element.getAttribute("data-rolloffactions");
if(actions) {
eval(actions);
}
event.stopPropagation();
event.preventDefault();
}
function onTouchStart(element, event) {
if (hasAppearance(element, '_idGen-Appearance-Click')) {
addClass(element, '_idGenStateClick');
}
var actions = element.getAttribute("data-clickactions");
if(actions) {
eval(actions);
event.target.__id_touched = true;
}
event.stopPropagation();
event.preventDefault();
}
function onTouchEnd(element, event) {
removeClass(element, '_idGenStateClick');
var actions = element.getAttribute("data-releaseactions");
if(actions) {
eval(actions);
event.target.__id_touched = true;
}
event.stopPropagation();
event.preventDefault();
}
