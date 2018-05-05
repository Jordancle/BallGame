
function Levels() {
	this.width, this.winWidthRadius = 137;
	this.height, this.winHeightRadius = 125;
	this.startX;
	this.startY;
	this.startXVelocity;
	this.startYVelocity;
	this.messageX;
	this.messageY;
	this.needUpdate = true;
	this.complete = [false, false, false, false, false, false, false, false];
	this.perfects = [false, false, false, false, false, false, false, false];
	this.upperBound = true;
	this.screenWrap = true;
	this.cameraMoved = [];		// used to determine when the camera has moved
	this.counter = 0, this.cameraSpeed = 20;				// attempt at static variables
	this.updateTest = function() {
		
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		//blocks.push(new RegBlock(200,500,200,20));
		//blocks.push(new RollBlock(0,590,400,200));
		//blocks.push(new WinBlock(150,50,100,20));
		blocks.push(new RegBlock(0, 500, 400,100));
		
		this.width = 400;
		this.height = 600;
		this.startX = 214;
		this.startY = this.height/2;
		createCanvas(this.width ,this.height);
		background(200);
		
	}

	this.moveCamera = function(block,cameraIndex,speed,distance) {
		if (block.contact == true && this.cameraMoved[cameraIndex] != true) {
			if (this.counter <= distance) {
				this.cameraMoved[cameraIndex] = true;
				this.counter = 0;
			}
			camera.position.y += speed;
			this.counter += speed;
		}
	}
	
	this.winMessage = function(c,r,g,b) {
		if (timer > 0) {
			timer--;
		}
		if (timer == 0) {
			next_ok = true;
		}
		this.messageX = map(timer,40,0,(this.width/2) + camera.position.x - levels.width/2,(this.width/2) + camera.position.x - levels.width/2);
		this.messageY = map(timer,40,0,-50 + camera.position.y - levels.height/2,(this.height/2) + camera.position.y - levels.height/2);
		if (ball.win == true) {
			rectMode(RADIUS);
			fill(r,g,b);
			rect(this.messageX,this.messageY,this.winWidthRadius,this.winHeightRadius);
			rectMode(CORNER);
			textSize(45);
			textAlign(CENTER);
			fill(c);
			text("SUCCESS!",this.messageX,this.messageY-70);
			if (next_ok == true) {
				textSize(20);
				text("Press SPACE to continue",this.messageX,this.messageY-30);
				text("Press SHIFT\nto RESTART",this.messageX-70,this.messageY+20);
				text("Press ENTER\nfor MENU",this.messageX+70,this.messageY+20);
				push();
				noFill();
				stroke(c);
				rect((this.width/2)-135, levels.messageY, 135,50);
				rect((this.width/2), levels.messageY, 135,50);
				pop();
				if (level < 100) {
					
					if (ball.deathCount[level] > 0) {
						text("Falls: " + (ball.deathCount[level]) + "\nRank: 🗸",this.messageX,this.messageY+80);
					} else {
						text("Falls: " + (ball.deathCount[level]) + "\nRank: ★",this.messageX,this.messageY+80);
						this.perfects[level] = true;
					}
					this.complete[level] = true;
					// ball.deathCount[level] = 0;
				}
			}
			textAlign(RIGHT);
			
		}
		
	}
	
	this.levelTest = function() {
		this.screenWrap = true;
		background(200);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure this out!!!
		 */
		ball.show();
		ball.update(levels);
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
		if (levels.needUpdate) {
			levels.updateTest();
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}		
	}
	
	this.updateLevel1_1 = function() {
		this.screenWrap = true;
		this.upperBound = true;
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		//blocks.push(new RegBlock(200,500,200,20));
		//blocks.push(new RollBlock(0,590,400,200));
		// blocks.push(new RegBlock(0, 350, 100, 20));
		// blocks.push(new RegBlock(250, 350, 100, 20));
		blocks.push(new RegBlock(0, 350, 100, 20));
		blocks.push(new WinBlock(225,350,100,20));
		
		
		this.width = 400;
		this.height = 600;
		this.startX = 40;
		this.startY = 320;
		this.startXVelocity = 0;
		this.startYVelocity = 0;
		
		camera.position.x = this.width/2;
		camera.position.y = this.height/2;
		createCanvas(this.width ,this.height);
		image(level1_img, 0, 0);
		
	}

	
	this.level1_1 = function() {
		
		// background(102,102,153);
		image(level1_img, 0, 0);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure this out!!!
		 */
		ball.show();
		ball.update(levels);
		
		if (levels.needUpdate) {
			levels.updateLevel1_1();
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}		
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
		this.winMessage(0,204,255,204);
		
	}
	
		this.updateLevel1_2 = function() {
		this.screenWrap = true;
		this.upperBound = true;
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		//blocks.push(new RegBlock(200,500,200,20));
		//blocks.push(new RollBlock(0,590,400,200));
		// blocks.push(new RegBlock(0, 350, 100, 20));
		// blocks.push(new RegBlock(250, 350, 100, 20));
		blocks.push(new WinBlock(300,300,100,20));
		blocks.push(new RegBlock(0, 350, 100, 20));
		
		this.width = 400;
		this.height = 600;
		this.startX = 40;
		this.startY = 320;
		this.startXVelocity = 0;
		this.startYVelocity = 0;
		camera.position.x = this.width/2;
		camera.position.y = this.height/2;
		createCanvas(this.width ,this.height);
		image(level1_img, 0, 0);
		
	}

	
	this.level1_2 = function() {
		image(level1_img, 0, 0);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure this out!!!
		 */
		ball.show();
		ball.update(levels);
		
		if (levels.needUpdate) {
			levels.updateLevel1_2();
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}		
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
		this.winMessage(0,204,255,204);
		
	}
	
		this.updateLevel1_3 = function() {
		this.screenWrap = true;
		this.upperBound = true;
		blocks.splice(0,blocks.length);		// Removes any previous blocks

		blocks.push(new RegBlock(0, 450, 100, 20));
		blocks.push(new RegBlock(250, 120, 20, 480));
		blocks.push(new WinBlock(250,100,150,20));
		
		this.width = 400;
		this.height = 600;
		this.startX = 40;
		this.startY = 420;
		this.startXVelocity = 0;
		this.startYVelocity = 0;
		camera.position.x = this.width/2;
		camera.position.y = this.height/2;
		createCanvas(this.width ,this.height);
		image(level1_img, 0, 0);
		
	}

	
	this.level1_3 = function() {
		// background(102,102,153);
		image(level1_img, 0, 0);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure this out!!!
		 */
		ball.show();
		ball.update(levels);
		
		if (levels.needUpdate) {
			levels.updateLevel1_3();
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}		
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
		// if (ball.win == true) {
			// this.complete[1] = true;
		// }
		
		this.winMessage(0,204,255,204);
		
	}
	
	this.updateLevel3 = function() {
		this.screenWrap = true;
		this.upperBound = true;
		
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		// blocks.push(new RegBlock(200,500,200,20));
		// blocks.push(new RollBlock(0,590,400,200));
		blocks.push(new WinBlock(200,50,100,20));
		blocks.push(new RegBlock(50, 175, 50, 50));
		blocks.push(new RegBlock(250, 275, 30, 225));
		// blocks.push(new RegBlock(330, 0, 20, 520));
		blocks.push(new RegBlock(150,500,130,100));
		this.width = 400;
		this.height = 600;
		this.startX = 214;
		this.startY = 400;
		this.startXVelocity = 0;
		this.startYVelocity = 0;
		camera.position.x = this.width/2;
		camera.position.y = this.height/2;
		createCanvas(this.width ,this.height);
		image(level3_img, 0, 0);
		
	}

	
	this.level3 = function() {
		image(level3_img, 0, 0);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure this out!!!
		 */
		ball.show();
		ball.update(levels);
			if (levels.needUpdate) {
			levels.updateLevel3();
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
		// if (ball.win == true) {
			// this.complete[3] = true;
		// }
		
		this.winMessage(255,0,153,153);
			
	}
	
	this.updateLevel2 = function() {
		this.screenWrap = true;
		this.upperBound = true;
		
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		//blocks.push(new RegBlock(200,500,200,20));
		//blocks.push(new RollBlock(0,590,400,200));
		blocks.push(new WinBlock(125,50,50,20));
		blocks.push(new RegBlock(0, 350, 175, 20));
		blocks.push(new RegBlock(0, 555, 50, 25));
		blocks.push(new RollBlock(0, 580,250, 20));
		blocks.push(new RegBlock(250,500,75,100));
		
		
		blocks.push(new RegBlock(300, 200, 150, 20));
		
		this.width = 400;
		this.height = 600;
		this.startX = 0;
		this.startY = 450;
		this.startXVelocity = 12;
		this.startYVelocity = -10;
		camera.position.x = this.width/2;
		camera.position.y = this.height/2;
		createCanvas(this.width ,this.height);
		image(level2_img, 0, 0);
	}
	
	this.level2 = function() {
		image(level2_img, 0, 0);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure this out!!!
		 */
		ball.show();
		ball.update(levels);

		if (levels.needUpdate) {
			levels.updateLevel2();
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}		
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
		// if (ball.win == true) {
			// this.complete[2] = true;
		// }
		
		this.winMessage(0,204,229,255);
	}

	this.updateLevel4 = function() {
		this.screenWrap = false;
		this.upperBound = true;
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		blocks.push(new WinBlock(900,150,100,20));
		blocks.push(new RegBlock(570, 0, 20, 400));
		blocks.push(new FallBlock(560,0,10,150));
		blocks.push(new RegBlock(50,500,120,100));
		blocks.push(new RegBlock(100,0, 20, 300));
		blocks.push(new FallBlock(90,150,10,170));
		blocks.push(new RegBlock(100,300,245,20));
		blocks.push(new RegBlock(225,500,120,100));
		blocks.push(new RegBlock(400,500,120,100));
		blocks.push(new RegBlock(700,200,20,400));
		blocks.push(new RegBlock(700,0,300,70));
		blocks.push(new FallBlock(990,70,10,80));
		
		this.width = 1000;
		this.height = 600;
		this.startX = 16;
		this.startY = 250;
		this.startXVelocity = 10;
		this.startYVelocity = 0;
		camera.position.x = this.width/2;
		camera.position.y = this.height/2;
		createCanvas(this.width ,this.height);
		image(level4_img, 0, 0);
	}
	
	this.level4 = function() {
		image(level4_img, 0, 0);
		ball.show();
		ball.update(levels);

		if (levels.needUpdate) {
			levels.updateLevel4();
			levels.needUpdate = false;
		}
		if(ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
		// if (ball.win == true) {
			// this.complete[4] = true;
		// }
		this.winMessage(255,153,153,255);
	}
	
	this.updateLevel5 = function() {
		this.screenWrap = false;
		this.upperBound = true;
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		
		//blocks.push(new RegBlock(150, 300, 20, 200));
		blocks.push(new RegBlock(0,500,120,100));
		// blocks.push(new RegBlock(0,0,1,300));
		blocks.push(new RollBlock(0,300,220,50));
		blocks.push(new RegBlock(0,350,20,150));
		blocks.push(new RollBlock(125,150,275,20));
		blocks.push(new RegBlock(120,580,140,40));
		blocks.push(new RollBlock(260,570,140,30));
		//blocks.push(new RegBlock(380,100,20,50));
		blocks.push(new ReverseBlock(400,100,40,500));
		blocks.push(new RegBlock(440,350,20,200));
		//blocks.push(new RegBlock(400,550,300,60));
		blocks.push(new RegBlock(600,0,20,300));
		blocks.push(new RegBlock(600,0,400,20));
		blocks.push(new WinBlock(750,100,230,20));
		blocks.push(new RegBlock(700,500,200,100));
		blocks.push(new ReverseBlock(900,120,20,480));
		blocks.push(new RegBlock(920,120,80,480));
		blocks.push(new RegBlock(950,0,50,120));
		
		
		
		
		this.width = 1000;
		this.height = 600;
		this.startX = 200; // 40
		this.startY = 400; // 400
		this.startXVelocity = 20;
		this.startYVelocity = 0;
		camera.position.x = this.width/2;
		camera.position.y = this.height/2;
		createCanvas(this.width ,this.height);
		image(level5_img, 0, 0);
	}
	
	this.level5 = function() {
		image(level5_img, 0, 0);
		ball.show();
		ball.update(levels);

		if (levels.needUpdate) {
			levels.updateLevel5();
			levels.needUpdate = false;
		}
		if(ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
		// if (ball.win == true) {
			// this.complete[5] = true;
		// }
		this.winMessage(0,255,255,204);
	}
	
	this.updateLevel6 = function() {
		this.screenWrap = false;
		this.upperBound = true;
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		
		blocks.push(new RegBlock(0, 150, 350, 20));
		blocks.push(new RegBlock(50, 225, 175, 20));
		blocks.push(new RollRightBlock(95, 580, 150, 20));
		blocks.push(new RegBlock(225, 225, 20, 215));
		blocks.push(new MoveBlock(245, 245, 225, 335, 255, 105, 180));
		blocks.push(new DeathBlock(520, 150, 220, 20));
		blocks.push(new RegBlock(500, 150, 20, 185));
		blocks.push(new RegBlock(500, 420, 150, 20));
		blocks.push(new ReverseBlock(550 , 0, 190, 20));
		blocks.push(new RegBlock(780, 420, 150, 20));
		blocks.push(new WinBlock(740, 150, 130, 20));
		blocks.push(new RegBlock(980, 0, 200, 400));
		// blocks.push(new RegBlock(550, 150, 20, 100));
		
		
		this.width = 1000;
		this.height = 600;
		this.startX = blocks[0].center;
		this.startY = 100;
		this.startXVelocity = 0;
		this.startYVelocity = 0;
		camera.position.x = this.width/2;
		camera.position.y = this.height/2;
		createCanvas(this.width ,this.height);
		image(level6_Angela, 0, 0);
	}
	
	this.level6 = function() {
		image(level6_Angela, 0, 0);
		ball.show();
		ball.update(levels);

		if (levels.needUpdate) {
			levels.updateLevel6();
			levels.needUpdate = false;
		}
		if(ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
		// if (ball.win == true) {
			// this.complete[6] = true;
		// }
		this.winMessage(0,204,229,255);
	}	
	
	this.updateLevel7 = function() {
		this.screenWrap = true;
		this.upperBound = false;
		this.counter = 0;
		for (var i = 0; i < this.cameraMoved.length; i++) {
			this.cameraMoved[i] = false;
		}
		
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		
		blocks.push(new RegBlock(0, 500, 100, 100));
		blocks.push(new CircleBlock(150,300,50));
		blocks.push(new CircleBlock(250,0,100));
		blocks.push(new CircleBlock(75,-175,30));
		blocks.push(new CircleBlock(100,-500,50));
		blocks.push(new CircleBlock(325,-950,30));
		blocks.push(new CircleBlock(275,-300,50));
		blocks.push(new RegBlock(250,-850,20,350));
		blocks.push(new RegBlock(100,550,500,50));
		blocks.push(new WinBlock(0,-950,150,10));
		blocks.push(new RegBlock(0,-940,170,20));
		blocks.push(new RegBlock(150, -1100, 20,160));
		blocks.push(new RegBlock(0,-1100,170,20));
		
		// blocks.push(new RegBlock(0, 500, 100, 100));
		// blocks.push(new CircleBlock(150,300,30));
		// blocks.push(new CircleBlock(250,0,100));
		// blocks.push(new CircleBlock(75,-175,30));
		// blocks.push(new CircleBlock(100,-500,50));
		// blocks.push(new CircleBlock(325,-950,30));
		// blocks.push(new CircleBlock(275,-300,50));
		// blocks.push(new RegBlock(250,-850,20,200));
		// blocks.push(new RegBlock(100,550,500,50));
		// blocks.push(new WinBlock(0,-950,150,10));
		// blocks.push(new RegBlock(0,-940,170,20));
		// blocks.push(new RegBlock(150, -1100, 20,160));
		// blocks.push(new RegBlock(0,-1100,170,20));
		
		
		this.width = 400;
		this.height = 600;
		this.startX = blocks[0].center;
		this.startY = 450;
		this.startXVelocity = 0;
		this.startYVelocity = 0;
		camera.position.x = this.width/2;
		camera.position.y = this.height/2;
		createCanvas(this.width ,this.height);
		background(200);
	}
	
	this.level7 = function() {
		image(level7_img, 0, -1320);
		// background(200);
		ball.show();
		ball.update(levels);

		if (levels.needUpdate) {
			levels.updateLevel7();
			levels.needUpdate = false;
		}
		if(ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
		
		this.moveCamera(blocks[2],0,-this.cameraSpeed,-200);
		this.moveCamera(blocks[3],1,-this.cameraSpeed,-400);
		this.moveCamera(blocks[4],2,-this.cameraSpeed,-400);
		this.moveCamera(blocks[5],3,-this.cameraSpeed,-300);
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
		
		
		this.winMessage(0,200,191,232);
	}
	

}
