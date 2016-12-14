function get_num_img(n){
  switch(n){
    case 1:return img_one;
    case 2:return img_two;
    case 3:return img_three;
    case 4:return img_four;
    case 5:return img_five;
    case 6:return img_six;
    case 7:return img_seven;
    case 8:return img_eight;
    case 9:return img_nine;
    case 0:return img_zero;
  }
}
function draw_time(){
  var real_time = Math.floor(time / 30);
  var second_one = real_time % 10;
  var has_ten_second = Math.floor(real_time/10);
  var ten_second = (Math.floor(real_time/10))%6;
  var has_minute = Math.floor(real_time/60);
  var minute = Math.floor(real_time/60)%10;
  var has_ten_minute = Math.floor(real_time/600);
  var ten_minute = Math.floor(real_time/600)%10;
  if(has_ten_minute){
    paint_brush.drawImage(get_num_img(ten_minute),
                        660,400,
                        30,
                        30);
  }
  if(has_minute){
    paint_brush.drawImage(get_num_img(minute),
                        690,400,
                        30,
                        30);
    paint_brush.drawImage(img_colon,
                        720,400,
                        15,
                        30);
  }
  if(has_ten_second){
    paint_brush.drawImage(get_num_img(ten_second),
                        735,400,
                        30,
                        30);
  }
    paint_brush.drawImage(get_num_img(second_one),
                        765,400,
                        30,
                        30);
}