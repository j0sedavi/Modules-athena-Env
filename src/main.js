import * as obj from './modules/obj.js'; //importando módulo
//criando objetos
var player = new obj.object(0, 0, 50, 50, 3);
var bj = new obj.object(80,150,50,50,0);
//criando cores
var white = Color.new(255, 255, 255);
var blue = Color.new(0, 0, 255);
var green = Color.new(0,255,0);
var pad = Pads.get(); //controle
const main = () => {
  pad.update();
  player.update(); //atualizado o objeto player
  
  if (pad.pressed(Pads.LEFT)) {
    player.moveLeft();
  }
  if (pad.pressed(Pads.UP)) {
    player.moveUp();
  }
  if (pad.pressed(Pads.DOWN)) {
    player.moveDown();
  }
  if (pad.pressed(Pads.RIGHT)) {
    player.moveRight();
  }
  if (pad.justPressed(Pads.SELECT)) {
    player.setPosition(0,0);
  }
  if (pad.justPressed(Pads.START)) {
    player.goTo(50,50);
  }
  if(player.x < 0) {
    player.x = 0;
  }
  if(player.y < 0) {
    player.y = 0;
  }
  if(player.x > 640 - player.width) {
    player.x = player.width - 640;
  }
  if(player.y > 448 - player.height) {
    player.y = 448 - player.height;
  }
  //criando colisões
  player.addCollider(bj);
  //desenhando objetos
  Draw.rect(player.x, player.y, player.width, player.height, blue);
  Draw.rect(bj.x, bj.y, bj.width, bj.height, green);
};
Screen.displayFunc(main);
os.setInterval(() => {
  Screen.display();
}, 0);