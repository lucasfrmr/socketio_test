// main sketch
var x, y, socket;

function setup(){
	// bg = loadImage("#");
	createCanvas(windowWidth, windowHeight);
	background(100);
	rectMode(CENTER);
  x = 0;
  y = 0;
	moveSpeed = 2;

  socket = io.connect(location.protocol + '//' + location.host);
	socket.on('mouse',
    // When we receive data
    function(data) {
      background(100);
      console.log("Got: " + data.x + " " + data.y);
      fill(0,0,255);
      noStroke();
      rect(data.x, data.y, 55, 55);
    }
  );
}

function draw(){
  // background(100);

//mouse controls
  // x = mouseX;
  // y = mouseY;

//keyboard controls WASD
    if (keyIsDown(65))
      x-=moveSpeed;
    if (keyIsDown(68))
      x+=moveSpeed;
    if (keyIsDown(87))
      y-=moveSpeed;
    if (keyIsDown(83))
      y+=moveSpeed;

    rect(x, y, 55, 55); // head
// loop edges
    if(x < 0){x = width};
    if(x > width){x = 0};
    if(y < 0){y = height};
    if(y > height){y = 0};

// constantly emiting
    sendmouse(x, y);
}

// Function for sending to the socket
function sendmouse(xpos, ypos) {
  // We are sending!
  console.log("sendmouse: " + xpos + " " + ypos);
  
  // Make a little object with  and y
  var data = {
    x: xpos,
    y: ypos
  };

  // Send that object to the socket
  socket.emit('mouse',data);
}