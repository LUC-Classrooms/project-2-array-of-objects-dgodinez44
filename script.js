/*
 Project 2 - Array of Objects
 Name: Denise Godinez
 Completion date: 04/07/2024
 Desscription of project: I used the duck sprite that I created from project 1. 
 Ten ducks are created from the objects array and each duck object moves 
 independently from the others. The directions in which each duck moves is random.
 When the duck objects reach the edge of the screen I have if statements that 
 prevent them from going past the width and height of the canvas. Some of the code 
 that I used comes from the lecture walkthrough video for project 2 and the sample 
 code given on the assignment for project 2. 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here
var objects = new Array(10); // create an array of 10 objects 
var duck1, duck2; // declare variables for two duck objects


function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas
  
  // Create 10 duck objects and add them to the objects array 
  for(var i =0; i < objects.length; i++){
    objects[i] = new Duck(random(width), random(height));
  }

  // create two more duck objects 
  duck1 = new Duck(random(width), random(height));
  duck2 = new Duck(random(width), random(height));
}

function draw(){
  background(170, 210, 230); //light gray background

  // move and display each object in the objects array 
  for(var i = 0; i < objects.length; i++){
    objects[i].move();
    objects[i].display();
  }
}

function Duck(x, y){
  // Constructor function for the Duck object 
  this.x = x; // set the initial x-coordinate
  this.y = y; // set the initial y-coordinate 
  this.xSpeed = random(-1, 1); // set a random x-speed
  this.ySpeed = random(-1, 1); // set a random y-speed

  this.move = function(){
    // Move the duck
    this.x += this.xSpeed; // update the x-coordinate
    this.y += this.ySpeed; // update the y-coordinate

    // reverse the direction if the duck goes off the canvas 
    if(this.x < 0 || this.y > width){
      this.xSpeed *= -1;
    }

    if(this.y < 0 || this.y > height){
      this.ySpeed *= -1;
    }

    this.display = function(){
      // draw the duck 
      push();
      translate(this.x, this.y);

      //head 
      strokeWeight(2);
      fill ("yellow");
      ellipse(-50, 0, 80, 60);
      //body 
      ellipse(20, 40, 110, 70);
      //eye
      fill("black");
      ellipse(-65, -10, 10, 15);
      //wing
      noFill();
      rotate(PI/-2);
      arc(-40, 10, 30, 80, 0, PI);
      //beak 
      fill("orange");
      triangle(0, -110, 10, -90, - 0, -90);
      ellipse(2, -95, 8, 3);
      //tail 
      triangle(-40, 95, -30, 75, -50, 75);
      //left leg
      line(-70, 0, -90, 0);
      line(-90, 0, -100, -10);
      line(-90, 0, -105, 0);
      line(-90, 0, -100, 10);
      //right leg
      line(-70, 45, -90, 45);
      line(-90, 45, -100, 35);
      line(-90, 45, -105, 45);
      line(-90, 45, -100, 55);

      pop();
    }
  }
}

