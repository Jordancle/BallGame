
class Block {
	constructor(x,y,w,h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		//this.win = false;
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
			ball.yVelocity = 0
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
			ball.xVelocity = 3;
			ball.y = this.y-16;
			ball.jumps = 1;
		}
	}
		show() {
			fill(255,0,255);
			rect(this.x,this.y,this.w,this.h);
		}
}

class ReverseBlock extends Block {
	constructor(x,y,w,h) {
		super(x,y,w,h);
	}
	show() {
		fill(255, 255, 0);
		rect(this.x,this.y,this.w,this.h);

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
