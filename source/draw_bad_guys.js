function draw_bad_guys_alive(){
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
}
function draw_bad_guys_dead(){
  paint_brush.drawImage(img_dead_bad_guy,
                            get_draw_x(badguy1),
                            get_draw_y(badguy1),
                            UNIT,UNIT);
                            
  paint_brush.drawImage(img_dead_bad_guy,
                        get_draw_x(badguy2),
                        get_draw_y(badguy2),
                        UNIT,UNIT);
                        
  paint_brush.drawImage(img_dead_bad_guy,
                        get_draw_x(badguy3),
                        get_draw_y(badguy3),
                        UNIT,UNIT);
                        
  paint_brush.drawImage(img_dead_bad_guy,
                        get_draw_x(badguy4),
                        get_draw_y(badguy4),
                        UNIT,UNIT);

}
function draw_bad_guys(){
  if(!BAD_GUYS_DEAD){
    draw_bad_guys_alive();
    
  }
  else if(BAD_GUYS_DEAD_FOR < 60){
    if(BAD_GUYS_DEAD_FOR%2){
      draw_bad_guys_dead();
    }
    else{
      draw_bad_guys_alive();
    }
  }
  else{
    draw_bad_guys_dead();
  }
}
