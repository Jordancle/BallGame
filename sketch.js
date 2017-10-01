var ball;
var block1, block2, block3, block4;  //Not really sure if I need this lines right now
function setup() {
	createCanvas(400,600);
	ball = new Ball();
	block1 = new Block(150, 300, 20, 200); //x, y, w, h parameters for creating blocks
	block2 = new Block(250, 0, 20, 300);
	block3 = new winBlock(0,150,100,20);
	block4 = new Block(50,500,120,20); //250,500,100,20
	roller = new rollBlock(0,590,600,10);
}

function draw() {
	background(102,102,153);
	
	ball.show();
	ball.update();
	
	block1.show();
	block1.hit(ball)
	block2.show();
	block2.hit(ball)
	block3.show();
	block3.hit(ball); 
	block4.show();
	block4.hit(ball);
	roller.show();
	roller.hit(ball);

	

}

function keyPressed() {
	if (key == ' ' && ball.jumps > 0) {
		ball.yVelocity = -20;
		ball.bounce = 1
		ball.xVelocity = 12;
		ball.drag = 0.5;
		ball.jumps--;
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
	}
	if (keyCode  === DOWN_ARROW) {
		ball.drag = 2; 
		ball.yVelocity = 30;
		ball.bounce = 1
	}		
	*/
}
