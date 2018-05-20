class FakeWinBlock extends Block {
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
			if (ball.stall == false) {
				bump_sfx.play();
			}
			
			// Constrain the ball so that it doesn't fall offscreenBuffering
			if (ball.x > this.x + this.w) {
				ball.x = this.x + this.w;
			} else if (ball.x < this.x) {
				ball.x = this.x;
			}
			
			ball.jumps = 1;
			ball.yVelocity = 0;	
			ball.xVelocity = 0;
			ball.y = this.y-16;
			ball.stall = true;
		}		
	}

	show() {
		fill(34,139,34);
		rect(this.x,this.y,this.w,this.h);
		if (this.mouseOn) {
			console.log("FakeWinBlock(" + this.x + "," + this.y + "," + this.w + "," + this.h + ")\nBlock Index: " + this.blockIndex);
		}
	}
}