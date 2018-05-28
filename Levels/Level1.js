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
	
	levels.update();

	blocks.push(new RegBlock(0, 350, 100, 20));
	blocks.push(new WinBlock(225, 350, 100, 20));

	levels.width = 400;
	levels.height = 600;
	levels.startX = 40;
	levels.startY = 320;
	levels.startXVelocity = 0;
	levels.startYVelocity = 0;

	createCanvas(levels.width, levels.height);
	image(level1_img, 0, 0);

}


level1_1 = function (levels) {

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

	levels.winMessage(0, 204, 255, 204);

}

updateLevel1_2 = function (levels) {

	levels.update();
	blocks.push(new WinBlock(300, 300, 100, 20));
	blocks.push(new RegBlock(0, 350, 100, 20));

	levels.width = 400;
	levels.height = 600;
	levels.startX = 40;
	levels.startY = 320;
	levels.startXVelocity = 0;
	levels.startYVelocity = 0;
	
	createCanvas(levels.width, levels.height);
	image(level1_img, 0, 0);

}


level1_2 = function (levels) {
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

	levels.winMessage(0, 204, 255, 204);

}

updateLevel1_3 = function (levels) {
	levels.screenWrap = true;
	levels.upperBound = true;
	blocks.splice(0, blocks.length);		// Removes any previous blocks
	levels.blockIndex = 0;
	blocks.push(new RegBlock(0, 450, 100, 20));
	blocks.push(new RegBlock(250, 120, 20, 480));
	blocks.push(new WinBlock(250, 100, 150, 20));

	levels.width = 400;
	levels.height = 600;
	levels.startX = 40;
	levels.startY = 420;
	levels.startXVelocity = 0;
	levels.startYVelocity = 0;
	camera.position.x = levels.width / 2;
	camera.position.y = levels.height / 2;
	createCanvas(levels.width, levels.height);
	image(level1_img, 0, 0);

}


level1_3 = function (levels) {
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

	levels.winMessage(0, 204, 255, 204);

}













