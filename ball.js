function Ball() {
	this.y = height/2;
	this.x = 64;
	
	this.gravity = 1;
	this.yVelocity = 0;
	this.jumps = 1;
	
	this.drag = 0.5;
	this.xVelocity = 0;
	
	this.show = function() {
		if (this.jumps == 1) {
			fill(255);
		} else if (this.jumps == 0) {
			fill (100);
		} else {
			fill(0);
		}
		ellipse(this.x, this.y, 32, 32);
	}

	this.update = function() {
		this.yVelocity += this.gravity;
		this.y += this.yVelocity;
		this.x += this.xVelocity
		
		/*
		 * Y value adjustments for hitting the ground or ceiling
		 * bounce caused yVelocity to = -15, but this was changed to
		 * -yVelocity instead
		 */
		if (this.y > height) {
			this.y = height;
			
			this.yVelocity = -this.yVelocity*0.7;		//
			//this.bounce /= 1.4;
			
		}
		if (this.y < 0) {
			this.y = 0;
			this.yVelocity = 0;
		}
		
		/*
		 * X Value Adjustments for determining the deacceleration (both directions)
		 * and physics of bouncing against the walls
		 */
		if (this.x > width) {
			//this.xVelocity = -this.xVelocity;
			this.x = 0
		}
		if (this.x < 0) {
			//this.xVelocity = -this.xVelocity;
			this.x = width;
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

}
