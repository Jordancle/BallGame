class RollBlock extends Block {
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
			ball.yVelocity = 0;
			ball.y = this.y+this.h+16;
			ball.jumps = 1;
		}
		//if (ball.x > this.x-15 && ball.x < this.x+this.w+15 && ball.y < this.y+(this.h)+20 && ball.y > this.y-16) {
		if (this.hitTop(ball) == true) {
			ball.yVelocity = 0;	
			ball.xVelocity = -3;
			ball.y = this.y-16;
			ball.jumps = 1;
		}
	}	
	show() {
		fill(255,0,0);
		rect(this.x,this.y,this.w,this.h);
		image(arrowLeft_img,this.x+(this.w/2)-10,this.y+(this.h/2)-10);
		if (this.mouseOn) {
			console.log("RollBlock(" + this.x + "," + this.y + "," + this.w + "," + this.h + ")\nBlock Index: " + this.blockIndex);
		}
	}
}