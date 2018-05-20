function updateLevel5 (levels) {
    levels.screenWrap = false;
    levels.upperBound = true;
    blocks.splice(0,blocks.length);		// Removes any previous blocks
    levels.blockIndex = 0;
    blocks.push(new RegBlock(0,500,120,100));
    blocks.push(new RollBlock(0,300,220,50));
    blocks.push(new RegBlock(0,350,20,150));
    blocks.push(new RollBlock(125,150,275,20));
    blocks.push(new RegBlock(120,580,140,40));
    blocks.push(new RollBlock(260,570,140,30));
    blocks.push(new ReverseBlock(400,100,40,500));
    blocks.push(new RegBlock(440,350,20,200));
    blocks.push(new RegBlock(650,0,20,250));
    blocks.push(new RegBlock(650,0,350,20));
    
    blocks.push(new WinBlock(800,100,180,20));
    blocks.push(new RegBlock(700,500,200,100));
    blocks.push(new ReverseBlock(900,120,20,480));
    blocks.push(new RegBlock(920,120,80,480));
    blocks.push(new RegBlock(950,0,50,120));
    
    
    
    
    levels.width = 1000;
    levels.height = 600;
    levels.startX = 200; // 40
    levels.startY = 400; // 400
    levels.startXVelocity = 20;
    levels.startYVelocity = 0;
    camera.position.x = levels.width/2;
    camera.position.y = levels.height/2;
    createCanvas(levels.width ,levels.height);
    image(level5_img, 0, 0);
}

level5 = function(levels) {
    image(level5_img, 0, 0);
    ball.show();
    ball.update(levels);

    if (levels.needUpdate) {
        updateLevel5(levels);
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
    
    levels.winMessage(0,255,255,204);
}