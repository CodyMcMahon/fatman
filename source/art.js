function drawState(){
  for(var y= 0; y < gameheight;y++){
    for(var x  = 0 ; x < gamewidth; x++){
      var thing;
      switch(game[y][x]){
        case 1: thing = img_badguy1;break;
        case 2:thing = img_badguy2;break;
        case 3:thing = img_badguy3;break;
        case 4:thing = img_badguy4;break;
        case 5:thing = img_fatman;break;
        case 6:thing = img_wall;break;
        case 7:thing = img_food;break;
        case 8:thing = img_superfood;break;
        case 9:thing = img_empty;break;
        case 10:thing = img_gate;break;
        case 11:thing = img_left_portal;break;
        case 12:thing = img_right_portal;break;
      }
      paint_brush.drawImage(thing,x*UNIT,y*UNIT,UNIT,UNIT);
    }
  }
  paint_brush.drawImage(img_badguy1,
                        get_draw_x(badguy1),
                        get_draw_y(badguy1),
                        UNIT,UNIT);
                        
  paint_brush.drawImage(img_badguy2,
                        get_draw_x(badguy2),
                        get_draw_y(badguy2),
                        UNIT,UNIT);
                        
  paint_brush.drawImage(img_badguy3,
                        get_draw_x(badguy3),
                        get_draw_y(badguy3),
                        UNIT,UNIT);
                        
  paint_brush.drawImage(img_badguy4,
                        get_draw_x(badguy4),
                        get_draw_y(badguy4),
                        UNIT,UNIT);
                        
  paint_brush.drawImage(img_fatman,
                        get_draw_x(fatman),
                        get_draw_y(fatman),
                        UNIT,UNIT);  
                        
  paint_brush.drawImage(img_panel_background,
                        630,0,
                        180,810);
  paint_brush.drawImage(img_panel_stats,
                        630,200,
                        180,420);                     
  draw_time();
  paint_brush.drawImage(get_num_img(level),
                        710,550,
                        30,
                        30);
  paint_brush.drawImage(img_food_counter,
                        660,250,
                        102,
                        60);
  paint_brush.drawImage(img_food_slider,
                        729-Math.floor((food_left/max_food)*52),260,
                        9,
                        15);
}