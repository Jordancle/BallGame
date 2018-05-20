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