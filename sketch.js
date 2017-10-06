var ball;
var block1, block2, block3, block4;  //Not really sure if I need this lines right now
var level = 0;
var win = false;
function setup() {
	width = 400;
	height = 600;
	createCanvas(1000 ,600);		// 400,600
	frameRate(120);
	/*
	mySound.setVolume(0.1);
	mySound.play();
	*/
	ball = new Ball();

	L1_block = new regBlock(100,500,200,20)
	L1_winBlock = new winBlock(0,150,100,20);
	L1_roller = new rollBlock(0,590,250,10);
	L1_block1 = new regBlock(150, 300, 20, 200); //x, y, w, h parameters for creating blocks
	L1_block2 = new regBlock(250, 0, 20, 600);
	L1_block3 = new regBlock(50,500,120,20); //250,500,100,20
	
	L2_winBlock = new winBlock(900,150,100,20);
	L2_block1 = new regBlock(150, 300, 20, 200); //x, y, w, h parameters for creating blocks
	L2_block2 = new regBlock(550, 0, 20, 300);
	L2_block3 = new regBlock(50,500,120,20); //250,500,100,20
	L2_block4 = new regBlock(200,500,120,20);
	L2_block5 = new regBlock(400,500,120,20);
	L2_block6 = new regBlock(700,200,20,400);
	L2_block7 = new regBlock(700,0,200,70);
}

function draw() {
	switch(level) {
		case 0:
			background(223,255,247);
			textSize(40);
			fill(0);
			text("Level 1", 80,80);
			text("Level 2", 80,160);
			break;
		case 1:
			background(102,102,153);
	
			ball.show();
			ball.update();
			
			L1_block1.show();
			L1_block1.hit();
			
			L1_block2.show();
			L1_block2.hit();
			
			L1_block3.show();
			L1_block3.hit();
			
			L1_winBlock.show();
			L1_winBlock.hit();
			
			L1_roller.show();
			L1_roller.hit();		
			break;
		case 2:
			background(103,154,144);
			ball.show();
			ball.update();
			
			L2_winBlock.show();
			L2_block1.show();
			L2_block2.show();
			L2_block3.show();
			L2_block4.show();
			L2_block5.show();
			L2_block6.show();
			L2_block7.show();
			L2_winBlock.hit();
			L2_block1.hit();
			L2_block2.hit();
			L2_block3.hit();
			L2_block4.hit();
			L2_block5.hit();
			L2_block6.hit();
			L2_block7.hit();
			break;
		default:
	}
}

function keyPressed() {
	if (key == ' ' && ball.jumps > 0) {
		ball.yVelocity = -20;
		ball.bounce = 1
		ball.xVelocity = 12;
		ball.drag = 0.5;
		ball.jumps--;
		if (win == true) {
			level++;
			win = false;
			ball.x = 64;
			ball.y = height/2;
			ball.yVelocity = 0;
			ball.xVelocity = 0;
			ball.jumps = 0;			
		}
	}
	if (keyCode === ENTER) {
		level = 0;
		ball.y = height/2;
		ball.x = 64;
		ball.yVelocity = 0;
		ball.jumps = 0;
		ball.xVelocity = 0;
	}
	/*
	if (keyCode  === LEFT_ARROW) {
		ball.xVelocity = -10;
		ball.drag = 0.5; 
		ball.yVelocity = -20;
		ball.bounce = 1
	}
	if (keyCode  === UP_ARROW) {
		ball.yVelocity = -20;
		ball.drag = 2; 
	}*/
	if (keyCode  === DOWN_ARROW) {
		ball.drag = 2; 
		ball.yVelocity = 30;
		ball.bounce = 1
	}	
	
}

function mousePressed() {
	console.log(mouseX);
	console.log(mouseY);
	if (mouseX > 80 && mouseX < 210 && mouseY > 45 && mouseY < 85) {
		level = 1;
	} else if (mouseX > 80 && mouseX < 210 && mouseY > 120 && mouseY < 175) {
		level = 2;
	}
}
/*
function preload() {
  soundFormats('mp3');
  mySound = loadSound('a.mp3');
}
*/
