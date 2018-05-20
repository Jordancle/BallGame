class RegBlock extends Block {
	constructor(x,y,w,h) {
		super(x,y,w,h);
		this.center = (w/2)+x;
	}
	show() {
		fill(255);
		rect(this.x,this.y,this.w,this.h);
		if (this.mouseOn) {
			console.log("RegBlock(" + this.x + "," + this.y + "," + this.w + "," + this.h + ")\nBlock Index: " + this.blockIndex);
		}
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
			ball.yVelocity = 0;		// Hitting the bottom of a block does not rebound the ball so that the ball can continuously jump into the block.
			
			// ball.yVelocity = -ball.yVelocity;
			ball.y = this.y+this.h+16;
			ball.jumps = 1;
		}
		if (this.hitTop(ball) == true) {
			// bump_sfx.setVolume(map(ball.yVelocity,5,20,0,1))
			// bump_sfx.play();
			ball.yVelocity = -ball.yVelocity*0.7;	
			ball.y = this.y-16;
			ball.jumps = 1;
		}
	}
}