
class Block {
	constructor(x,y,w,h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.win = false;
	}

	hitLeft(ball) {
		if (ball.x >this.x-16 && ball.x <this.x && ball.y <this.y+this.h+15 && ball.y >this.y-15) {		//left
			return true;
		}
	}
	hitRight(ball) {
		if (ball.x >this.x+this.w && ball.x <this.x+this.w+16 && ball.y <this.y+this.h+15 && ball.y >this.y-15) {		//right
			return true;
		}
	}
	hitBottom(ball) {
		if (ball.x >this.x-15 && ball.x <this.x+this.w+15 && ball.y <this.y+this.h+16 && ball.y >this.y+(0.5*this.h)) {		//bottom
			return true;
		}
	}
	hitTop(ball) {
		if (ball.x >this.x-15 && ball.x <this.x+this.w+15 && ball.y < this.y+(0.5*this.h) && ball.y >this.y-16) {		//top
			return true;
		} 	
	}
}

class regBlock extends Block {
	constructor(x,y,w,h) {
		super(x,y,w,h);
	}
	show() {
		fill(255);
		rect(this.x,this.y,this.w,this.h);

	}
	hit() {
		if (this.hitLeft(ball) == true) {
			ball.xVelocity = -ball.xVelocity
			ball.x = this.x-16;
			ball.jumps = 1;
		}
		if (this.hitRight(ball) == true) {
			ball.xVelocity = -ball.xVelocity
			ball.x = this.x+this.w+16;
			ball.jumps = 1;
		}		
		if (this.hitBottom(ball) == true) {
			ball.yVelocity = 0
			ball.y = this.y+this.h+16;
			ball.jumps = 1;
		}
		if (this.hitTop(ball) == true) {
			ball.yVelocity = -ball.yVelocity*0.7;	
			ball.y = this.y-16;
			ball.jumps = 1;
		}
	}
}

class winBlock extends Block {
	constructor(x,y,w,h) {
		super(x,y,w,h);
	}	
	hit(){
		if (this.hitLeft(ball) == true) {
			ball.xVelocity = -ball.xVelocity
			ball.x = this.x-16;
			ball.jumps = 1;
		}
		if (this.hitRight(ball) == true) {
			ball.xVelocity = -ball.xVelocity
			ball.x = this.x+this.w+16;
			ball.jumps = 1;
		}
		if (this.hitBottom(ball) == true) {
			ball.yVelocity = 0
			ball.y = this.y+this.h+16;
			ball.jumps = 1;
		}
		if (this.hitTop(ball) == true) {
			ball.yVelocity = 0;	
			ball.xVelocity = 0
			ball.y = this.y-16;
			ball.jumps = 1;
			
			textSize(50);
			fill(255);
			text("YOU WIN!",350,300);
			win = true;
		}		
	}

	show() {
		fill(34,139,34);
		rect(this.x,this.y,this.w,this.h);
	}
}

class rollBlock extends Block {
	constructor(x,y,w,h) {
		super(x,y,w,h);
	}	
	hit() {
		if (this.hitLeft(ball) == true) {
			ball.xVelocity = -ball.xVelocity
			ball.x = this.x-16;
			ball.jumps = 1;
		}				
		if (this.hitRight(ball) == true) {
			ball.xVelocity = -ball.xVelocity
			ball.x = this.x+this.w+16;
			ball.jumps = 1;
		}
		if (this.hitBottom(ball) == true) {
			ball.yVelocity = 0
			ball.y = this.y+this.h+16;
			ball.jumps = 1;
		}
		if (ball.x > this.x-15 && ball.x < this.x+this.w+15 && ball.y < this.y+(this.h)+20 && ball.y > this.y-16) {
			ball.yVelocity = 0;	
			ball.xVelocity = -3
			ball.y = this.y-16;
			ball.jumps = 1;
		}
	}	
	show() {
		fill(255,0,0);
		rect(this.x,this.y,this.w,this.h);
	}
}
/*
function Block(x,y,w,h) {
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
		if (ball.x > x-15 && ball.x < x+w+15 && ball.y < y+h+16 && ball.y > y+(0.5*h)) {		//bottom
			ball.yVelocity = 0
			ball.y = y+h+16;
			ball.jumps = 1;
			return true;
		}
		if (ball.x > x-15 && ball.x < x+w+15 && ball.y < y+(0.5*h) && ball.y > y-16) {		//top
			ball.yVelocity = -ball.yVelocity*0.7;	
			ball.y = y-16;
			ball.jumps = 1;
			return true;
		} 
	}
	
	this.show = function() {
		fill(255);
		rect(x,y,w,h);
	}
	
}

*/
