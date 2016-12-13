//A = 65
//D = 68
//S = 83
//W = 87
function keyDown(e){
  switch(e.keyCode){
    case 65 : keyboad.key = 'A'; break;
    case 68 : keyboad.key = 'D'; break;
    case 83 : keyboad.key = 'S'; break;
    case 87 : keyboad.key = 'W'; break;
    default : keyboard.key = 0 ; break;
  }
  keyboard.pressed = true;
}


function keyUp(e){
  keyboard.pressed = false;
  keyboard.key = 0;
}