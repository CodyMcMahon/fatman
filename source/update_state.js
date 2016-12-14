function scarebadguys(){
  //bad guys run away
}
function youlose(){
  alert("you lose");
}
function youwin(){
  alert("YOU WIN YAY");
}
function eatfood(x,y){
  game[y][x] = 9;
  food_left-=1;
  if(food_left == 0){
    youwin();
  }
}

function eatsuperfood(x,y){
  scarebadguys();
  eatfood(x,y);
}

function step(guy){
  guy.dist = 0;
  switch(guy.dir){
    case dir.N:guy.y-=1;break;
    case dir.E:guy.x = (guy.x + 1) % 21;break;
    case dir.S:guy.y+=1;break;
    case dir.W:guy.x = ((guy.x - 1) === -1)? 20 : (guy.x - 1) ;break;
  }
  
  if(game[guy.y][guy.x] === 7 ){
    eatfood(guy.x,guy.y);
  }
  if(game[guy.y][guy.x] === 8 ){
    eatsuperfood(guy.x,guy.y);
  }
  if(guy.wantchange){
    //alert("test");
    switch(guy.des_dir){
      case dir.N:
        if(game[guy.y-1][guy.x]==7 || game[guy.y-1][guy.x]==8 || game[guy.y-1][guy.x]==9 ){
          guy.dir = dir.N;
          guy.wantchange = false;
        }
      break;
    case dir.E:
      if(game[guy.y][guy.x+1]==7 || game[guy.y][guy.x+1]==8 || game[guy.y][guy.x+1]==9){
        guy.dir = dir.E;
        guy.wantchange = false;
      }
      break;
    case dir.S:
      if(game[guy.y+1][guy.x]==7 || game[guy.y+1][guy.x]==8 || game[guy.y+1][guy.x]==9){
        guy.dir = dir.S;
        guy.wantchange = false;
      }
      break;
    case dir.W:
      if(game[guy.y][guy.x-1]==7 || game[guy.y][guy.x-1]==8 || game[guy.y][guy.x-1]==9){
        guy.dir = dir.W;
        guy.wantchange = false;
      }
      break;
  }
    
  }
  switch(guy.dir){
   case dir.N:
      if(game[guy.y-1][guy.x]==6 || game[guy.y-1][guy.x]==10){
        guy.canmove = 0;
      }
   ;break;
   case dir.E:
      if(game[guy.y][guy.x+1]==6 || game[guy.y][guy.x+1]==10){
        guy.canmove = 0;
      }
   ;break;
   case dir.S:
      if(game[guy.y+1][guy.x]==6 || game[guy.y+1][guy.x]==10){
        guy.canmove = 0;
      }
   ;break;
   case dir.W:
      if(game[guy.y][guy.x-1]==6 || game[guy.y][guy.x-1]==10){
        guy.canmove = 0;
      }
   ;break;
  }
}
 function step_bdguy(guy){
  var next_step = [];
  guy.dist = 0;
  if(guy.x == fatman.x && guy.y == fatman.y){
    youlose();//losssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
  }
  switch(guy.dir){
    case dir.N:guy.y-=1;break;
    case dir.E:guy.x = (guy.x + 1) % 21;break;
    case dir.S:guy.y+=1;break;
    case dir.W:guy.x = (guy.x - 1) % 21;break;
  }
  if(guy.x == fatman.x && guy.y == fatman.y){
    youlose();//losssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
  }
  switch(guy.dir){
   case dir.N:
      if(game[guy.y-1][guy.x]==7 || game[guy.y-1][guy.x]==8 || game[guy.y-1][guy.x]==9){
        next_step.push(dir.N);
      }
      if(game[guy.y][guy.x+1]==7 || game[guy.y][guy.x+1]==8 || game[guy.y][guy.x+1]==9){
        next_step.push(dir.E);
      }
      if(game[guy.y][guy.x-1]==7 || game[guy.y][guy.x-1]==8 || game[guy.y][guy.x-1]==9){
        next_step.push(dir.W);
      }
   ;break;
   case dir.E:
      if(game[guy.y][guy.x+1]==7 || game[guy.y][guy.x+1]==8 || game[guy.y][guy.x+1]==9){
        next_step.push(dir.E);
      }
      if(game[guy.y+1][guy.x]==7 || game[guy.y+1][guy.x]==8 || game[guy.y+1][guy.x]==9){
        next_step.push(dir.S);
      }
      if(game[guy.y-1][guy.x]==7 || game[guy.y-1][guy.x]==8 || game[guy.y-1][guy.x]==9){
        next_step.push(dir.N);
      }
   ;break;
   case dir.S:
      if(game[guy.y][guy.x+1]==7 || game[guy.y][guy.x+1]==8 || game[guy.y][guy.x+1]==9){
        next_step.push(dir.E);
      }
      if(game[guy.y+1][guy.x]==7 || game[guy.y+1][guy.x]==8 || game[guy.y+1][guy.x]==9){
        next_step.push(dir.S);
      }
      if(game[guy.y][guy.x-1]==7 || game[guy.y][guy.x-1]==8 || game[guy.y][guy.x-1]==9){
        next_step.push(dir.W);
      }
   ;break;
   case dir.W:
      if(game[guy.y+1][guy.x]==7 || game[guy.y+1][guy.x]==8 || game[guy.y+1][guy.x]==9){
        next_step.push(dir.S);
      }
      if(game[guy.y][guy.x-1]==7 || game[guy.y][guy.x-1]==8 || game[guy.y][guy.x-1]==9){
        next_step.push(dir.W);
      }
      if(game[guy.y-1][guy.x]==7 || game[guy.y-1][guy.x]==8 || game[guy.y-1][guy.x]==9){
        next_step.push(dir.N);
      }
   ;break;
  }
  if(next_step.length){
    guy.dir = next_step[Math.floor(Math.random()*next_step.length)];
  }
  else{
    guy.dir=(((guy.dir-1)+2)%4)+1;
  }
 }
function update_state(){
    
  time+=1;
  var guy = fatman;
  if(fatman.canmove){
    if(fatman.dist === 0){
      guy = fatman;
      switch(guy.dir){
        case dir.N:
        if(game[guy.y-1][guy.x]==6 || game[guy.y-1][guy.x]==10){
          guy.canmove = 0;
          }
        ; break;
      case dir.E:
      if(game[guy.y][guy.x+1]==6 || game[guy.y][guy.x+1]==10){
        guy.canmove = 0;
      }
   ;break;
   case dir.S:
      if(game[guy.y+1][guy.x]==6 || game[guy.y+1][guy.x]==10){
        guy.canmove = 0;
      }
   ;break;
   case dir.W:
      if(game[guy.y][guy.x-1]==6 || game[guy.y][guy.x-1]==10){
        guy.canmove = 0;
      }
   ;break;
    }}
    if(fatman.canmove){
    if(fatman.des_dir === (((fatman.dir-1)+2)%4)+1){
      //if(fatman.dist > 0){
        fatman.dir = fatman.des_dir;
        fatman.dist = -fatman.dist;
      //}
      switch(guy.dir){
        case dir.N:
        if(game[guy.y-1][guy.x]==6 || game[guy.y-1][guy.x]==10){
          guy.canmove = 0;
          }
        ; break;
      case dir.E:
      if(game[guy.y][guy.x+1]==6 || game[guy.y][guy.x+1]==10){
        guy.canmove = 0;
      }
   ;break;
   case dir.S:
      if(game[guy.y+1][guy.x]==6 || game[guy.y+1][guy.x]==10){
        guy.canmove = 0;
      }
   ;break;
   case dir.W:
      if(game[guy.y][guy.x-1]==6 || game[guy.y][guy.x-1]==10){
        guy.canmove = 0;
      }
   ;break;
    }
    }
    
    fatman.dist+=fatman.speed;
    if(fatman.dist >= UNIT){
      step(fatman);
    }}
  }
  else{
    if(fatman.wantchange){
      
      //alert("test");
      fatman.dir = fatman.des_dir;
      fatman.canmove = true;
      fatman.wantchange = false;
      guy = fatman;
      guy.canmove = 1;
      switch(guy.dir){
        case dir.N:
        if(game[guy.y-1][guy.x]==6 || game[guy.y-1][guy.x]==10){
          guy.canmove = 0;
          }
        ; break;
      case dir.E:
      if(game[guy.y][guy.x+1]==6 || game[guy.y][guy.x+1]==10){
        guy.canmove = 0;
      }
   ;break;
   case dir.S:
      if(game[guy.y+1][guy.x]==6 || game[guy.y+1][guy.x]==10){
        guy.canmove = 0;
      }
   ;break;
   case dir.W:
      if(game[guy.y][guy.x-1]==6 || game[guy.y][guy.x-1]==10){
        guy.canmove = 0;
      }
   ;break;
  }
    }
    
  }
  if(badguy1.canmove){
    badguy1.dist+=badguy1.speed;
    if(badguy1.dist >= UNIT){
      step_bdguy(badguy1);
    }
  }
  if(badguy2.canmove){
    if(time/UNIT === 10){
      badguy2.dist = 0;
      badguy2.x = 10;
      badguy2.y = 10;
      
    }
    badguy2.dist+=badguy2.speed;
    if(badguy2.dist >= UNIT){
      step_bdguy(badguy2);
    }
  }
  if(badguy3.canmove){
    badguy3.dist+=badguy3.speed;
    if(time/UNIT === 20){
      badguy3.dist = 0;
      badguy3.x = 10;
      badguy3.y = 10;
    }
    if(badguy3.dist >= UNIT){
      step_bdguy(badguy3);
    }
  }
  if(badguy4.canmove){
    badguy4.dist+=badguy4.speed;
    if(time/UNIT === 30){
      badguy4.dist = 0;
      badguy4.x = 10;
      badguy4.y = 10;
    }
    if(badguy4.dist >= UNIT){
      step_bdguy(badguy4);
    }
  }
}