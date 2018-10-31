// Keep track of our socket connection
var socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect('http://169.233.191.62:8080');
  // We make a named event called 'mouse' and write an
  // anonymous callback function
  socket.on('mouse',
    // When we receive data
    function(data) {
      console.log("Got: " + data.x + " " + data.y);
      // Draw a blue circle
      //fill(random(0,255),0,255);
      fill(0,0,0,random(0,100));
      //somebody connect with another person and tell me how it looks!
      noStroke();
      //ellipse(data.x,data.y,random(42,100),random(37,120));
      ellipse(data.x,data.y,random(8,420),random(8,370));
      //try one or the other I WANNA KNOW HOW THIS LOOOOKS! 
      //and play with the random numbers hehe
    }
  );
}

function draw() {
  // Nothing
}

function mouseDragged() {
  // Draw some white circles
  fill(random(0,255),random(0,255),random(0,255),random(1,100));
  noStroke();
  ellipse(mouseX,mouseY,random(8,420),random(8,370));
  // Send the mouse coordinates
  sendmouse(mouseX,mouseY);
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



