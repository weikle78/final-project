var bride = [];


function setup() {
  var canvas = createCanvas(windowWidth/2.6, 400);
  canvas.parent('sketch-holder');
  for (var i=0; i<3; i++) {
    bride[i] = new Bride(random(width),random(height));
  }
  img = loadImage("bride.png");  // Load the image
	groom = loadImage("groom.png");
   noCursor();
  imageMode(CENTER);
}

function draw() {
  
  background(150);
  image(groom, mouseX, mouseY,150,150);
  
   for (var i=0; i< bride.length; i++) {
		bride[i].display();
    bride[i].move();
   	
   }
  for (var i=0; i<bride.length; i++) {
      if (dist(bride[i].x,bride[i].y,mouseX,mouseY)<50) {
    	background(0);
        fill(255);
      textSize(50);
			text("Wedding Bells", 100, 100);
   
      }
  }
}

function Bride() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(20, 60);
  this.speed = 0.01;
  


  this.display = function() {
    fill('white');
    image(img,this.x,this.y,150,150);
    noStroke();
    
    
  }
  this.move = function() {
    var dx = mouseX - this.x;
    var dy = mouseY -this.y;
    this.x += random(dx*this.speed);
    this.y += random(dy*this.speed);
  }
}
function mousePressed() {
	bride.push(new Bride(mouseX,mouseY));
}