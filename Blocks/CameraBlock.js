class CameraBlock extends Block {

    constructor(x, y, w, h, xDist, yDist, speed) {
        super(x, y, w, h);
        this.count = 0;
        this.triggered = false;
        this.xDist = xDist;
        this.yDist = yDist;
        this.speed = speed;
    }

    show() {
        noFill();
        rect(this.x, this.y, this.w, this.h);
    }

    trigger() {
        if (ball.x >= this.x && ball.x <= this.x + this.w
            && ball.y >= this.y && ball.y <= this.y + this.h) {
            this.triggered = true;
            return true;
        }
    }

    // Ball freezes in place while camera adjusts
    cameraPan() {
        this.trigger();
        if (this.triggered && this.count != -1) {
            if (this.count == 0) {
                cameraPan_sfx.play();
                ball.saveX = ball.xVelocity;
                ball.saveY = ball.yVelocity;
            }
             if (this.count >= sqrt(sq(this.xDist) + sq(this.yDist)) / this.speed) {
                // Ends this function
                this.count = -1;
                ball.xVelocity = ball.saveX;
                ball.yVelocity = ball.saveY;
                ball.gravity = 1;
                ball.canJump = true;
                return true;
            }
            ball.gravity = 0;
            ball.xVelocity = 0;
            ball.yVelocity = 0;
            ball.canJump = false;
            var theta = atan(this.yDist / this.xDist);
            console.log(theta);
            var xVel = this.speed * cos(theta);
            var yVel = this.speed * sin(theta);
            
            if (this.xDist >= 0) {
                camera.position.x += sqrt(sq(this.speed) - sq(yVel));
            } else {
                camera.position.x -= sqrt(sq(this.speed) - sq(yVel));
            }

            if (this.yDist >= 0) {
                camera.position.y += sqrt(sq(this.speed) - sq(xVel));
            } else {
                camera.position.y -= sqrt(sq(this.speed) - sq(xVel));
            }
            
            this.count++;
        }
    }
}