{
  let canvas = document.getElementById('cqzhen_drawing');
  let canvas_widthHalf = canvas.width / 2;
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.arc(canvas_widthHalf,75,50,0,Math.PI*2,true); // 绘制
    ctx.moveTo(canvas_widthHalf + 15, 100);
    ctx.arc(canvas_widthHalf,100,15,0,1*Math.PI,true);   // 口(顺时针)
    ctx.moveTo(canvas_widthHalf - 15,65);
    ctx.arc(canvas_widthHalf - 20,65,5,0,Math.PI*2,true);  // 左眼
    ctx.moveTo(canvas_widthHalf + 20,65);
    ctx.arc(canvas_widthHalf + 15,65,5,0,Math.PI*2,true);  // 右眼
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(canvas_widthHalf,235,50,0,Math.PI*2,true); // 绘制
    ctx.moveTo(canvas_widthHalf + 35,235);
    ctx.arc(canvas_widthHalf,235,35,0,Math.PI,false);   // 口(顺时针)
    ctx.moveTo(canvas_widthHalf - 15,225);
    ctx.arc(canvas_widthHalf - 20,225,5,0,Math.PI*2,true);  // 左眼
    ctx.moveTo(canvas_widthHalf + 20,225);
    ctx.arc(canvas_widthHalf + 15,225,5,0,Math.PI*2,true);  // 右眼
    ctx.stroke();
    
    // TODO: robot

    // TODO: animation
  }
}
