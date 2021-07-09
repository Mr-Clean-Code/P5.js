
var yPos;
var xPos;

function setup() 
{
    
    createCanvas(512,512);
    yPos = 120;
    xPos = 120;

//     text("lets do some sums !" , 20,20);
//     text("lets do some sums !" , 20,40);
//     text("lets do some sums !" , 20,60);
//     text("lets do some sums !" , 20,80);
    

    
//     ellipse(50, yPos, 20,20);
//     yPos = yPos + 20;
//     ellipse(50, yPos + 20, 20,20);
//     yPos = yPos + 20;
//     ellipse(50, yPos + 40, 20,20);
//     yPos = yPos + 20;
//     ellipse(50, yPos + 60, 20,20);
//     yPos = yPos + 20;

//     text("yPos: " + yPos, 30, yPos + 100);
    
}

function draw()
{   
    // makes ellipses every 20 pixels
    // ellipse(50, yPos, 20,20);
    // yPos = yPos + 20;
 
    // makes ellipses every 1 pixel
    // ellipse(50, yPos, 20,20);
    // yPos = yPos + 1;

    // ANIMATED BALL moving down
    // background(255); // this allows the background to be refreshed constantly.
    // ellipse(50, yPos, 20,20);
    // yPos = yPos + 20; // moves the ball down
    // xPos = xPos + 1; // moves the ball across

    // ANIMATED BALL moving across the screen DIAGONALLY
    background(255);
    ellipse(xPos, yPos, 20,20);
    yPos = yPos +1;
    xPos = xPos +1;

    // ANIMATED BALL moving DIAGONALLY VERY FAST
    background(255);
    ellipse(xPos, yPos, 20,20);
    yPos = yPos +4; // increasing this number makes the ball move faster across the screen by skipping larger amounts of pixels
    xPos = xPos +4;

    // ANIMATED BALL moving at a DIFFERENT ANGLE
    background(255);
    ellipse(xPos, yPos, 20,20);
    yPos = yPos +1;
    xPos = xPos +5;

    // ANIMATED BALL MOVING different angle
    background(255);
    ellipse(xPos, yPos, 20,20);
    yPos = yPos - 1;
    xPos = xPos + 2;
}






