var mouse_event="";
var last_position_of_x;
var last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color="red";
var width_of_line=2;
var raidus=20;

canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e){
    mouse_event="mouse_down";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouse_event="mouse_up";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouse_event="mouse_leave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mouse_down") {
        ctx.beginPath();
        ctx.strokeSttyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        console.log("Current posititon of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, raidus, 0, 2*Math.PI);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}