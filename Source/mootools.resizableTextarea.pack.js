/*
---

script: mootools.resizableTextarea.js

description: Resizable (as in webkit) textarea for MooTools

license: MIT-style license

authors:
- Sergii Kashcheiev

requires:
- core/1.2.4: Events
- core/1.2.4: Options

provides: [resizableTextarea]

...
*/
var resizableTextarea=new Class({Version:"1.1",Implements:[Options],options:{handler:".handler",modifiers:{x:true,y:true},size:{x:[50,500],y:[50,500]},onResizeClass:"resize",onStart:function(A){},onEnd:function(A){},onResize:function(A){}},initialize:function(B,A){this.holder=B;this.setOptions(A);this.holder.each(function(D,C){D.textarea=D.getElement("textarea");D.textarea.width=D.textarea.getWidth();D.textarea.height=D.textarea.getHeight();if(this.options.modifiers.x){if(this.options.size.x[0]>this.options.size.x[1]){this.options.size.x[0]=this.options.size.x[1]}if(D.textarea.width<this.options.size.x[0]){D.textarea.setStyle("width",this.options.size.x[0]);D.textarea.width=this.options.size.x[0]}else{if(D.textarea.width>this.options.size.x[1]){D.textarea.setStyle("width",this.options.size.x[1]);D.textarea.width=this.options.size.x[1]}}}if(this.options.modifiers.y){if(this.options.size.y[0]>this.options.size.y[1]){this.options.size.y[0]=this.options.size.y[1]}if(D.textarea.height<this.options.size.y[0]){D.textarea.setStyle("height",this.options.size.y[0]);D.textarea.height=this.options.size.y[0]}else{if(D.textarea.height>this.options.size.y[1]){D.textarea.setStyle("height",this.options.size.y[1]);D.textarea.height=this.options.size.y[1]}}}D.handler=D.getElement(this.options.handler);if(D.handler==null){D.handler=new Element("span",{"class":"handler"});D.handler.inject(D.textarea,"after")}D.textarea.setStyles({resize:"none"});D.handler.left=D.textarea.width-D.handler.getPosition(D).x;D.handler.top=D.textarea.height-D.handler.getPosition(D).y;D.handler.pressed=false;D.handler.addEvent("mousedown",function(E){if(!(document.uniqueID&&document.compatMode&&!window.XMLHttpRequest)){document.onselectstart=function(){return false};document.onmousedown=function(){return false}}if(Browser.Engine.trident){D.handler.setCapture()}else{document.addEvent("mousemove",function(F){D.handler.fireEvent("mousemove",F)});document.addEvent("mouseup",function(){D.handler.fireEvent("mouseup")})}D.handler.pressed=true;D.handler.x=E.page.x-D.handler.getPosition().x-D.handler.left;D.handler.y=E.page.y-D.handler.getPosition().y-D.handler.top;D.addClass(this.options.onResizeClass);this.options.onStart(D)}.bind(this));D.handler.addEvent("mouseup",function(){if(!(document.uniqueID&&document.compatMode&&!window.XMLHttpRequest)){document.onmousedown=null;document.onselectstart=null}if(Browser.Engine.trident){D.handler.releaseCapture()}else{document.removeEvent("mousemove",function(E){D.handler.fireEvent("mousemove",E)});document.removeEvent("mouseup",function(){D.handler.fireEvent("mousemove")})}D.handler.pressed=false;D.removeClass(this.options.onResizeClass);this.options.onEnd(D)}.bind(this));D.handler.addEvent("mousemove",function(E){if(D.handler.pressed){if(this.options.modifiers.x){D.textarea.newWidth=E.page.x-D.getPosition().x-D.handler.x;if(D.textarea.newWidth<this.options.size.x[1]&&D.textarea.newWidth>this.options.size.x[0]){D.textarea.newWidth=D.textarea.newWidth}else{if(D.textarea.newWidth<=this.options.size.x[0]){D.textarea.newWidth=this.options.size.x[0]}else{D.textarea.newWidth=this.options.size.x[1]}}D.textarea.setStyle("width",D.textarea.newWidth);D.handler.setStyle("left",D.textarea.newWidth-D.handler.left-D.getStyle("border-left-width").toInt())}if(this.options.modifiers.y){D.textarea.newHeight=E.page.y-D.getPosition().y-D.handler.y;if(D.textarea.newHeight<this.options.size.y[1]&&D.textarea.newHeight>this.options.size.y[0]){D.textarea.newHeight=D.textarea.newHeight}else{if(D.textarea.newHeight<=this.options.size.y[0]){D.textarea.newHeight=this.options.size.y[0]}else{D.textarea.newHeight=this.options.size.y[1]}}D.textarea.setStyle("height",D.textarea.newHeight);D.handler.setStyle("top",D.textarea.newHeight-D.handler.top-D.getStyle("border-top-width").toInt())}this.options.onResize(D)}}.bind(this))}.bind(this))}});