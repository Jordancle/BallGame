level3 = function (levels) {
    image(level3_img, 0, 0);

    /*
     * These ball functions should be before the block functions!! It took me like 1.5 hours to figure levels out!!!
     */
    ball.show();
    ball.update(levels);
    if (levels.needUpdate) {
        levels.update(400, 600, 214, 400, 0, 0);
        blocks.push(new WinBlock(200, 50, 100, 20));
        blocks.push(new RegBlock(50, 175, 50, 50));
        blocks.push(new RegBlock(250, 275, 30, 225));
        blocks.push(new RegBlock(150, 500, 130, 100));
        image(level3_img, 0, 0);
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

    levels.winMessage(255, 0, 153, 153);

}