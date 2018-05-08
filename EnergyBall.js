class EnergyBall {
	
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.count = -1;
		this.initX,this.initY;
		this.chargeTime = 100;
	}
	
	show() {
		push();
		fill(34,139,34);
		ellipse(this.x,this.y,ball.radius*2,ball.radius*2);
		pop();
	}
	
	hit() {
		if (dist(ball.x,ball.y,this.x,this.y) <= ball.radius + ball.radius + 2) {
			ball.energy = true;
			ball.xVelocity = 0;
			ball.yVelocity = 0;
			ball.gravity = 0;
		}
		if (ball.energy == true) {
			
			if (this.count == -1) {			// Initialize count
				this.count = 0;
			}
			if (this.count == 0) {			// Initial state values
				this.initX = ball.x;
				this.initY = ball.y;
				charge_sfx.play();
			} 
			if (this.count == this.chargeTime+1) {
				ball.charged = true;
			}
			this.count++;
			camera.zoom = constrain(map(this.count,0,this.chargeTime,1,2),1,2);
			
			// Use low, high, and if statements to correctly determine the constrain bounds
			var low, high;
			if (this.initX > this.x) {
				low = this.x;
				high = this.initX;
			} else {
				low = this.initX;
				high = this.x;
			}
			ball.x = constrain(map(this.count,0,this.chargeTime,this.initX,this.x),low,high);
			
			if (this.initY > this.y) {
				low = this.y;
				high = this.initY;
			} else {
				low = this.initY;
				high = this.y;
			}
			ball.y = constrain(map(this.count,0,this.chargeTime,this.initY,this.y),low,high);
			
			
			if (levels.width/2 > ball.x) {
				low = ball.x;
				high = levels.width/2;
			} else {
				low = levels.width/2;
				high = ball.x;
			}
			var x = constrain(map(this.count,0,this.chargeTime,levels.width/2,ball.x),low,high);
			if (levels.height/2 > ball.y) {
				low = ball.y;
				high = levels.height/2;
			} else {
				low = levels.height/2;
				high - ball.y;
			}
			var y = constrain(map(this.count,0,this.chargeTime,levels.height/2,ball.y),low,high);
			camera.position.x = x;
			camera.position.y = y;
			
			
		} else {
			this.count = -1;
		}
	}
	
	click() {
		if (mouseIsPressed && dist((mouseX + camera.position.x - levels.width/2),(mouseY + camera.position.y - levels.height/2),this.x,this.y) <= this.r) {
			console.log("CircleBlock(" + this.x + "," + this.y + "," + this.r + ")\nBlock Index: " + this.blockIndex);
			this.selected = true;
		}
		
		if (keyCode === 68) {		// d
			this.tempX = camera.mouseX - this.x;
			this.tempY = camera.mouseY - this.y;
		} 
		if (keyCode == 70) {		// f
			this.selected = false;
		}
		if (this.selected == true && mouseIsPressed && keyCode ===83) {		// s
			this.x = camera.mouseX - this.tempX;
			this.y = camera.mouseY - this.tempY;
		}
	}
	
}