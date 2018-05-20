updateLevel10 = function(levels) {
    levels.screenWrap = true;
    levels.upperBound = false;
    levels.counter = 0;
    levels.words = "Quite unfortunate for you to end up here, \nisn't it?";
    // levels.words = "\t\t\t\tSup Bro";
    for (var i = 0; i < levels.cameraMoved.length; i++) {
        levels.cameraMoved[i] = false;
    }
    // level7_music.stop();
    blocks.splice(0,blocks.length);		// Removes any previous blocks
    levels.blockIndex = 0;
    
    blocks.push(new RegBlock(0,300,200,20));
    blocks.push(new RegBlock(500,300,200,20));
    blocks.push(new EnergyBall(180,220));
    levels.boss = new Boss(100,100,0);
    
    levels.width = 1000;
    levels.height = 600;
    levels.startX = blocks[0].center;
    levels.startY = blocks[0].y - ball.radius;
    levels.startXVelocity = 0;
    levels.startYVelocity = 0;
    camera.position.x = levels.width/2;
    camera.position.y = levels.height/2;
    createCanvas(levels.width ,levels.height);
    background(0);
}

level10 = function(levels) {
    background(0);
    // image(level6_Angela, 0, 0);
    if (frameCount%5 == 1) {
        levels.counter++;
    }
    
    ball.show();
    ball.update(levels);
    
    if (levels.needUpdate) {
        updateLevel10(levels);
        levels.needUpdate = false;
    }
    if(ball.needUpdate) {
        ball.start(levels);
        ball.needUpdate = false;
    }
    
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].show();
        blocks[i].hit();
        blocks[i].click();
    }
    
    if (levels.counter > 30)
    blocks[1].strike(300,500,10);
    // levels.boss.show();
    // animation(boss_sprite,0,0);
    
    var typing = levels.words.slice(0,levels.counter);
    push();
    textSize(40);
    text(typing,20,200);
    pop();
    if (typing.length < levels.words.length) {
        ball.jumps = 0;
    }
    

    levels.winMessage(0,200,191,232);
}