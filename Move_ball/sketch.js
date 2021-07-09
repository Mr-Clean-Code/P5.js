
// var r;
// var x;
// var y;

// function setup() 
// {
    
//     createCanvas(512,512);
    
//     r = random();
    
//     console.log(min(100,1000));
    
//     x = 0;
    
// }

// function draw()
// {
//     background(255);
// //    r = random(100,width/2);
// //    ellipse(width/2, height/2, r,r);
// //    console.log(r);
    
// //    x = max(100,mouseX);
// //    y = max(100,mouseY);

//     y = height/2;
//     x += 1;
//     x = min(x, 450);
    
//     ellipse(x,y,50,50);
// }




// RANDOM NUMBER BEING SPIT OUT on the screen

// function setup()
// {
//     createCanvas(512,512);
//     console.log(random());
// }





// RANDOM ELLIPSES BEING SHOWN ON THE SCREEN
// A NEW ELLIPSE AFTER EVERY " REFRESH OF THE PAGE "
// function setup()
// {
//     createCanvas(512,512);
//     console.log(random());

//     ellipse(width/2, height/2, random() * 250, random() * 250);
// }




// RANDOM ELLIPSES WITH  FRESH BACKGROUND EACH TIME
// CREATES A STROBE EFFECT WITH RANDOM HEIGHT / WIDTH
// function setup()
// {
//     createCanvas(512, 512);
//     console.log(random());
// }

// function draw()
// {
//     background(255);
//     ellipse(width/2, height/2, random() * 250, random() * 250);
// }




// A SERIES OF CIRCLES of one random width and height with using VARIABLES

// var r;

// function setup()
// {
//     createCanvas(512,512);
//     console.log(random());

// }

// function draw()
// {
//     background (255);
//     r = random();
//     ellipse(width/2, height/2, r * 250, r * 250);
// }



// ANOTHER GREAT WAY OF USING RANDOM BY PROVIDING MORE PARAMETERS
// TO THE VARIABLE
// function setup()
// {
//     createCanvas(512,512);
//     console.log(random());

// }

// function draw()
// {
//     background (255);
//     r = random(50, 250); // added the parameters to 'r' through here
//     ellipse(width/2, height/2, r, r); // shown above
// }





// ANOTHER FUNCTION CALLED (MIN)
// 2 VALUES NEED TO BE SUPPLIED
// MAKES THE ELLIPSE GLIDE ACROSS THE SCREEN

function setup()
{
    createCanvas(512,512);
    console.log(min(10,1));
    // MIN takes the lowest value and returns it
    // PURPOSE of this function becomes useful when dealing with numbers
    // that change during run time 
    // EXAMPLE : 
    // ' mouseX ' and ' mouseY ' 
}

function draw()
{
    background (255);
    ellipse(mouseX, mouseY,50,50);
}






// A FUNCTION THAT WILL STOP THE ELLIPSE FROM MOVING PAST A CERTAIN
// POINT ON THE SCREEN, CANVAS AREA by creating a variable

// var x;

// function setup()
// {
//     createCanvas(512,512);
//     console.log(min(10,1));
// }

// function draw()
// {
//     background (255);
//     x = min(mouseX, 250); // setting equal to mouseX and put that it equals the min
//     ellipse(mouseX, mouseY,50,50);
// }




// USING THE STOP IN AN ANIMATION
// var r;
// var x;

// function setup()
// {
//     createCanvas(512,512);
//     console.log(min(24,1000));
//     x = 0; // initializing x at zero here, but increments in the draw function
// }

// function draw()
// {
//     background (255);
//     x = min(x + 1, 250);
//     ellipse(mouseX, mouseY,50,50);
// }


//
// USING THE MAX FUNCTION TO STOP THE BALL
//
// var r;
// var x;

// function setup()
// {
//     createCanvas(512,512);
//     console.log(min(24,1000));
//     x = 500; // initializing x at zero here, but increments in the draw function
// }

// function draw()
// {
//     background (255);
//   //  x = min(x + 1, 250);
//     x = max(x - 1, 25);
//     ellipse(mouseX, mouseY,50,50);
// }