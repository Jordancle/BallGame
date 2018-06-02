level2 = function (levels) {
    image(level2_img, 0, 0);

    /*
     * These ball functions should be before the block functions!! It took me like 1.5 hours to figure levels out!!!
     */
    ball.show();
    ball.update(levels);

    if (levels.needUpdate) {
        levels.update(400, 600, 0, 450, 12, -10);
        blocks.push(new WinBlock(125, 50, 50, 20));
        blocks.push(new RegBlock(0, 350, 175, 20));
        blocks.push(new RegBlock(0, 555, 50, 25));
        blocks.push(new RollBlock(0, 580, 250, 20));
        blocks.push(new RegBlock(250, 500, 75, 100));
        blocks.push(new RegBlock(300, 200, 150, 20));
        image(level2_img, 0, 0);
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