level6 = function(levels) {
    image(level6_Angela, 0, 0);
    ball.show();
    ball.update(levels);

    if (levels.needUpdate) {
        levels.update(1000, 600, 175, 100, 0, 0);
        levels.screenWrap = false;
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
        image(level6_Angela, 0, 0);
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