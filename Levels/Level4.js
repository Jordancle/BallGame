level4 = function (levels) {
    image(level4_img, 0, 0);
    ball.show();
    ball.update(levels);

    if (levels.needUpdate) {
        levels.update(1000, 600, 16, 250, 10, 0);
        levels.screenWrap = false;
        blocks.push(new WinBlock(900, 150, 100, 20));
        blocks.push(new RegBlock(570, 0, 20, 400));
        blocks.push(new FallBlock(560, 0, 10, 150));
        blocks.push(new RegBlock(50, 500, 120, 100));
        blocks.push(new RegBlock(100, 0, 20, 300));
        blocks.push(new FallBlock(90, 150, 10, 170));
        blocks.push(new RegBlock(100, 300, 245, 20));
        blocks.push(new RegBlock(225, 500, 120, 100));
        blocks.push(new RegBlock(400, 500, 120, 100));
        blocks.push(new RegBlock(700, 200, 20, 400));
        blocks.push(new RegBlock(700, 0, 300, 70));
        blocks.push(new FallBlock(990, 70, 10, 80));
        image(level4_img, 0, 0);
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

    levels.winMessage(255, 153, 153, 255);
}