/**
 * Created by rae on 8/19/16.
 */

var paint;
var clickX = [];
var clickY = [];
var clickDrag = [];

var context = document.getElementById('drawpad').getContext("2d");
document.getElementById('drawpad').style.cursor = "crosshair";

$canvas = $('#drawpad');

$canvas.mousedown(function(e){
    paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
});


$canvas.mousemove(function(e){
    if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw();
    }
});

$canvas.mouseup(function(){
    paint = false;
});

$canvas.mouseleave(function(){
    paint = false;
});


function addClick(x, y, dragging)
{
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
}

function clearCanvas(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
}

function redraw(){

    context.strokeStyle = '#000000';
    context.lineJoin = "round";
    context.lineCap = "round";
    context.lineWidth = 5;

    for(var i=0; i < clickX.length; i++) {
        context.beginPath();
        if(clickDrag[i] && i){
            context.moveTo(clickX[i-1], clickY[i-1]);
        }else{
            context.moveTo(clickX[i]-1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.stroke();
    }
}