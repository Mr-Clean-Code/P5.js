function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
	
	
}

function draw()

{	
	line(100,80,320,250);
	fill(200,0,0);
  triangle(100,100,150,50,200,100);
  triangle(200,200,250,150,200,100);
	
	//background
	background(0);
	

	//random lines
	bezier(100, 400, 20, 100, 100, 0, 100, 0, 0, 0, 100, 0);
	line(80, 180, 180, 100);
	

	// new lines
	strokeWeight(2);

	//robots jaw
	fill(128,128,128);
	triangle(130, 250, 250, 100, 370, 250);
	triangle(130, 250, 250, 375, 370, 250);
	triangle(185, 400, 250, 100, 320, 400);
	
	//robots head
	fill(64, 64, 64);
	ellipse(250, 180, 200, 300, 20);


	//robots antenna
	fill(102, 0, 51);
	ellipse(250, 70, 60, 60);
	quad(250, 95, 86, 20, 69, 63, 30, 76);
	fill(255, 255, 51);
	quad(500, 180, 160, 40, 148, 126, 60, 152);
	fill(255, 255, 51);
	rect(210, 80, 80, 30);
	rect(210, 80, 20, 15);
	rect(270, 80, 20, 15);

	// LEFT ARC additions
	fill(255);
	arc(175, 190, 80, 80, 0, PI + QUARTER_PI, PIE);
		
	// RIGHT ARC additions
	fill(255,104,100);
	arc(325, 190, 50, 50, 0, HALF_PI);
	strokeWeight(8);
		arc(325, 190, 60, 60, HALF_PI, PI);
	arc(325, 195, 70, 70, PI, PI + QUARTER_PI);
	arc(325, 195, 80, 80, PI + QUARTER_PI, TWO_PI);
	

	//robots eyes
	fill(204, 0,0);
	ellipse(175, 200, 30, 20);
	point(175, 200);
	ellipse(325, 200, 30, 20);
	point(325, 200);
	stroke(255, 204, 0);

	//robots nose
	fill(150, 10, 100);

	//circle(10, 10, 10);
	triangle(240, 210, 210, 310, 310, 310);

	//robots ears
	rect(80, 180, 30, 100);
	rect(390, 180, 30, 100);

	//robots mouth
	fill(255,255,255);
	beginShape();
	vertex(175, 340);
	vertex(200, 370);
	vertex(225, 340);
	vertex(250, 370);
	vertex(275, 340);
	vertex(300, 370);
	vertex(325, 340);
	endShape(); 


}