
function Levels() {
	this.width;
	this.height;
	this.startX;
	this.startY;
	this.needUpdate = true;
	
	this.updateLevel1 = function() {
		
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		//blocks.push(new RegBlock(200,500,200,20));
		blocks.push(new RollBlock(0,590,400,200));
		blocks.push(new WinBlock(0,150,200,20));
		blocks.push(new RegBlock(250, 300, 20, 200));
		blocks.push(new RegBlock(330, 0, 20, 520));
		blocks.push(new RegBlock(150,500,120,20));
		this.width = 400;
		this.height = 600;
		this.startX = 214;
		this.startY = this.height/2;
		createCanvas(this.width ,this.height);
		background(102,102,153);
		
	}
	
	this.level1 = function() {
		background(102,102,153);
		
		/*
		 * These ball functions should be before the block functions!! It took me like 1.5 hours to figure this out!!!
		 */
		ball.show();
		ball.update(levels);
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		
		if (levels.needUpdate) {
			levels.updateLevel1();
			levels.needUpdate = false;
		}
		
		if (ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}		
	}

	this.updateLevel2 = function() {
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		blocks.push(new WinBlock(900,150,100,20));
		blocks.push(new RegBlock(150, 300, 20, 200));
		blocks.push(new RegBlock(570, 0, 20, 400));
		blocks.push(new FallBlock(560,0,10,100));
		blocks.push(new RegBlock(50,500,120,20));
		blocks.push(new RegBlock(200,500,120,100));
		blocks.push(new RegBlock(400,500,120,100));
		blocks.push(new RegBlock(700,200,20,400));
		blocks.push(new RegBlock(700,0,200,70));
		
		this.width = 1000;
		this.height = 600;
		this.startX = 64;
		this.startY = this.height/2;
		createCanvas(this.width ,this.height);
		background(103,154,144);
	}
	
	this.level2 = function() {
		background(103,154,144);
		ball.show();
		ball.update(levels);
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		if (levels.needUpdate) {
			levels.updateLevel2();
			levels.needUpdate = false;
		}
		if(ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
	}
	
	this.updateLevel3 = function() {
		blocks.splice(0,blocks.length);		// Removes any previous blocks
		
		//blocks.push(new RegBlock(150, 300, 20, 200));
		blocks.push(new RegBlock(0,500,120,100));
		blocks.push(new RollBlock(0,300,220,50));
		blocks.push(new RegBlock(0,350,20,150));
		blocks.push(new RollBlock(100,150,300,20));
		blocks.push(new RegBlock(120,580,140,40));
		blocks.push(new RollBlock(260,580,140,40));
		blocks.push(new RegBlock(380,100,20,50));
		blocks.push(new ReverseBlock(400,100,40,500));
		blocks.push(new RegBlock(440,350,20,200));
		//blocks.push(new RegBlock(400,550,300,60));
		blocks.push(new RegBlock(600,0,20,300));
		blocks.push(new WinBlock(700,100,280,20));
		blocks.push(new RegBlock(700,500,200,100));
		blocks.push(new ReverseBlock(900,150,20,450));
		blocks.push(new RegBlock(920,150,10,450));
		blocks.push(new RegBlock(980,0,20,120));
		
		
		
		
		this.width = 1000;
		this.height = 600;
		this.startX = 40;
		this.startY = 400;
		createCanvas(this.width ,this.height);
		
	}
	
	this.level3 = function() {
		background(255,204,153);
		ball.show();
		ball.update(levels);
		for (var i = 0; i < blocks.length; i++) {
			blocks[i].show();
			blocks[i].hit();
		}
		if (levels.needUpdate) {
			levels.updateLevel3();
			levels.needUpdate = false;
		}
		if(ball.needUpdate) {
			ball.start(levels);
			ball.needUpdate = false;
		}
	}
}
