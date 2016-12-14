var screen;
var paint_brush;
var game;
var UNIT = 30;
var gameheight = 27;
var gamewidth = 21;
var food_left = 0;
var max_food = 198;
var badguy1;
var badguy2;
var badguy3;
var badguy4;
var fatman;
var time;
var level = 1;

var keyboard = {
  pressed: false,
  key: 0,
};
var dir = {
  N : 1,
  E : 2,
  S : 3,
  W : 4,
};
var badguystate = {
  alive : 1,
  scared : 2,
  dead : 3,
};