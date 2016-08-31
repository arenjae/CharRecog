/**
 * Created by rae on 8/19/16.
 */

var $canvas;
var ctx;
var paint;
var clickX = [];
var clickY = [];
var clickDrag = [];



document.getElementById('drawpad').style.cursor = "crosshair";
$canvas = $('#drawpad');
ctx = document.getElementById('drawpad').getContext('2d');


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
    clickDrag = [];
});

$canvas.mouseleave(function(){
    paint = false;
});


function addClick(x, y, dragging)
{
    clickX[0]=clickX[1];
    clickY[0]=clickY[1];
    clickX[1]=x;
    clickY[1]=y;
    clickDrag.push(dragging);
}

function clearCanvas(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
    document.getElementById('output').innerHTML='';
}

function redraw(){

    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 5;
    ctx.moveTo(clickX[0], clickY[0]);
    ctx.lineTo(clickX[1], clickY[1]);
    ctx.stroke();
    ctx.closePath();
}

function evaluateCanvas(){
    //
    // var dataURL = document.getElementById('drawpad').toDataURL("image/jpeg",1.0);
    // var net = new Network();
    // $('#output').html(net.evaluate(dataURL));

}