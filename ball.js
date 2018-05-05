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
	
	// Variables for if ball is on CircleBlock
	this.rotating;
	this.a2, this.b2, this.c;
	
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
	}
	
	this.death = function(levels) {
		this.x = levels.startX;
		this.y = levels.startY;
		this.xVelocity = levels.startXVelocity;
		this.yVelocity = levels.startYVelocity;
		this.jumps = 0;
		this.win = false;
		this.reverse = false;
		death_sfx.play();
		var currLevel;
		levels.needUpdate = true;
		if (level >= 100) {
			currLevel = 1;
		} else {
			currLevel = level;
		}
		this.deathCount[currLevel]++;
		this.rotating = false;
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
		this.yVelocity += this.gravity;
		this.y += this.yVelocity;
		this.x += this.xVelocity
		
		/*
		 * Y value adjustments for hitting the ground or ceiling
		 * bounce caused yVelocity to = -15, but this was changed to
		 * -yVelocity instead
		 */
		if (this.y > levels.height/2 + camera.position.y) {
			this.death(levels);
		}
		if (this.y < camera.position.y - levels.height/2) {
			this.y = 0;
			this.yVelocity = 0;
		}
		
		/*
		 * X Value Adjustments for determining the deacceleration (both directions)
		 * and physics of bouncing against the walls
		 */
		if (levels.screenWrap == true) {
			if (this.x > width) {
				this.x = 0;
			} 
			if (this.x < 0) {
				this.x = width;
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
			jump_sfx.play();
			this.yVelocity = this.b2*18/this.c;
			this.xVelocity = this.a2*18/this.c;
			this.gravity = 1;
			this.rotating = false;
			this.jumps--;
		} else {
			jump_sfx.play();
			this.yVelocity = -20;
			// this.bounce = 1
			this.xVelocity = 12;
			// this.drag = 0.5;
			this.jumps--;
			
		}
	}

}
