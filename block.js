
class Block {
	constructor(x,y,w,h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	hitLeft(ball) {
		if (ball.x >this.x-16 && ball.x <this.x && ball.y <this.y+this.h+15 && ball.y >this.y-15) {		//left
			ball.xVelocity = -ball.xVelocity
			ball.x =this.x-16;
			ball.jumps = 1;
			return true;
		}
	}
	hitRight(ball) {
		if (ball.x >this.x+this.w && ball.x <this.x+this.w+16 && ball.y <this.y+this.h+15 && ball.y >this.y-15) {		//right
			ball.xVelocity = -ball.xVelocity
			ball.x =this.x+this.w+16;
			ball.jumps = 1;
			return true;
		}
	}
	hitBottom(ball) {
		if (ball.x >this.x-15 && ball.x <this.x+this.w+15 && ball.y <this.y+this.h+16 && ball.y >this.y+(0.5*this.h)) {		//bottom
			ball.yVelocity = 0
			ball.y =this.y+this.h+16;
			ball.jumps = 1;
			return true;
		}
	}
	hitTop(ball) {
		if (ball.x >this.x-15 && ball.x <this.x+this.w+15 && ball.y <this.y+(0.5*this.h) && ball.y >this.y-16) {		//top
			ball.yVelocity = -ball.yVelocity*0.7;	
			ball.y =this.y-16;
			ball.jumps = 1;
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
}

class winBlock extends Block {
	constructor(x,y,w,h) {
		super(x,y,w,h);
	}	
	hitTop(ball) {
		if (ball.x > this.x-15 && ball.x < this.x+this.w+15 && ball.y < this.y+(0.5*this.h) && ball.y > this.y-16) {		//top
			ball.yVelocity = 0;	
			ball.xVelocity = 0
			ball.y = this.y-16;
			ball.jumps = 1;
			return true;
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
	hitTop(ball) {
		if (ball.x > this.x-15 && ball.x < this.x+this.w+15 && ball.y < this.y+(this.h)+20 && ball.y > this.y-16) {		//top
			ball.yVelocity = 0;	
			ball.xVelocity = -3
			ball.y = this.y-16;
			ball.jumps = 1;
			return true;
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
