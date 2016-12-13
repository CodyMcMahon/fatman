function eatfood(x,y){
  game[y][x] = 9;
  food_left-=1;
  if(food_left == 0){
    alert("YOU WIN YAY");
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
    case dir.E:guy.x+=1;break;
    case dir.S:guy.y+=1;break;
    case dir.W:guy.x-=1;break;
  }
  
  if(game[guy.y][guy.x] === 7 ){
    eatfood(guy.x,guy.y);
  }
  if(game[guy.y][guy.x] === 8 ){
    eatsuperfood(guy.x,guy.y);
  }
  if(guy.wantchange){
    
    
  }
  switch(guy.dir){
   case dir.N:
      if(game[guy.y-1][guy.x]==6 || game[guy.y-1][guy.x]==10){
        
      }
   ;break;
   case dir.E:guy.x+=1;break;
   case dir.S:guy.y+=1;break;
   case dir.W:guy.x-=1;break;
  }
}
 function step_bdguy(guy){
  switch(guy.dir){
    case dir.N:guy.y-=1;break;
    case dir.E:guy.x+=1;break;
    case dir.S:guy.y+=1;break;
    case dir.W:guy.x-=1;break;
  }
   
 }
function update_state(){
  if(fatman.canmove){
    fatman.dist+=fatman.speed;
    if(fatman.dist >= UNIT){
      step(fatman);
    }
  }
  if(badguy1.canmove){
    badguy1.dist+=badguy1.speed;
    if(badguy1.dist >= UNIT){
      step_bdguy(badguy1);
    }
  }
  if(badguy2.canmove){
    badguy2.dist+=badguy2.speed;
    if(badguy2.dist >= UNIT){
      step_bdguy(badguy2);
    }
  }
  if(badguy3.canmove){
    badguy3.dist+=badguy3.speed;
    if(badguy3.dist >= UNIT){
      step_bdguy(badguy3);
    }
  }
  if(badguy4.canmove){
    badguy4.dist+=badguy4.speed;
    if(badguy4.dist >= UNIT){
      step_bdguy(badguy4);
    }
  }
}