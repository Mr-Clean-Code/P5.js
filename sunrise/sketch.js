var groundHeight;
var mountain_one;
var mountain_two;

var hill_one;
var hill_two;
var tree;

var moon;
var sun;
var darkness;
var cloudPos_x = 280;
var cloudScale = 100;
// var cloudPos_x2 = 320;
// var cloudScale2 = 70;


function setup()
{
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 2.5) * 2;


	//initalise the mountain objects with properties to help draw them to the canvas
	mountain_one = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain_two = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};
	mountain_three = {
		x:600,
		y:groundHeight,
		height: 320,
		width: 230
	};

	hill_one ={
		x: 350,
		y: groundHeight,
		height: 120,
		diameter: 160

	};
	hill_two ={
		x: 380,
		y: groundHeight,
		height: 160,
		diameter: 200

	};
	hill_three ={
		x:400,
		y:groundHeight,
		height: 220,
		diameter:160
	}

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 40,
		trunkWidth: 60,
		trunkHeight: 140,
		canopyWidth: 140,
		canopyHeight: 120
	};

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 120
	};
    
    //TASK: intialise a moon object with an extra property for brightness
	moon = {
		x: 300,
		y: 70,
		diameter: 90,
		brightness: 0,
	}

	//set the initial darkness
	darkness = 0;
}



function draw()
{
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.
	sun.y = mouseX/2+100;
	cloudPos_x = mouseX/2+100;
	cloudPos_x = min(cloudPos_x, 560);


	//draw the sky
	background(150, 200, 255);
	noStroke();

	//draw the sun
	fill(255, 255, 0);
	ellipse(sun.x, sun.y, sun.diameter);
	
  
	// Hills
	fill(204,102,0, 50);
	ellipse(hill_one.x, hill_one.y, hill_one.diameter);
	ellipse(hill_two.x, hill_two.y, hill_two.diameter);
	ellipse(hill_three.x, hill_three.y, hill_three.diameter);
	
	
	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);


	//draw the mountains
	fill(120);
	triangle(mountain_one.x, mountain_one.y,
		mountain_one.x + mountain_one.width, mountain_one.y,
		mountain_one.x + (mountain_one.width / 2), mountain_one.y - mountain_one.height);

	triangle(mountain_two.x, mountain_two.y,
		mountain_two.x + mountain_two.width, mountain_two.y,
		mountain_two.x + (mountain_two.width / 2), mountain_two.y - mountain_two.height);
    
    //TASK: You can draw the tree yourself
	fill(150, 70, 0);						// TREE TRUNK
	rect(160, groundHeight - 90, 40, 120); // TREE TRUNK

	// TREE TOP
	fill(0,255, 0);
	ellipse(180, groundHeight - 90, sun.diameter *1.5, sun.diameter); 

	// BIRD
	noStroke();
	fill(255,204, 204, -mouseX + 900);
	ellipse(360,90,30, 10);
	triangle(260,70,220,70,220,90);
	triangle(265,75, 225, 75, 225, 105);
	triangle(35, 25, 68, 60, 66, 25);
	triangle(30, 15, 68, 60, 86, 15);

	stroke(0,0,0, -mouseX +900);

	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	//Use the alpha value of fill to determine how dark to make it
	fill(128,128,128, mouseX/5-50);
	rect(0,0,800,600);
	fill(128,128,128, 15, mouseX/5);
	rect(0,0,800,600);

	// CLOUDS MOVING
    noStroke();
	fill(255);
	ellipse(cloudPos_x, cloudScale/2, cloudScale/2);
	ellipse(cloudPos_x, 60,  cloudScale/2, cloudScale/2);
	ellipse(cloudPos_x +10, 60, cloudScale/2, cloudScale/2);
	ellipse(cloudPos_x +35, 60, cloudScale/4, cloudScale/4);
	ellipse(cloudPos_x +60, 60, cloudScale/2, cloudScale/2);
	ellipse(cloudPos_x -15, 60, cloudScale/2, cloudScale/2);
	ellipse(cloudPos_x / 10,cloudScale*.6, cloudScale*.6);
	ellipse(cloudPos_x / 20,cloudScale*.6, cloudScale*.6);
	ellipse(cloudPos_x / 40,cloudScale*.8, cloudScale*.8);

	var moonBrightness = mouseX/3 -100;

	// stars
	
	stroke(255,255,255, moonBrightness);
	strokeWeight(8);
	
	point(150, 30);

	strokeWeight(8);
	point(280,40);

	strokeWeight(8);
	point(430, 20);
	point(290, 46);
	point(395,54);
	point(553, 86);
	point(500, 160);
	point(510, 140);
	point(520, 120);

	// ellipse(cloudPos_x, 80, cloudScale/2, cloudScale/2);
	// ellipse(cloudPos_x, 90, cloudScale/2, cloudScale/2);
	// ellipse(cloudPos_x +10, 60, cloudScale/3, cloudScale/3);
	// ellipse(cloudPos_x +20, 60, cloudScale/4, cloudScale/4);
	// ellipse(cloudPos_x +30, 60, cloudScale/5, cloudScale/5);

	// noStroke();
	// fill(255);
	// ellipse(cloudPos_x, 70, cloudScale/4, cloudScale/4);
	// ellipse(cloudPos_x +20, 60, cloudScale/3, cloudScale/3);
	// ellipse(cloudPos_x +30, 60, cloudScale/4, cloudScale/4);
	// ellipse(cloudPos_x +40, 60, cloudScale/5, cloudScale/5);



	//TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour
		fill(255, 255, 255, moonBrightness);
		ellipse(moon.x, moon.y, moon.diameter);
	
		fill(155);
		triangle(mountain_one.x, mountain_one.y,
			mountain_one.x + mountain_one.width, mountain_one.y,
			mountain_one.x + (mountain_one.width / 3), mountain_one.y - mountain_one.height);
	
		triangle(mountain_two.x, mountain_two.y,
			mountain_two.x + mountain_two.width, mountain_two.y,
			mountain_two.x + (mountain_two.width / 3), mountain_two.y - mountain_two.height);

		fill(204,102,0, 65);
		ellipse(hill_one.x, hill_one.y, hill_one.diameter);
		ellipse(hill_two.x, hill_two.y, hill_two.diameter);
		ellipse(hill_three.x, hill_three.y, hill_three.diameter);

		//draw the ground and make it green
		fill(70, 180, 0);
		rect(0, groundHeight, width, height - groundHeight);
		
		// TREE TOP
		fill(0,100, 0);
		ellipse(180, groundHeight - 90, sun.diameter *1.5, sun.diameter); 

	}
