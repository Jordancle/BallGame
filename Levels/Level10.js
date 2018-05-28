updateLevel10 = function (levels) {
    levels.update();
    levels.screenWrap = true;
    levels.upperBound = false;
    ball.canFall = false;       // Used for moving camera downwards
    levels.counter = 0;
    // levels.words = "Quite unfortunate for you to end up here, \nisn't it?";
    levels.words = "\t\t\t\tTest";
    // Reset Camera moved array
    for (var i = 0; i < levels.cameraMoved.length; i++) {
        levels.cameraMoved[i] = false;
    }
    for (var i = 0; i < levels.cameraTrigger.length; i++) {
        levels.cameraTrigger[i] = false;
    }
    levels.blockIndex = 0;

    blocks.push(new RegBlock(0, 300, 200, 20));
    blocks.push(new RegBlock(500, 300, 200, 20));

    cameraBlocks.push(new CameraBlock(0, 600, 1000, 600, 0, 600, 5));
    cameraBlocks.push(new CameraBlock(0, 1200, 1000, 600, 0, 600, 5));
    cameraBlocks.push(new CameraBlock(0, 1800, 1000, 600, 0, 600, 5));
    cameraBlocks.push(new CameraBlock(0, 2400, 1000, 600, 0, 600, 5));
    cameraBlocks.push(new CameraBlock(0, 3000, 1000, 600, 0, 600, 5));
    cameraBlocks.push(new CameraBlock(0, 3600, 1000, 600, 0, 0, 0));

    levels.boss = new Boss(100, 100, 0);

    levels.width = 1000;
    levels.height = 600;
    levels.startX = blocks[0].center;
    levels.startY = blocks[0].y - ball.radius;
    levels.startXVelocity = 0;
    levels.startYVelocity = 0;
    camera.position.x = levels.width / 2;
    camera.position.y = levels.height / 2;
    createCanvas(levels.width, levels.height);
    background(0);
    level10_music_1.stop();
    level10_music_1.play();
    image(level10_img, 0, 0);
    image(level10_img, 0, 1320);
    image(level10_img, 0, 3240);
}

level10 = function (levels) {
    background(0);
    
    push();
    // tint(255,128);
    image(level10_img, 0, 0, 1000, 4200);
    // image(level10_img, 0, 1320);
    // image(level10_img, 0, 3240);
    pop();

    push();
    textSize(32);
    fill(255);
    textFont('Helvetica');
    text("Beware", 600, 900);
    text("Turn Back", 600, 1500);
    text("Leave", 600, 2100);
    text("....", 600, 2800);
    text("stay...", 600 + random(-3,3), 3400 + random(-3,3));
    pop();
    // image(level6_Angela, 0, 0);
    if (frameCount % 5 == 1) {
        levels.counter++;
    }

    ball.show();
    ball.update(levels);

    if (levels.needUpdate) {
        updateLevel10(levels);
        levels.needUpdate = false;
    }
    if (ball.needUpdate) {
        ball.start(levels);
        ball.needUpdate = false;
    }

    for (var i = 0; i < blocks.length; i++) {
        blocks[i].show();
        blocks[i].hit();
        blocks[i].click();
    }

    // if (cameraBlocks[5].trigger()) {
    //     level = 2;
    //     levels.needUpdate = true;
    //     ball.needUpdate = true;
    // }
    for (var i = 0; i < cameraBlocks.length - 1; i++) {
        cameraBlocks[i].cameraPan();
    }

    if (cameraBlocks[5].trigger()) {
        level = 5;
        levels.needUpdate = true;
        ball.needUpdate = true;
    }

    if (levels.counter > 30)
        blocks[1].strike(300, 500, 10);
    // levels.boss.show();
    // animation(boss_sprite,0,0);

    var typing = levels.words.slice(0, levels.counter);
    push();
    textSize(40);
    text(typing, 20, 200);
    pop();
    if (typing.length < levels.words.length) {
        ball.jumps = 0;
    }

    levels.winMessage(0, 200, 191, 232);
}