/*
function winBlock(x,y,w,h) {
	ball = new Ball();
	
	this.hit = function(ball) {
		if (ball.x > x-16 && ball.x < x && ball.y < y+h+15 && ball.y > y-15) {		//left
			ball.xVelocity = -ball.xVelocity
			ball.x = x-16;
			ball.jumps = 1;
			return true;
		}
		if (ball.x > x+w && ball.x < x+w+16 && ball.y < y+h+15 && ball.y > y-15) {		//right
			ball.xVelocity = -ball.xVelocity
			ball.x = x+w+16;
			ball.jumps = 1;
			return true;
		}
		if (ball.x > x-15 && ball.x < x+w+15 && ball.y < y+h+16 && ball.y > y+h) {		//bottom
			ball.yVelocity = 0
			ball.y = y+h+16;
			ball.jumps = 1;
			return true;
		}
		if (ball.x > x-15 && ball.x < x+w+15 && ball.y < y+(0.5*h) && ball.y > y-16) {		//top
			ball.yVelocity = 0;	
			ball.xVelocity = 0
			ball.y = y-16;
			ball.jumps = 1;
			return true;
		} 
	}
	
	this.show = function() {
		fill(34,139,34);
		rect(x,y,w,h);
	}
	
}

function rollBlock(x,y,w,h) {
	ball = new Ball();
	
	this.hit = function(ball) {
		if (ball.x > x-16 && ball.x < x && ball.y < y+h+15 && ball.y > y-15) {		//left
			ball.xVelocity = -ball.xVelocity
			ball.x = x-16;
			ball.jumps = 1;
			return true;
		}
		if (ball.x > x+w && ball.x < x+w+16 && ball.y < y+h+15 && ball.y > y-15) {		//right
			ball.xVelocity = -ball.xVelocity
			ball.x = x+w+16;
			ball.jumps = 1;
			return true;
		}
		if (ball.x > x-15 && ball.x < x+w+15 && ball.y < y+h+16 && ball.y > y+h) {		//bottom
			ball.yVelocity = 0
			ball.y = y+h+16;
			ball.jumps = 1;
			return true;
		}
		if (ball.x > x-15 && ball.x < x+w+15 && ball.y < y+(0.5*h) && ball.y > y-16) {		//top
			ball.yVelocity = 0;	
			ball.xVelocity = -3
			ball.y = y-16;
			ball.jumps = 1;
			return true;
		} 
	}
	
	this.show = function() {
		fill(255,0,0);
		rect(x,y,w,h);
	}
	
}
*/
