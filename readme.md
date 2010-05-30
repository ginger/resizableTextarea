resizableTextarea
=================

Resizable (+ as in webkit) textarea for MooTools

Cross Browser: IE6+, FF3+, Safari3+, Opera9+, Chrome

![Screenshot](http://juverman.narod.ru/resizableTextarea/screen.png)

How to use
----------
	HTML
	-----------
	'<div class="textarea">'
		'<textarea cols="40" rows="5"></textarea>'
	'</div>'
	
	CSS
	-----------
	.textarea {
		padding: 5px 5px 16px;
		margin: 0 0 11px;
		border: 1px solid #808080;
		display: inline-block;
		position: relative;
	}
	.textarea textarea {
		margin: 0;
		padding: 0;
		float: left;
		width: 400px;
		height: 100px;
		border: 0;
		font: 12px/15px Arial, Helvetica, sans-serif;
		resize: none;
		overflow: auto;
		background: none;
	}
	.textarea .handler {
		position: absolute;
		bottom: 3px;
		right: 3px;
		width: 11px;
		height: 11px;
		background: url(../images/ico-handler.gif) no-repeat;
		overflow: hidden;
		cursor: se-resize;
	}
	
	JavaScript:
	-----------
	window.addEvent("domready", function() {
        var textarea = new resizableTextarea(element [, options]);
    });
	
	Arguments:
	----------
		- element [element] - reference to the elements object
		- options [object]
			- handler [string] - class or node for handler. Default ".handler"
			- onResizeClass [string] - class for textarea during resizing. Default "resize"
			- maxWidth [integer] - max width of textarea. Default 600
			- maxHeight [integer] - max height of textarea. Default 400
			- verticalOnly [boolean] - only vertical resizing mode. Default false
			
Screenshots
-----------
![Screenshot](http://juverman.narod.ru/resizableTextarea/screen-1.jpg)