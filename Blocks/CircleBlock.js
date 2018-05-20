class CircleBlock {
	constructor(x,y,r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.tempX;
		this.tempY;
		this.contact = false;
		this.selected = false; 
		this.blockIndex = levels.blockIndex;
		levels.blockIndex++;
	}
	show() {
		fill(255,0,0);
		ellipse(this.x,this.y,this.r*2,this.r*2);
		
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
	hit() {
		if (dist(ball.x,ball.y,this.x,this.y) <= this.r + ball.radius + 2) {
			/* this.contact used to tell when the camera should move */
			this.contact = true;
			ball.rotating = true;
			/*
				a1 and b1 represent the x distance and the y distance between the center of the ball and the CircleBlock respectively.
				a2 and b2 are those distances idealized to where the edges are exactly touching rather than intersecting.
			*/
			var a1,b1;
			a1 = ball.x - this.x;
			b1 = ball.y - this.y;
			ball.c = ball.radius + this.r;
			ball.a2 = sqrt(sq(ball.c) / (1 + sq(b1/a1)));
			ball.b2 = sqrt(sq(ball.c) / (1 + sq(a1/b1)));
			if ((a1 > 0 && ball.a2 < 0) || (a1 < 0 && ball.a2 > 0)) {
				ball.a2 = -ball.a2;
			}
			if ((b1 > 0 && ball.b2 < 0) || (b1 < 0 && ball.b2 > 0)) {
				ball.b2 = -ball.b2;
			}
			
			push();
			strokeWeight(3);
			stroke(0,0,255);
			// line(ball.x-ball.xVelocity,ball.y-ball.yVelocity,ball.x+ball.a2*32/abs(ball.c),ball.y+ball.b2*32/abs(ball.c));
			line(ball.x-ball.xVelocity,ball.y-ball.yVelocity,this.x,this.y);
			pop();
			ball.x = ball.a2 + this.x;
			ball.y = ball.b2 + this.y;
			
			ball.xVelocity = -ball.b2*5/ball.c;
			ball.yVelocity = ball.a2*5/ball.c;
			
			ball.gravity = 0;
			ball.jumps = 1;
		} 
	}
}