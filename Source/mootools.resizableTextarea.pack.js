/*
---

script: mootools.resizableTextarea.js

description: Resizable (as in webkit) textarea for MooTools.

license: MIT-style license

authors:
- Sergii Kashcheiev

requires:
- core/1.2.4: Events
- core/1.2.4: Options

provides: [resizableTextarea]

...
*/
var resizableTextarea=new Class({Version:"1.0",Implements:[Options],options:{handler:".handler",maxWidth:600,maxHeight:400,verticalOnly:false,onResizeClass:"resize"},initialize:function(B,A){this.holder=B;this.setOptions(A);this.holder.each(function(D,C){D.textarea=D.getElement("textarea");D.textarea.width=D.textarea.getWidth();D.textarea.height=D.textarea.getHeight();if(this.options.maxWidth<D.textarea.width){this.options.maxWidth=D.textarea.width}if(this.options.maxHeight<D.textarea.height){this.options.maxHeight=D.textarea.height}D.handler=D.getElement(this.options.handler);if(D.handler==null){D.handler=new Element("span",{"class":"handler"});D.handler.inject(D.textarea,"after")}D.textarea.setStyles({resize:"none"});D.handler.left=D.textarea.width-D.handler.getPosition(D).x;D.handler.top=D.textarea.height-D.handler.getPosition(D).y;D.handler.pressed=false;D.handler.addEvent("mousedown",function(E){if(!(document.uniqueID&&document.compatMode&&!window.XMLHttpRequest)){document.onselectstart=function(){return false};document.onmousedown=function(){return false}}if(Browser.Engine.trident){D.handler.setCapture()}else{document.addEvent("mousemove",function(F){D.handler.fireEvent("mousemove",F)});document.addEvent("mouseup",function(){D.handler.fireEvent("mouseup")})}D.handler.pressed=true;D.handler.x=E.page.x-D.handler.getPosition().x-D.handler.left;D.handler.y=E.page.y-D.handler.getPosition().y-D.handler.top;D.addClass(this.options.onResizeClass)}.bind(this));D.handler.addEvent("mouseup",function(){if(!(document.uniqueID&&document.compatMode&&!window.XMLHttpRequest)){document.onmousedown=null;document.onselectstart=null}if(Browser.Engine.trident){D.handler.releaseCapture()}else{document.removeEvent("mousemove",function(E){D.handler.fireEvent("mousemove",E)});document.removeEvent("mouseup",function(){D.handler.fireEvent("mousemove")})}D.handler.pressed=false;D.removeClass(this.options.onResizeClass)}.bind(this));D.handler.addEvent("mousemove",function(E){if(D.handler.pressed){D.textarea.newHeight=E.page.y-D.getPosition().y-D.handler.y;D.textarea.newWidth=E.page.x-D.getPosition().x-D.handler.x;if(D.textarea.newWidth<this.options.maxWidth&&D.textarea.newWidth>D.textarea.width){D.textarea.newWidth=D.textarea.newWidth}else{if(D.textarea.newWidth<=D.textarea.width){D.textarea.newWidth=D.textarea.width}else{D.textarea.newWidth=this.options.maxWidth}}if(D.textarea.newHeight<this.options.maxHeight&&D.textarea.newHeight>D.textarea.height){D.textarea.newHeight=D.textarea.newHeight}else{if(D.textarea.newHeight<=D.textarea.height){D.textarea.newHeight=D.textarea.height}else{D.textarea.newHeight=this.options.maxHeight}}D.textarea.setStyles({height:D.textarea.newHeight});D.handler.setStyles({top:D.textarea.newHeight-D.handler.top-D.getStyle("border-top-width").toInt()});if(!this.options.verticalOnly){D.textarea.setStyles({width:D.textarea.newWidth});D.handler.setStyles({left:D.textarea.newWidth-D.handler.left-D.getStyle("border-left-width").toInt()})}}}.bind(this))}.bind(this))}});