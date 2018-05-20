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