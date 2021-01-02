const cnv = document.querySelector('canvas');

const ctx = cnv.getContext('2d');

const cnvW = cnv.width = 1200;
const cnvH = cnv.height = 600;

const ballSize = 16;
const centerBall = ballSize / 2;

let positionX = cnvW/2 - ballSize/2;
let positionY = cnvH/2 - ballSize/2;
let ballSpeedX = 4.5;
let ballSpeedY = 3;

function pickup(){
    if (positionX <= centerBall || positionX >= (cnvW - centerBall)){
        ballSpeedX *= -1;
    }
    if (positionY <= centerBall || positionY >= (cnvH - centerBall)){
        ballSpeedY *= -1;
    }
}

function ball(){
    ctx.beginPath();
    ctx.arc(positionX,positionY, ballSize/2, 0, 2*Math.PI);
    ctx.fillStyle = 'lime';
    ctx.fill();
    ctx.closePath();
    positionX = positionX + ballSpeedX;
    positionY = positionY + ballSpeedY;
    pickup();
}

function court() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,cnvW,cnvH);
}

function playerRocket(){
    ctx.fillStyle = 'green';
    ctx.fillRect(20,150,20,150);
}

function computerRocket(){
    ctx.fillStyle = 'blue';
    ctx.fillRect(1160,250,20,150);
}

function start(){
court();
ball();
playerRocket();
computerRocket();
}

setInterval(start, 15);