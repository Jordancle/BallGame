updateLevel2 = function (levels) {
    levels.screenWrap = true;
    levels.upperBound = true;

    blocks.splice(0, blocks.length);		// Removes any previous blocks
    levels.blockIndex = 0;
    blocks.push(new WinBlock(125, 50, 50, 20));
    blocks.push(new RegBlock(0, 350, 175, 20));
    blocks.push(new RegBlock(0, 555, 50, 25));
    blocks.push(new RollBlock(0, 580, 250, 20));
    blocks.push(new RegBlock(250, 500, 75, 100));


    blocks.push(new RegBlock(300, 200, 150, 20));

    levels.width = 400;
    levels.height = 600;
    levels.startX = 0;
    levels.startY = 450;
    levels.startXVelocity = 12;
    levels.startYVelocity = -10;
    camera.position.x = levels.width / 2;
    camera.position.y = levels.height / 2;
    createCanvas(levels.width, levels.height);
    image(level2_img, 0, 0);
}

level2 = function (levels) {
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

    levels.winMessage(0, 204, 229, 255);
}