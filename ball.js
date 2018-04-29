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
	
	this.deathCount = [0,0,0,0,0,0,0];
	
	this.start = function(levels) {
		this.x = levels.startX;
		this.y = levels.startY;
		this.xVelocity = 0;
		this.yVelocity = 0;
		this.jumps = 0;
		this.win = false;
		this.reverse = false;
		
	}
	
	this.death = function(levels) {
		this.x = levels.startX;
		this.y = levels.startY;
		this.xVelocity = 0;
		this.yVelocity = 0;
		this.jumps = 0;
		this.win = false;
		this.reverse = false;
		death_sfx.play();
		var currLevel;
		if (level >= 100) {
			currLevel = 1;
		} else {
			currLevel = level;
		}
		this.deathCount[currLevel]++;
		// this.trails++;
	}
	
	this.show = function() {
		if (this.jumps == 1) {
			if (this.reverse == false) {
				fill(255)
			} else {
				fill(255, 255, 0);
			}
		} else if (this.jumps == 0) {
			fill (100);
		} else {
			fill(0);
		}
		ellipse(this.x, this.y, this.radius*2, this.radius*2);
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
		if (this.y > height) {
			this.death(levels);
		}
		if (this.y < 0) {
			this.y = 0;
			this.yVelocity = 0;
		}
		
		/*
		 * X Value Adjustments for determining the deacceleration (both directions)
		 * and physics of bouncing against the walls
		 */
		if (screenWrap == true) {
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
		
	}
	
	this.jump = function() {
		jump_sfx.play();
		if (this.reverse == false) {
			this.yVelocity = -20;
			this.bounce = 1
			this.xVelocity = 12;
			// this.drag = 0.5;
			this.jumps--;
		} else {
			this.yVelocity = -20*1;
			this.bounce = 1
			this.xVelocity = -12*1.5;
			// this.drag = 0.5;
			this.jumps--;
			this.reverse = false;
		}
	}

}
