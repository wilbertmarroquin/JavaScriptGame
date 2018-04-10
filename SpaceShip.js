var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed =false;
var paddleHeight = 50;
var paddleWidth = 50;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleY = (canvas.height-paddleHeight)/2;
document.addEventListener("keydown", keyHDownHandler, false);
document.addEventListener("keyup", keyHUpHandler, false);
document.addEventListener("keydown", keyVDownHandler, false);
document.addEventListener("keyup", keyVUpHandler, false);
document.addEventListener("keydown", DSpaceHandler, false);
document.addEventListener("keyup", USpaceHandler, false);

class SpaceShip {
	constructor(state , ctp){
		this.state = 0;
		this.ctp = ctp;
	}
	drawSpaceShip() {
		this.ctp.beginPath();
	    this.ctp.rect(paddleX, paddleY, paddleWidth, paddleHeight);
	    this.ctp.fillStyle = "#0095DD";
	    this.ctp.fill();
	    this.ctp.closePath();
	}
}
//--------------------------------------------------
function DSpaceHandler(e){
	if(e.keyCode == 32) {
        spacePressed = true;
    }
}
function USpaceHandler(e) {
    if(e.keyCode == 32) {
        spacePressed = false;
    }
}
//------------------------------------------
function keyHDownHandler(e){
	if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyHUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
//----------------------------------------------------
function keyVDownHandler(e){
	if(e.keyCode == 38) {
        upPressed = true;
    }
    else if(e.keyCode == 40) {
        downPressed = true;
    }
}
function keyVUpHandler(e) {
    if(e.keyCode == 38) {
        upPressed = false;
    }
    else if(e.keyCode == 40) {
        downPressed = false;
    }
}
var Player = new SpaceShip(0,ctx);
function draw() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	Player.drawSpaceShip();
	if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    if(downPressed && paddleY < canvas.height-paddleHeight) {
        paddleY += 7;
    }
    else if(upPressed && paddleY > 0) {
        paddleY -= 7;
    }
    if(spacePressed) {
        ctx.beginPath();
		ctx.arc(paddleX+25, paddleY+25, 20, 0, Math.PI*2, false);
		ctx.fillStyle = "green";
		ctx.fill();
		ctx.closePath();
    }
	x+=dx;
	y+=dy;
}

setInterval(draw, 10);