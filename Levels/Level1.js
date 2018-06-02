level1_1 = function (levels) {

	image(level1_img, 0, 0);

	/*
	 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure levels out!!!
	 */
	ball.show();
	ball.update(levels);

	if (levels.needUpdate) {
		levels.update(400, 600, 40, 320, 0, 0);
		blocks.push(new RegBlock(0, 350, 100, 20));
		blocks.push(new WinBlock(225, 350, 100, 20));
		image(level1_img, 0, 0);
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

level1_2 = function (levels) {
	image(level1_img, 0, 0);

	/*
	 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure levels out!!!
	 */
	ball.show();
	ball.update(levels);

	if (levels.needUpdate) {
		levels.update(400, 600, 40, 320, 0, 0);
		blocks.push(new WinBlock(300, 300, 100, 20));
		blocks.push(new RegBlock(0, 350, 100, 20));
		image(level1_img, 0, 0);
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

level1_3 = function (levels) {
	image(level1_img, 0, 0);

	/*
	 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure levels out!!!
	 */
	ball.show();
	ball.update(levels);

	if (levels.needUpdate) {
		levels.update(400, 600, 40, 420, 0, 0);
		blocks.push(new RegBlock(0, 450, 100, 20));
		blocks.push(new RegBlock(250, 120, 20, 480));
		blocks.push(new WinBlock(250, 100, 150, 20));
		image(level1_img, 0, 0);
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













