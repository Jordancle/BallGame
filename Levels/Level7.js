updateLevel7 = function(levels) {
    levels.screenWrap = true;
    levels.upperBound = false;
    levels.counter = 0;
    for (var i = 0; i < levels.cameraMoved.length; i++) {
        levels.cameraMoved[i] = false;
    }
    level7_music.stop();
    blocks.splice(0,blocks.length);		// Removes any previous blocks
    levels.blockIndex = 0;
    blocks.push(new RegBlock(0, 525, 50, 100));
    blocks.push(new RollBlock(50,550,350,50));
    blocks.push(new CircleBlock(150,350,50));
    blocks.push(new RegBlock(300,220,100,20));
    blocks.push(new RegBlock(380,0,20,220));
    blocks.push(new CircleBlock(300,0,50));
    blocks.push(new RegBlock(0,0,20,220));
    blocks.push(new RegBlock(0,220,100,20));
    blocks.push(new CircleBlock(100,-150,50));
    blocks.push(new CircleBlock(300,-300,30));

    blocks.push(new CircleBlock(400,-600,200));
    blocks.push(new FakeWinBlock(20,-525,110,20));
    blocks.push(new RegBlock(0,-515,150,20));
    blocks.push(new RegBlock(0,-750,20,235));
    blocks.push(new CircleBlock(300,-950,50));
    blocks.push(new CircleBlock(150,-1200,100));
    blocks.push(new CircleBlock(70,-1395,30));
    blocks.push(new RegBlock(140,-1600,20,225));
    blocks.push(new RegBlock(140,-1375,260,20));
    blocks.push(new CircleBlock(100,-1700,50));
    
    blocks.push(new CircleBlock(285,-2200,70));
    blocks.push(new CircleBlock(275,-1500,50));
    blocks.push(new RegBlock(250,-2050,20,400));
    blocks.push(new RegBlock(250,-2070,150,20));
    blocks.push(new CircleBlock(185,-2400,50));
    blocks.push(new CircleBlock(100,-2650,50));
    blocks.push(new CircleBlock(300,-2850,50));
    blocks.push(new CircleBlock(325,-3075,40));
    // blocks.push(new RegBlock(
    blocks.push(new WinBlock(0,-3050,150,10));
    blocks.push(new RegBlock(0,-3040,170,20));
    blocks.push(new RegBlock(150,-3200, 20,160));
    blocks.push(new RegBlock(0,-3200,170,20));
    // blocks.push(new CircleBlock(350,-2600,250));
    
    
    levels.width = 400;
    levels.height = 600;
    levels.startX = blocks[0].center;
    levels.startY = 475;
    levels.startXVelocity = 0;
    levels.startYVelocity = 0;
    camera.position.x = levels.width/2;
    camera.position.y = levels.height/2;
    createCanvas(levels.width ,levels.height);
    background(200);
    image(level7_img, 0, -1320);
    image(level7_img, 0, -3240);
    image(level7_img, 0, -5160);
}

level7 = function(levels) {
    background(200);
    image(level7_img, 0, -1320);
    image(level7_img, 0, -3240);
    image(level7_img, 0, -5160);
    
    ball.show();
    ball.update(levels);

    if (levels.needUpdate) {
        updateLevel7(levels);
        levels.needUpdate = false;
    }
    if(ball.needUpdate) {
        ball.start(levels);
        ball.needUpdate = false;
    }
    
    levels.moveCameraOnBlock(blocks[5],0,-levels.cameraSpeed,-350);
    levels.moveCameraOnBlock(blocks[9],1,-levels.cameraSpeed,-300);
    levels.moveCameraOnBlock(blocks[10],2,-levels.cameraSpeed,-200);
    
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].show();
        blocks[i].hit();
        blocks[i].click();
    }
    var tempCamX, tempCamY;
    if (ball.stall == true) {
        levels.counter++;
        // Begins the shaking
        if (levels.counter > 60 && ball.win == false) {
            camera.position.x += random(-2,2);
            camera.position.y += random(-2,2);
        }
        // to make sure cameraX stays within a certain bound
        if (camera.position.x > levels.width/2 + 20) {
            camera.position.x += -1;
        } else if (camera.position.x < levels.width/2 - 20) {
            camera.position.x += +1;
        }
        if (levels.counter == 60) {
            rumble_sfx.play();
        }
        
        if (levels.counter >= 180 && ball.win == false && keyCode != 65) {
            camera.position.y += -1;
        }
        // Speed Up
        if (levels.counter >= 800 && ball.win == false && keyCode != 65) {
            camera.position.y += -1;
        }
        if (levels.counter == 800) {
            rumble_sfx.play();
        }
        // Speed up, y position incremented by 2/3 per frame
        if (levels.counter >= 1300 && frameCount%3 != 2 && ball.win == false && keyCode != 65) {
            camera.position.y += -1;
        }
        if (levels.counter == 1300) {
            rumble_sfx.play();
        }
        if (levels.counter < 180) {
            ball.jumps = 0;
        }
        if (levels.counter == 180) {
            ball.jumps = 1;
            level7_music.play();
        }
    }
    if (ball.win == true) {
        ball.stall = false;
        levels.counter = 0;
    }
    levels.winMessage(0,200,191,232);
}