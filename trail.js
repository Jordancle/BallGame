function Trail(ball) {
	this.y = ball.y;
	this.x = ball.x;
	this.jumps = ball.jumps;
	this.reverse = ball.reverse;
	
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
		ellipse(this.x, this.y, 32, 32);
	}
	
}