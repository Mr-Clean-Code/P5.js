function setup()
{
	//create your canvas here
	createCanvas(800,800);
}

function draw()
{
	//do your drawing here
	// background
	background(255,229,204, 15);


	
	//cross lines / triangles
	noStroke();
	fill(255,204,255, 20);
	triangle(-8,0, 1500, 1050, 800, 950);
	fill(204,229,255, 25);
	triangle(805,0, -100, 900, -50, 950);
	
	//top left lines
	strokeWeight(5);
	stroke(0,0,0, 15);
	line(170, 200, 225, 255);
	line(175, 195, 230, 250);
	line(180, 190, 235, 245);
	line(160, 170, 250, 230);
	line(185, 185, 240, 250);
	line(190, 205, 240, 240);
	
	//top right lines
	strokeWeight(10);
	stroke(51,255,51, 10);
	line(540, 200, 525,255);
	line(555, 205, 540,260);
	line(570, 210, 555,265);
	line(585, 215, 570,270);
	line(505, 185, 590, 260);

	//bottom left lines
	strokeWeight(7);
	stroke(255, 51, 51, 8);
	line(180, 550, 230, 615);
	line(185, 540, 245, 605);
	line(190, 530, 260, 600);
	line(205, 525, 275, 555);
	line(195, 520, 290, 550);

	//middle_lines
	strokeWeight(5);
	stroke(51,51,255, 10);
	line(400,400, 550, 650);
	line(400,400, 560, 640);
	line(400,400, 570, 630);
	line(400,400, 580, 620);
	line(400,400, 590, 610);

	//random_cross lines
	strokeWeight(15);
	stroke(0,0,0, 5);
	line(160, 170, 605, 615);
	line(130, 350, 680, 400);
	line(130, 560, 550, 245);
	line(305, 150, 200, 600);
	line(605, 160, 405, 700);

	// big circle
	strokeWeight(20);
	stroke(0,0,0, 4);
	fill(0,0,0, 2);
	ellipse(400, 400, 680, 680); 

	//top right_random circles
	strokeWeight(2);
	stroke(0,0,0, 20);
	noFill();
	ellipse(525,255, 30,30);
	ellipse(525,255, 60,60);
	ellipse(540,200, 80,80);
	strokeWeight(1);
	stroke(101,51,51, 25);
	fill(255,0,0, 10);
	ellipse(500,200, 100,100);

	//top left_random circles
	strokeWeight(2);
	stroke(0,0,0, 20);
	noFill();
	ellipse(155,255, 30,30);
	ellipse(185,255, 60,60);
	ellipse(200,200, 80,80);
	strokeWeight(1);
	stroke(101,51,51, 25);
	fill(0,255,0, 10);
	ellipse(220,200, 100,100);

	//bottom right_random circles
	strokeWeight(2);
	stroke(0,0,0, 20);
	noFill();
	ellipse(525,555, 30,30);
	ellipse(525,555, 60,60);
	ellipse(540,500, 80,80);
	strokeWeight(1);
	stroke(101,51,51, 25);
	fill(0,0,255, 10);
	ellipse(500,500, 100,100);

	//bottom left_random circles
	strokeWeight(2);
	stroke(0,0,0, 20);
	noFill();
	ellipse(185,555, 30,30);
	ellipse(175,555, 60,60);
	ellipse(240,500, 80,80);
	strokeWeight(1);
	stroke(101,51,51, 25);
	fill(200,200,0, 10);
	ellipse(230,520, 100,100);

	//middle_random circles
	strokeWeight(2);
	stroke(0,0,0, 20);
	noFill();
	ellipse(385,455, 30,30);
	ellipse(375,445, 60,60);
	ellipse(340,400, 80,80);
	strokeWeight(1);
	stroke(101,51,51, 25);
	fill(100,200,0, 10);
	ellipse(330,420, 100,100);
	

	//random_points
	point(300, 200);
	point(385, 200);
	stroke('purple');
	strokeWeight(10);
	point(485, 275);
	point(430, 275);
	point(250,150);
	point(600, 475);
	point(523, 342);
	point(289, 589);
	point(189, 175);
	point(143, 278);
	point(130, 578);

}