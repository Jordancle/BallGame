class ReverseBlock extends Block {
	constructor(x,y,w,h) {
		super(x,y,w,h);
	}
	show() {
		fill(255, 255, 0);
		rect(this.x,this.y,this.w,this.h);
		if (this.mouseOn) {
			console.log("ReverseBlock(" + this.x + "," + this.y + "," + this.w + "," + this.h + ")\nBlock Index: " + this.blockIndex);
		}
	}
	hit() {
		
		if (this.hitLeft(ball) == true) {
			ball.xVelocity = -ball.xVelocity
			ball.x = this.x-16;
			ball.jumps = 1;
			ball.reverse = true;
		}
		if (this.hitRight(ball) == true) {
			ball.xVelocity = -ball.xVelocity
			ball.x = this.x+this.w+16;
			ball.jumps = 1;
			ball.reverse = true;
		}		
		if (this.hitBottom(ball) == true) {
			ball.yVelocity = 0
			ball.y = this.y+this.h+16;
			ball.jumps = 1;
			ball.reverse = true;
		}
		if (this.hitTop(ball) == true) {
			ball.yVelocity = -ball.yVelocity*0.7;	
			ball.y = this.y-16;
			ball.jumps = 1;
			ball.reverse = true;
		}
	}
}