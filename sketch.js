var database;
var back_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var score = 0;
var player, form,game;
var player1,player2;
var players;
var fruits, fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score = 0;
var player2score = 0;
var movingBackground, mbSprite;
const bgSound = new Audio("bgSound.wav");

function preload(){
  back_img = loadImage("images/jungle.jpg");
  movingBackground = loadImage("images/backgroundExtended.jpg")
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  mbSprite = createSprite(1100, 300);
  mbSprite.addImage(movingBackground);
  mbSprite.velocityX = -5;
  
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(back_img);

   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {

      clear(); 
      if(mbSprite.x == 0){
        mbSprite.x = 1100;
        mbSprite.velocityX = -5;
      }
      bgSound.play();
      bgSound.loop = true;
      game.play();
      

   }
   if (gameState === 2) {
    
     game.end();
   }
}
