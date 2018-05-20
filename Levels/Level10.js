updateLevel10 = function(levels) {
    levels.screenWrap = true;
    levels.upperBound = false;
    ball.canFall = false;       // Used for moving camera downwards
    levels.counter = 0;
    // levels.words = "Quite unfortunate for you to end up here, \nisn't it?";
    levels.words = "\t\t\t\tSup Bro";
    // Reset Camera moved array
    for (var i = 0; i < levels.cameraMoved.length; i++) {
        levels.cameraMoved[i] = false;
    }
    for (var i = 0; i < levels.cameraTrigger.length; i++) {
        levels.cameraTrigger[i] = false;
    }
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
    level10_music_1.stop();
    level10_music_1.play();
}

level10 = function(levels) {
    background(0);
    image(level7_img, 0, 0);
    image(level7_img, 0, 1320);
    image(level7_img, 0, 3240);
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
    
    // check for levels.cameraTrigger so that this if statement only happens once
    if (ball.y > levels.height/2 + ball.radius*2 + camera.position.y && levels.cameraTrigger[0] != true) {
        levels.cameraTrigger[0] = true;
        ball.saveX = ball.xVelocity;
        ball.saveY = ball.yVelocity;
        console.log(ball.saveY);
    }
    if (levels.cameraTrigger[0] == true && levels.cameraMoved[0] != true) {
        ball.yVelocity = 0;
        ball.xVelocity = 0;
        ball.gravity = 0;
    } else if (levels.cameraTrigger[0] == true && levels.cameraMoved[0] == true && ball.saveX != 0 && ball.saveY != 0 && levels.cameraTrigger[1] != true) {      // Restore Ball velocity state
        console.log(ball.saveY);
        ball.xVelocity = ball.saveX;
        ball.yVelocity = ball.saveY;
        ball.saveX = 0;
        ball.saveY = 0;
        ball.gravity = 1;
    }
    levels.moveCamera(levels.cameraTrigger[0],0,5,400);
   
    // check for levels.cameraTrigger so that this if statement only happens once
    if (ball.y > levels.height/2 + ball.radius*2 + camera.position.y && levels.cameraTrigger[1] != true && levels.cameraMoved[0] == true) {
        levels.cameraTrigger[1] = true;
        ball.saveX = ball.xVelocity;
        ball.saveY = ball.yVelocity;
        console.log(ball.saveY);
    }
    if (levels.cameraTrigger[1] == true && levels.cameraMoved[1] != true) {
        ball.yVelocity = 0;
        ball.xVelocity = 0;
        ball.gravity = 0;
    } else if (levels.cameraTrigger[1] == true && levels.cameraMoved[1] == true && ball.saveX != 0 && ball.saveY != 0) {      // Restore Ball velocity state
        //console.log(ball.saveY);
        ball.xVelocity = ball.saveX;
        ball.yVelocity = ball.saveY;
        ball.saveX = 0;
        ball.saveY = 0;
        ball.gravity = 1;
    }
    levels.moveCamera(levels.cameraTrigger[1],1,5,400);

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