
class Block {
	constructor(x,y,w,h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.blockIndex = levels.blockIndex;
		this.selected = false;
		this.tempX, this.tempY;
		this.mouseOn = false;
		levels.blockIndex++;
		
		// For the strike method
		this.count = -1;		// Used for timing purposes
		this.shift = false;
		this.move = 0;
		this.x1;
		this.x2;
		this.y2;
		this.y1;
		this.t;
	}
	
	click() {
		if (mouseIsPressed && (mouseX + camera.position.x - levels.width/2) >= this.x && (mouseX + camera.position.x - levels.width/2) <= this.x+this.w && (mouseY + camera.position.y - levels.height/2) >= this.y && (mouseY + camera.position.y - levels.height/2) <= this.y+this.h) {
			this.selected = true;
			this.mouseOn = true;
		} else {
			this.mouseOn = false;
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
	
	// Must be called after show()
	// x and y are the position that the block moves to
	strike(x, y, t) {
		if (this.count == -1) {
			this.count = 0;
			this.x1 = this.x;
			this.y1 = this.y;
			this.x2 = x;
			this.y2 = y;
			this.t = t;
		} else {
			this.count++;
		}
		if (this.count == 120) {
			this.shift = true;
		}
		if (this.shift = true) {
			this.x = map(this.move, 0, this.t, this.x1, this.x2);
			this.y = map(this.move, 0, this.t, this.y1, this.y2);
			if (this.move == this.t) {
				this.shift = false;
			} else {
				this.move++;
			}
		}
		

	}
	
	hitLeft(ball) {
		//bump_sfx.play();
		if (ball.x >this.x-16 && ball.x <this.x && ball.y <this.y+this.h+15 && ball.y >this.y-15) {		//left
			return true;
		}
	}
	hitRight(ball) {
		//bump_sfx.play();
		if (ball.x >this.x+this.w && ball.x <this.x+this.w+16 && ball.y <this.y+this.h+15 && ball.y >this.y-15) {		//right
			return true;
		}
	}
	hitBottom(ball) {
		//bump_sfx.play();
		if (ball.x >this.x-15 && ball.x <this.x+this.w+15 && ball.y <this.y+this.h+16 && ball.y >this.y+(0.5*this.h)) {		//bottom
			return true;
		}
	}
	hitTop(ball) {
		if (ball.yVelocity != 0) {
		//	bump_sfx.play();
		}
		if (ball.x >this.x-15 && ball.x <this.x+this.w+15 && ball.y < this.y+(0.5*this.h) && ball.y >this.y-16) {		//top
			return true;
		} 	
	}
}
