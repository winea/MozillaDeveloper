// setup canvas

const canvas = document.querySelector('.gameContainer');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
console.log(width);
console.log(height);


// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

//object ball x and y coordinates 
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

//Draw the ball, arrow function dont work
Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    //2 * PI = 360 graus
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

//   let draw = (ball) => {
//     // console.log(ball);
//     ctx.beginPath();
//     ctx.fillStyle = ball.color;
//     //2 * PI = 360 graus
//     ctx.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI);
//     ctx.fill();
//   }

  Ball.prototype.update = function() {
    //4 primeiros verifica se atingiu o limite do canvas, se sim muda a direção 
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
  }

  Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
      if (!(this === balls[j])) {
          // taking the centre points of the two circles and ensuring the distance between the centre 
          //points are less than the two radio added together.
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
        }
      }
    }
  }


  let balls = [];

    while (balls.length < 25) {
        let size = random(10,20);
        //Ball(x, y, velX, velY, color, size)
        let ball = new Ball(
        // ball position always drawn at least one ball width
        // away from the edge of the canvas, to avoid drawing errors
        random(0 + size,width - size),
        random(0 + size,height - size),
        random(-7,7),
        random(-7,7),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
        size
    );

    balls.push(ball);
    }

    //Sets the canvas fill color to semi-transparent black
    //If you don't do this, you'll just see long snakes worming their way around the canvas instead of balls moving!
    function loop() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.fillRect(0, 0, width, height);
      
        for (let i = 0; i < balls.length; i++) {
          balls[i].draw();
          balls[i].update();
          balls[i].collisionDetect();
        }
      
        requestAnimationFrame(loop);
      }

      loop();
//let testBall = new Ball(50, 100, 4, 4, 'blue', 10);

//testBall.draw();
//draw(testBall);