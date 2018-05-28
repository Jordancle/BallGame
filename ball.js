function Ball() {
	this.y;
	this.x;
	this.radius = 16;
	
	this.gravity = 1;
	this.yVelocity = 0;
	this.jumps = 0;
	
	this.drag = 0.5;
	this.xVelocity = 0;
	this.win = false;
	
	this.reverse = false;
	
	this.needUpdate = true;
	this.trails = 0;
	
	this.dragOff = false;
	
	this.deathCount = [0,0,0,0,0,0,0,0];
	
	this.stall = false; 	// For the FakeWinBlock
	
	// Variables for if ball is on CircleBlock
	this.rotating;
	this.a2, this.b2, this.c;
	
	this.lag = -1;			// To prevent people from falling off the CircleBlock too quickly
	this.health = 3; 		// For the final battle
	this.energy = false;	// For attacking in the final battle
	this.charged = false;
	this.fired = false;

	// Mainly for the final level where you fall to move the camera
	this.canFall = true;
	this.saveX = 0;
	this.saveY = 0;

	this.canJump = true;

	this.start = function(levels) {
		this.x = levels.startX;
		this.y = levels.startY;
		this.xVelocity = levels.startXVelocity;
		this.yVelocity = levels.startYVelocity;
		this.jumps = 0;
		this.win = false;
		this.reverse = false;
		this.rotating = false;
		levels.needUpdate = true;
		this.stall = false;
		this.lag = -1;
		this.energy = false;
		camera.zoom = 1;
		this.canJump = true;
		this.gravity = 1;
	}
	
	this.death = function(levels) {
		this.start(levels);
		death_sfx.play();
		var currLevel;
		
		this.lag = -1;
		if (level >= 100) {
			currLevel = 1;
		} else {
			currLevel = level;
		}
		this.deathCount[currLevel]++;
		
	}
	
	this.show = function() {
		if (this.jumps == 1) {
			if (this.reverse == true) {
				fill(255, 255, 0);
			} else {
				fill(255);
			}
		} else if (this.jumps == 0) {
			fill (100);
		} else {
			fill(0);
		}
		ellipse(this.x, this.y, this.radius*2, this.radius*2);
		if (this.reverse == true) {
			push();
			imageMode(CENTER);
			image(arrowLeft_img,this.x,this.y);
			pop();
		}
	}
	
	this.update = function(levels) {
		if (this.lag > 0) {
			this.lag--;
		}
		if (this.rotating == true && this.lag == -1) {
			this.lag = 10;
		}
		
		// terminal velocity
		if (this.yVelocity < 40) {
			this.yVelocity += this.gravity;
		}
		this.y += this.yVelocity;
		this.x += this.xVelocity
		
		/*
		 * Y value adjustments for hitting the ground or ceiling
		 * bounce caused yVelocity to = -15, but this was changed to
		 * -yVelocity instead
		 */
		if (this.y > levels.height && this.canFall ) {
			this.death(levels);
		}
		if (this.y > levels.height/2 + ball.radius + camera.position.y && !ball.rotating && this.canFall) {
			this.death(levels);
		}
		if (this.y > levels.height + camera.position.y && ball.rotating) {
			this.death(levels);
		}

		if (this.y < camera.position.y - levels.height/2 && !ball.rotating) {

			this.y = camera.position.y - levels.height/2;
			this.yVelocity = 0;
		}
		
		/*
		 * X Value Adjustments for determining the deacceleration (both directions)
		 * and physics of bouncing against the walls
		 */
		if (levels.screenWrap == true) {
			if (this.x > width) {
				this.x = 0;
				this.rotating = false;
				this.gravity = 1;
				this.lag = -1;
			} 
			if (this.x < 0) {
				this.x = width;
				this.rotating = false;
				this.gravity = 1;
				this.lag = -1;
			}
		} else {
			if (this.x > width - this.radius) {
				this.x = width-this.radius;
				this.xVelocity = 0;
			}
			if (this.x < this.radius) {
				this.x = this.radius;
				this.xVelocity = 0;
			}
		}
		
		// These 3 if statements will eventually cause the ball to stop
		if (this.xVelocity > 0) {
			this.xVelocity -= this.drag*(this.xVelocity*0.1)

		}
		if (this.xVelocity < 0) {
			this.xVelocity -= this.drag*(this.xVelocity*0.1)


		}
		if (this.xVelocity < 0.05 && this.xVelocity > -0.05) {
			this.xVelocity = 0;
		}
		
		// Ball.drag used to be a constant 0.5
		// Ball. gravity used to be a constant 1
		// Ball.gravity should not equal so that other functions can turn gravity off
		if (this.gravity != 0) {
			if ((keyIsDown(32) && this.yVelocity < 0) || (mouseIsPressed && this.yVelocity < 0)) {
				this.gravity = 0.9;
				if (this.dragOff == false) {
					this.drag = 0.3;
				} else {
					this.drag = 0.1;
					addTrail();
					this.trails = 5;
				}
				
			} else {
				this.gravity = 1.1;
				if (this.dragOff == false) {
					this.drag = 0.5; // 0.6
				} else {
					this.drag = 0.1;
					addTrail();
					this.trails = 5;
				}
			}
		}
	}
	
	this.jump = function() {
		if (this.reverse == true) {
			reverse_jump_sfx.play();
			this.yVelocity = -20*1;
			// this.bounce = 1
			this.xVelocity = -12*1.5;
			// this.drag = 0.5;
			this.jumps--;
			this.reverse = false;
		} else if (this.dragOff == true) {
			jump_sfx.play();
			this.yVelocity = -20;
			this.xVelocity = 12*1.5;
			this.jumps--;
		} else if (this.rotating == true) {
			if (this.lag == 0) {
				jump_sfx.play();
				this.yVelocity = (this.b2-this.yVelocity)*20/this.c;
				this.xVelocity = (this.a2-this.xVelocity)*20/this.c;
				this.gravity = 1;
				this.rotating = false;
				this.lag = -1;
				this.jumps--;
			}
		} else if (this.canJump == true) {
			jump_sfx.play();
			this.yVelocity = -20;
			// this.bounce = 1
			this.xVelocity = 12;
			// this.drag = 0.5;
			this.jumps--;
			
		}
	}

}
