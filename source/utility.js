function get_draw_x(guy){
  switch(guy.dir){
    case dir.W:
      return guy.x*UNIT - guy.dist;
    case dir.E:
      return guy.x*UNIT + guy.dist;
    default:
      return guy.x*UNIT;
  }
}
function get_draw_y(guy){
  switch(guy.dir){
    case dir.N:
      return guy.y*UNIT - guy.dist;
    case dir.S:
      return guy.y*UNIT + guy.dist;
    default:
      return guy.y*UNIT;
  }
}
function new_game(){ 
  opening = 0;
  food_left = 198;
  time = 0;
  badguy1 = {
    dir : dir.W,
    state : badguystate.alive,
    x : 10,
    y : 10,
    speed : 2,
    dist : 0,
    canmove : true,
  };
  badguy2 = {
    dir : dir.E,
    state : badguystate.alive,
    x : 9,
    y : 12,
    speed : 2,
    dist : 0,
    canmove : true,
  };
  badguy3 = {
    dir : dir.E,
    state : badguystate.alive,
    x : 10,
    y : 12,
    speed : 2,
    dist : 0,
    canmove : true,
  };
  badguy4 = {
    dir : dir.W,
    state : badguystate.alive,
    x : 11,
    y : 12,
    speed : 2,
    dist : 0,
    canmove : true,
  };
  fatman = {
    dir : dir.W,
    x : 10,
    y : 19,
    speed : 5,
    dist : 0,
    canmove : true,
    wantchange : false,
    des_dir : 0,
  };
return [[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
 [6,7,7,7,7,7,7,7,7,7,6,7,7,7,7,7,7,7,7,7,6],
 [6,7,6,6,6,7,6,6,6,7,6,7,6,6,6,7,6,6,6,7,6],
 [6,8,6,6,6,7,6,6,6,7,6,7,6,6,6,7,6,6,6,8,6],
 [6,7,6,6,6,7,6,6,6,7,6,7,6,6,6,7,6,6,6,7,6],
 [6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,6],
 [6,7,6,6,6,7,6,7,6,6,6,6,6,7,6,7,6,6,6,7,6],
 [6,7,6,6,6,7,6,7,6,6,6,6,6,7,6,7,6,6,6,7,6],
 [6,7,7,7,7,7,6,7,7,7,6,7,7,7,6,7,7,7,7,7,6],
 [6,6,6,6,6,7,6,6,6,9,6,9,6,6,6,7,6,6,6,6,6],
 [6,6,6,6,6,7,6,9,9,9,9,9,9,9,6,7,6,6,6,6,6],
 [6,6,6,6,6,7,6,9,6,6,10,6,6,9,6,7,6,6,6,6,6],
 [11,9,9,9,9,7,9,9,6,9,9,9,6,9,9,7,9,9,9,9,12],
 [6,6,6,6,6,7,6,9,6,6,6,6,6,9,6,7,6,6,6,6,6],
 [6,6,6,6,6,7,6,9,9,9,9,9,9,9,6,7,6,6,6,6,6],
 [6,6,6,6,6,7,6,9,6,6,6,6,6,9,6,7,6,6,6,6,6],
 [6,7,7,7,7,7,7,7,7,7,6,7,7,7,7,7,7,7,7,7,6],
 [6,7,6,6,6,7,6,6,6,7,6,7,6,6,6,7,6,6,6,7,6],
 [6,8,6,6,6,7,6,6,6,7,6,7,6,6,6,7,6,6,6,8,6],
 [6,7,7,7,6,7,7,7,7,7,9,7,7,7,7,7,6,7,7,7,6],
 [6,6,6,7,6,7,6,7,6,6,6,6,6,7,6,7,6,7,6,6,6],
 [6,6,6,7,6,7,6,7,6,6,6,6,6,7,6,7,6,7,6,6,6],
 [6,7,7,7,7,7,6,7,7,7,6,7,7,7,6,7,7,7,7,7,6],
 [6,7,6,6,6,6,6,6,6,7,6,7,6,6,6,6,6,6,6,7,6],
 [6,7,6,6,6,6,6,6,6,7,6,7,6,6,6,6,6,6,6,7,6],
 [6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,6],
 [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]];
}
function new_level(){ 
  var new_speed = badguy1.speed*2;
  level += 1;
  food_left = 198;
  time = 0;
  BAD_GUYS_DEAD = 0;
  badguy1 = {
    dir : dir.W,
    state : badguystate.alive,
    x : 10,
    y : 10,
    speed : new_speed,
    dist : 0,
    canmove : true,
  };
  badguy2 = {
    dir : dir.E,
    state : badguystate.alive,
    x : 9,
    y : 12,
    speed : new_speed,
    dist : 0,
    canmove : true,
  };
  badguy3 = {
    dir : dir.E,
    state : badguystate.alive,
    x : 10,
    y : 12,
    speed : new_speed,
    dist : 0,
    canmove : true,
  };
  badguy4 = {
    dir : dir.W,
    state : badguystate.alive,
    x : 11,
    y : 12,
    speed : new_speed,
    dist : 0,
    canmove : true,
  };
  fatman = {
    dir : dir.W,
    x : 10,
    y : 19,
    speed : 5,
    dist : 0,
    canmove : true,
    wantchange : false,
    des_dir : 0,
  };
return [[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
 [6,7,7,7,7,7,7,7,7,7,6,7,7,7,7,7,7,7,7,7,6],
 [6,7,6,6,6,7,6,6,6,7,6,7,6,6,6,7,6,6,6,7,6],
 [6,8,6,6,6,7,6,6,6,7,6,7,6,6,6,7,6,6,6,8,6],
 [6,7,6,6,6,7,6,6,6,7,6,7,6,6,6,7,6,6,6,7,6],
 [6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,6],
 [6,7,6,6,6,7,6,7,6,6,6,6,6,7,6,7,6,6,6,7,6],
 [6,7,6,6,6,7,6,7,6,6,6,6,6,7,6,7,6,6,6,7,6],
 [6,7,7,7,7,7,6,7,7,7,6,7,7,7,6,7,7,7,7,7,6],
 [6,6,6,6,6,7,6,6,6,9,6,9,6,6,6,7,6,6,6,6,6],
 [6,6,6,6,6,7,6,9,9,9,9,9,9,9,6,7,6,6,6,6,6],
 [6,6,6,6,6,7,6,9,6,6,10,6,6,9,6,7,6,6,6,6,6],
 [11,9,9,9,9,7,9,9,6,9,9,9,6,9,9,7,9,9,9,9,12],
 [6,6,6,6,6,7,6,9,6,6,6,6,6,9,6,7,6,6,6,6,6],
 [6,6,6,6,6,7,6,9,9,9,9,9,9,9,6,7,6,6,6,6,6],
 [6,6,6,6,6,7,6,9,6,6,6,6,6,9,6,7,6,6,6,6,6],
 [6,7,7,7,7,7,7,7,7,7,6,7,7,7,7,7,7,7,7,7,6],
 [6,7,6,6,6,7,6,6,6,7,6,7,6,6,6,7,6,6,6,7,6],
 [6,8,6,6,6,7,6,6,6,7,6,7,6,6,6,7,6,6,6,8,6],
 [6,7,7,7,6,7,7,7,7,7,9,7,7,7,7,7,6,7,7,7,6],
 [6,6,6,7,6,7,6,7,6,6,6,6,6,7,6,7,6,7,6,6,6],
 [6,6,6,7,6,7,6,7,6,6,6,6,6,7,6,7,6,7,6,6,6],
 [6,7,7,7,7,7,6,7,7,7,6,7,7,7,6,7,7,7,7,7,6],
 [6,7,6,6,6,6,6,6,6,7,6,7,6,6,6,6,6,6,6,7,6],
 [6,7,6,6,6,6,6,6,6,7,6,7,6,6,6,6,6,6,6,7,6],
 [6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,6],
 [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]];
}
/*
1-4 = badguy
5 = fatman
6 = wall
7 = food
8 = superfood
9 = empty
10 = gate
11 == left portal
12 = right portal






*/
