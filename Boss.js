class Boss {

	constructor(x,y,state) {
		this.x = x;
		this.y = y;
		this.state = state;
		this.health = 5;
		this.count = 0;
	}
	
	show() {
		var count = this.count;
		// if (count => 9 && count <= 24) {
			// image(boss_sprite[0],this.x,this.y);
		// } else {
		if (count >= 10 && count < 15) {
			image(boss_sprite[count%5],this.x,this.y);
		} else {
			image(boss_sprite[4],this.x+500,this.y);
		}
		// copy(boss_sprite[4],this.x+960,this.y,-960,640,this.x,this.y,960,640);
		// }
		if (frameCount%10 == 0) {
			this.count++;
		}
	}
	
	// update() {
		
	// }
	
}