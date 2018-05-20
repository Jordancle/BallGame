class DeathBlock extends Block {
	constructor(x,y,w,h) {
		super(x,y,w,h);
		this.center = (w/2)+x;
	}
	show() {
		fill(0);
		rect(this.x,this.y,this.w,this.h);
		if (this.mouseOn) {
			console.log("DeathBlock(" + this.x + "," + this.y + "," + this.w + "," + this.h + ")\nBlock Index: " + this.blockIndex);
		}

	}
	hit() {
		if (this.hitLeft(ball) == true) {
			ball.death(levels);
		}
		if (this.hitRight(ball) == true) {
			ball.death(levels);
		}		
		if (this.hitBottom(ball) == true) {
			ball.death(levels);
		}
		if (this.hitTop(ball) == true) {
			ball.death(levels);
		}
	}
}