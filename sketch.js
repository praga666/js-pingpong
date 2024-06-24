ftPaddle;
let rightPaddle;
let ball;
let leftScore = 0;
let rightScore = 0;

function setup() {
  createCanvas(800, 400);
  leftPaddle = new Paddle(true);
  rightPaddle = new Paddle(false);
  ball = new Ball();
}

function draw() {
  background(0);
  
  // Atualiza e exibe as raquetes
  leftPaddle.update();
  leftPaddle.display();
  rightPaddle.update();
  rightPaddle.display();
  
  // Movimento automático do bot
  rightPaddle.autoMove(ball);
  
  // Atualiza e exibe a bola
  ball.update();
  ball.checkPaddleCollision(leftPaddle);
  ball.checkPaddleCollision(rightPaddle);
  ball.display();
  
  // Exibe a pontuação
  textSize(32);
  fill(255);
  textAlign(CENTER);
  text(leftScore, width / 4, 50);
  text(rightScore, 3 * width / 4, 50);
}
