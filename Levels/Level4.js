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