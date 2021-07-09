
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



// BALL MOVES TO THE LEFT UP TO 250, WHICH IS THE MIDDLE OF THE PAGE

var r;
var x;

function setup()
{
    createCanvas(512, 512);
    console.log(min (24, 11000));
    x = 500;
}

function draw()
{
    background(255);
    x = max(x - 1, 250);
    ellipse(x, mouseY, 50, 50);
}




// ELLIPSE TRAVELING RIGHT TO LEFT 

var r;
var x;

function setup()
{
    createCanvas(512, 512);
    console.log(min (24, 11000));
    x = 500;

}

function draw()
{
    background(255);
    x = x - 1;
    ellipse (x, mouseY, 50, 50);
}