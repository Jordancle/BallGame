
class Block {
	constructor(x,y,w,h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		//this.win = false;
		this.blockIndex = levels.blockIndex;
		this.selected = false;
		this.tempX, this.tempY;
		this.mouseOn = false;
		levels.blockIndex++;
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

class WinBlock extends Block {
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
			if (ball.win == false) {
				win_sfx.play();
			}
			if (timer == -5 && next_ok == false) {
				timer = 40;
			}
			
			ball.yVelocity = 0;	
			ball.xVelocity = 0;
			ball.y = this.y-16;
			ball.jumps = 1;
			
			// textSize(50);
			// fill(255);
			// text("YOU WIN!",10,50);
			// if (next_ok == true) {
				// textSize(20);
				// text("Press SPACE to continue\nPress SHIFT to Try Again\nPress ENTER for MENU",10,80);
			// }
			ball.win = true;
		}		
	}

	show() {
		fill(34,139,34);
		rect(this.x,this.y,this.w,this.h);
		if (this.mouseOn) {
			console.log("WinBlock(" + this.x + "," + this.y + "," + this.w + "," + this.h + ")\nBlock Index: " + this.blockIndex);
		}
	}
}

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

class RollRightBlock extends Block {
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
			ball.xVelocity = 3;
			ball.y = this.y-16;
			ball.jumps = 1;
		}
	}	
	show() {
		fill(255,0,0);
		rect(this.x,this.y,this.w,this.h);
		image(arrowRight_img,this.x+(this.w/2)-10,this.y);
		if (this.mouseOn) {
			console.log("RollRightBlock(" + this.x + "," + this.y + "," + this.w + "," + this.h + ")\nBlock Index: " + this.blockIndex);
		}
	}
}

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

class ReverseBlock extends Block {
	constructor(x,y,w,h) {
		super(x,y,w,h);
	}
	show() {
		fill(255, 255, 0);
		rect(this.x,this.y,this.w,this.h);
		if (this.mouseOn) {
			console.log("ReverseBlock(" + this.x + "," + this.y + "," + this.w + "," + this.h + ")\nBlock Index: " + this.blockIndex);
		}
	}
	hit() {
		
		if (this.hitLeft(ball) == true) {
			ball.xVelocity = -ball.xVelocity
			ball.x = this.x-16;
			ball.jumps = 1;
			ball.reverse = true;
		}
		if (this.hitRight(ball) == true) {
			ball.xVelocity = -ball.xVelocity
			ball.x = this.x+this.w+16;
			ball.jumps = 1;
			ball.reverse = true;
		}		
		if (this.hitBottom(ball) == true) {
			ball.yVelocity = 0
			ball.y = this.y+this.h+16;
			ball.jumps = 1;
			ball.reverse = true;
		}
		if (this.hitTop(ball) == true) {
			ball.yVelocity = -ball.yVelocity*0.7;	
			ball.y = this.y-16;
			ball.jumps = 1;
			ball.reverse = true;
		}
	}
}

class MoveBlock extends Block {
	
	constructor(x1,x2,y1,y2,w,h,t) {
		super(x1,y1,w,h);
		this.x1 = x1;
		this.x2 = x2;
		this.y1 = y1;
		this.y2 = y2;
		this.t = t;
		this.move = 0;
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
	
/*
function Block(x,y,w,h) {
	ball = new Ball();
	
	this.hit = function(ball) {
		if (ball.x > x-16 && ball.x < x && ball.y < y+h+15 && ball.y > y-15) {		//left
			ball.xVelocity = -ball.xVelocity
			ball.x = x-16;
			ball.jumps = 1;
			return true;
		}
		if (ball.x > x+w && ball.x < x+w+16 && ball.y < y+h+15 && ball.y > y-15) {		//right
			ball.xVelocity = -ball.xVelocity
			ball.x = x+w+16;
			ball.jumps = 1;
			return true;
		}
		if (ball.x > x-15 && ball.x < x+w+15 && ball.y < y+h+16 && ball.y > y+(0.5*h)) {		//bottom
			ball.yVelocity = 0
			ball.y = y+h+16;
			ball.jumps = 1;
			return true;
		}
		if (ball.x > x-15 && ball.x < x+w+15 && ball.y < y+(0.5*h) && ball.y > y-16) {		//top
			ball.yVelocity = -ball.yVelocity*0.7;	
			ball.y = y-16;
			ball.jumps = 1;
			return true;
		} 
	}
	
	this.show = function() {
		fill(255);
		rect(x,y,w,h);
	}
	
}

*/
