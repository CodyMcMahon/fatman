//A = 65
//D = 68
//S = 83
//W = 87
function switch_direction(d){
  fatman.des_dir = d;
  fatman.wantchange = true;
}
function mouseDown(e){
  screen.focus();
  if(FREEZE_GAME){
    game = new_game();
    FREEZE_GAME = 0;
  }
}
function keyDown(e){
  //alert(e.keyCode);
  switch(e.keyCode){
    case 65 : 
      keyboard.key = 'A'; 
      switch_direction(dir.W);
      break;
    case 68 : 
      keyboard.key = 'D';
      switch_direction(dir.E);
      break;
    case 83 : 
      keyboard.key = 'S';
      switch_direction(dir.S);
      break;
      
    case 87 : 
      keyboard.key = 'W'; 
      switch_direction(dir.N);
      break;
      
    default : keyboard.key = 0 ; break;
  }
  keyboard.pressed = true;
}


function keyUp(e){
  keyboard.pressed = false;
  keyboard.key = 0;
}
