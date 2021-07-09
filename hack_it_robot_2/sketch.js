function setup()
{
	//create a canvas for the robot
	createCanvas(1000, 1000,);
	}

function draw()
{
	strokeWeight(2);
	stroke(255,255,0);
	background(0,0,0);

	// shadow lines
	

	//robot body 1 - delete this code and make your own robot body
	fill(200,100,50);
	rect(90, 600, 120, 130);
	rect(70, 600, 30, 100);
	rect(200, 600, 30, 100);
	rect(120, 730, 30, 110);
	rect(150, 730, 30, 110);

	//robot body 2 - delete this code and make your own robot body
	fill(100,200,50);
	rect(290, 400, 120, 130);
	rect(270, 400, 30, 100);
	rect(400, 400, 30, 100);
	rect(320, 530, 30, 110);
	rect(350, 530, 30, 110);


	//robot body 3 - delete this code and make your own robot body
	fill(50, 100, 200);
	rect(490, 200, 120, 130);
	rect(470, 200, 30, 100);
	rect(600, 200, 30, 100);
	rect(520, 330, 30, 110);
	rect(550, 330, 30, 110);


	// !!! Draw the robot heads - You shouldn't need to change this code !!!

	//robot head 1
	fill(200);
	rect(100, 500, 100, 100, 10);
	
    //robot head 2
	fill(50,100,150);
	rect(300, 300, 100, 100, 10);
    //robot head 3
	fill(100,50,150);
	rect(500, 100, 100, 100, 10);

	//ears
	fill(255, 0, 0);

	//robot ears 1
	rect(93, 530, 10, 33);
	rect(197, 530, 10, 33);

	//robot ears 2
	rect(293, 330, 10, 33);
	rect(397, 330, 10, 33);

	//robot ears 3
	rect(493, 130, 10, 33);
	rect(597, 130, 10, 33);



	//robots' antennas
	fill(250, 250, 0);
    // robot antenna 1
	ellipse(150, 490, 12, 12);
	fill(155,255,0);
    // robot antenna 2
	ellipse(350, 290, 20, 20);
    // robot antenna 3
	fill(45, 65, 105);
	ellipse(550, 93, 30, 30);

    //robots' antennas
	fill(200, 0, 200);
    // robot antenna 1
	rect(140, 497, 40, 10);
    // robot antenna 2
	rect(340, 297, 10, 50);
    // robot antenna 3
	rect(540, 97, 20, 10);


	//robot 1's eyes
	fill(10,10,10);
	arc(125, 530, 26, 26, 0, PI + QUARTER_PI, PIE);
	point(125, 533);
	ellipse(175, 530, 26, 26);
	point(175, 530);
	

	//robot 2's eyes
	fill(100,150,10);
	ellipse(325, 330, 26, 26);
	point(325, 330);
	ellipse(375, 330, 26, 26);
	point(375, 330);

	//robot 3's eyes
	fill(150,100,10);
	ellipse(525, 130, 26, 26);
	point(525, 130);
	arc(575, 130, 26, 26, 0, PI + QUARTER_PI, PIE);
	
	point(575, 133);


	//robots' noses
	fill(255, 0, 0);
    //robot 1 nose
	triangle(150, 535, 135, 560, 165, 560);
    //robot 2 nose
	fill(50,185,75)
	triangle(350, 335, 335, 360, 365, 360);
    //robot 3 nose
	fill(35,75,95);
	triangle(550, 135, 535, 160, 565, 160);

	//robot 1 mouth
	noFill();
	beginShape();
	vertex(128, 575);
	vertex(136, 585);
	vertex(142, 575);
	vertex(150, 585);
	vertex(158, 575);
	vertex(166, 585);
	vertex(174, 575);
	endShape();

	//robot 2 mouth
	beginShape();
	vertex(328, 385);
	vertex(336, 395);
	vertex(342, 375);
	vertex(350, 385);
	vertex(358, 375);
	vertex(366, 385);
	vertex(374, 375);
	endShape();

	//robot 3 mouth
	beginShape();
	vertex(528, 175);
	vertex(536, 185);
	vertex(542, 175);
	vertex(550, 185);
	vertex(558, 175);
	vertex(566, 195);
	vertex(574, 185);
	endShape();

	//lines
	line(187,840,205, 800);
	line(210,800, 190, 800);
	// line 2
	line(390, 640, 415, 500);
	line(305, 640, 285, 500);
	// line 3
	line(585, 440, 605, 400);
	line(605, 400, 590, 400);
	
}