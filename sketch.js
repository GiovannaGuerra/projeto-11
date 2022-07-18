var chao
var chaoImage
var menino
var meninoImage
var direita
var esquerda
function preload(){
  chaoImage=loadImage ("path.png")
  meninoImage=loadAnimation ("Runner-1.png","Runner-2.png")
  
}
 
function setup(){
  createCanvas(400,400);
  chao=createSprite (200, 200)
  chao.addImage (chaoImage)
  menino=createSprite (200, 300)
  menino.addAnimation ("menino corre",meninoImage)
 menino.scale=0.08
  direita=createSprite (380, 200, 60, 400)
  esquerda=createSprite (30, 200, 60, 400)
  direita.visible= false
  esquerda.visible=false
}

function draw() {
  background(0);
  chao.velocityY=5
  if(chao.y > 400 ){
  chao.y = height/2;
  }
 menino.x = World.mouseX;
 menino.collide (direita)
 menino.collide (esquerda)
 drawSprites ()

}
