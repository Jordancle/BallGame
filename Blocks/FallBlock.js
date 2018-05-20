class FallBlock extends Block {
	constructor(x,y,w,h) {
		super(x,y,w,h);
	}
	hit() {
		if (this.hitLeft(ball) == true) {
			ball.xVelocity = 0;
			ball.yVelocity = 0;
			ball.x=this.x-15;
			ball.jumps = 1;
		}
		if (this.hitRight(ball) == true) {
			ball.xVelocity = 0;
			ball.yVelocity = 0;
			ball.x = this.x+this.w+16;
			ball.jumps = 1;
		}
		if (this.hitBottom(ball) == true) {
			ball.yVelocity = 0;
			ball.xVelocity = 0;
			ball.y = this.y+this.h+16;
			ball.jumps = 1;
		}
		if (this.hitTop(ball) == true) {
			ball.yVelocity = 0;
			ball.xVelocity = 0;
			ball.y = this.y-16;
			ball.jumps = 1;
		}
	}
		show() {
			fill(255,0,255);
			rect(this.x,this.y,this.w,this.h);
			if (this.mouseOn) {
				console.log("FallBlock(" + this.x + "," + this.y + "," + this.w + "," + this.h + ")\nBlock Index: " + this.blockIndex);
			}
		}
}