
function setup() {
  createCanvas(displayWidth,displayHeight);
  
maze=createSprite(displayWidth/2+100,displayHeight/2,20,700);

maze2 =createSprite(displayWidth/2-500,displayHeight/2,20,700);
maze3 =createSprite(displayWidth/2-200,displayHeight/2+350,620,20);
maze4=createSprite(displayWidth/2-200,displayHeight/2-350,620,20);
wall1=createSprite(displayWidth/2,displayHeight/2+100,10,400);
wall2=createSprite(displayWidth/2-200,displayHeight/2+300,400,10);
wall3 = createSprite(displayWidth/2-400,displayHeight/2+100,10,400)
}

function draw() {
  background("pink");  

  drawSprites();
}