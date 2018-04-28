// import p5 from 'p5';
// import 'addons/p5.sound';
var ball;

var level = 0;

var blocks = [];
var trail = [];
var jump_sfx;
var bump_sfx;
var win_sfx;
var timer = -5;
var next_ok = false;
var level_select_img, level1_img, level2_img, level3_img, level4_img, level5_img;
var message = 0;
var screenWrap = true;

function preload() {
	soundFormats('mp3');
	jump_sfx = loadSound("sounds/mb_jump.mp3");
	bump_sfx = loadSound("sounds/smb_bump.mp3");
	win_sfx = loadSound("sounds/smas_1up.mp3");
	level_select_img = loadImage("Images/Level_Select_Cloud.png");
	level1_img = loadImage("Images/Level1.png");
	level2_img = loadImage("Images/Level2.png");
	level3_img = loadImage("Images/Level3.png");
	level4_img = loadImage("Images/Level4.png");
	level5_img = loadImage("Images/Level5.png");
}

function setup() {
	// width = 400;
	// height = 600;
	//createCanvas(1000 ,600);		// 400,600
	frameRate(120);
	/*
	mySound.setVolume(0.1);
	mySound.play();
	*/
	levels = new Levels();
	ball = new Ball();
}

function draw() {
	switch(level) {
		case -1:
			levels.levelTest();
			break;
		case 0:
			createCanvas(400 ,600);
			// background(223,255,247);
			image(level_select_img, 0, 0);
			textSize(40);
			fill(0);
			if (levels.complete[1]) {
				text("Level 1 ★", 20,80);
			} else {
				text("Level 1", 20,80);
			}
			if (levels.complete[2]) {
				text("Level 2 ★", 20,160);
			} else {
				text("Level 2", 20,160);
			} 
			if (levels.complete[3]) {
				text("Level 3 ★", 20,240);
			} else {
				text("Level 3", 20,240);
			} 
			if (levels.complete[4]) {
				text("Level 4 ★", 20,320);
			} else {
				text("Level 4", 20,320);
			} 
			if (levels.complete[5]) {
				text("Level 5 ★", 20,400);
			} else {
				text("Level 5", 20,400);
			}
			if (levels.complete[6]) {
				text("Level 6 ★", 220,80);
			} else {
				text("Level 6", 220,80);
			}
			ball.win = true;
			next_ok = true;
			break;
		case 100:
			levels.level1_1();
			fill(0);
			textSize(20);
			text("Press the SPACE button to jump!", 10, 420);
			break;
		case 101:
			levels.level1_2();
			fill(0);
			textSize(20);
			text("Press the SPACE button to jump!", 10, 420);
			text("Hold down the SPACE button to jump", 10, 440);
			text("farther and higher!!", 10,460);
			break;
		case 102:
			levels.level1_3();
			fill(0);
			textSize(20);
			text("You can jump again after", 10, 360);
			text("touching a block!!!", 10, 380);
			break;
		case 103:
			level = 2;
			break;
		case 2:
			levels.level2();
			break;
		case 3:
			levels.level3();
			break;
		case 4:
			levels.level4();
			break;
		case 5:
			levels.level5();
			break;
		case 6:
			levels.level6();
			break;
		default:
			level = 0;
	}
	
	// Ball.drag used to be a constant 0.5
	// Ball. gravity used to be a constant 1
	if ((keyIsDown(32) && ball.yVelocity < 0) || (mouseIsPressed && ball.yVelocity < 0)) {
		ball.gravity = 0.9;
		ball.drag = 0.3;
	} else {
		ball.gravity = 1.1;
		ball.drag = 0.5; // 0.6
	}
	
	if (timer > 0) {
		timer--;
		console.log(timer);
	}
	if (timer == 0) {
		next_ok = true;
	}
	
	
}

function keyPressed() {

	if (key == ' ' && ball.jumps > 0 && ball.win == false) {
		ball.jump();
		
		
	}
	if (key == ' ' && ball.win == true && next_ok == true) {
		level++;
		if (level == 1) {
			level = 100;
		}
		ball.win = false;
		ball.needUpdate = true;
		levels.needUpdate = true;
		ball.yVelocity = 0;
		ball.xVelocity = 0;
		ball.trails = 0;
		trail.splice(0,trail.length);	
		next_ok = false;
		timer = -5;
		//ball.jumps = 0;			
	} 
	if (keyCode === SHIFT) {
		ball.win = false;
		ball.needUpdate = true;
		levels.needUpdate = true;
		ball.yVelocity = 0;
		ball.xVelocity = 0;
		ball.trails = 0;
		trail.splice(0,trail.length);	
		next_ok = false;
		timer = -5;
		//ball.jumps = 0;
	}
	if (keyCode === ENTER) {
		ball.win = false;
		level = 0;
		ball.needUpdate = true;
		levels.needUpdate = true;
		ball.yVelocity = 0;
		//ball.jumps = 0;
		ball.xVelocity = 0;
		ball.trails = 0;
		trail.splice(0,trail.length);	
		next_ok = false;
		timer = -5;
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
	// if (keyCode  === DOWN_ARROW) {
		// ball.drag = 2; 
		// ball.yVelocity = 30;
		// ball.bounce = 1
	// }	
	// if (keyCode == 84) {
		// level = -1;
	// }
	
}

function mousePressed() {
	console.log(mouseX);
	console.log(mouseY);
	// ball.x = mouseX;
	// ball.y = mouseY;
	// console.log(ball.yVelocity);
	
	if (level == 0) {
		ball.win = false;
		ball.needUpdate = true;
		levels.needUpdate = true;
		ball.yVelocity = 0;
		ball.xVelocity = 0;
		ball.trails = 0;
		trail.splice(0,trail.length);	
		next_ok = false;
		timer = -5;
		if (mouseX > 80 && mouseX < 210 && mouseY > 45 && mouseY < 85) {
		level = 100;
		} else if (mouseX > 80 && mouseX < 210 && mouseY > 125 && mouseY < 165) {
			level = 2;
		} else if (mouseX > 80 && mouseX < 210 && mouseY > 210 && mouseY < 245) {
			level = 3;
		} else if (mouseX > 80 && mouseX < 210 && mouseY > 290 && mouseY < 320) {
			level = 4;
		} else if (mouseX > 80 && mouseX < 369 && mouseY > 290 && mouseY < 398) {
			level = 5;
		} else if (mouseX > 220 && mouseX < 350 && mouseY > 45 && mouseY < 85) {
			level = 6;
		}
	}
	
	if (mouseIsPressed && ball.jumps > 0 && ball.win == false) {
		ball.jump();
	}
	
	if (mouseIsPressed && ball.win == true && next_ok == true) {
		level++;
		ball.win = false;
		ball.needUpdate = true;
		levels.needUpdate = true;
		ball.yVelocity = 0;
		ball.xVelocity = 0;
		ball.trails = 0;
		trail.splice(0,trail.length);	
		next_ok = false;
		timer = -5;
		//ball.jumps = 0;			
	} 
}


/*
 * Adds a trail to the end of the ball
 */
addTrail = function() {
	trail.push(new Trail(ball));
	if (trail.length > ball.trails) {
		trail.splice(0,1);	// Not too sure how this works
	}
	for (var i = 0; i < trail.length; i++) {
		trail[i].show();
	}
	
}
/*
function preload() {
  soundFormats('mp3');
  mySound = loadSound('a.mp3');
}
*/
