// import p5 from 'p5';
// import 'addons/p5.sound';
var ball;

var level = 0;

var blocks = [];
var trail = [];
var jump_sfx, reverse_jump_sfx;
var bump_sfx;
var cameraPan_sfx;
var win_sfx, death_sfx;
var level7_music, rumble_sfx;
var bg_music;
var charge_sfx, shot_sfx;
var timer = -5;
var next_ok = false;
var level_select_img, level1_img, level2_img, level3_img, level4_img, level5_img, leve6_img, level6_Angela, level7_img;
var level10_img;
var arrowLeft_img, arrowRight_img;
var level10_music_1;
var message = 0;
var clickJump = true;
var boss_sprite = [];
var cameraBlocks = [];

function preload() {
	soundFormats('mp3');
	jump_sfx = loadSound("Sounds/mb_jump.mp3");
	bump_sfx = loadSound("Sounds/smb_bump.mp3");
	win_sfx = loadSound("Sounds/smas_1up.mp3");
	death_sfx = loadSound("Sounds/smb3_player_down.mp3");
	reverse_jump_sfx = loadSound("Sounds/smw_spin_jump.wav");
	charge_sfx = loadSound("Sounds/Megaman X Charge.mp3");
	charge_sfx.setVolume(2);
	shot_sfx = loadSound("Sounds/Megaman X Shot.mp3");
	shot_sfx.setVolume(2);
	rumble_sfx = loadSound("Sounds/Super Metroid Explosions.mp3");
	cameraPan_sfx = loadSound("Sounds/sm64_camera_spin.wav");
	level_select_img = loadImage("Images/Level_Select_Cloud.png");
	level1_img = loadImage("Images/Level1.png");
	level2_img = loadImage("Images/Level2.png");
	level3_img = loadImage("Images/Level3.png");
	level4_img = loadImage("Images/Level4.png");
	level5_img = loadImage("Images/Level5.png");
	level6_img = loadImage("Images/Level6.png");
	level6_Angela = loadImage("Images/Level6_Angela.png");
	level7_img = loadImage("Images/Level7.png");
	level10_img = loadImage("Images/WindowStainedGlass0051.jpg");
	arrowLeft_img = loadImage("Images/arrowLeft.png");
	arrowRight_img = loadImage("Images/arrowRight.png");
	// bg_music = loadSound("Sounds/a.mp3");
	level7_music = loadSound("Music/Speedy Comet.mp3");
	level10_music_1 = loadSound("Music/The Forlorn Sanctum (Tower Lair) - Shovel Knight [OST]")
	level10_music_1.setVolume(0.5);
	// boss_sprite = loadAnimation("Sprites/phoenix/Animation_005/Picture1.png","Sprites/phoenix/Animation_005/Picture5.png");
	for (var i = 1; i <= 5; i++) {
		boss_sprite[i-1] = loadImage("Sprites/phoenix/Animation_005/Picture" + i + ".png");
	}
}

function setup() {
	rumble_sfx.setVolume(6);
	frameRate(120);
	levels = new Levels();
	ball = new Ball();
}

function draw() {
	switch(level) {
		case -1:
			levelTest();
			break;
		case 0:
			createCanvas(400 ,600);
			// background(223,255,247);
			image(level_select_img, 0, 0);
			textSize(40);
			fill(0);
			if (levels.complete[1]) {
				if (!levels.perfects[1]) {
					text("Level 1 🗸", 20,80);
				} else {
					text("Level 1 ★", 20, 80);
				}
			} else {
				text("Level 1", 20,80);
			}
			if (levels.complete[2]) {
				if (!levels.perfects[2]) {
					text("Level 2 🗸", 20,160);;
				} else {
					text("Level 2 ★", 20, 160);
				}
			} else {
				text("Level 2", 20,160);
			} 
			if (levels.complete[3]) {
				if (!levels.perfects[3]) {
					text("Level 3 🗸", 20,240);
				} else {
					text("Level 3 ★", 20, 240);
				}
				
			} else {
				text("Level 3", 20,240);
			} 
			if (levels.complete[4]) {
				if (!levels.perfects[4]) {
					text("Level 4 🗸", 20,320);
				} else {
					text("Level 4 ★", 20, 320);
				}
			} else {
				text("Level 4", 20,320);
			} 
			if (levels.complete[5]) {
				if (!levels.perfects[5]) {
					text("Level 5 🗸", 20,400);
				} else {
					text("Level 5 ★", 20, 400);
				}
			} else {
				text("Level 5", 20,400);
			}
			if (levels.complete[6]) {
				if (!levels.perfects[6]) {
					text("Level 6 🗸", 220,80);
				} else {
					text("Level 6 ★", 220, 80);
				}
			
			} else {
				text("Level 6", 220,80);
			}
			if (levels.complete[7]) {
				if (!levels.perfects[7]) {
					text("Level 7 🗸", 220,160);
				} else {
					text("Level 7 ★", 220, 160);
				}
			
			} 
			else {
				text("Level 7", 220,160);
			}
			ball.win = true;
			next_ok = true;
			ball.jumps = 0;
			break;
		case 100:
			level1_1(levels);
			fill(0);
			textSize(25);
			if (ball.win == false) {
				text("Press the SPACE button to jump!", 10, 120);
			}
			break;
		case 101:
			level1_2(levels);
			fill(0);
			textSize(25);
			if (ball.win == false) {
				text("Hold down SPACE to jump\nfarther and higher!!", 10, 140);
			}
			break;
		case 102:
			level = 1;
			break;
		case 1:
			level1_3(levels);
			fill(0);
			textSize(25);
			if (ball.win == false) {
				text("You can jump again after\ntouching a block!!!", 10, 60);
			}
			break;
		case 2:
			level2(levels);
			break;
		case 3:
			level3(levels);
			break;
		case 4:
			level4(levels);
			break;
		case 5:
			level5(levels);
			break;
		case 6:
			level6(levels);
			break;
		case 7:
			level7(levels);
			break;
		case 11:
			level10(levels);
			break;
		default:
			level = 0;
	}
}

function keyPressed() {

	if (key == ' ' && ball.charged == true) {
		shot_sfx.play();
		ball.energy = false;
		ball.charged = false;
		ball.fired = true;
		charge_sfx.stop();
	}

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
		stopMusic();
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
		stopMusic();
		// ball.deathCount[level] = 0; Not sure if I want this here or not. Might make it too easy to get the perfect run through
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
	console.log(mouseX + camera.position.x - levels.width/2);
	console.log(mouseY + camera.position.y - levels.height/2);
	console.log(ball.yVelocity);
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
		if (mouseX > 15 && mouseX < 150 && mouseY > 45 && mouseY < 85) {
		level = 100;
		} else if (mouseX > 15 && mouseX < 150 && mouseY > 125 && mouseY < 165) {
			level = 2;
		} else if (mouseX > 15 && mouseX < 150 && mouseY > 210 && mouseY < 245) {
			level = 3;
		} else if (mouseX > 15 && mouseX < 150 && mouseY > 290 && mouseY < 320) {
			level = 4;
		} else if (mouseX > 15 && mouseX < 369 && mouseY > 365 && mouseY < 398) {
			level = 5;
		} else if (mouseX > 215 && mouseX < 350 && mouseY > 45 && mouseY < 85) {
			level = 6;
		} else if (mouseX > 215 && mouseX < 350 && mouseY > 125 && mouseY < 165) {
			level = 7;
		}
	}
	
	if (next_ok == true) {
		if (camera.mouseX > (this.width/2)-135 && camera.mouseX < this.width/2 && camera.mouseY > levels.messageY && camera.mouseY < levels.messageY+50) {
			ball.win = false;
			ball.needUpdate = true;
			levels.needUpdate = true;
			ball.yVelocity = 0;
			ball.jumps = 0;
			ball.xVelocity = 0;
			ball.trails = 0;
			trail.splice(0,trail.length);	
			next_ok = false;
			timer = -5;
		} else if (camera.mouseX > this.width/2 && camera.mouseX < (this.width/2)+135 && camera.mouseY > levels.messageY && camera.mouseY < levels.messageY+50) {
			ball.win = false;
			level = 0;
			ball.needUpdate = true;
			levels.needUpdate = true;
			ball.yVelocity = 0;
			ball.jumps = 0;
			ball.xVelocity = 0;
			ball.trails = 0;
			trail.splice(0,trail.length);	
			next_ok = false;
			timer = -5;
		}
	}
	
	if (mouseIsPressed && ball.jumps > 0 && ball.win == false && clickJump == true) {
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
		// ball.jumps = 0;			
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

stopMusic = function() {
	level7_music.stop();
	level10_music_1.stop();
	charge_sfx.stop();
	rumble_sfx.stop();
}