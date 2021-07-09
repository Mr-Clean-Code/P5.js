function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{

	//set the fill colour to red
	fill(255, 0, 0);
	
	//set a thick stroke weight for the black lines
	strokeWeight(5);

	//draw the red rectangle 
	rect(320, 50, 300, 600);
	rect(100, 50, 600, 300);
	
	// small white rectangles
	fill(255, 255, 255);
	rect(60, 50, 100, 50);
	rect(80, 120, 65, 55);
	rect(100, 180, 85, 33);

	// 3rd rectangle
	fill(255, 255, 255,);
	rect(90, 250, 100, 300);

	// 4th rectangle
	fill(0, 128, 255);
	rect(40, 500, 100, 150);

	// Bottom_left  squares
	fill(255, 255, 153);
	strokeWeight(10);
	rect(100, 630, 20, 20);
	rect(125, 580, 40, 40);
	rect(165, 523, 60, 60);
	rect(223, 440, 80, 80);	

	// Top_right squares
	fill(255, 255, 153);
	strokeWeight(6);
	rect(423, 240, 80, 80);
	rect(503, 180, 60, 60);
	rect(567, 133, 40, 40);
	rect(613, 113, 20, 20);	
	
	// middle square
	fill(255, 255, 153);
	strokeWeight(3);
	rect(303, 320, 120, 120);
}
