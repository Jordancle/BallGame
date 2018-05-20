	// levelTest = function(levels) {
	// 	levels.screenWrap = true;
	// 	background(200);
		
	// 	/*
	// 	 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure levels out!!!
	// 	 */
	// 	ball.show();
	// 	ball.update(levels);
	// 	for (var i = 0; i < blocks.length; i++) {
	// 		blocks[i].show();
	// 		blocks[i].hit();
	// 		blocks[i].click();
	// 	}
		
	// 	if (levels.needUpdate) {
	// 		updateTest();
	// 		levels.needUpdate = false;
	// 	}
		
	// 	if (ball.needUpdate) {
	// 		ball.start(levels);
	// 		ball.needUpdate = false;
	// 	}		
	// }
	
	function updateLevel1_1(levels) {
		levels.screenWrap = true;
		levels.upperBound = true;
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		levels.blockIndex = 0;
		blocks.push(new RegBlock(0, 350, 100, 20));
		blocks.push(new WinBlock(225,350,100,20));
		
		
		levels.width = 400;
		levels.height = 600;
		levels.startX = 40;
		levels.startY = 320;
		levels.startXVelocity = 0;
		levels.startYVelocity = 0;
		
		camera.position.x = levels.width/2;
		camera.position.y = levels.height/2;
		createCanvas(levels.width ,levels.height);
		image(level1_img, 0, 0);
		
	}

	
	level1_1 = function(levels) {
		
		image(level1_img, 0, 0);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure levels out!!!
		 */
		ball.show();
		ball.update(levels);
		
		if (levels.needUpdate) {
			updateLevel1_1(levels);
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}		
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
			blocks[i].click()
		}
		
		levels.winMessage(0,204,255,204);
		
	}
	
		updateLevel1_2 = function(levels) {
		levels.screenWrap = true;
		levels.upperBound = true;
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		levels.blockIndex = 0;
		blocks.push(new WinBlock(300,300,100,20));
		blocks.push(new RegBlock(0, 350, 100, 20));
		
		levels.width = 400;
		levels.height = 600;
		levels.startX = 40;
		levels.startY = 320;
		levels.startXVelocity = 0;
		levels.startYVelocity = 0;
		camera.position.x = levels.width/2;
		camera.position.y = levels.height/2;
		createCanvas(levels.width ,levels.height);
		image(level1_img, 0, 0);
		
	}

	
	level1_2 = function(levels) {
		image(level1_img, 0, 0);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure levels out!!!
		 */
		ball.show();
		ball.update(levels);
		
		if (levels.needUpdate) {
			updateLevel1_2(levels);
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}		
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
			blocks[i].click()
		}
		
		levels.winMessage(0,204,255,204);
		
	}
	
		updateLevel1_3 = function(levels) {
		levels.screenWrap = true;
		levels.upperBound = true;
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		levels.blockIndex = 0;
		blocks.push(new RegBlock(0, 450, 100, 20));
		blocks.push(new RegBlock(250, 120, 20, 480));
		blocks.push(new WinBlock(250,100,150,20));
		
		levels.width = 400;
		levels.height = 600;
		levels.startX = 40;
		levels.startY = 420;
		levels.startXVelocity = 0;
		levels.startYVelocity = 0;
		camera.position.x = levels.width/2;
		camera.position.y = levels.height/2;
		createCanvas(levels.width ,levels.height);
		image(level1_img, 0, 0);
		
	}

	
	level1_3 = function(levels) {
		image(level1_img, 0, 0);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure levels out!!!
		 */
		ball.show();
		ball.update(levels);
		
		if (levels.needUpdate) {
			updateLevel1_3(levels);
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}		
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
			blocks[i].click()
		}
		
		levels.winMessage(0,204,255,204);
		
	}
	
	updateLevel3 = function(levels) {
		levels.screenWrap = true;
		levels.upperBound = true;
		
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		levels.blockIndex = 0;
		// blocks.push(new RegBlock(200,500,200,20));
		// blocks.push(new RollBlock(0,590,400,200));
		blocks.push(new WinBlock(200,50,100,20));
		blocks.push(new RegBlock(50, 175, 50, 50));
		blocks.push(new RegBlock(250, 275, 30, 225));
		// blocks.push(new RegBlock(330, 0, 20, 520));
		blocks.push(new RegBlock(150,500,130,100));
		levels.width = 400;
		levels.height = 600;
		levels.startX = 214;
		levels.startY = 400;
		levels.startXVelocity = 0;
		levels.startYVelocity = 0;
		camera.position.x = levels.width/2;
		camera.position.y = levels.height/2;
		createCanvas(levels.width ,levels.height);
		image(level3_img, 0, 0);
		
	}

	
	level3 = function(levels) {
		image(level3_img, 0, 0);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure levels out!!!
		 */
		ball.show();
		ball.update(levels);
			if (levels.needUpdate) {
			updateLevel3(levels);
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
			blocks[i].click()
		}
		
		levels.winMessage(255,0,153,153);
			
	}
	
	updateLevel2 = function(levels) {
		levels.screenWrap = true;
		levels.upperBound = true;
		
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		levels.blockIndex = 0;
		blocks.push(new WinBlock(125,50,50,20));
		blocks.push(new RegBlock(0, 350, 175, 20));
		blocks.push(new RegBlock(0, 555, 50, 25));
		blocks.push(new RollBlock(0, 580,250, 20));
		blocks.push(new RegBlock(250,500,75,100));
		
		
		blocks.push(new RegBlock(300, 200, 150, 20));
		
		levels.width = 400;
		levels.height = 600;
		levels.startX = 0;
		levels.startY = 450;
		levels.startXVelocity = 12;
		levels.startYVelocity = -10;
		camera.position.x = levels.width/2;
		camera.position.y = levels.height/2;
		createCanvas(levels.width ,levels.height);
		image(level2_img, 0, 0);
	}
	
	level2 = function(levels) {
		image(level2_img, 0, 0);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure levels out!!!
		 */
		ball.show();
		ball.update(levels);

		if (levels.needUpdate) {
			updateLevel2(levels);
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}		
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
			blocks[i].click()
		}
		
		levels.winMessage(0,204,229,255);
	}

	updateLevel4 = function(levels) {
		levels.screenWrap = false;
		levels.upperBound = true;
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		levels.blockIndex = 0;
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
		
		levels.width = 1000;
		levels.height = 600;
		levels.startX = 16;
		levels.startY = 250;
		levels.startXVelocity = 10;
		levels.startYVelocity = 0;
		camera.position.x = levels.width/2;
		camera.position.y = levels.height/2;
		createCanvas(levels.width ,levels.height);
		image(level4_img, 0, 0);
	}
	
	level4 = function(levels) {
		image(level4_img, 0, 0);
		ball.show();
		ball.update(levels);

		if (levels.needUpdate) {
			updateLevel4(levels);
			levels.needUpdate = false;
		}
		if(ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
			blocks[i].click()
		}
		
		levels.winMessage(255,153,153,255);
	}
	
	updateLevel5 = function(levels) {
		levels.screenWrap = false;
		levels.upperBound = true;
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		levels.blockIndex = 0;
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
		
		
		
		
		levels.width = 1000;
		levels.height = 600;
		levels.startX = 200; // 40
		levels.startY = 400; // 400
		levels.startXVelocity = 20;
		levels.startYVelocity = 0;
		camera.position.x = levels.width/2;
		camera.position.y = levels.height/2;
		createCanvas(levels.width ,levels.height);
		image(level5_img, 0, 0);
	}
	
	level5 = function(levels) {
		image(level5_img, 0, 0);
		ball.show();
		ball.update(levels);

		if (levels.needUpdate) {
			updateLevel5(levels);
			levels.needUpdate = false;
		}
		if(ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
			blocks[i].click()
		}
		
		levels.winMessage(0,255,255,204);
	}
	
	updateLevel6 = function(levels) {
		levels.screenWrap = false;
		levels.upperBound = true;
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		levels.blockIndex = 0;
		blocks.push(new RegBlock(0, 150, 350, 20));
		blocks.push(new RegBlock(50, 225, 175, 20));
		blocks.push(new RollRightBlock(95, 580, 150, 20));
		blocks.push(new RegBlock(225, 225, 20, 215));
		blocks.push(new MoveBlock(245, 245, 225, 335, 255, 105, 180));
		blocks.push(new DeathBlock(520, 150, 220, 20));
		blocks.push(new RegBlock(500, 150, 20, 185));
		blocks.push(new RegBlock(550, 420, 450, 20));
		blocks.push(new MoveBlock(650, 800, 250, 250, 20, 170, 100));
		blocks.push(new ReverseBlock(550 , 0, 190, 40));
		blocks.push(new WinBlock(740, 150, 130, 20));
		blocks.push(new RegBlock(980, 0, 200, 420));
		
		
		levels.width = 1000;
		levels.height = 600;
		levels.startX = blocks[0].center;
		levels.startY = 100;
		levels.startXVelocity = 0;
		levels.startYVelocity = 0;
		camera.position.x = levels.width/2;
		camera.position.y = levels.height/2;
		createCanvas(levels.width ,levels.height);
		image(level6_Angela, 0, 0);
	}
	
	level6 = function(levels) {
		image(level6_Angela, 0, 0);
		ball.show();
		ball.update(levels);

		if (levels.needUpdate) {
			updateLevel6(levels);
			levels.needUpdate = false;
		}
		if(ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
			blocks[i].click()
		}
		
		// if (ball.win == true) {
			// levels.complete[6] = true;
		// }
		levels.winMessage(0,204,229,255);
	}	
	
	updateLevel7 = function(levels) {
		levels.screenWrap = true;
		levels.upperBound = false;
		levels.counter = 0;
		for (var i = 0; i < levels.cameraMoved.length; i++) {
			levels.cameraMoved[i] = false;
		}
		level7_music.stop();
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		levels.blockIndex = 0;
		blocks.push(new RegBlock(0, 525, 50, 100));
		blocks.push(new RollBlock(50,550,350,50));
		blocks.push(new CircleBlock(150,350,50));
		blocks.push(new RegBlock(300,220,100,20));
		blocks.push(new RegBlock(380,0,20,220));
		blocks.push(new CircleBlock(300,0,50));
		blocks.push(new RegBlock(0,0,20,220));
		blocks.push(new RegBlock(0,220,100,20));
		blocks.push(new CircleBlock(100,-150,50));
		blocks.push(new CircleBlock(300,-300,30));

		blocks.push(new CircleBlock(400,-600,200));
		blocks.push(new FakeWinBlock(20,-525,110,20));
		blocks.push(new RegBlock(0,-515,150,20));
		blocks.push(new RegBlock(0,-750,20,235));
		blocks.push(new CircleBlock(300,-950,50));
		blocks.push(new CircleBlock(150,-1200,100));
		blocks.push(new CircleBlock(70,-1395,30));
		blocks.push(new RegBlock(140,-1600,20,225));
		blocks.push(new RegBlock(140,-1375,260,20));
		blocks.push(new CircleBlock(100,-1700,50));
		
		blocks.push(new CircleBlock(285,-2200,70));
		blocks.push(new CircleBlock(275,-1500,50));
		blocks.push(new RegBlock(250,-2050,20,400));
		blocks.push(new RegBlock(250,-2070,150,20));
		blocks.push(new CircleBlock(185,-2400,50));
		blocks.push(new CircleBlock(100,-2650,50));
		blocks.push(new CircleBlock(300,-2850,50));
		blocks.push(new CircleBlock(325,-3075,40));
		// blocks.push(new RegBlock(
		blocks.push(new WinBlock(0,-3050,150,10));
		blocks.push(new RegBlock(0,-3040,170,20));
		blocks.push(new RegBlock(150,-3200, 20,160));
		blocks.push(new RegBlock(0,-3200,170,20));
		// blocks.push(new CircleBlock(350,-2600,250));
		
		
		levels.width = 400;
		levels.height = 600;
		levels.startX = blocks[0].center;
		levels.startY = 475;
		levels.startXVelocity = 0;
		levels.startYVelocity = 0;
		camera.position.x = levels.width/2;
		camera.position.y = levels.height/2;
		createCanvas(levels.width ,levels.height);
		background(200);
		image(level7_img, 0, -1320);
		image(level7_img, 0, -3240);
		image(level7_img, 0, -5160);
	}
	
	level7 = function(levels) {
		background(200);
		image(level7_img, 0, -1320);
		image(level7_img, 0, -3240);
		image(level7_img, 0, -5160);
		
		ball.show();
		ball.update(levels);

		if (levels.needUpdate) {
			updateLevel7(levels);
			levels.needUpdate = false;
		}
		if(ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
		
		levels.moveCameraOnBlock(blocks[5],0,-levels.cameraSpeed,-350);
		levels.moveCameraOnBlock(blocks[9],1,-levels.cameraSpeed,-300);
		levels.moveCameraOnBlock(blocks[10],2,-levels.cameraSpeed,-200);
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
			blocks[i].click();
		}
		var tempCamX, tempCamY;
		if (ball.stall == true) {
			levels.counter++;
			// Begins the shaking
			if (levels.counter > 60 && ball.win == false) {
				camera.position.x += random(-2,2);
				camera.position.y += random(-2,2);
			}
			// to make sure cameraX stays within a certain bound
			if (camera.position.x > levels.width/2 + 20) {
				camera.position.x += -1;
			} else if (camera.position.x < levels.width/2 - 20) {
				camera.position.x += +1;
			}
			if (levels.counter == 60) {
				rumble_sfx.play();
			}
			
			if (levels.counter >= 180 && ball.win == false && keyCode != 65) {
				camera.position.y += -1;
			}
			// Speed Up
			if (levels.counter >= 800 && ball.win == false && keyCode != 65) {
				camera.position.y += -1;
			}
			if (levels.counter == 800) {
				rumble_sfx.play();
			}
			if (levels.counter >= 1300 && ball.win == false && keyCode != 65) {
				camera.position.y += -1;
			}
			if (levels.counter == 1300) {
				rumble_sfx.play();
			}
			if (levels.counter < 180) {
				ball.jumps = 0;
			}
			if (levels.counter == 180) {
				ball.jumps = 1;
				level7_music.play();
			}
		}
		if (ball.win == true) {
			ball.stall = false;
			levels.counter = 0;
		}
		levels.winMessage(0,200,191,232);
	}
	
	updateLevel10 = function(levels) {
		levels.screenWrap = true;
		levels.upperBound = false;
		levels.counter = 0;
		levels.words = "Quite unfortunate for you to end up here, \nisn't it?";
		// levels.words = "\t\t\t\tSup Bro";
		for (var i = 0; i < levels.cameraMoved.length; i++) {
			levels.cameraMoved[i] = false;
		}
		// level7_music.stop();
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		levels.blockIndex = 0;
		
		blocks.push(new RegBlock(0,300,200,20));
		blocks.push(new RegBlock(500,300,200,20));
		blocks.push(new EnergyBall(180,220));
		levels.boss = new Boss(100,100,0);
		
		levels.width = 1000;
		levels.height = 600;
		levels.startX = blocks[0].center;
		levels.startY = blocks[0].y - ball.radius;
		levels.startXVelocity = 0;
		levels.startYVelocity = 0;
		camera.position.x = levels.width/2;
		camera.position.y = levels.height/2;
		createCanvas(levels.width ,levels.height);
		background(0);
	}
	
	level10 = function(levels) {
		background(0);
		// image(level6_Angela, 0, 0);
		if (frameCount%5 == 1) {
			levels.counter++;
		}
		
		ball.show();
		ball.update(levels);
		
		if (levels.needUpdate) {
			updateLevel10(levels);
			levels.needUpdate = false;
		}
		if(ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
		
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
			blocks[i].click();
		}
		
		if (levels.counter > 30)
		blocks[1].strike(300,500,10);
		// levels.boss.show();
		// animation(boss_sprite,0,0);
		
		var typing = levels.words.slice(0,levels.counter);
		push();
		textSize(40);
		text(typing,20,200);
		pop();
		if (typing.length < levels.words.length) {
			ball.jumps = 0;
		}
		
	
		levels.winMessage(0,200,191,232);
	}