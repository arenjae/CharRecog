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

function evaluateCanvas(){
    // Save canvas as a bitmap
    // resize to 28 x 28 , convert to numpy array.
    // get biases and weights from text files
    // pass to network

    // $.get('values/weights.txt',function(data){
    //     weights = data.split('],');
    // });



    // var biases = [[[ 0.75367042],
    //     [-1.98232903],
    //     [-6.02438455],
    //     [-1.11645684],
    //     [-0.51486567],
    //     [-1.13614348],
    //     [ 0.87759401],
    //     [-2.29658651],
    //     [-1.93875778],
    //     [ 2.64916244],
    //     [-0.01959318],
    //     [ 3.75780427],
    //     [-3.82270653],
    //     [-0.99194332],
    //     [-4.3617881 ],
    //     [ 1.71847388],
    //     [-1.88656953],
    //     [ 0.35700252],
    //     [-5.6053405 ],
    //     [ 0.56107512],
    //     [ 1.22460975],
    //     [-1.76579728],
    //     [ 0.40221091],
    //     [ 1.17055423],
    //     [ 2.9019542 ],
    //     [-1.16828007],
    //     [ 2.80983109],
    //     [-2.71561958],
    //     [-5.99988858],
    //     [-2.02860761]],
    //
    //     [[-1.17558266],
    //         [-3.78425333],
    //         [-4.94751098],
    //         [-7.84785918],
    //         [-7.72568523],
    //         [-1.88004918],
    //         [-0.3465647 ],
    //         [-6.25915482],
    //         [-7.23179592],
    //         [-1.38264134]]];

    // var weights = $.get('values/weights.txt');

    var dataURL = document.getElementById('drawpad').toDataURL("image/jpeg",1.0);
    var net = new Network();
    $('#output').html(net.evaluate(dataURL));

}