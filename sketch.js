var gameState=0;
var playerCount;
var database;
var form;
var game;
var player;

function setup(){
  createCanvas(500,500);
  database = firebase.database();
  //console.log(database);
 
  game = new Game();
  game.getState();
  game.start();
  //form = new Form();
  //form.display();

 
}

function draw(){
  background("white");
  
  
  //drawSprites();
}

