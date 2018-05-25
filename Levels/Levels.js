
function Levels() {
	this.width, this.winWidthRadius = 137;
	this.height, this.winHeightRadius = 125;
	this.startX;
	this.startY;
	this.startXVelocity;
	this.startYVelocity;
	this.messageX;
	this.messageY;
	this.needUpdate = true;
	this.complete = [false, false, false, false, false, false, false, false];
	this.perfects = [false, false, false, false, false, false, false, false];
	this.upperBound = true;
	this.screenWrap = true;
	this.cameraMoved = [];		// used to determine when the camera has moved
	this.counter = 0, this.cameraSpeed = 20;				// attempt at static variables
	this.blockIndex = 0;		// used to see which block is at which blocks array index
	this.words;
	this.boss;
	this.cameraTrigger = [];	// Array used to trigger camera movements
	this.cameraCounter = 0;		// Used to count through camera incrementions
	this.updateTest = function() {
		
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		blocks.push(new RegBlock(0, 500, 400,100));
		
		this.width = 400;
		this.height = 600;
		this.startX = 214;
		this.startY = this.height/2;
		createCanvas(this.width ,this.height);
		background(200);
		
	}

	this.moveCamera = function(trigger,cameraIndex,speed,distance) {
		if (trigger == true && this.cameraMoved[cameraIndex] != true) {
			if (this.cameraCounter == 0) {
				cameraPan_sfx.play();
			}
			camera.position.y += speed;
			this.cameraCounter += speed;
			ball.canJump = false;
			if ((this.cameraCounter <= distance && speed < 0) || (this.cameraCounter >= distance && speed > 0)) {
				this.cameraMoved[cameraIndex] = true;
				this.cameraCounter = 0;
				ball.canJump = true;
			}
		}
	}
	
	this.winMessage = function(c,r,g,b) {
		if (timer > 0) {
			timer--;
		}
		if (timer == 0) {
			next_ok = true;
		}
		this.messageX = map(timer,40,0,(this.width/2) + camera.position.x - levels.width/2,(this.width/2) + camera.position.x - levels.width/2);
		this.messageY = map(timer,40,0,-50 + camera.position.y - levels.height/2,(this.height/2) + camera.position.y - levels.height/2);
		if (ball.win == true) {
			rectMode(RADIUS);
			fill(r,g,b);
			rect(this.messageX,this.messageY,this.winWidthRadius,this.winHeightRadius);
			rectMode(CORNER);
			textSize(45); // 45
			textAlign(CENTER);
			fill(c);
			text("SUCCESS!",this.messageX,this.messageY-70);
			if (next_ok == true) {
				textSize(20);
				text("Press SPACE to continue",this.messageX,this.messageY-30);
				text("Press SHIFT\nto RESTART",this.messageX-70,this.messageY+20);
				text("Press ENTER\nfor MENU",this.messageX+70,this.messageY+20);
				push();
				noFill();
				stroke(c);
				rect((this.messageX)-135, levels.messageY, 135,50);
				rect((this.messageX), levels.messageY, 135,50);
				pop();
				if (level < 100) {
					
					if (ball.deathCount[level] > 0) {
						text("Falls: " + (ball.deathCount[level]) + "\nRank: 🗸",this.messageX,this.messageY+80);
					} else {
						text("Falls: " + (ball.deathCount[level]) + "\nRank: ★",this.messageX,this.messageY+80);
						this.perfects[level] = true;
					}
					this.complete[level] = true;
					// ball.deathCount[level] = 0;
				}
			}
			textAlign(RIGHT);
			
		}
		
	}
	this.update = function () {
		this.upperBound = true;
		this.screenWrap = true;
		this.cameraCounter = 0;		// Used to count through camera incrementions
	}

	this.screenShift = function (cameraIndex, speed, distance) {
		var previousMoved = true;
		for (var i = 0; i < cameraIndex; i++) {
			if (levels.cameraMoved[i] == false) {
				previousMoved = false;
			}
		}

		var futureTriggered = false;
		for (var i = cameraIndex + 1; i < levels.cameraTrigger.length; i++) {
			if (levels.cameraTrigger == true) {
				futureTriggered = true;
			}
		}
		// check for levels.cameraTrigger so that this if statement only happens once
		if (ball.y > levels.height / 2 + ball.radius * 2 + camera.position.y && levels.cameraTrigger[cameraIndex] != true && previousMoved) {
			levels.cameraTrigger[cameraIndex] = true;
			ball.saveX = ball.xVelocity;
			ball.saveY = ball.yVelocity;
		}
		if (levels.cameraTrigger[cameraIndex] == true && levels.cameraMoved[cameraIndex] != true) {
			ball.yVelocity = 0;
			ball.xVelocity = 0;
			ball.gravity = 0;
		} else if (levels.cameraTrigger[cameraIndex] == true && levels.cameraMoved[cameraIndex] == true && ball.saveX != 0 && ball.saveY != 0 && !futureTriggered) {      // Restore Ball velocity state
			ball.xVelocity = ball.saveX;
			ball.yVelocity = ball.saveY;
			ball.saveX = 0;
			ball.saveY = 0;
			ball.gravity = 1;
		}
		levels.moveCamera(levels.cameraTrigger[cameraIndex], cameraIndex, speed, distance);
	}
}	

	


