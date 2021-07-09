
// MOVES THE MAGENTA BALL ACROSS THE SCREEN W/ A GRAY BACKGROUND
var a = 0;

function setup()
{
	createCanvas(500, 500);
}

function draw()
{
	background(200);
	fill(255, 0, 255);
	ellipse(a, a, 100, 100);
	a += 1;

}






// DRAW ON THE GRAY SQUARE
// function setup()
// {
// 	createCanvas(800, 800);
// 	background(160,160,160);
// 	frameRate(30);
// }



// function draw()
// {	
// 	strokeWeight(4);
// 	stroke(153,255,255);
// 	ellipse(mouseX, mouseY,1,1);
// 	// connect the dots
// 	stroke(153,255,255);
// 	strokeWeight(4);
// 	line(mouseX, mouseY, pmouseX, pmouseY);
// 	print(pmouseX + ' -> ' + mouseX);
// }

// function mousePressed()
// {	
// 	strokeWeight(1);
// 	stroke(255,0,0);
// }

