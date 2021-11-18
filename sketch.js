var corredor, corredorCorrendo;

var rua, ruaPassando;

var barreiraEsquerda, barreiraDireita;

function preload(){

  corredorCorrendo = loadAnimation("Runner-1.png", "Runner-2.png");

  ruaPassando = loadImage("path.png");

}

function setup(){
  
  createCanvas(400,400);
  
  //primeiro num é largura e o sugundo altura

  rua = createSprite(200, 200, 100, 400);
  rua.addImage("rua", ruaPassando);
  rua.scale = 1.2;
  rua.y = rua.height/4;

  barreiraEsquerda = createSprite(15, 200, 60, 400);
  barreiraEsquerda.visible = true;

  barreiraDireita = createSprite(380, 200, 40, 400);
  barreiraDireita.visible = true;

  corredor = createSprite(200, 290, 20, 20);
  corredor.addAnimation("correndo", corredorCorrendo);
  corredor.scale = 0.05;

}

function draw() {
  
  background(0);

  console.log(mouseX);
  //console.log(mouseY);
  
  corredor.collide(barreiraEsquerda);
  
  rua.velocityY = 4;
  if(rua.y > 400){
    rua.y = rua.height/10;

  }

  

  corredor.x = World.mouseX;

  drawSprites();

}