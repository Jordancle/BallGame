class MoveBlock extends Block {
	
	constructor(x1,x2,y1,y2,w,h,t) {
		super(x1,y1,w,h);
		super.x1 = x1;
		super.x2 = x2;
		super.y1 = y1;
		super.y2 = y2;
		super.t = t;
		this.forward = true;
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
			ball.yVelocity = -ball.yVelocity*0.7;	
			ball.y = this.y-16;
			ball.jumps = 1;			
		}		
	}

	show() {
		fill(255);
		rect(this.x,this.y,this.w,this.h);
		this.x = map(this.move, 0, this.t, this.x1, this.x2);
		this.y = map(this.move, 0, this.t, this.y1, this.y2);
		
		if (this.forward == true) {
			this.move++;
		} else {
			this.move--;
		}
		if (this.move <= 0) {
			this.forward = true;
		} else if (this.move >= this.t) {
			this.forward = false;
		}
		
		if (this.mouseOn) {
			console.log("MoveBlock(" + this.x1 + "," + this.x2 + "," + this.y1 + "," + this.y2 + "," + this.w + "," + this.h + "," + this.t + ")\nBlock Index: " + this.blockIndex);
		}
			
		
	}
}