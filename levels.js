
function Levels() {
	this.width, this.winWidthRadius = 137;
	this.height, this.winHeightRadius = 125;
	this.startX;
	this.startY;
	this.messageX;
	this.messageY;
	this.needUpdate = true;
	this.complete = [false, false, false, false, false, false, false, false];
	this.perfects = [false, false, false, false, false, false, false, false];
	
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

	this.winMessage = function(c,r,g,b) {
		if (timer > 0) {
			timer--;
		}
		if (timer == 0) {
			next_ok = true;
		}
		this.messageX = map(timer,40,0,(this.width/2),(this.width/2));
		this.messageY = map(timer,40,0,-50,(this.height/2));
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
						text("Attempts: " + (ball.deathCount[level]+1) + "\nRank: 🗸",this.messageX,this.messageY+80);
					} else {
						text("Attempts: " + (ball.deathCount[level]+1) + "\nRank: ★",this.messageX,this.messageY+80);
						this.perfects[level] = true;
					}
					this.complete[level] = true;
				}
				
			}
			textAlign(RIGHT);
		}
		
	}
	
	this.levelTest = function() {
		screenWrap = true;
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
		createCanvas(this.width ,this.height);
		// background(102,102,153);
		
	}

	
	this.level1_1 = function() {
		screenWrap = true;
		background(102,102,153);
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
		createCanvas(this.width ,this.height);
		// background(102,102,153);
		
	}

	
	this.level1_2 = function() {
		screenWrap = true;
		background(102,102,153);
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
		blocks.splice(0,blocks.length);		// Removes any previous blocks

		blocks.push(new RegBlock(0, 450, 100, 20));
		blocks.push(new RegBlock(250, 120, 20, 480));
		blocks.push(new WinBlock(250,100,150,20));
		
		this.width = 400;
		this.height = 600;
		this.startX = 40;
		this.startY = 420;
		createCanvas(this.width ,this.height);
		// background(102,102,153);
		
	}

	
	this.level1_3 = function() {
		screenWrap = false;
		background(102,102,153);
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
		createCanvas(this.width ,this.height);
		background(204,255,229);
		
	}

	
	this.level3 = function() {
		screenWrap = true;
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
		this.startX = 150;
		this.startY = 400;
		createCanvas(this.width ,this.height);
		
	}
	
	this.level2 = function() {
		screenWrap = true;
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
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		blocks.push(new WinBlock(900,150,100,20));
		blocks.push(new RegBlock(570, 0, 20, 400));
		blocks.push(new FallBlock(560,0,10,150));
		blocks.push(new RegBlock(50,500,120,100));
		blocks.push(new RegBlock(150, 350, 20, 250));
		// blocks.push(new FallBlock(260,75,10,100));
		blocks.push(new RegBlock(200,500,120,100));
		blocks.push(new RegBlock(400,500,120,100));
		blocks.push(new RegBlock(700,200,20,400));
		blocks.push(new RegBlock(700,0,300,70));
		blocks.push(new FallBlock(990,70,10,80));
		
		this.width = 1000;
		this.height = 600;
		this.startX = 64;
		this.startY = 450;
		createCanvas(this.width ,this.height);
		background(103,154,144);
	}
	
	this.level4 = function() {
		screenWrap = false;
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
		this.startX = 40;
		this.startY = 400;
		createCanvas(this.width ,this.height);
		background(255,204,153);
	}
	
	this.level5 = function() {
		screenWrap = false;
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
		createCanvas(this.width ,this.height);
		background(255,204,153);
	}
	
	this.level6 = function() {
		screenWrap = false;
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
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		
		blocks.push(new RegBlock(200, 400, 800, 20));
		blocks.push(new RegBlock(0, 560, 1000, 50));
		
		// blocks.push(new RegBlock(550, 150, 20, 100));
		
		
		this.width = 1000;
		this.height = 600;
		this.startX = blocks[0].center;
		this.startY = 500;
		createCanvas(this.width ,this.height);
		background(255,204,153);
	}
	
	this.level7 = function() {
		screenWrap = true;
		ball.dragOff = true;
		// image(Level7_Angela, 0, 0);
		background(200);
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
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
		// if (ball.win == true) {
			// this.complete[7] = true;
		// }
		this.winMessage(0,204,229,255);
	}
	

}
