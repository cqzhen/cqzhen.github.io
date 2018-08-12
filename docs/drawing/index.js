{
  let canvas = document.getElementById('cqzhen_drawing');
  let canvas_widthHalf = canvas.width / 2;
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    
    drawingCry(canvas_widthHalf);
    drawingSmile(canvas_widthHalf); 
    // TODO: robot
    drawingRobot(canvas_widthHalf, 340);

    // TODO: animation
  }

  function drawingCry(canvas_widthHalf) {
    ctx.beginPath();
    ctx.arc(canvas_widthHalf,75,50,0,Math.PI*2,true); // 绘制
    ctx.moveTo(canvas_widthHalf + 15, 100);
    ctx.arc(canvas_widthHalf,100,15,0,1*Math.PI,true);   // 口(顺时针)
    ctx.moveTo(canvas_widthHalf - 15,65);
    ctx.arc(canvas_widthHalf - 20,65,5,0,Math.PI*2,true);  // 左眼
    ctx.moveTo(canvas_widthHalf + 20,65);
    ctx.arc(canvas_widthHalf + 15,65,5,0,Math.PI*2,true);  // 右眼
    ctx.stroke();
  }

  function drawingSmile(canvas_widthHalf) {
    ctx.beginPath();
    ctx.arc(canvas_widthHalf,235,50,0,Math.PI*2,true); // 绘制
    ctx.moveTo(canvas_widthHalf + 35,235);
    ctx.arc(canvas_widthHalf,235,35,0,Math.PI,false);   // 口(顺时针)
    ctx.moveTo(canvas_widthHalf - 15,225);
    ctx.arc(canvas_widthHalf - 20,225,5,0,Math.PI*2,true);  // 左眼
    ctx.moveTo(canvas_widthHalf + 20,225);
    ctx.arc(canvas_widthHalf + 15,225,5,0,Math.PI*2,true);  // 右眼
    ctx.stroke();
  }

  function drawingRobot(canvas_widthHalf, y) {
    // y = 295;
    ctx.beginPath();
    ctx.rect(canvas_widthHalf - 5, y, 10, 20);
    ctx.moveTo(canvas_widthHalf - 5, y + 5);
    ctx.lineTo(canvas_widthHalf - 25, y + 5);
    ctx.moveTo(canvas_widthHalf - 25, y + 5);
    ctx.arc(canvas_widthHalf - 27, y + 5, 2, 0, 2 * Math.PI, true);
    ctx.moveTo(canvas_widthHalf + 5, y + 5);
    ctx.lineTo(canvas_widthHalf + 25, y + 5);
    ctx.moveTo(canvas_widthHalf + 25, y + 5);
    ctx.arc(canvas_widthHalf + 27, y + 5, 2, 0, 2 * Math.PI, true);
    ctx.moveTo(canvas_widthHalf - 50, y + 20);
    ctx.rect(canvas_widthHalf - 50, y + 20, 100, 50);
    ctx.moveTo(canvas_widthHalf - 53, y + 30);
    ctx.rect(canvas_widthHalf - 53, y + 30, 3, 30); 
    ctx.moveTo(canvas_widthHalf + 52, y + 30);
    ctx.rect(canvas_widthHalf + 52, y + 30, 3, 30); 
    ctx.moveTo(canvas_widthHalf - 30, y + 40);
    ctx.arc(canvas_widthHalf - 32, y + 40, 3, 0, 2 * Math.PI, true);
    ctx.moveTo(canvas_widthHalf + 34, y + 40);
    ctx.arc(canvas_widthHalf + 32, y + 40, 3, 0, 2 * Math.PI, true);
    ctx.moveTo(canvas_widthHalf, y + 40);
    ctx.lineTo(canvas_widthHalf-10, y + 50);
    ctx.lineTo(canvas_widthHalf + 10, y + 50);
    ctx.lineTo(canvas_widthHalf, y + 40);
    ctx.moveTo(canvas_widthHalf - 10, y + 40);
    ctx.rect(canvas_widthHalf - 10, y + 60, 20, 5);
    ctx.moveTo(canvas_widthHalf - 5, y + 60);
    ctx.lineTo(canvas_widthHalf - 5, y + 65);
    ctx.moveTo(canvas_widthHalf, y + 65);
    ctx.lineTo(canvas_widthHalf, y + 60);
    ctx.moveTo(canvas_widthHalf + 5, y + 60);
    ctx.lineTo(canvas_widthHalf + 5, y + 65);
    ctx.stroke();
  }
}
