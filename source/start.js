//useful thing animations
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback,element) {
                window.setTimeout(callback, 1000 / 60);
            };
})();

function startup(){
  screen = document.getElementById("mat");
  paint_brush = screen.getContext("2d");
  screen.addEventListener('keydown',keyDown,false);
  screen.addEventListener('keyup',keyUp,false);
  game = new_game();
  window.setInterval(update_state, 1000/30);
  (function animationLOOP() {
        drawState();
        requestAnimFrame(animationLOOP, screen);
  })();
}