class EnergyBall() {
	
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	
	this.show() {
		push();
		fill(34,139,34);
		ellipse(this.x,this.y,ball.radius*2,ball.radius*2);
		pop();
	}
	
	this.hit() {
		if (dist(ball.x,ball.y,this.x,this.y) <= this.r + ball.radius + 2) {
			ball.energy = true;
		}
	}
	
}