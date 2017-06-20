
// dude object
function Dude(){
  this.x = width/2;
  this.y = height/2;

  // draw dude
  this.show = function(){
    
    fill(255, 0, 0);
    //text("James", this.x - 21, this.y - 35); // name
    rect(this.x, this.y, 55, 55); // head
    
    if(this.x < 0){this.x = width};
    if(this.x > width){this.x = 0};
    if(this.y < 0){this.y = height};
    if(this.y > height){this.y = 0};
  }

  //Movement Controls
  this.move = function(movementSpeed){
    this.moveSpeed = movementSpeed;
    if (keyIsDown(65))
      this.x-=this.moveSpeed;
    if (keyIsDown(68))
      this.x+=this.moveSpeed;
    if (keyIsDown(87))
      this.y-=this.moveSpeed;
    if (keyIsDown(83))
      this.y+=this.moveSpeed;
  }
}

// main sketch
var movementSpeed;

function setup(){
	// bg = loadImage("#");
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	
	movementSpeed = 5;

	// create dude  
  dude = new Dude();
}

function draw(){
	// background(bg);
	background(100);

	// show & move dude methods
	dude.show();
  dude.move(movementSpeed);

}