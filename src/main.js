import * as alert from './modules/alert.js'; //importando módulo
var font = new Font();
var pad = Pads.get();
const main = () => {
  pad.update();
  if(pad.justPressed(Pads.CROSS)) {
    switch (alert.display) {
      case true:
        alert.Hide();
        break;
      case false: 
        alert.Show("TEST TITLE","Test Description")
        break;
    }
  }
  alert.Draw();
}
Screen.displayFunc(main);
os.setInterval(() => {
  Screen.display();
}, 0)